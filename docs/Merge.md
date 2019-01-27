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
- Merge
- [ModIndex](./ModIndex.md#modindex)
- [Omit](./Omit.md#omit)
- [Pick](./Pick.md#pick)
- [Random](./Random.md#random)
- [Take](./Take.md#take)
- [Times](./Times.md#times)
- [Unique](./Unique.md#unique)

# Merge

## Merge (Object object1[, ...Object objects])

Overwrites the values of _object1_ with values of _objects_. Adds all missing values of _objects_ to _object1_.

### Arguments

#### Object object1

Any object

#### [...Object] objects

Any number of objects to overwrite _object1_ values with.

### Use

```javascript
import { Merge } from "@taystack/js-helpers";

const obj = {a: 1, b: 1};
Merge(obj, {b: 2}, {c: 3});
obj // {a: 1, b: 2, c: 3};
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
