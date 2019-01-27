import {
  isString,
  isObject,
  isArray,
} from "./Is";


const HasShortCircuit = {};

const Has = (arr, target, predicate = x => x) => {
  if (!arr)          return !!arr;
  if (isString(arr)) return !!arr.match(target);
  if (isObject(arr)) return Object.keys(arr).indexOf(target) > -1;

  let has = false;
  try {
    // Check target agains arr using predicate Function
    const targetPredicate = predicate(target);
    arr.forEach((item) => {
      if (targetPredicate === predicate(item)) throw HasShortCircuit;
    });
  } catch (e) {
    if (e !== HasShortCircuit) throw e;
    has = true;
  }
  return has;
};

export default Has;
