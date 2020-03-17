- [Installation](./#installation)
- [Any](./Any.md#any)
- [Clone](./Clone.md#clone)
- [Compact](./Compact.md#compact)
- [Difference](./Difference.md#difference)
- [EitherOr](./EitherOr.md#eitheror)
- [Every](./Every.md#every)
- Find
- [Has](./Has.md#has)
- [Is](./Is.md#is)
- [MatchFinder](./MatchFinder.md#matchfinder)
- [Merge](./Merge.md#merge)
- [ModIndex](./ModIndex.md#modindex)
- [Omit](./Omit.md#omit)
- [Pick](./Pick.md#pick)
- [Random](./Random.md#random)
- [Reduce](./Reduce.md#reduce)
- [Take](./Take.md#take)
- [Times](./Times.md#times)
- [Unique](./Unique.md#unique)

# Find

## `Find(Array array, [Function, Object] predicate)`

Finds the first item from _***Array*** array_ that returns true from  _***[Function, Object]*** predicate_.

### Arguments

#### Array array

For array - Collection of items to iterate over with _***[Function, Object]*** predicate_.

#### [[Function, Object] predicate=undefined]

For `Function`: _***Function***_ to invoke per item of _***Array*** array_ to determine if an item has been found. _***Function*** predicate_ should return _***Boolean***_ `true || false`.

### Use

```javascript
import { Find } from "@taystack/js-helpers";


const items = [{a: 1, b: 1}, {a: 2, b: 1}, {a: 3, b: 1}];

// Function predicate

const found = Find(items, (item) => (item.a === 2));

// Shorthand Object predicate

const shorthand = Find(items, {a: 2});
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
