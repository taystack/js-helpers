export default class ArgumentError extends Error {
  constructor(method, expected, arg) {
    let provided = "something unprintable";
    try {
      provided = arg.toString();
    } catch (e) {}
    super(`${method} expected ${expected}, you provided ${provided}`);
  }
}
