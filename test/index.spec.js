import * as JsHelpers from "../src/index";

describe("JsHelpers", () => {
  it("should import all the things without error", () => {
    [
      "Any",
      "Classnames",
      "Clone",
      "Compact",
      "Difference",
      "EitherOr",
      "Every",
      "Has",
      "Is",
      "Merge",
      "ModIndex",
      "Omit",
      "Once",
      "Pick",
      "Random",
      "Take",
      "Times",
      "Unique",
    ].forEach((method) => {
      expect(JsHelpers[method]).toBeDefined();
    });
  });
});
