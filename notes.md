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

3. while loop

```py
while something_is_true:
  # do something
```

### Functions

```py
def my_function():
  # do something
  # do something
  # do something
  return something
my_function()
```

### Indentation in Python

- When defining a function, we should indent the code inside the function body, and when calling a function, we should not indent the code.
- If we have conditional statements inside a function, we should further indent the code inside the conditional statements.
- Tab or spaces? It's recommended to use 4 spaces for indentation in Python.

### Global and Local Scope in Python

If we define a variable outside a function, it's a global variable, and we can access it inside the function by using the `global` keyword. If we define a variable inside a function, it's a local variable, and we cannot access it outside the function.

```py
enemies = 1
def increase_enemies():
  global enemies
  enemies += 1
  print(f"enemies inside function: {enemies}")
```

### Dictionary

- The syntax for a dictionary is `{key: value}`, we can use `[]` notation to retrieve the value of a key.

```py
programming_dictionary = {
  "Bug": "An error in a program that prevents the program from running as expected.", "Function": "A piece of code that you can easily call over and over again.",
  "Function": "A piece of code that you can easily call over and over again.",
}

# get the value of a key
print(programming_dictionary["Function"])

```

- Play with dictionaries

```py
programming_dictionary["Loop"] = "The action of doing something over and over again." # The dictionary now has 3 entries

# create an empty dictionary
empty_dictionary = {}
# wipe an existing dictionary
programming_dictionary = {}
# edit an item in a dictionary
programming_dictionary["Bug"] = "A moth in your computer."

```

- Loop through a dictionary: if we use `for thing in dictionary`, we will only get the keys of the dictionary. If we wanna also get the values, we can use `for key in dictionary: print(dictionary[key])`

```py
for key in programming_dictionary:
  print(key) # Bug, Function, Loop
  print(programming_dictionary[key])
```

### Nesting Lists and Dictionaries

Nesting is like putting a folder inside another. We can nest a list inside a dictionary, a dictionary inside a list, a dictionary inside a dictionary, and a list inside a list, like `{key1: [list], key2: {dictionary}}
`

```py
# Nest lists and dictionaries within a dictionary
travel_log = {
  "France":{
    "Paris":3,
    "Lille":2,
    "Dijon":1
    },
  "Germany": {
    "cities_visited":["Berlin", "Hamburg", "Stuttgart"],
    "total_visits":3
  }
}

print(travel_log["Germany"]["cities_visited"])

# Nesting a dictionary inside a list
travel_log=[
  {
    "country":"France",
    "city_visited":["Paris", "Lille", "Dijon"],
    "total_visits": 12,
  },
  {
    "country":"Germany",
    "city_visited":["Paris", "Lille", "Dijon"],
    "total_visits": 12,
  }
]
print(travel_log[1]["country"]) # Germany
```

### docstrings

We can use docstrings to document our functions, it's a good practice to do so. Docstrings can contain multiple lines of text, and they are enclosed in triple quotes.

```py
def add(n1, n2):
  """This is a docstring"""
  return n1 + n2
```

### Scope

### Modify Global Variables (not recommended)

- Unlike other programming languages, Python does not have block scope, it only has global scope and local scope. All the if statements, for loops, while loops, do not create a new scope in Python.
- Unike Java, when we try to reassign a global variable inside a function directly, we will create a new local variable instead of reassigning the global variable.

```py
enemies = 1 # global variable
def increase_enemies():
  enemies = 2 # local variable, the global variable is still 1
  print(f"enemies inside function: {enemies}")
increase_enemies()
```

- To modify a global variable inside a function, we should use the `global` keyword.

```py
enemies = 1 # global variable
def increase_enemies():
  global enemies
  enemies = 2 # local variable, the global variable is still 1
  print(f"enemies inside function: {enemies}")
increase_enemies()
```

- But that can be dangerous, we should avoid modifying global variables as much as possible. If we want that value, we can simple return it from the function.

```py
enemies = 1 # global variable
def increase_enemies():
  return enemies + 1
enemies = increase_enemies()
```

#### Global Constants

- The naming convention for global constants is to use all capital letters, and use `_` to separate words.

```py
PI = 3.14159
TWITTER_HANDLE = "@yuanyu90221"
```

#### Practice with Functions

```py
import random

EASY_CHANCES = 10
HARD_CHANCES = 5

def check_answer(guess, answer, chances):
    if guess == answer:
      print(f"Congratulations! You guessed the correct number {guess}!")
      return chances
    elif guess < answer:
        print ("Too low.")
    else: print ("Too high.")
    return chances - 1

def set_difficulty():
  while True:
      difficulty = input(
          "Welcome to the Number Gueesing Game! \nI'm Thinking of a number between 1 and 100. \nChoose a difficulty. Type 'easy' or 'hard':  "
      )
      # instead of setting the global variable, we return the value of chances
      if difficulty == "easy":
          return EASY_CHANCES
      elif difficulty == "hard":
          return HARD_CHANCES
      else:
        print("Wrong input. Please choose again!")

def game():
  answer = random.randint(1,100)
  chances = set_difficulty()
  guess = 0

  while guess != answer:
    guess = int(input(f"You have {chances} attempts remaining to guess the number. \nMake a guess: "))
    # instead of setting the global variable, we pass it as an argument, and return it
    chances = check_answer(guess, answer, chances)
    if chances == 0:
      print("You ran out of guess. You lose :(")
    elif guess != answer :
      print("Guess again")

game()
```
