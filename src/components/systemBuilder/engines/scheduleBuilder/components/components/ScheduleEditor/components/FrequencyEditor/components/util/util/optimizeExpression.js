import generateSplitValue from './generateSplitValue';

const combineDigits = (splitValue0, splitValue1) => {
  if (splitValue0.type === 'digit' && splitValue1.type === 'digit'){
    if (splitValue0.value === splitValue1.value){
      return ([{
        type: 'digit',
        value: splitValue0.value,
      }])
    }else if (splitValue0.value === (splitValue1.value +1)){
      return ([{
        type: 'range',
        lowIndex: splitValue1.value,
        highIndex: splitValue0.value,
      }])
    }else if ((splitValue0.value + 1) === splitValue1.value){
      return ([{
        type: 'range',
        lowIndex: splitValue0.value,
        highIndex: splitValue1.value,
      }])
    }else{
      return ([
        {
          type: 'digit',
          value: splitValue0.value,
        },
        {
          type: 'digit',
          value: splitValue1.value,
        }
      ])
    }
  }else{
    return [splitValue0, splitValue1];
  }
};

const combineDigitArray = digits => {
  for (let i = 0; i < digits.length; i++){
    for (let j= 1; j < i; j++){
      const combined = combineDigits(digits[i], digits[j]);
      if (combined){
        if(combined.type === 'digit'){
          // nothing
        }
      }
    }
  }
};


const optimizeSplitValueExpression = splitValueExpression  => {
  const copy =  splitValueExpression.map(item => ({...item}));
  if (copy.some(copy => copy.type === 'any')){
    return generateSplitValue('*');
  }

  const ranges = splitValueExpression.filter(expression => expression.type === 'range');
  const digits = splitValueExpression.filter(expression => expression.type = 'digit');

  return splitValueExpression;
};

export default optimizeSplitValueExpression;