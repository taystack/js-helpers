// Sufficient for this project for now.
const Clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export default Clone;
