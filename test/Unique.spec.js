import Unique from "../src/Unique";


describe("Unique(ARRAY)", () => {
  it("should return a new array with unique values from ARRAY", () => {
    expect(Unique([1,1,2,2,2,3,3,3,3])).toEqual([1,2,3]);
    expect(Unique(["hey", "hey", "bro"])).toEqual(["hey", "bro"]);
  });

  it("should allow the use of a predicate to extract values in collections", () => {
    const collection = [{a: 1}, {a: 1}, {a: 3}];
    expect(Unique(collection, x => x.a)).toEqual([{a: 1}, {a: 3}]);
  });
});
