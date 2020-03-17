export default class ReduceEmptyArrayError extends Error {
  constructor() { super("Reduce of empty array with no initial value."); }
}
