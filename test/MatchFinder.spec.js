import MatchFinder from "../src/MatchFinder";
import Compact from "../src/Compact";
import Unique from "../src/Unique";


describe("MatchFinder(STRING, FILTER)", () => {
  it("should find matches", () => {
    let matcher;
    expect(new MatchFinder().hasMatch).toEqual(false);
    expect(new MatchFinder("", "").hasMatch).toEqual(false);
    expect(new MatchFinder("hey", "").hasMatch).toEqual(false);
    expect(new MatchFinder("hey", "h").hasMatch).toEqual(true);
    expect(new MatchFinder("hey", "dude").hasMatch).toEqual(false);
    expect(new MatchFinder("hey", "hey").hasMatch).toEqual(true);
    expect(new MatchFinder("hey, dude", "hey").hasMatch).toEqual(true);
    expect(new MatchFinder("dude, hey", "hey").hasMatch).toEqual(true);

    matcher = new MatchFinder("somthing and things", "thing");
    expect(matcher.hasMatch).toEqual(true);
    const match1 = matcher.matches[0].string;
    expect(match1).toEqual("som");
    const match2 = matcher.matches[1].string;
    expect(match2).toEqual("thing");
    const match3 = matcher.matches[2].string;
    expect(match3).toEqual(" and ");
    const match4 = matcher.matches[3].string;
    expect(match4).toEqual("thing");
    const match5 = matcher.matches[4].string;
    expect(match5).toEqual("s");
  });

  it("should reset the matches when setting the compare property", () => {
    const matcher = new MatchFinder("foobar", "foo");
    expect(matcher.matches[0].match).toEqual(true);
    expect(matcher.matches[1].match).toEqual(undefined);
    matcher.compare = "bar";
    expect(matcher.matches[0].match).toEqual(undefined);
    expect(matcher.matches[1].match).toEqual(true);
  });
});
