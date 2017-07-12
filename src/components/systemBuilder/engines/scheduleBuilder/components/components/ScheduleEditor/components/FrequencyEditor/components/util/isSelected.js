
const getMonthExpression = schedule => schedule.split(' ')[5];

const getSplitValueExpression = commaRangeString => {
  return commaRangeString.split(',').map(range => range.trim()).filter(x => x.length > 0).map(processSplitValue);
};

const tryGetSplitValueExpression = commaRangeString => {
  try {
    return getSplitValueExpression(commaRangeString);
  }catch (err) {
    return 'invalid';
  }
};

const processSplitValue = splitValue => {
  if (splitValue === '*'){
    return ({
      type: 'any',
    })
  }else if (splitValue.indexOf('-') >= 0){
    const splitArray = splitValue.split('-').map(value=>  value.trim()).filter(x=> x.length > 0);
    const lowIndex = Number(splitArray[0]);
    const highIndex = Number(splitArray[1]);
    if (splitArray[0] === undefined || splitArray[1] === undefined || Number.isNaN(lowIndex) || Number.isNaN(highIndex)){
      throw (new Error('invalid expression'));
    }
    return ({
      type: 'range',
      lowIndex,
      highIndex,
    })
  }else {
    return ({
      type: 'digit',
      value:  Number(splitValue),
    })
  }
};

const isSelected = (splitValueExpression, index) => {
  return splitValueExpression.some(expression => {
    if (expression.type === 'any'){
      return true;
    }else if (expression.type === 'digit' && expression.value === index){
      return true;
    }else if (expression.type === 'range' && (index >= expression.lowIndex && index < expression.highIndex)){
      return true;
    }
    return false;
  });
};

const isSelectedAny = getExpressionForType => (schedule, index) => {
  const splitValueExpression = tryGetSplitValueExpression(getExpressionForType(schedule));
  return splitValueExpression === 'invalid' ? false : isSelected(splitValueExpression, index);
};

const isSelectedUtil = {
  daily: {
    isSelected: (schedule, index) => {

    },
  },
  monthly: {
    isSelected: isSelectedAny(getMonthExpression),
  }
};

export default isSelectedUtil;