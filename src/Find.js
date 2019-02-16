import { isObject, isFunction } from "./Is";


export class FindMissingPredicate extends Error {}

const FindShortCircuit = {};
const FindObjShortCircuit = {};

const FindPredicateFn = (arr, predicate) => {
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
  return arr[index];
};

const FindPredicateObj = (arr, obj) => {
  const predicate = (item) => {
    /*
    Iterate all the key/value pairs of OBJ.
    If all key/value pairs match then we've found it
    */
    let found = true;
    try {
      Object.keys(obj).forEach((k) => {
        // Sufficient for this project
        if (item[k] !== obj[k]) throw FindObjShortCircuit;
      });
    } catch (e) {
      found = false;
    }
    return found;
  };
  return FindPredicateFn(arr, predicate);
};

const Find = (arr = [], predicate) => {
  if (isFunction(predicate)) {
    return FindPredicateFn(arr, predicate);
  } else if (isObject(predicate)) {
    return FindPredicateObj(arr, predicate);
  } else {
    throw new FindMissingPredicate("js-helpers::Find requires a predicate [Function || Object]");
  }
};

export default Find;
