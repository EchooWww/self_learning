# React Notes for [Jonas Tutorial](https://www.udemy.com/course/the-ultimate-react-course/)

## Introduction

### Why do we need front-end frameworks?

The evolution: server-side rendering -> client-side rendering -> single page applications

We use frameworks to make our UI sync with the data, which could be really hard in Vanilla JS: we need to manually update the DOM, and maybe multiple functions would modify the same DOM element, which would cause conflicts and bugs.

🎉 The frameworks

1. Keep the UI in sync with the data
2. Enforce structure and modularity
3. Give developers a consistent platform to work on

### React

In React, we can easily keep the data in sync with useState(), unlike in Vanilla JS, where we need to manually update the DOM. This is essential when we're building a big application.

❓ What is React?

- Based on components: we can build complex UIs from small and isolated pieces of code called components. Each component has its own logic and controls its own state, and can be **reused**.
- Declarative: we tell React what we want to happen, and React will take care of it with a declarative syntax called **JSX**. We never touch the DOM. JSX combines html, css and js.
- Stste-driven: All data can be referred as "state". We can change the state, and React will automatically rerender the UI. React "reacts" to state changes and updates the UI accordingly.
- Javascript library: React is a library, not a framework. It's not opinionated, and we can use it with other libraries. There are frameworks built on top of React, such as Next.js and Gatsby.

### Creating a new React project

Option 1: Use create-react-app

👍 Complete `starter kit`, everything already configured
👎 Uses slow and outdated webpack

```bash
npx create-react-app my-app
cd my-app
npm start
```

🌸 Option 2: Use vite
👍 Modern build tool, much faster than webpack
👍 Extremely fast hot module replacement (HMR) and bundling, used for real-world applications
👎 Not a complete starter kit, we need to configure ESLint

```bash
npm init vite@latest
cd my-app
npm install
npm run dev
```

## Essential Javascript for React

### Destructuring

To destructure an object, we simply put the property names in curly braces.

```js
const { name, age } = person;
// and we can assign them to new variables
const { name: firstName, age: years } = person;
```

We can also simply destructure arrays by using square brackets.

```js
const [first, second] = arr;
```

### Rest/Spread Operator

We can use the rest operator in the **end** of the destructuring to get the rest of the array.

```js
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(otherGenres); // ["Jazz", "Blues"]
```

Spread operator is more common used, also the same syntax as rest operator, but it's used in the **beginning** of the destructuring to spread an array or an object.

```js
const newGenres = [...genres, "epic fantasy"];
// or
const newGenres = ["epic fantasy", ...genres];
```

Spread operator is more useful in objects: not only adding new properties, but also overriding existing properties.

```js
const updateBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Updating an existing property
  pages: 1210,
};
```

### Short Circuiting with logical operators

&& works as a short circuit operator: if the first operand is falsy, it returns the first operand, otherwise it returns the second operand, in other words, it returns the first falsy value or the last truthy value if all values are true.

|| works as a short circuit operator: if the first operand is truthy, it returns the first operand, otherwise it returns the second operand, in other words, it returns the first truthy value or the last falsy value if all values are false.

?? works as a nullish coalescing operator: if the first operand is null or undefined, but not 0 or "", it returns the second operand, otherwise it returns the first operand.

### Optional Chaining Operator

We can use optional chaining operator to avoid undefined errors. It's useful when we're not sure if a property exists or not.

```js
const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
const libraryThing = book.reviews.libraryThing?.reviewsCount ?? 0;
```

### Functional array methods: map, filter, reduce (not changing the original array)

map() returns a new array with the same length as the original array, but with each element being the result of the callback function.

```js
const bookTitles = books.map((book) => book.title);
```

filter() returns a new array with the elements that pass the test implemented by the callback function.

```js
// the test is an expression returning true or false
const fantasyBooks = books.filter((book) => {book.genre} === "Fantasy");
```

reduce(): the callback function takes four arguments: accumulator, currentValue, currentIndex, array. The accumulator is the value returned by the previous iteration, and the currentValue is the current element of the array. The callback function can also take an initial value as the second argument.

```js
// we also need to include accumulator as the first argument for the callback function
const totalReviews = books.reduce((acc, book) => acc + book.reviewsCount, 0);
```

### arrays sort() method

sort(): the callback function takes two arguments: firstElement and secondElement. If the return value is negative, the firstElement will be sorted before the secondElement, otherwise the secondElement will be sorted before the firstElement.

```js
// be careful when using sort(), because it will change the original array, we can use slice() to avoid this
const sortedBooks = books.sort((a, b) => a - b); // ascending order
```

slice(): returns a new array with the elements from the start index to the end index (not included). If passing no arguments, it returns a copy of the original array.

```js
const firstFiveBooks = books.slice(0, 5);
```

### Working with immutable arrays

To add elements: we can simply use the spread operator to add elements to the end of the array, or use unshift() to add elements to the beginning of the array.

To delete elements: we can use filter() to filter out the elements we want to delete.

To update elements: we can use map() to update the elements we want to update.

### Promises and async/await

1. Promises
   the then().catch() syntax

```js
fetch("todos/luigi.json")
  .then((response) => {
    console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });
```

2. async/await

- async function's return value is a promise, and we can use await to wait for the promise to be resolved.
- Only executions within the async function can be awaited.

```js
const getTodos = async function () {
  const response = await fetch("todos/luigi.json");
  const data = await response.json();
  return data;
};
``;
```

In react, we usually use useState() after fetching data from an API, instead of returning the data directly.

## Working with Components, Props, and JSX

### The entry point of the React application

- index.js is the entry point of the webpacck bundler

```js
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

// React V18
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// React before 18
ReactDOM.render(<App />, document.querySelector("#root"));
```

### Components

- Components are the building blocks of React applications
- Components are pieces of UI that can be reused, nested inside each other, and pass data between them

2 rules about components:

1. Components must start with a capital letter
2. Components must return a single element: if we have multiple elements, we can wrap them with <> </>

- We shouldn't nest component declarations inside other components, because it will be hard to reuse them.

### JSX

- JSX is a declaritive syntax to describe what components look like and how they work. Components must return a block of JSX
- JSX is extension of JS, that allows us to embed JS, CSS and React components into HTML
- Each JSX element is converted into a React.createElement() call behind the scenes
- We can actually use React without JSX, but it's not recommended

🤺 Imperative vs Declarative Approach
Imperative approach: manually update the DOM
Declarative approach: React is an abstraction away from the DOM: we never touch the DOM. We just describe the UI and React will take care of it. We think of the UI as a reflection of the data.

Components are just javascript functions, so we can use javascript logic in components.

❓ Separation of concerns?
Javascript has become more and more important in web development: why still keep them separated? => React components + JSX came to the rescue.

### Style React components: inline styles & CSS files

🖌️ Inline styles

- In JSX, we use inline styles with Javascript objects instead of strings, so there's always 2 pairs of curly braces: 1 to enter JS, and 1 to enter an object.

  ```js
  style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
  ```

- Also, we need to use camelCase instead of kebab-case for CSS properties.
- Instead of class, we use className in JSX

🖌️ External CSS files

- First import the CSS file in the component file
- Then add the className to the JSX element: className="class-name"
- These styles will be applied to all the elements with the same className, which is global styles

### Passing & receiving props: from parent to child

To pass the data from a parent component to its child:

1. In the parent component, we pass the data like defining an attribute in the JSX element: <ChildComponent attribute={data} /> // if we want to pass number, we need to use curly braces
2. In the child component, we receive the whole props object as the argument
3. We can access the data by using props.attribute (we can also destructure the props object)

![image](https://i.imgur.com/EcGO8UI.png)

### Props, immutability, and one-way data flow

In some way, props are like arguments we pass to a function. But one more important thing: props are **READ-ONLY**

To take a closer look: components consist of data, logic, and apperance. And data can be divided into 2 types: state and props.

- State[inside]: internal data that can be updated by the component's own logic
- Props[outside]: external data that can be passed to the component

❓ Why props are read-only?

- Mutating props would affect the parent component, creating side effects(not pure)
- Components have to be pure functions: we should never mutate a variable outside the function

➡️ One-way data flow: data flows from parent to child, and not the other way around

### The rules of JSX

General rules:

- JSX works essentially like HTML, but we can enter "javascript" with curly braces
- We can place any valid javascript expression inside curly braces
- Statements like if/else, for, switch, etc. are not expressions, so they can't be used inside curly braces
- JSX produces React elements, which are plain JS objects, and can be stored in variables, passed to functions, etc.
  1. We can place other pieces of JSX inside curly braces, e.g., {<h1>Hello World!</h1>}
  2. We can write JSX anywhere inside a component, e.g., inside a function, inside a loop, inside a conditional statement, etc.
- A piece of JSX can only have one root element, e.g., we can't have 2 h1 elements in the same JSX block, but we can wrap them with the fragment element: <></>

### Rendering Lists

Basically, rendering a list means rendering an array, creating one element for each item in the array.

The most common way to render a list is using map(), because that will return an array of components/ JSXs, and React will automatically render them.

```js
{
  // for each item in the array, we return a component, with props values from the item
  pizzaData.map((pizza) => (
    <Pizza
      name={pizza.name}
      photoName={pizza.photoName}
      ingredients={pizza.ingredients}
      price={pizza.price}
    />
  ));
}
```

- When we use map(), we need to add a key prop to each element, which is a **unique** identifier for each element.

### Conditional Rendering

Conditional rendering: rendering a piece of component/ JSX based on a condition.

#### Conditional rendering with &&

The short circuiting: when the first expression is false, the second expression won't be evaluated, thus not rendered. In other words, only when the condition is true, we render something

```js
return <footer className="footer">{isOpen && <p>Close</p>}</footer>;
```

🔴 Attention: the logic of && is not only true or false, but "truthy" or "falsy". 0, null, undefined, false, "", NaN are all falsy values. true and false won't be rendered by React, but 0 will. So we should avoid using 0 as a condition.

#### 🍀 Conditional rendering with ternary operator [the most common way!]

The advantage of ternary operator is that we can render something else when the condition is false.

```js
{
  numpizzas > 0 ? (
    <ul className="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizza={pizza} key={pizza.name} />
      ))}
    </ul>
  ) : (
    <p>We are still working on our menu. Please come back later:)</p>
  );
}

// use ternary operator to set classname
<li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>

```

Why not if-else? because it doesn't produce a value, so we can't use it in JSX.

#### Conditional rendering with multiple returns

We can actually have multiple return statements in a component wrapped by conditional statements.

### Destucturing props

When we pass props to a component, we can destructure the props object in the function argument. If there's no props passed to the component, there's still a props in the argument as an empty object.

It's a good practice to destructure props as soon as we receive them, because it makes the code more readable: but don't forget the curly braces!

### React Fragments

Unlike divs, react fragments won't create a new element in the DOM, so it's useful when we want to wrap multiple elements without creating a new element in the DOM.

- usually we can just use <> </> to wrap multiple elements, but we can't add attributes to it
- If we want to add attributes, for example when mapping through an array and need to add a key to each element, we can use <React.Fragment> </React.Fragment>

## State, Events, and Forms: Interactive React Components

### Handling Events the React Way

We handle events like the inline event handlers in HTML, but we use camelCase instead of kebab-case, and we pass a function instead of a string.

❗️What is expected here is a function, but not a function call. So when we don't wanna define the function elsewhere, we can use an arrow function to wrap the function call.

```js
onClick={handleClick}
onClick = {() => alert("Hello World!")}
onMouseEnter={alert("Hello World!")} // this won't work, because it's not a function, but a function call
```

### Introduce State

#### What is state?

State is the most important concept in React.

- State is the data that a component can hold over time,
- State is the component's memory,
- State variable/ piece of state: A single variable in a component

🟢 Changing a state triggers React to re-render the user interface
State allows us to:

1. Update the UI by re-rendering it
2. Persist data across renders

#### Creating a state variable

- We use the useState() hook to create a state variable
- useState() returns an array with 2 elements: the state variable and a function to update the state variable, we can destructure them immediately
- We can pass an initial value to useState(), which is the initial value of the state variable

```js
import { useState } from "react";

const [step, setStep] = useState(1);
```

We can only call hooks on the **top level** of a component function, not inside loops, conditions, or nested functions

🔴 **Don't set state manually!** React won't know that and cannot re-render without using the setter function. We should treat state as immutable, and only let the setter mutate it.

#### The Mechanics of State

- We don't do direct DOM manipulations. Instead, a view is updated by re-rendering the component
- Re-rendering basically means React will call the component function again
- When state changes, React will re-render the component, and state is preserved throughout re-renders

#### Updating State based on current State

```js
setStep(step + 1);
// instead of using the current state directly, the better way is to use a callback function, and pass the current state as the argument
setStep((s) => s + 1);
```

#### State guidelines

- One component, one State (multiple state variables are fine)
- UI as a function of State: UI is a reflection of data, we describe the reflection with state, JSX and event handlers

In practical terms..

- Use a state variable for data will change at some point, like the variables declared with let in Vanilla JS
- Whenever we need something to be dynamic, we use state
- When we want to change teh way a component looks, we use state
- When building a component, imagine its view as a reflection of state changing over time
- Do not use state for variables shouldn't trigger re-renders

#### State vs Props

| State                                  | Props                                                 |
| -------------------------------------- | ----------------------------------------------------- |
| Internal data, owned by the component  | External data, passed to the component                |
| Component "memory"                     | Component "arguments"                                 |
| can be changed by the component itself | can't be changed by the component itself              |
| Updating state triggers re-rendering   | Receiving new props causes component to **re-render** |

### Forms and Controlled Elements

In one-page application, we usually use forms to get user input, and we need to handle the form submission.

```js
handleSubmit = (e) => {
  // prevent the default behavior of the form: refreshing the page
  e.preventDefault();
  //...
};
```

In Vanilla JS, the data of the form is stored in the DOM, and we can get the data by using document.querySelector().value. But in React, we wanna store the data in one central place: controlled elements.

```js
const [description, setDescription] = useState("");
<input value={description} onChange={(e) => setDescription(e.target.value)} />;

const [quantity, setQuantity] = useState(1);
<select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
// and when submitting the form, we can use the state variables directly, and then reset them

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    setDescription("");
    setQuantity(1);
    setList((list) => [...list, newItem]);
  }
```

By doing this, we let react state to be the single source of truth, in other words, to control the form elements. That's why we call them controlled elements.

## Think in React: State Management in React

The "thinking in React" process:

1. Break the UI into a component hierarchy
2. Build a static version in React
3. Think about state: when to use state? types of state(local or global)? where to place state?
4. Establish data flow: one-way data flow, child-to-parent communication, global state management

### Fundamental of state management

State management: find homes for state

Types of state: Local state vs Global state
🍎 Local state: state that is only used in one component and its children
🌍 Global state: state that is used in multiple components, and can be accessed by any component. We can use React Context or Redux to manage global state.
![img](https://i.imgur.com/8NSj9XY.png)

### Lifting State Up

When we have multiple components that need to share the same state, we can lift the state up to the closest common ancestor of these components, and pass the state down as props.

We can pass almost anything as props, including functions. So we can pass the setter or handler function as props, and use it to update the state in the parent component.

### Child-to-Parent Communication

❓ If we cannot mutate the props, how can we mutate the state in the child component?
💬 We can simply pass the setter function as props, and use it to update the state in the parent component.

- When defining the handlers in the higher level, we should set the argument as some identifier which we could use to identify the child component, and when we call the handler in the child component, we should pass the identifier as the argument.
- It's time to use destructuring, map(), filter(), and spread operator to update the state in the handler functions

### Derive State

We should try to create fewer state variables, and derive state from existing state variables whenever possible.

For example, if we have a list of items in a shopping cart, we can derive the total price as a regular variable from the list of items, instead of creating a new state variable for the total price. Every time the state of the list of items changes, the total price will be updated automatically because the component will be re-rendered.

### The children prop
