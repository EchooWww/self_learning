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

"""arguments can have default values"""
def area(radius = 3):
    return mul(radius, radius)
"""the following 2 lines will return the same value"""
area()
area(3)
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

## Operators

- Divisions: true and integer division

  ```py
  >>> 2013 / 10
  201.3
  >>> 2013 // 10
  201
  >>> from operator import truediv, floordiv # equivalent to the above
  ```

- Mod: % or mod()

- Return multiple or 0 value is both possible
  ```py
    >>> def divide_exact(n,d):
    ...    return n//d, n%d
    >>> quotinent,remained = divide_exact(2013,10)
    >>> quotinent
    201
    >>> remainder
    3
  ```

## Run python in interactive mode / in a file

- Interactive mode without file in terminal
  ```bash
  python3
  ```
- Run the file in terminal
  ```bash
  python3 name.py
  ```
- Run the file in interactive mode
  ```bash
  python3 -i name.py
  ```

## Documentations

Doctest and Docstring

```py
    """Come up with the most creative expression that evaluates to 2022,
    using only numbers and the +, *, and - operators.

    >>> twenty_twenty_two()
    2022
    """
```

To run the doctest

```bash
python3 -m doctest name.py # No output if test is running correct
python3 -m doctest -v name.py # to show the details
```

## Conditional statements

### Syntax of conditional statements in python

```py
def absolute_value(x):
  if x < 0:
    return -x
  elif x == 0: #Python's keyword for 'else if'
    return 0
  else:
    return x
```

### Booleans in Python

- False values: false, 0, ''(empty string), None (more to come), [], {}, () (empty list, dictionary and tuple)
- True values: anything else
- Like in Java, a return statement terminate the execution of Python code

### Boolean operators

Python got shot curcuits as Java does

- not: ! in Java
- and: && in Java
- or: || in Java (so `False or 9999 or 1/0` will be evaluated as `9999`)

## Iteration

- Syntax : similar to conditional statements

  ```py
  i, total = 0, 0
  while i < 3:
    i = i + 1
    total = total + i
  ```
