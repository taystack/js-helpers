- [Installation](#installation)
- [Any](./Any.md#any)
- [Clone](./Clone.md#clone)
- [Compact](./Compact.md#compact)
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
- Unique

# Unique

## Unique (Array array[, Function predicate= x=> x])

Unique first `count` items from `array`

### Arguments

#### `Array array`

Any `Array`

#### `Function predicate` _optional_

Return value of function is used to

### Use

```javascript
import { Unique } from "@taystack/js-helpers";

const array = [2,2,3,3,3,4];
Unique(array)                // [2,3,4]

// With a predicate
const collection = [{a: 1}, {a: 1}, {a: 3}];
Unique(collection, x => x.a);                // [{a: 1}, {a: 3}];
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
