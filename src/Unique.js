const Unique = (arr, predicate) => {
  const ret = [];
  if (predicate) {
    arr.forEach((item) => {
      if (ret.map(predicate).indexOf(predicate(item)) < 0) {
        ret.push(item);
      }
    });
  } else {
    arr.forEach((item) => {
      if (ret.indexOf(item) < 0) {
        ret.push(item);
      }
    });
  }
  return ret;
};

export default Unique;
