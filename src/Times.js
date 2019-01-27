const Times = (count, cb, thisArg) => {
  return new Array(count).fill().map(
    thisArg ?
    function(_, index) {
      return cb.bind(thisArg)(index);
    } :
    function(_, index) {
      return cb(index)
    }
  );
};

export default Times
