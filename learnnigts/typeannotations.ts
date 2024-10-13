/***
 * Type annotations: explicitly declare the type of variable or function params
 * example
 * let counter:number =0;
 * type inference: Typescript automatically infers types based on the assigned value or usage context.
 *  example
 * let message = 'Hello,Typescript';
 * //typescript infers message as string
 *
 *
 *
*/

//numbers represents both float or integers 
let age: number = 31;
console.log("age ", age)

let age1 = 24;
console.log(age);
console.log(typeof age, typeof age1);

//let string
let fname: string = 'jitesh';
let surname = 'choudhary'

console.log(fname, surname);
console.log(typeof fname, typeof surname);

//boolean repsrent true false support logical operators 
let isActive = false;
let unactive: boolean = true;
console.log(typeof isActive, typeof unactive);

//null and undefined
//bothare represents absence of a value
//null reperesnts that intentional absenece of any object value
//undefined the absence of value for an uninitialized varaibles

let result: null = null;
let data: undefined = undefined;

//bigint data type in typescript 

//bigint represents arbitary precision integers
//example
let bigValue: bigint = BigInt(10000000000000);
console.log(bigValue)

//symbol data type in ts
//symbol represents unique identifiers
let s1 = Symbol("aweomse");
console.log(s1);

//complex data type array object functions

//arrays  represent ordered collections of values
//example 
let numbers: number[] = [1, 2, 3]

let mixedArray: (number | string)[] = [1, 2, 3, "Awesome"]
console.log(mixedArray);

//objects represents collections of key value pairs
//example 
let person: { name: string, age: number } = {
    name: "jitesh",
    age: 25
}
console.log(person)

//functions in typescript can have two values params types and return types for type safety

function sum(a: number, b: number, optional?: number): number {
    return a + b;
}
console.log(sum(6, 7));
console.log(sum(6, 71));
console.log(sum(6, 72));

//union types in typescript
/**
 * union types (|) combine multiple types a value to have different types
 */
let unionExample: (number | string) = 25;
unionExample = 'awesome'

//typescript type keyword
//create custom types allow creating type aliases for custom types.
//example 
type aged = number

//intersection
// combine multiple types a value to have all the specified types
//example 
type PersonInform = { name: string; age: number };
type Employee = { id: number; department: string };
type EmployeeDetails = PersonInform & Employee;
const empData: EmployeeDetails = {
    name: "jitesh",
    age: 21,
    id: 1,
    department: "string"
}
console.log("typeof ", empData);


//special types in typescript
//they not reference any specific type of data
//are any,unknown and never
//otherspecial types are void, null and undefined

//any 
//it bypass the type checking can lead the eror
let rollNo: any = 21;

//unknown
//the unknown type represnts a value type is unknown at compile type
//var can hold values of any type but require type checking or assertions for safe usage.
//it provides the safer way to deal with them or dynamic data

let value: unknown = 'Hello';
let lengthP: number = 0;
if (typeof value === "string") {
    lengthP = value.length;
}
console.log(typeof rollNo, typeof value)

//never type represents a type that never occurs.
//function returning never must either throw an error or have an infinite a loop

//example
function throwError(): never {
    throw new Error("An error occurred")
}

//void it is represent the absence of any type in ts
//it is commonly used as return type of function

function logMessage(message: string): void {
    console.log("message loged", message);
}
console.log(logMessage("awesome"));


//typescript interface
//typescript interface provide a powerful way to define object structures and esure type safety
//we define using interface keyword
interface PersonI {
    name: string;
    age: number
}
let aPerson: PersonI = {
    name: "awesome",
    age: 45
}

/**
 * 
 * In TypeScript, **interfaces** are used to define the structure of an object. They describe the shape or blueprint of objects by defining properties and methods that objects implementing the interface must have. Interfaces play a crucial role in ensuring type safety, making sure that objects adhere to the expected structure in TypeScript programs.

### Syntax

Here’s the basic syntax for declaring an interface:

```typescript
interface InterfaceName {
    propertyName: type;
    methodName(param: type): returnType;
}
```

### Example

```typescript
interface Person {
    name: string;
    age: number;
    greet(): string;
}

let user: Person = {
    name: "John",
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(user.greet()); // Output: Hello, my name is John
```

In this example, the `Person` interface defines two properties (`name` and `age`) and a method (`greet`). The `user` object is structured according to the `Person` interface, ensuring type safety.

### Use Cases for Interfaces

1. **Describing Objects**: Interfaces are primarily used to describe the structure of objects, ensuring that certain properties or methods exist.
   
   ```typescript
   interface Car {
       make: string;
       model: string;
       year: number;
   }

   const myCar: Car = {
       make: "Toyota",
       model: "Corolla",
       year: 2020
   };
   ```

2. **Function Signatures**: You can use interfaces to define function signatures.

   ```typescript
   interface MathOperation {
       (x: number, y: number): number;
   }

   let add: MathOperation = (a, b) => a + b;
   ```

3. **Implementing Interfaces in Classes**: Interfaces can be used in classes to enforce the implementation of certain properties or methods.

   ```typescript
   interface Animal {
       name: string;
       speak(): void;
   }

   class Dog implements Animal {
       name: string;
       constructor(name: string) {
           this.name = name;
       }

       speak() {
           console.log(`${this.name} barks.`);
       }
   }

   const dog = new Dog("Max");
   dog.speak(); // Output: Max barks.
   ```

4. **Optional Properties**: You can specify optional properties in an interface using the `?` symbol.

   ```typescript
   interface Employee {
       name: string;
       age?: number; // Optional
   }

   const emp1: Employee = { name: "Alice" }; // Valid
   const emp2: Employee = { name: "Bob", age: 25 }; // Valid
   ```

5. **Readonly Properties**: Interfaces can also have readonly properties, which can only be set when the object is created.

   ```typescript
   interface Book {
       readonly title: string;
   }

   const myBook: Book = { title: "1984" };
   // myBook.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property.
   ```

---

### Differences Between `interface`, `type`, and `union`

1. **`interface` vs `type`**
   - **Interfaces** are used to define the shape of objects and classes.
   - **Types** can do everything interfaces can, and more. They are more flexible because they can represent a union, intersection, or primitive types in addition to objects.

   For example, this is valid for `type` but not for `interface`:
   ```typescript
   type StringOrNumber = string | number;
   ```

   However, interfaces are more focused on the structure of objects, and they support **declaration merging**, meaning that you can declare the same interface in different places, and TypeScript will merge them together.

   ```typescript
   interface User {
       name: string;
   }

   interface User {
       age: number;
   }

   const person: User = { name: "Alice", age: 30 }; // Both properties are merged
   ```

   Declaration merging is not possible with `type`.

2. **Union (`|`)**
   - **Union types** are used to describe a value that can be one of several types. For example, a union type might allow a value to be either a `string` or a `number`, whereas an interface only describes the shape of objects.

   ```typescript
   type Result = string | number;

   let response: Result;
   response = "Success"; // Valid
   response = 200;       // Valid
   ```

   Unions allow for flexibility when defining a type that can be one of several distinct types.

3. **`interface` vs Union**
   - **Interfaces** are primarily for defining object structures, while **unions** combine different types (object, primitive, etc.) into one.

   For example:
   ```typescript
   type CarOrBike = Car | Bike;
   ```

   Here, `CarOrBike` can be either a `Car` object or a `Bike` object, but it’s not focused on just defining properties like an interface would.

---

### Key Differences

| Feature                | `interface`                         | `type`                               | Union (`|`)                    |
|------------------------|-------------------------------------|--------------------------------------|--------------------------------|
| Focus                  | Defines object structure            | Can define object, union, primitive  | Combines multiple types        |
| Declaration Merging    | Yes                                 | No                                   | No                             |
| Use for Union/Intersection | No                              | Yes                                  | Yes                            |
| Use in Classes         | Yes                                 | No                                   | No                             |
| Extendable             | Yes, with `extends`                 | Yes, using intersections (`&`)       | No, unions only combine types  |

---

### When to Use `interface` vs `type`

- **Use `interface`** when defining the structure of objects or classes, especially if you want to take advantage of declaration merging.
  
- **Use `type`** when working with more complex types, like unions, intersections, or to represent primitives in combination with objects.
interfaces support declaration merging,
allowing you to define multiple interface
declarations with the same name, and
they are merged into a single interface
with the combined properties while Types
do not support declaration merging.
*/