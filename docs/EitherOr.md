- [Installation](./#installation)
- [Any](./Any.md#any)
- [Clone](./Clone.md#clone)
- [Compact](./Compact.md#compact)
- [Difference](./Difference.md#difference)
- EitherOr
- [Every](./Every.md#every)
- [Find](./Find.md#find)
- [Has](./Has.md#has)
- [Is](./Is.md#is)
- [MatchFinder](./MatchFinder.md#matchfinder)
- [Merge](./Merge.md#merge)
- [ModIndex](./ModIndex.md#modindex)
- [Omit](./Omit.md#omit)
- [Pick](./Pick.md#pick)
- [Random](./Random.md#random)
- [Reduce](./Reduce.md#reduce)
- [Take](./Take.md#take)
- [Times](./Times.md#times)
- [Unique](./Unique.md#unique)

# EitherOr

## EitherOr (here, there)

Ternary wrapper.

### Arguments

#### here

Any value used to check in a ternary.

#### there

Any value used in the default return of a ternary.

### Use

```javascript
import { EitherOr } from "@taystack/js-helpers";

EitherOr(false, true)         // true
EitherOr(true, false)         // true
EitherOr("foobar", undefined) // "foobar"
EitherOr(undefined, "foobar") // "foobar"
EitherOr(false, false)        // false
EitherOr(undefined, false)    // false
EitherOr(false, undefined)    // undefined
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
