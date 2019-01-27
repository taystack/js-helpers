/*
Any(ARRAY, CB)
=> Boolean

Returns Boolean

Params:
  ARRAY: Array of ANY
  CB: Method to invoke on each item of ARRAY
      Should return Boolean;
*/
import { isTruthy } from "./Is";


export class AnyError extends Error {}
const AnyShortCircuit = {};

const Any = (arr, cb = isTruthy) => {
  if (!(arr instanceof Array)) throw new AnyError("Missing Array argument");
  let match = false;
  try {
    arr.forEach((item) => {
      // Konami
      if (cb(item)) throw AnyShortCircuit;
    });
  } catch (e) {
    if (e !== AnyShortCircuit) throw e;
    else match = true;
  }
  return match;
};

export default Any;
