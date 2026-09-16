# JavaScript Objects — Practice Questions

## Easy

**Q1.** Create an object `person` with properties `name`, `age`, and `city`. Log each property using dot notation.

**Q2.** Add a new property `email` to an existing object `user` after it has been created. Then delete the `city` property from it.

**Q3.** Write a function `getFullName(person)` that accepts a person object with `firstName` and `lastName` and returns the full name as a string.

**Q4.** Check if a property `salary` exists in an object `employee` using two different methods (`in` operator and `hasOwnProperty`).

**Q5.** Create an object `car` with a method `describe()` that returns: `"This car is a [year] [brand]"` using `this`.

**Q6.** Loop through all key-value pairs of an object `product` using `for...in` and print them as `"key: value"`.

**Q7.** Convert an object `{ name: "Alice", age: 25 }` to an array of keys, values, and entries using built-in Object methods.

---

## Intermediate

**Q8.** Write a function `mergeObjects(obj1, obj2)` that merges two objects. If both have the same key, the value from `obj2` should win. Do not use the spread operator — use `Object.assign`.

**Q9.** Create a nested object representing a `library` with books, where each book has a `title`, `author`, and `available` (boolean). Write a function that returns all available books.

**Q10.** Write a function `invertObject(obj)` that swaps all keys and values of an object.
```js
invertObject({ a: 1, b: 2 }) // → { 1: 'a', 2: 'b' }
```

**Q11.** Write a function `countProperties(obj)` that returns the number of own properties in an object, without using `Object.keys().length` directly.

**Q12.** Create a `bank account` object with a private-like balance (using closure or convention) and methods `deposit(amount)`, `withdraw(amount)`, and `getBalance()`. Prevent overdraft.

**Q13.** Write a function `flattenObject(obj)` that flattens one level of nesting:
```js
flattenObject({ a: 1, b: { c: 2, d: 3 } })
// → { a: 1, c: 2, d: 3 }
```

**Q14.** Given an array of objects representing students with `name` and `score`, write a function that returns the student with the highest score.

**Q15.** Use `Object.freeze()` on a config object and demonstrate that its properties cannot be changed. What happens when you try to update a property in strict mode vs. non-strict mode?

---

