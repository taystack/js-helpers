import Clone from "./Clone";


const Pick = (obj, keys, clone) => {
  const ret = {};
  keys.forEach(k => {
    if (obj[k]) ret[k] = clone ? Clone(obj[k]) : obj[k];
  });
  return ret;
};

export default Pick;
