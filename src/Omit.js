import { Clone, Difference } from ".";


const Omit = (obj, keys, clone) => {
  const ret = {};
  const newKeys = Difference(Object.keys(obj), keys);
  newKeys.forEach(key => (
    ret[key] = clone ? Clone(obj[key]) : obj[key]
  ));
  return ret;
};

export default Omit;
