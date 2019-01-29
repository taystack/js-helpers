import { Once, Times } from "../src";


describe("Once", () => {
  it("should only invoke once", () => {
    let value = 0;
    const fn = () => { value += 1; };
    const once = Once(fn);
    Times(3, () => { once(); });
    expect(value).toEqual(1);
  });
});
