# 🚀 JavaScript Learning Journey

Welcome to my JavaScript learning repository! Here I am documenting my daily progress, notes, and code snippets as I build a strong foundation in JavaScript.

---

## 📚 Topics Covered So Far

### 1. JavaScript Environment (Node.js)
* Set up and understood how to execute JavaScript outside of the browser using **Node.js**.

### 2. Variables (`let`, `const`, and `var`)
* Explored modern variable declarations:
  * **`const` & `let`**: Preferred for clean, predictable, block-scoped code.
  * **`var`**: Avoided in modern development due to function scoping and hoisting quirks.

### 3. Data Types
Familiarized myself with JavaScript's core data types:
* **Primitives:** `string`, `number`, `bigint`, `boolean`, `undefined`, `null`, `symbol`
* **Non-Primitives:** `object`

### 4. Documentation & Standards
* Learned how to navigate and read official documentation using **MDN Web Docs** and **ECMA specifications** for authoritative language references.

**Type Conversion:** 
  * **String to Number:** Using `Number()`, `parseInt()`, or the unary `+` operator.
  * **Number to String:** Using `String()` or template literals.
  * **To Boolean:** Converting numbers and strings into truthy/falsy boolean values using `Boolean()`.


* JavaScript string-to-number conversion

* Prefix vs. Postfix operators (++ and --)

### 5. Data Type Comparisons
* **Type Coercion:** Learned how JavaScript converts strings to numbers during comparisons.
* **Comparisons vs. Equality:** Understood that relational comparisons (`>`, `<`) and equality checks (`==` vs `===`) handle data types differently.

### 3. Data Types: Primitive vs. Non-Primitive
* **Primitive Types (Stored by Value):** Includes 7 types: `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, and `BigInt`. When copied, a brand-new copy of the value is created in memory.
* **Non-Primitive Types (Stored by Reference):** Includes 3 main types: `Array`, `Object`, and `Function`. Instead of copying the actual data, variables store a reference pointing to the data's location in memory.
* **Type Checking:** Learned how to use the `typeof` operator to check the data type of any variable.

### 4. Stack and Heap Memory
* **Stack Memory (Used for Primitive Types):** When a variable is copied, a brand-new copy of the value is created. Changing one variable's value does not affect the other.
* **Heap Memory (Used for Non-Primitive/Reference Types):** Variables store a reference pointing to the memory location. Since they share the same reference, changing the value through one variable updates it for both.

### 5. String Prototype Functions
* **Definition:** Built-in methods attached to JavaScript's `String.prototype` that allow inspection and manipulation of text strings.
* **Commonly Used Methods:**
  * **Case Manipulation:** `toUpperCase()` and `toLowerCase()` to convert letter cases.
  * **Trimming:** `trim()` to remove unnecessary whitespace from both ends.
  * **Searching:** `includes()` to check if a substring exists, and `indexOf()` to find character positions.
  * **Extraction & Modification:** `slice()` to extract parts of a string, `replace()` to swap character values, and `split()` to convert strings into arrays.

  * **String Object Wrappers:** Learned how JavaScript temporarily wraps primitive strings in an object wrapper behind the scenes to give them access to built-in prototype methods.

  ### 6. Numbers and the Math Object
* **Number Methods:** Learned how to manipulate numbers using built-in functions like `toString()` for conversion, `toFixed()` to control decimal precision, and `toPrecision()` for specific significant digits.
* **Math Object Methods:** Explored core mathematical utilities including `Math.abs()` for absolute values, rounding functions like `Math.round()`, `Math.ceil()`, and `Math.floor()`, and `Math.random()` for generating random numbers.
* **Custom Random Range Formula:** Mastered the formula `Math.floor(Math.random() * (max - min + 1)) + min` to generate a random integer within a specific minimum and maximum range.

### 7. Dates and Time in JavaScript
* **Date Object:** Learned how to create and manage dates and times using the `new Date()` constructor.
* **Component Extraction:** Explored methods to retrieve specific parts of a date, such as the year, month, day, hours, minutes, and day of the week.

* **Timestamps & Formatting:** Understood how to measure time in milliseconds using `Date.now()` and how to convert date objects into readable string formats.

### 8. Arrays and Array Methods
* **Array Basics:** Learned how to store and organize multiple items in a single variable.
* **Adding & Removing Elements:** 
  * `push()` to add elements to the end of an array.
  * `pop()` to remove the last element.
* **Searching:** 
  * `includes()` to check if a specific value exists (`true`/`false`).
  * `indexOf()` to find the index position of a value.
* **String Conversion:** 
  * `join()` to combine all array elements into a single string.
* **Extracting & Modifying (`slice` vs. `splice`):** 
  * `slice()` to copy a portion of an array without changing the original.
  * `splice()` to add, remove, or replace elements directly in place (modifying the original array).
  