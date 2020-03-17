import Reduce from "../src/Reduce";


describe("Reduce", () => {
  it("should accept one item and return it", () => {
    expect(Reduce([1])).toEqual(1);
  });

  it("should reduce a sum", () => {
    expect(Reduce([1,2], (sum, n) => (sum + n))).toEqual(3);
  });

  it("should reduce a large sum", () => {
    expect(Reduce([1,2,3,4,5,6], (sum, n) => (sum + n))).toEqual(21);
  });

  it("should error if no method is provided with a reducable list", () => {
    try {
      Reduce([1, 2, 3]);
      expect("should not get here").toEqual(true);
    } catch(e) {
      expect(e.message).toMatch("Reduce expected a custom reduce method");
    }
  });

  it("should error when array length is zero", () => {
    try {
      Reduce();
      expect("should not get here").toEqual(true);
    } catch(e) {
      expect(e.message).toEqual("Reduce of empty array with no initial value.");
    }
    try {
      Reduce([]);
      expect("should not get here").toEqual(true);
    } catch(e) {
      expect(e.message).toEqual("Reduce of empty array with no initial value.");
    }
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

        Reduce(badArg);
        expect("should not get here").toEqual(true);

      } catch(e) {

        expect(e.message).toMatch("Reduce expected Array");

      }
    });
  });


});
