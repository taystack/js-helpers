const Once = (method) => {
  let hasRun = false;
  let memo;
  return function() {
    if (hasRun) return memo;
    hasRun = true;
    memo = method.apply(this, arguments);
    method = null;
    return memo;
  };
};

export default Once;
