- [Installation](#installation)
- [Any](./Any.md#any)
- Clone
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

# Clone

## Clone (Object object)

Clone an _***Object***_ without keeping references.

### Arguments

#### Object object

Any object. Circular references not allowed.

### Use

```javascript
import { Clone } from "@taystack/js-helpers";

const original = {a: {b: 1}};
const a = original.a;
const clone = Clone(original);

original.a            // {b: 1}
a                     // {b: 1}
clone.a               // {b: 1}

original.a == a       // true
original.a == clone.a // false
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
