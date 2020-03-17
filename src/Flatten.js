import ArgumentError from "./errors/ArgumentError";


export default function Flatten(array = []) {
  if (!(array instanceof Array)) throw new ArgumentError("Flatten", "Array", array);

  let ret = [];

  array.forEach(item => {
    if (item instanceof Array) {
      ret = ret.concat(Flatten(item));
    } else {
      ret.push(item);
    }
  });

  return ret;
}
