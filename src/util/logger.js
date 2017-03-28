import createLogger from 'redux-logger';
import { Iterable } from 'immutable';

const transform = (data) => {
  if (Iterable.isIterable(data)) {
    return data.toJS();
  }
  return data;
};

export default () => createLogger({
  stateTransformer: transform,
  actionTransformer: transform,
});
