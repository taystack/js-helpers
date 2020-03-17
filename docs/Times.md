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
- [Pick](./Pick.md#pick)
- [Random](./Random.md#random)
- [Reduce](./Reduce.md#reduce)
- [Take](./Take.md#take)
- Times
- [Unique](./Unique.md#unique)

# Times

## Times (Number count, Function cb[, thisArg])

Times first `count` items from `array`

### Arguments

#### `Number count`

Any `Number`

#### `Function cb`

Any `Function` to call `count` times.

#### `thisArg` _optional_

Will be the value of `this` within `cb`.

### Use

```javascript
import { Times } from "@taystack/js-helpers";

let val = 1;
Times(4, (i) => val += i);
// val + i
// 1   + 0 = 1
// 1   + 1 = 2
// 2   + 2 = 4
// 4   + 3 = 7
```

In a bit of action:

```javascript
class Fighter {
  constructor() {
    this.attacks = 3;
  }

  get attack() {
    return Random(1, 4);
  }

  attackTarget(target) {
    Times(this.attacks, () => {
      target.takeDamage(this.attack);
    });
  }
}
```

---
Source: [@taystack/js-helpers](https://github.com/taystack/js-helpers) hosted on GitHub
Author: [taystack](https://github.com/taystack)
