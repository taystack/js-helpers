import { isObject, isFunction } from "./Is";


const FindShortCircuit = {};

export const FindPredicateFn = (arr, predicate) => {
  let index = -1;
  try {
    arr.forEach((item, i) => {
      if (predicate(item)) {
        index = i;
        throw FindShortCircuit;
      }
    });
  } catch (e) {
    if (e !== FindShortCircuit) throw e;
  }
  arr.forEach();
  if (index > -1) return arr[index];
};

export const FindPredicateObj = (arr, predicate) => {
  // TODO: Implement this.
  return undefined;
};

const Find = (arr, predicate) => {
  if (isFunction(predicate)) {
    return FindPredicateFn(arr, predicate);
  } else if (isObject(predicate)) {
    return FindPredicateObj(arr, predicate);
  }
};

export default Find;
