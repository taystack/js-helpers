- [Installation](#installation)
- Any
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
- [Unique](./Unique.md#unique)

# Any

## Any (Array array, [Function predicate=JsHelpers.isTruthy])

Checks if _any_ item of _***Array*** array_ returns true from  _***Function*** predicate_.

### Arguments

#### Array array

Collection of items to iterate over with _***Function*** predicate_.

#### [Function predicate=JsHelpers.isTruthy]

Function to invoke per item of _***Array*** array_. Iteration is stopped once _predicate_ returns `true`.

### Use

```javascript
import { Any } from "@taystack/js-helpers";

const items = [5,6,7,8,9]
Any(items, x => (x > 8)); // true
Any(items, x => (x < 5)); // false
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
