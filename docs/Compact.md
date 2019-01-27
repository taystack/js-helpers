- [Any](./Any.md#any)
- [Clone](./Clone.md#clone)
- Compact
- [Difference](./Difference.md#difference)
- [EitherOr](./EitherOr.md#eitheror)
- [Every](./Every.md#every)
- [Has](./Has.md#has)
- [Is](./Is.md#is)
- [MatchFinder](./MatchFinder.md#matchfinder)
- [Merge](./Merge.md#merge)
- [ModIndex](./ModIndex.md#modindex)
- [Omit](./Omit.md#omit)
- [Pick](./Pick.md#pick)
- [Random](./Random.md#random)
- [Take](./Take.md#take)
- [Times](./Times.md#times)
- [Unique](./Unique.md#unique)

# Compact

## Compact (Array array)

Create new array without falsey values of _***Array*** array_.

### Arguments

#### Array array

An array of items.

### Use

```javascript
import { Compact } from "@taystack/js-helpers";

Compact([1, false, "", {}, [], null, undefined]) // [1]
```