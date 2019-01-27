import Compact from "../src/Compact";


describe("Compact", () => {
  it("should remove falsey values from an array", () => {
    expect(Compact([false, undefined, null, "", "yep"])).toEqual(["yep"]);
  });
});
