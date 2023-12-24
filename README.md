# @aierse/between

Have you ever written

```js
if (val > start && val < end)
// or
if (start < val && val < end)?
```

This library can written

```js
if (val in between(start, end))
```

# Installation

> npm i @aierse/between

# Usage

```js
import between from '@aierse/between'

const value = 10

console.log(value in between(5, 15)) // true 5 < value < 15
console.log(value in between(15, 5)) // true
console.log(value in between(5, 10)) // false
console.log(value in between(10, 15)) // false

console.log('b' in between('a', 'c')) // true 'a' < 'b' < 'c'

console.log(value in between(5, 10, true)) // true 5 <= value <= 10

console.log(value in between(10, 15, { start: true })) // true 10 <= value < 15

console.log(value in between(5, 10, { end: true })) // false 5 < value <= 10
```
