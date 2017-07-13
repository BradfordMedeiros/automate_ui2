
import generateSplitValue from './generateSplitValue';


const getSplitValueExpression = commaRangeString => {
  return commaRangeString.split(',').map(range => range.trim()).filter(x => x.length > 0).map(generateSplitValue);
};

export const addToSplitValueExpression = (splitValueExpression, index) => {
  const copy = splitValueExpression.map(item => ({...item}));
  return copy;
};


export const removeToSplitValueExpression = (splitValueExpression, index) => {
  return splitValueExpression;
};


export const tryGetSplitValueExpression = commaRangeString => {
  try {
    return getSplitValueExpression(commaRangeString);
  }catch (err) {
    return 'invalid';
  }
};


