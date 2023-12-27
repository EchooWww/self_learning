## Introduction to Typescript

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

## Good Practices

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

## Typescript Functions

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

## Typescript Objects

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

### easy use cases for objects

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

## Typescript Arrays

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

## Union Types

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

## Typescript Tuples and Enums

### Tuple: need to be careful!

We can use tuples to specify the type of each element in an array, which forms a tuple. So we can have a specific type for each element in the array.

```ts
const User: [string, number, boolean];
User = ["Echo", 27, true];

type RGB = [number, number, number];
const red: RGB = [255, 0, 0];
```

A problem is, we can still push elements to the array, and typescript won't show any warning. Be cautious when using tuples!

### Enum

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

## Typescript Interfaces

Interface is like a protocol, which defines the structure of an object. It's a contract that an object needs to follow.

```ts
interface User {
  name: string;
  age: number;
  isPaid: boolean;
  startTrial: () => void;
}

const user1: User = {
  name: "Echo",
  age: 27,
  isPaid: true,
  startTrial: () => {
    console.log("start trial");
  },
};
```
