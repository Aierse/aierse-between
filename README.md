# @aierse/between

You can written between of MySQL in NodeJS

```js
if (val > start && val < end)
// or
if (start < val && val < end)
```

This library can written

```js
if (val in between(start, end))
```

# Installation

> npm i @aierse/between

# Usage

```js
import between from "@aierse/between"

const value = 10

console.log(value in between(5, 15)) // true 5 < value < 15
console.log(value in between(15, 5)) // true 5 < value < 15
console.log(value in between(5, 10)) // false
console.log(value in between(10, 15)) // false

console.log("b" in between("a", "c")) // true 'a' < 'b' < 'c'

console.log(value in between(5, 10, true)) // true 5 <= value <= 10

console.log(value in between(10, 15, { start: true })) // true 10 <= value < 15

console.log(value in between(5, 10, { end: true })) // false 5 < value <= 10

const now = new Date("2023-02-10")

const begin = new Date("2024-02-01")
const end = new Date("2024-02-15")

console.log(now in between(begin, end)) // true 2024-02-01 < now < 2024-02-15
```
