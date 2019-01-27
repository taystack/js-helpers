 - Any

# Any

## JsHelpers.Any (Array array, [Function predicate=JsHelpers.isTruthy])

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
