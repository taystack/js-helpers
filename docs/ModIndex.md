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
- ModIndex
- [Omit](./Omit.md#omit)
- [Pick](./Pick.md#pick)
- [Random](./Random.md#random)
- [Take](./Take.md#take)
- [Times](./Times.md#times)
- [Unique](./Unique.md#unique)

# ModIndex

## ModIndex (Array array, index)

Treats _array_ as a linked list. An _array_ with `3` items at index `3` would return _array[0]_. Normally _array[3]_ would be undefined.

### Arguments

#### Array array

Any array

#### Number index

Any non-negative, non-infinity number.

### Use

```javascript
import { ModIndex } from "@taystack/js-helpers";

const arr = [1,2,3];
ModIndex(arr, 0)   // 1
ModIndex(arr, 3)   // 1
ModIndex(arr, 300) // 1
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
