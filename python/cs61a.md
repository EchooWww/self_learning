# Intro to Python

## Expressions

Import statement in Python

```py
from operator import add, mul
add(2,3)
mul(add(2, mul(4,6)), add(3,5)) # will return 208
```

### Types of expressions

- Primitive expressions
  ```py
  2 # number or numeral
  add # name
  'hello' # string
  ```
- Call expressions
  ```py
  max (2, 3) # Operator and operands, operands can also be call expressions
  ```

## Names, Assignment and User-defined functions

**Assignments** in python is different from those in Java:

- No type specified
- Can assign several in a single expression

  ```py
  from math import pi
  area, circ = pi * radius, 2 * pi * radius
  ```

- Built-in functions can also be reassigned to other values
  ```py
  f = max
  max = 7
  f(1,2,3) # will return 3
  max # will return 7
  max = f
  max(1,2,3) # will return 3
  ```

**User-defined functions** in Python: the keyword `def` and column

> ❗️Difference from Java: the indentation really matters to the compiler!!

```py
def area(radius):  #function signature
    return mul(radius, radius)  #function body

area(3) # will return 9
```

### Environments

Environment Diagrams: **Within a frame**, a name cannot be repeated, visualize a python frame [here](https://pythontutor.com/cp/composingprograms.html#mode=edit).

Looking up names in environments:

- Global frame alone, or
- A local frame (of that function), followed by the global frame.

**An environment is a sequence of frames.**

**A name evaluates to the value bound to that name in the earliest frame of the current environment in which that name id found.(First local, then global)**

## Multiple Environments

- When the function is called, a new frame is created, the parameters are bound to the arguments in the signature, and the body is executed in that **new environment**
