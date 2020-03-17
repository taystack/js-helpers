import Flatten from "../src/Flatten";


describe("Flatten", () => {
  it("should return an array", () => {
    expect(Flatten()).toEqual([]);
  });

  // Golden path cases
  [
    // Already flat
    [[1,2,3,4], [1,2,3,4]],
    // Random nesting
    [[5, [[[6], 7]], [[[8]]]], [5,6,7,8]],
    // Random index items
    [[{}, [9], 0, "hey"], [{}, 9, 0, "hey"]],
    // Empty nested -> empty flat
    [[[[[[[[[[]]]]]]]]], []],
  ].forEach(([arg, expected]) => {

    expect(Flatten(arg)).toEqual(expected);

  });

  // Nukes
  [
    "string",
    ({}),
    (() => {}),
    (class A {}),
    (new (class A {})),
  ].forEach(badArg => {
    it("should raise on a bad argument", () => {

      try {

        Flatten(badArg);
        expect("should not get here").toEqual(true);

      } catch(e) {

        expect(e.message).toMatch("Flatten expected Array");

      }
    });
  });
});
