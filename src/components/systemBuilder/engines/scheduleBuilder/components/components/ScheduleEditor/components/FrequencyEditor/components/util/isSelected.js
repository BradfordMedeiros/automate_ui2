
import { tryGetSplitValueExpression } from './util/splitValues';

const getMonthExpression = schedule => schedule.split(' ')[5];


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
    getScheduleChange: (schedule, index, newValue) =>  {
      const scheduleCopy = schedule.slice();
      const monthExpression = getMonthExpression(schedule);
      const splitExpression = tryGetSplitValueExpression(monthExpression);
      window.se = splitExpression;
      window.nv = newValue;
      window.i = index;
      if (newValue === true){
        //splitExpression.push({ type: 'digit', value: index })
      }else{
        //
      }

      return scheduleCopy;

    },
  }
};

export default isSelectedUtil;