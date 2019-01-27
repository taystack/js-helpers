import Times from "../src/Times";


describe("Times(COUNT, CB)", () => {
  it("should CB COUNT times", () => {
    let value = 0;
    Times(5, () => {
      value += 1;
    });
    expect(value).toEqual(5);
  });

  it("should allow one to bind a thisArg", () => {
    let value = 0;
    let thisArg = 1;
    Times(5, function() {
      value += this;
    }, thisArg);
    expect(value).toEqual(5);
  });
});
