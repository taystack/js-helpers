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
- [MatchFinder](./MatchFinder.md#matchfinder)
- [Merge](./Merge.md#merge)
- [ModIndex](./ModIndex.md#modindex)
- [Omit](./Omit.md#omit)
- [Pick](./Pick.md#pick)
- Random
- [Reduce](./Reduce.md#reduce)
- [Take](./Take.md#take)
- [Times](./Times.md#times)
- [Unique](./Unique.md#unique)

# Random

## Random (Number from=0, Number to=1)

Returns `from <= random number <= to`

### Arguments

#### `Number from`

Any `Number < to`

#### `Number from`

Any `Number > from`

### Use

```javascript
import { Random } from "@taystack/js-helpers";

const rand = Random(1, 10);
// 1 <= rand <= 10
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
