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
- Pick
- [Random](./Random.md#random)
- [Take](./Take.md#take)
- [Times](./Times.md#times)
- [Unique](./Unique.md#unique)

# Pick

## Pick (Object object, Array keys, [Boolean clone])

Returns new _object_ with only keys from _array_. References preserved unless _clone_ is provided.

Opposite of [Omit](./Omit.md#omit).

### Arguments

#### `Object object`

Any object

#### `Array keys`

Should be array of String. `[String]`

#### `Boolean clone`

If present will return a new object without references to _object_. See [Clone](./Clone.md#clone).

### Use

```javascript
import { Pick } from "@taystack/js-helpers";

const obj1 = {a: 1, b: 2, c: 3};
const obj2 = Pick(obj1, ["c"]);
obj2;                                // {c: 3}
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
