- [Any](./Any.md#any)
- [Clone](./Clone.md#clone)
- [Compact](./Compact.md#compact)
- Difference
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

# Difference

## Difference (Array array1, Array array2 [, Function predicate=x => x])

Create new ***Array*** from _***Array*** array1_ without values from _***Array*** array2_. Add an optional predicate

### Arguments

#### Array array1

An array of items.

#### Array array2

An array of items.

#### [Function predicate=x => x]

A method to invoke on each item of array1 and array2 to check for equality. Defaults to identity - `x => x`;

### Use

```javascript
import { Difference } from "@taystack/js-helpers";

const array1 = [1,2,3,4];
const array2 = [2,3,5,6];
Difference(array1, array2) // [1,4]

const array3 = [{id: 1}, {id: 2}, {id: 3}];
const array4 = [{id: 3}, {id: 4}];
Difference(array3, array4, x => x.id);
// [{id: 1}, {id: 2}];
```
