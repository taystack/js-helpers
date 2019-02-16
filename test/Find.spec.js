import Find, {
  FindMissingPredicate,
} from "../src/Find";


describe("Find", () => {
  it("should require a predicate", () => {
    expect(() => {
      Find();
    }).toThrowError(FindMissingPredicate);
  });

  it("should raise unrelated errors", () => {
    expect(() => {
      Find([1,2,3], (i) => (i.foo.bar));
    }).toThrowError("Cannot read property 'bar' of undefined");
  });

  it("should find an item given a predicate Function", () => {
    const items = [{a: 1}, {a: 2}, {a: 3}];
    const found = Find(items, (item) => (item.a === 2));
    expect(found).toEqual({a: 2});
  });

  it("should find an item given a predicate Object", () => {
    const items = [{a: 1}, {a: 2}, {a: 3}];
    const found = Find(items, {a: 2});
    expect(found).toEqual({a: 2});
  });

  it("should find an item given a predicate Object with multiple key/value pairs", () => {
    const items = [{a: 1, b: 1}, {a: 2, b: 1}, {a: 3, b: 1}];
    const found = Find(items, {a: 2, b: 1});
    expect(found).toEqual({a: 2, b: 1});
  });
});
