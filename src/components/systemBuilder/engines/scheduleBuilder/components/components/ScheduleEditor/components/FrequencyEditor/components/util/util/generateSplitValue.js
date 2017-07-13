
const generateSplitValue = splitValue => {
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

export default generateSplitValue;