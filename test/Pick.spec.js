import Pick from "../src/Pick";


describe("Pick(OBJECT, KEYS)", () => {
  it("should return an object with KEYS from OBJECT", () => {
    const pick = Pick({ a: 1, b: 2, c: 3 }, ["a", "b"]);
    expect(Object.keys(pick)).toEqual(["a", "b"]);
  });

  it("should clone to remove references", () => {
    const target = { a: { d: 4 }, b: 2};

    // Preserved references
    const newObj1 = Pick(target, ["a", "c"]);
    expect(Object.keys(newObj1).length).toEqual(1);
    expect(newObj1.a == target.a).toEqual(true);

    // Removed references
    const newObj2 = Pick(target, ["a"], true);
    expect(newObj2.a == target.a).toEqual(false);
  });
});
