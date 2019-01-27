import Has from "../src/Has";


describe("Has(TARGET, VALUE)", () => {
  it("should check if TARGET has VALUE", () => {
    expect(Has()).toEqual(false);
    expect(Has([])).toEqual(false);
    expect(Has([1,2,3], 4)).toEqual(false);
    expect(Has("some", "foo")).toEqual(false);

    expect(Has([1,2,3,4], 4)).toEqual(true);
    expect(Has({a: 1, b: 2}, "a")).toEqual(true);
    expect(Has("something", "thing")).toEqual(true);
  });

  it("should use a predicate to check equality", () => {
    const arr1 = [{id: 1}, {id: 2}, {id: 3}];
    const target = {id: 1};
    expect(Has(arr1, target, x => x.id)).toEqual(true);
  });

  it("should throw predicate errors", () => {
    const predicate = () => { throw "nope"; };
    expect(() => {
      Has([1,2,3], [2,3,4], predicate);
    }).toThrowError("nope");
  });
});
