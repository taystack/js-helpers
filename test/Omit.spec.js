import Omit from "../src/Omit";


describe("Omit(TARGET, KEYS)", () => {
  it("should return new TARGET without KEYS", () => {
    const target = { a: 1, b: 2, c: 3, d: 4 };
    const newObj = Omit(target, ["a", "b"]);
    expect(Object.keys(newObj).toString()).toEqual("c,d");
  });

  it("should clone to remove references", () => {
    const target = { a: 1, b: 2, c: { d: 4 }};

    // Preserved references
    const newObj1 = Omit(target, ["a", "b"]);
    expect(newObj1.c == target.c).toEqual(true);

    // Removed references
    const newObj2 = Omit(target, ["a", "b"], true);
    expect(newObj2.c == target.c).toEqual(false);
  });
});
