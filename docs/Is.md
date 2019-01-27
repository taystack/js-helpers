- [Installation](#installation)
- [Any](./Any.md#any)
- [Clone](./Clone.md#clone)
- [Compact](./Compact.md#compact)
- [Difference](./Difference.md#difference)
- [EitherOr](./EitherOr.md#eitheror)
- [Every](./Every.md#every)
- [Has](./Has.md#has)
- Is
- [MatchFinder](./MatchFinder.md#matchfinder)
- [Merge](./Merge.md#merge)
- [ModIndex](./ModIndex.md#modindex)
- [Omit](./Omit.md#omit)
- [Pick](./Pick.md#pick)
- [Random](./Random.md#random)
- [Take](./Take.md#take)
- [Times](./Times.md#times)
- [Unique](./Unique.md#unique)

# Is

Short-cut to `isArray`, `isObject`, `isString`, and `isTruthy`.

### Use

```javascript
import {
  Is,
  isArray,
  isObject,
  isString,
  isTruthy,
} from "@taystack/js-helpers";

// Is.array === isArray;
// Is.object === isObject;
// Is.string === isString;
// Is.truthy === isTruthy;

Is.array([]) === isArray([])       // true
Is.object({}) === isObject({})     // true
Is.string("") === isString("")     // true
Is.truthy(true) === isTruthy(true) // true
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
