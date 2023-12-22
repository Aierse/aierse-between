# @aierse/between

Have you ever written

```js
if (val > start && val < end) or if (start < val && val < end)?
```

This library can written

```js
if (val in between(start, end))
```

# Installation

> npm i @aierse/between

# Usage

Warning: between does not inclusive boundary values;

```js
import between from '@aierse/between'

const value = 10

console.log(value in between(5, 15)) // true start < value < end
console.log(value in between(15, 5)) // true
console.log(value in between(5, 10)) // false
console.log(value in between(10, 15)) // false
console.log('b' in between('a', 'c')) // true

console.log(value in between(5, 10, true)) // true start <= value <= end

console.log(value in between(10, 15, { start: true })) // true start <= value <= end

console.log(value in between(5, 10, { end: true })) // false start < value <= end
```
