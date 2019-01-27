import Random from "../src/Random";
import Times from "../src/Times";


describe("Random(FROM, TO)", () => {
  it("should return a random number", () => {
    expect(0 <= Random() <= 1).toEqual(true);
    Times(100, () => {
      expect(1 <= Random(1, 10) <= 10).toEqual(true);
    });
  });
});
