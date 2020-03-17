import ArgumentError from "./errors/ArgumentError";
import ReduceEmptyArrayError from "./errors/ReduceEmptyArrayError";


export default function Reduce(array = [], method) {
  if (!(array instanceof Array)) throw new ArgumentError("Reduce", "Array", array);
  if (array.length === 0) throw new ReduceEmptyArrayError();

  let [ ret, ...rest ] = array;

  if (rest.length > 0) {
    if (!method) throw new ArgumentError("Reduce", "a custom reduce method", method);
    rest.forEach(item => {
      ret = method(ret, item);
    });
  }

  return ret;
}
