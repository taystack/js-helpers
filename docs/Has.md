- [Installation](#installation)
- [Any](./Any.md#any)
- [Clone](./Clone.md#clone)
- [Compact](./Compact.md#compact)
- [Difference](./Difference.md#difference)
- [EitherOr](./EitherOr.md#eitheror)
- [Every](./Every.md#every)
- Has
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

# Has

## Has ((Array array | Object object | String string), target, [Function predicate=JsHelpers.isTruthy])

Checks if _***Array*** array_ returns true from  _***Function*** predicate_.

### Arguments

#### (Array array | Object object | String string)

For array - Collection of items to iterate over with _***Function*** predicate_.

For object - object.keys() includes _target_.

For string - Checks if _***String*** string_ contains _target_.

#### [Function predicate=JsHelpers.isTruthy]

Function to invoke per item of _***Array*** array_ to get a compare value. _***Function*** predicate_ should return the value intended to use as a compare value. Iteration is stopped once `predicate(target) === predicate(array[i])`.

### Use

```javascript
import { Has } from "@taystack/js-helpers";

const items = [5,6,7,8,9];
Has(items, 5);             // true

const collection = [{id: 1}, {id: 2}];
target = {id: 1};
Has(collection, target, x => x.id); // false
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
