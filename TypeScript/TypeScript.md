## Introduction to Typescript

### What is Typescript?

Typescript is a **superset** of Javascript. It adds types to Javascript. Typescript is **compiled** to Javascript.

Taking advantage of Typescript's type system allows us to catch errors at compile time instead of runtime.

The only one thing that Typescript does is static type checking. It does not do anything else. It's a development tool, and our project still runs JS.

Typescript is not a standalone language. It's a development tool that helps us write better JS code.

### Installation and Setup

To install in the operating system, run the following command:

```bash
npm install -g typescript
```

To install in the project as a dev dependency, run the following command:

```bash
npm install typescript --save-dev
```

To compile a Typescript file, run the following command:

```bash
tsc <filename>
```

We will get a `.js` file with the same name as the `.ts` file.

The compiler by default transpiles to ES3. To change the target, we can use the `--target` flag, which would enable us to use ES6 features.

```bash
tsc <filename> --target ES6
```

Or we can change the target in the `tsconfig.json` file

```json
{
  "compilerOptions": {
    "target": "ES6"
  }
}
```

For more about TS config, see [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

let's see a simple example of Typescript:

```ts
const user = { name: "echo", age: 27 };

console.log("Echo");
console.log(user);
console.log(user.email); // vscode will give us a warning, because email is not a property of user, but it will still compile (.js file does not have this warning)
```

We actually write more code in Typescript than in Javascript. But the code we write in Typescript is more readable and maintainable.

### Typescript Types

Number, String, Boolean, Null, Undefined, Void, Array, Object,Tuple...

LikeJavascript, TS does not have runtime types for `int` or `float`, it only has `number`.

### A simple example to show the power of Typescript

```ts
let greetings: string = "Hello Echo";
let myNum = 5;

myNum.toUpperCase(); // warning, because myNum is declared as number

console.log(greetings);

// greetings = 6; // warning, because greetings is declared as string

export {}; // this file is a module
```

### Type inference

We can omit the type when it's obvious to avoid redundancy.

```ts
// instead of
let greetings: string = "Hello Echo";
// we can write
let greetings = "Hello Echo";
```

Even though we didn't specify the type explicitly, TS is smart enough show warning if we try to assign a value of different type to the variable.

```ts
let greetings = "Hello Echo";
greeings = 6; // warning
```

### Avoid using `any`

In this case, if we don't explicitly specify the type, TS will infer the type as `any`. And we won't get any error if we change the return type of `getHero()`.

```ts
let hero;

function getHero() {
  return "thor";
}

hero = getHero();
```

This is not a good practice, because we lose the benefits of TS. To avoid this, we can explicitly specify the type of `hero` as `string`. By this, we will let our collaborators know that `hero` is expected to receive a string, and the function is supposed to return a string.

`any` is not actually a type, but a marker that means we wanna "turn off" TS type checking for this variable.

## Typescript Basics

### Functions

In functions, we can specify the type of the parameters and the return type.

```ts
function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

We can also use arrow functions:

```ts
const signUpUser = (name: string, email: string, isPair: boolean): void =>
  console.log(`Name: ${name}, Email: ${email}, isPair: ${isPair}`);
```

We can also pass default values to the parameters:

```ts
const signUpUser = (
  name: string,
  email: string,
  isPair: boolean = false
): void => console.log(`Name: ${name}, Email: ${email}, isPair: ${isPair}`);
```

We can also use stream functions:

```ts
const nums = [1, 2, 3, 4, 5];
nums.map((num) => num * 2); // typescript will infer the type of num as number
```

To handle errors, we can use `never` as the return type:

```ts
const throwError = (message: string): never => {
  throw new Error(message);
};
```

### Typescript Objects

return an object:

```ts
// the syntax is a bit confusing
const createUser = ({ name: string, isPaid: boolean }): {} => {
  return {
    userName: name,
    isPaid: isPaid,
  };
};
```

A problem is, if we declare the object seperately, typescript cannot detect the type of the object when passing it to the function:

```ts
let newUser = {
  name: "Echo",
  isPaid: true,
  email: "123@bc.ca",
};
createUser(newUser); // won't show warning
```

### Type Aliases

To resolve this problem, we can use type declaration of objects for parameters/return types with keyword `type`:

```ts
type User = { name: string; isPaid: boolean };

const createUser = (user: User): User => {
  return {
    userName: user.name,
    isPaid: user.isPaid,
  };
};
```

We can use our own type just like any other types.

### Easy use cases for objects

The `readonly` keyword can be used to make the object immutable:

```ts
type User = { readonly name: string; isPaid: boolean };

const user1: User = {
  name: "Echo",
  isPaid: true,
};

user1.name = "Echo2"; // warning
```

The `?` question mark can be used to make the property optional:

```ts
type User = { name: string; isPaid?: boolean };

const user1: User = {
  name: "Echo",
}; //acceptable
```

The `&` ampersand mark can be used to combine types.

```ts
type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cardCvv: string;
  };
```

### Typescript Arrays

If we simply initialize an array with empty brackets, typescript will infer the type as `never[]`, so always specify the type of the array.

```ts
const superHeroes: string[] = [];

superHeroes.push("thor");
```

Array of our own type:

```ts
type User = { name: string; isPaid: boolean };

const users: User[] = [];
users.push({ name: "Echo", isPaid: true });
```

Readonly array:

```ts
const users: ReadonlyArray<User> = [];
```

### Union Types

Union is useful when we're not sure about the exact type of the variable. But use it with caution!

We can use it for both primitive types and our own types.

```ts
type User = { name: string; isPaid: boolean };
type Admin = { name: string; isAdmin: boolean };

let user1: User | Admin = {
  name: "Echo",
  isPaid: true,
};
user1 = {
  name: "Echo",
  isAdmin: true,
};
```

We can also use union types in functions. But need to be careful: when we manipulate the parameter, the manipulation need to be valid for all the types in the union.

```ts
const getId = (id: string | number) => {
  return id;
};
```

We can also use union types within arrays to allow multiple types of values in the array. Wrap the union type in parentheses!

```ts
const mixedArray: (string | number)[] = [];
mixedArray.push("Echo");
mixedArray.push(6);
```

Typescript also allow literal types, which means we can specify the exact value of the variable.

```ts
let userType: "user" | "admin" | "guest" = "user";
userType = "admin";
```

### Tuples and Enums

### Tuples

We can use tuples to specify the type of each element in an array, which forms a tuple. So we can have a specific type for each element in the array.

```ts
const User: [string, number, boolean];
User = ["Echo", 27, true];

type RGB = [number, number, number];
const red: RGB = [255, 0, 0];
```

A problem is, we can still push elements to the array, and typescript won't show any warning. Be cautious when using tuples!

#### Enum

Sometimes we wanna restrict the value of a variable to a set of values. We can use enum for this purpose.

```ts
enum SetChoice {
  AISEL = 10, // the enum value are by default 0, 1, 2, ... but if we define the first value, the rest will be incremented by 1
  MIDDLE = 22,
  WINDOW,
}

const hcSeat = SetChoice.AISEL;
```

We can also set the value of enums:

```ts
enum SetChoice {
  AISEL = "Aisel",
  MIDDLE = 3,
  WINDOW,
}

const hcSeat = SetChoice.AISEL;
```

We can reduce the boilerplate code by using `const enum`:

```ts
const enum SetChoice {
  AISEL = "Aisel",
  MIDDLE = 3,
  WINDOW,
}
```

### Interfaces

Interface is like a protocol, which defines the structure of an object. It's a contract that an object needs to follow. We can include properties and methods in an interface, which makes it more powerful than type aliases under some circumstances.

```ts
interface User {
  name: string;
  age: number;
  isPaid: boolean;
  // startTrial: () => void;
  startTrial(): string; // both syntaxes are acceptable. Means no parameter needed and return a string.
  getCoupon(couponname: string): string; // means a parameter is needed and return a string.
}

const user1: User = {
  name: "Echo",
  age: 27,
  isPaid: true,
  startTrial: () => {
    console.log("start trial");
  },
  // the parameter name can be different from the interface, as long as the type is correct
  getCoupon: (name: string) => {
    return couponname;
  },
};
```

### Re-open and extend an interface

We are able to "reopen" an interface and add more properties/methods to an existing interful. This is useful when we are using a third party library and we want to add more properties/methods to the interface of the library. "Re-opening" an interface is also called "declaration merging".

```ts
interface User {
  age: number;
  isPaid: boolean;
  startTrial(): string;
  getCoupon(couponname: string): string;
}

// we just need to simply use the same name of the interface, and add the new properties/methods as we need
interface User {
  email: string;
}

const user1: User = {
  name: "Echo",
  age: 27,
  isPaid: true,
  startTrial: () => {
    console.log("start trial");
  },
  getCoupon: (name: string) => {
    return couponname;
  },
  email: "echo@2333.com",
};
```

We are also able to extend an interface, to let it inherit the properties/methods of another interface, as well as customizing its own properties/methods.

```ts
interface User {
  age: number;
  isPaid: boolean;
  startTrial(): string;
  getCoupon(couponname: string): string;
}

interface Admin extends User {
  adminSince: Date;
  getAdminSince(): Date;
}
```

### Interfaces vs Type Aliases

The documentation of Typescript recommends using interfaces over type aliases. But there are some different opinions on this topic.

Type aliases are more flexible than interfaces. For example, type can be defined as a single type, but interface must be object-based.

```ts
type SType = string | number; // acceptable
type TType = {name:string} | {age:number}; // acceptable

interface SInterface = string | number; // error

```

What's good about interface is it allows us to merge interfaces, which is not possible with type aliases. But this also means when we want to overwrite an interface, we need to re-declare the whole interface with a different name.

```ts
interface User {
  name: string;
  age: number;
}
interface User {
  isPaid: boolean;
}
```

## Typescript in Real Projects

Init a project with Typescript:

```bash
tsc --init
```

And we can see our `tsconfig.json` file.

We usually have a `src` folder for our source code, and a `dist` folder for our compiled code. To make our compiled `js` file go to the `dist` folder, we can specify the `outDir` property in the `tsconfig.json` file.

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

To compile the `ts` file as we specified in the `tsconfig.json` file, we can simply run `tsc-w` in the terminal.

### Classes, Constructors and Access Modifiers

Like in other OOP languages, we can use classes in Typescript to create objects.

In a class definition, we can specify the type of the properties and the return type of the methods.

```ts
class User {
  name: string;
  age: number;
  isPaid: boolean;

  constructor(name: string, age: number, isPaid: boolean) {
    this.name = name;
    this.age = age;
    this.isPaid = isPaid;
  }
}
```

Like javascript, we can add access modifiers to the properties and methods. The default access modifier is `public`.

```ts
class User {
  public name: string;
  private age: number;
  protected isPaid: boolean;

  constructor(name: string, age: number, isPaid: boolean) {
    this.name = name;
    this.age = age;
    this.isPaid = isPaid;
  }
}
```

This way, the private properties cannot be accessed outside the class, and the protected properties can only be accessed by the class and its subclasses. We can also use `#` to declare private properties. (Both acceptable in TS, but there's no `private` in JS). We can also have private method in a class, which can only be accessed by the class itself.

We can also move the properties declaration to the constructor, which is a shorthand way to declare properties. They will be compiled to the same thing.

```ts
class User {
  constructor(
    public name: string,
    private age: number,
    protected isPaid: boolean
  ) {}
}
```

We also have `protedted` access modifier, which means the property can only be accessed by the class and its subclasses: the classes `extends` the class.

### Getters and Setters

We always start with the `set` or `get` keyword, and then the name of the property we want to get. We can also add access modifiers to the getters and setters.

Setter doesn't return anything, it doesn't need any return type, even `void`.

```ts
class User {
  constructor(
    public name: string,
    private age: number,
    protected isPaid: boolean
  ) {}

  get paid() {
    return this.isPaid;
  }

  set paid(isPaid: boolean) {
    this.isPaid = isPaid;
  }
}
```

Getters don't necessarily need to return the value of a private property, we can also do some calculation in the getter.

### Interfaces and Abstract Classes

We can use interfaces as protocols to define the structure of a class. Interface is just a contract that a class needs to follow, it doesn't have any implementation. We provide implementation in the class.

```ts
interface UserInterface {
  name: string;
  age: number;
  isPaid: boolean;
  startTrial(): string;
  getCoupon(couponname: string): string;
}

class User implements UserInterface {
  constructor(
    public name: string,
    private age: number,
    protected isPaid: boolean
  ) {}

  get paid() {
    return this.isPaid;
  }

  set paid(isPaid: boolean) {
    this.isPaid = isPaid;
  }

  startTrial() {
    return "trial started";
  }

  getCoupon(couponname: string) {
    return couponname;
  }
}
```

On the other hand, abstract classes are classes that cannot be instantiated. We can only extend abstract classes. Abstract classes are useful when we want to provide some common functionality to the subclasses, but we don't want to instantiate the abstract class itself.

To instantiate from a class, we must guarentee that all methods in that class are concrete.

### Generics

Compare the 3 versions, we can see that the last version enables us to accept any type of argument, and return the same type of argument. This is the power of generics.

```ts
const score: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ["a", "b", "c", "d", "e"];

function identityOne(val: number | boolean): number | boolean {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<T>(arg: T): T {
  return arg;
}
```

We can also use generics with arrays

```ts
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
// or
function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
```

Convert a generic function declaration to an arrow function:

```ts

function getSearchProducts<T,>(arg: T[]): T {
  return arg[0];
}
// the arrow function version
function getSearchProducts = <T,>(arg: T[]): T => {
  return arg[0];
}
```

Putting a comma after the generic type can help us to differentiate the generic type from the html tag.

We can also make a generic class.

## Narrowing

`typeof` can be used as a type guard to narrow the type of a variable. We need to be careful that `typeof(null)` and `typeof(T[])` is actually `object`, so we need to check null first by just putting the value inside the if statement.

```ts
function printAll(st: string | string[] | null) {
  if (st) {
    if (typeof st === "object") {
      for (const s of st) {
        console.log(s);
      }
    } else {
      console.log(st);
    }
  }
}
```

Other than `typeof`, we can also use the `in` operator to narrow the type of a variable. It enables us to check if a property exists in an object. We can wrap the property name in quotes.

```ts
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  adminNo: number;
}

function isAdmin(user: User | Admin) {
  if ("adminNo" in user) {
    return true;
  } else {
    return false;
  }
}
```

We can also use `instanceof` to check if an object is an instance of a class. Unlike `typeof`, we can check our own classes or non-primitive types, everything created with `new` keyword, with `instanceof`.

We can also use type predicates to narrow the type of a variable. We can use `is` to define a type predicate. The return value of the type predicate is a boolean, and the type of the variable is the type we defined in the type predicate.

```ts
type Fish = {
  swim: () => void;
};
type Bird = {
  fly: () => void;
};

// function move(animal: Fish | Bird) {
//   return (animal as Fish).swim() !== undefined;
// }
// we can make this better!!
function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim() !== undefined;
} // type predicate: if the return value is true, then the type of the variable is Fish, otherwise it's Bird

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    return "Fish food";
  } else {
    return "Bird food";
  }
}
```

Most of the time, we'll be dealing with slightly more complex structures than the cases above.

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Square;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.sideLength ** 2;
}
```

There's also a `never` type in TS, which means the function will never return anything. We can use it to make sure we have covered all the cases in the function, which is called "exhaustive checking".

```ts
function getTrueShape(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```
