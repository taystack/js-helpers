- [Installation](./#installation)
- [Any](./Any.md#any)
- [Clone](./Clone.md#clone)
- [Compact](./Compact.md#compact)
- [Difference](./Difference.md#difference)
- [EitherOr](./EitherOr.md#eitheror)
- [Every](./Every.md#every)
- [Find](./Find.md#find)
- [Has](./Has.md#has)
- [Is](./Is.md#is)
- MatchFinder
- [Merge](./Merge.md#merge)
- [ModIndex](./ModIndex.md#modindex)
- [Omit](./Omit.md#omit)
- [Pick](./Pick.md#pick)
- [Random](./Random.md#random)
- [Reduce](./Reduce.md#reduce)
- [Take](./Take.md#take)
- [Times](./Times.md#times)
- [Unique](./Unique.md#unique)

# MatchFinder

## MatchFinder (String string, String compare[, Object options])

Checks if _every_ item of _***String*** string_ returns true from  _***Function*** predicate_.

### Arguments

#### String string

Original string to find matches against with _***String*** compare_.

#### String compare

String to match agains _***String*** string_.

## API

### const finds = new MatchFinder("foobar", "foo");

#### finds.matches (***Array***)

Returns ***Array*** of [findings](#finding)

#### finds.hasMatch (***Boolean***)

Returns ***Boolean*** if there was a match found.

#### finds.compare (***String***)

Returns compare string.

Note: When setting; `finds.compare = "foo"`, this will reset `finds` and find all matches with the new compare value.

### Finding

 - Finding.string: ***String***
 - Finding.match : ***Boolean***


```javascript
import { MatchFinder } from "@taystack/js-helpers";

MatchFinder("foobar", "foo").matches /*
[{
  string: "foo",
  match: true,
}, {
  string: "bar",
}]
*/

MatchFinder("foobar has the word foo", "foo").matches /*
[{
  string: "foo",
  match: true,
}, {
  string: "bar has the word ",
}, {
  string: "foo",
  match: true,
}]
*/
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
