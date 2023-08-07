# 100 Days of Python

## Fundamentals

### Type and Math

1. Types

- Primitive types: String, Integer, Float, Boolean

  - String: we can get the character at a specific position using `[]` notation, get the length of a string using `len()` function, and concatenate strings using `+` operator.
  - Integer: large numbers can be written using `_` as a thousands separator
  - Float:
  - Boolean

- We **cannot** concatenate strings with integers or floats in Python, we should convert them to strings first with the `str()` function.
- What we receive by the `input()` function is always a string, so we should convert it to the desired type.

2. Mathematical operators

- `+`, `-`, `*`, `/`, `**` (exponent), `%` (modulo), `//` (floor division)
- `//` returns the integer part of the division
- `/` returns the float part of the division
- percedence: `**` > `*` > `/` > `+` and `-`
- int() would truncate the float part of a number, while round() would round it to the nearest integer, we can also specify the number of decimal places to round to.

```python
print(round(8/3, 2)) # 2 decimal places
```

- we can also use format() function to format the output of a float number, it works like template literals in JavaScript.

  ```python
  # it will return a string
  final_amount = "{:.2f}".format(8/3); # 2.67
  ```

  - // is called floor division, it returns the integer part of the division, works like int() and / together.

  ```

  ```

- f-String: we can use f-strings to print out the value of a variable inside a string, we can also do some simple operations inside the curly braces. It works like template literals in JavaScript.
  ```python
  score = 0
  height = 1.8
  isWinning = True
  print(f"your score is {score}, your height is {height}, you are winning is {isWinning}")
  ```

### Control Flow

1. if-else
   In python, we use identation to indicate the scope of a block of code, we use `:` to indicate the start of a block of code. Indentation is important in python, which is really different from JavaScript and Java.

```python
if height > 120:
  print('You can ride the rollercoaster!')
else:
  print('Sorry, you have to grow taller before you can ride.')
```

2. Nested if-else
   `elif()` is the same as else if() in JavaScript.

```python
print("Welcome to the python pizza deliveries!")
size = input("What size pizza do you want? S, M, or L ")
add_pepperoni = input("Do you want pepperoni? Y or N")
extra_cheese = input("Do you want extra cheese? Y or N")
bill = 0
if size == 'L':
  bill += 25
elif size == 'M':
  bill += 20
else:
  bill += 15
if add_pepperoni == 'Y':
  if size=='S':
    bill += 2
  else:
    bill += 3
if extra_cheese == 'Y':
  bill += 1

print('Your bill is $' + str(bill) ' in total!')
```

3. Logical oprators
   we just use `and`, `or`, `not` in python

```python
if condition1 and condition2:
  # do something
elif condition1 or condition2:
  # do something
elif not condition1:
  # do something
```

4. lower() and upper()
   we can use `lower()` and `upper()` to convert a string to lower case or upper case.

5. count()
   we can use `count()` to count the number of a specific character in a string.

```python
'Angela'.lower().count('a') # 2
```

### Randomisation

python has a built-in random module, we can use it to generate random numbers, we can also use it to randomly pick an item from a list.

- random.randint(a, b): return a random integer N such that a <= N <= b

```py
## import the module
import random;
random_integer = random.randint(1, 10); # 1 <= random_integer <= 10
```

- random.random(): return a random float N such that 0 <= N < 1.0

```py
random_float = random.random(); # 0 <= random_float < 1.0
## floating point value from 0 to 5
random_float = random.random() * 5;

## random love score
love_score = random.randint(1, 100);
print(f"Your love score is {love_score}");

## random side of a coin
coin_side = random.randint(0, 1);
if coin_side == 0:
  print("Heads");
else:
  print("Tails");

```

### Lists

- In python, lists is wrapped within square brakets.
- Lists have order, we can access the items in a list using `[]` notation: `list[index]`
- We can use **negative** index to access the items in a list from the end of the list.

```py
fruits = ["Apple", "Peach", "Pear"]
print(fruits[0]) # Apple
print(fruits[-1]) # Pear
```

- append(): add an item to the end of a list

```py
fruits.append("Banana")
## we can also append with +=
fruits += "Banana"
```

- extend(): add all the elements of a list to the end of the current list, like concat() in JavaScript

```py
fruits.extend(["Banana", "Orange"])
```

- len() returns the length of a list

```py
names_string=input("Give me everybody's name, separated by comma: ")
names = names_string.split(', ')
rand_person = random.randint(0, len(names)-1)
print(f"{names[rand_person]} is gonna pay for the meal")
```

- choice(): randomly pick an item from a list

```py
names_string=input("Give me everybody's name, separated by comma: ")
names = names_string.split(', ')
rand_person = random.choice(names)
print(f"{rand_person} is gonna pay for the meal")
```

- shffule(): shuffle a list
- join(): join a list of strings into a string

```py
password = []
for lt in range(0, nr_letters):
  password += random.choice(letters)
for sb in range(0, nr_symbols):
  password += random.choice(symbols)
for nb in range(0, nr_numbers):
  password += random.choice(numbers)

print(password)
## shuffle the list: random.shuffle(list)
random.shuffle(password)
## Syntax for joining: delimiter.join(list)
print(''.join(password))
```

- nested lists

```py
fruits = ["Strawberries", "Nectarines", "Apples", "Grapes", "Peaches", "Cherries", "Pears"]
vegetables = ["Spinach", "Kale", "Tomatoes", "Celery", "Potatoes"]
dirty_dozen = [fruits, vegetables]
print(dirty_dozen[1][1]) # Kale
```

- the ''' notation is used to create a multi-line string

```py
print('''Day 1 - Python Print Function
The function is declared like this:
print('what to print')''')
```

### Loops

1. for loop

```py
fruits = ["Apple", "Peach", "Pear"]
for fruit in fruits:
  ## whenever we see a colon, there's a block created, and the variable is scoped to the block
  print(fruit + " Pie")
```

2. range()
   range() returns a sequence of numbers, starting from 0 by default, and increments by 1 by default, and stops before a specified number.

```py
for number in range(1, 11):
  print(number) ## 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

for number in range(1, 11, 3):
  print(number) ## 1, 4, 7, 10

```
