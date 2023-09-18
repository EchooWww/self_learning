# """Our first Python source file."""
# from operator import floordiv, mod, mul

# def devide_exact(n,d):
#   return floordiv(n,d), mod(n,d)
# q,r = devide_exact(2013,10)
# # run with python3 python1.py
# # Will only diaplay the value of q and r with the print statement
# # Can run in interactive mode by typing python3 -i python1.py
# print('Quitent:',q,'Remainder:',r)

# def area(radius = 3):
#     return mul(radius, radius)

# area()
# area(3)

# print("Welcome to the python pizza deliveries!")
# size = input("What size pizza do you want? S, M, or L ")
# add_pepperoni = input("Do you want pepperoni? Y or N")
# extra_cheese = input("Do you want extra cheese? Y or N")
# bill = 0
# if size == 'L':
#   bill += 25
# elif size == 'M':
#   bill += 20
# else:
#   bill += 15
# if add_pepperoni == 'Y':
#   if size=='S':
#     bill += 2
#   else:
#     bill += 3
# if extra_cheese == 'Y':
#   bill += 1

# print('Your bill is $' + str(bill) + 'in total!')

# print("Welcome to love calculator!")
# name1 = input("What is your name?\n").lower()
# name2 = input("What is his/her name?\n").lower()
# firstDigit = name1.count('t') + name2.count('t') + name1.count('u') + name2.count('u') + name1.count('r') + name2.count('r') + name1.count('e') + name2.count('e')
# secondDigit = name1.count('l') + name1.count('o') + name1.count('v') + name1.count('e') +  name2.count('l') + name2.count('o') + name2.count('v') + name2.count('e')
# print('Your love score is ' + str(firstDigit) + str(secondDigit))

# import random;
# c = random.randint(100,200);
# print(c)
# random_float = random.random()*5;
# print(random_float)

# lovescore = random.randint(0,100)
# print(f'Your love score is {lovescore}')

# random_side = random.randint(0,1)
# if random_side == 0:
#   print('Tails')
# else:
#   print('Heads')

# states_of_america = ['Delaware','Pennsylvania','California']
# print(states_of_america[-1])

# names_string=input("Give me everybody's name, separated by comma: ")
# names = names_string.split(', ')
# rand_person = random.choice(names)
# print(f"{rand_person} is gonna pay for the meal")

# fruits = ['Apple', 'Peach', "Pear"]
# for fruit in fruits:
#   print(fruit + 'Pie')
# stages = ['''
#   +---+
#   |   |
#   O   |
#  /|\  |
#  / \  |
#       |
# =========
# ''', '''
#   +---+
#   |   |
#   O   |
#  /|\  |
#  /    |
#       |
# =========
# ''', '''
#   +---+
#   |   |
#   O   |
#  /|\  |
#       |
#       |
# =========
# ''', '''
#   +---+
#   |   |
#   O   |
#  /|   |
#       |
#       |
# =========''', '''
#   +---+
#   |   |
#   O   |
#   |   |
#       |
#       |
# =========
# ''', '''
#   +---+
#   |   |
#   O   |
#       |
#       |
#       |
# =========
# ''', '''
#   +---+
#   |   |
#       |
#       |
#       |
#       |
# =========
# ''']

# lives=6;
# end_of_game= False;
# word_list=['apple','pear','rabbit'];
# rand_word = random.choice(word_list);
# display=[]
# for letter in rand_word:
#   display.append('_');
# while not end_of_game:
#   guess = input("Please enter your guessed letter");
#   if not guess in rand_word:
#     lives-=1;
#   for i in range (len(display)):
#     if rand_word[i] == guess:
#       display[i] = guess;
#   print(display)
#   print(stages[lives])
#   if not '_' in display or lives == 0:
#     end_of_game = True;
#     if not '_' in display:
#       print("you win!")
#     else:
#       print('You lost')

# programming_dictionary = {
#   "Bug": "An error in a program that prevents the program from running as expected.", 
#   "Function": "A piece of code that you can easily call over and over again."
# }

# # Adding new items to dictionary
# programming_dictionary["Loop"]="The action of doing something over and over again"
# # print(programming_dictionary)

# # # Wipe an existing dictionary
# # programming_dictionary={}
# # print(programming_dictionary)
# programming_dictionary["Bug"]= "🐛"
# # print(programming_dictionary)
# for thing in programming_dictionary:
#   print(thing);
#   print(programming_dictionary[thing])

# student_scores = {
#   "Harry": 81,
#   "Ron": 78,
#   "Hermione": 99, 
#   "Draco": 74,
#   "Neville": 62,
# }
# # 🚨 Don't change the code above 👆

# #TODO-1: Create an empty dictionary called student_grades.

# student_grades = {}

# #TODO-2: Write your code below to add the grades to student_grades.👇
# for key in student_scores:
#     if student_scores[key] >= 91:
#         student_grades[key] = 'Outstanding'
#     elif student_scores[key] >= 81:
#         student_grades[key] = 'Exceeds expectations'
#     elif student_scores[key] >= 71:
#         student_grades[key] = 'Acceptable'
#     else:
#         student_grades[key] = 'Fail'

    

# # 🚨 Don't change the code below 👇
# print(student_grades)

# Nesting a list in dictionary 
# travel_log = {
#   "France":{
#     "Paris":3, 
#     "Lille":2, 
#     "Dijon":1
#     },
#   "Germany": {
#     "cities_visited":["Berlin", "Hamburg", "Stuttgart"],
#     "total_visits":3
#   }
# }

# print(travel_log["Germany"]["cities_visited"])

# travel_log=[
#   {
#     "country":"France", 
#     "city_visited":["Paris", "Lille", "Dijon"], 
#     "total_visits": 12,
#   }, 
#   {
#     "country":"Germany", 
#     "city_visited":["Paris", "Lille", "Dijon"], 
#     "total_visits": 12,
#   }
# ]
# print(travel_log[1]["country"])
# from replit import clear
# #HINT: You can call clear() to clear the output in the console.

# logo = '''
#                          ___________
#                          \         /
#                           )_______(
#                           |"""""""|_.-._,.---------.,_.-._
#                           |       | | |               | | ''-.
#                           |       |_| |_             _| |_..-'
#                           |_______| '-' `'---------'` '-'
#                           )"""""""(
#                          /_________\\
#                        .-------------.
#                       /_______________\\
# '''

# print(logo);

# bidders = {};

# while 1>0:
#   name = input("what is your name?: ")
#   bidders[name] = int(input("What's your bid?: $"))
#   proceed = input("Are there any other bidders? Type 'yes' or 'no': ")
#   if proceed in ['yes', 'Yes', "'yes'"]:
#     clear()
#   else:
#     break

# winner = ""
# maxValue = 0
# for name in bidders:
#   if bidders[name] > maxValue:
#     maxValue = bidders[name]
#     winner = name
# clear()
# print(f"The winner is {winner} with a bid of ${maxValue}.")

# def format_name(f_name, l_name):
#   return (f_name +" "+ l_name).title()

# print(format_name("echo", "wANG"))

# from art import logo


# def add(n1, n2):
#     return n1 + n2


# def subtract(n1, n2):
#     return n1 - n2


# def multiply(n1, n2):
#     return n1 * n2


# def divide(n1, n2):
#     return n1 / n2


# operations = {
#     "+": add,
#     "-": subtract,
#     "*": multiply,
#     "/": divide,
# }

# print(logo)



# def calculator():
#   num1 = float(input("What's the first number? :"))
#   stop = False;
#   while not stop:
#     num2 = float(input("What's the next number? :"))
    
#     for symbol in operations:
#         print(symbol)
#     operation_symbol = input("Pick an operation from the line above:")
    
#     answer = operations[operation_symbol](num1, num2)
    
#     print(f"{num1} {operation_symbol} {num2} = {answer}")
  
#     next = input(f"Type 'y' to continue calculating with {answer}, or type 'x' to start a new calculation: ")
#     if (next == 'x') :
#       stop = True
#       calculator()
#     else:
#       num1 = answer

# calculator()

# enemies = 1;
# def increase_enemies():
#   enemies = 2;
#   print(f"enemies inside function: {enemies}")
# increase_enemies()
# print(f"enemies outside function: {enemies}")


# import random

# EASY_CHANCES = 10
# HARD_CHANCES = 5

# def check_answer(guess, answer, chances):
#     if guess == answer:
#       print(f"Congratulations! You guessed the correct number {guess}!")
#       return chances
#     elif guess < answer:
#         print ("Too low.")
#     else: print ("Too high.")
#     return chances - 1

# def set_difficulty():
#   while True:
#       difficulty = input(
#           "Welcome to the Number Gueesing Game! \nI'm Thinking of a number between 1 and 100. \nChoose a difficulty. Type 'easy' or 'hard':  "
#       )
#       # instead of setting the global variable, we return the value of chances
#       if difficulty == "easy":
#           return EASY_CHANCES
#       elif difficulty == "hard":
#           return HARD_CHANCES
#       else:
#         print("Wrong input. Please choose again!")

# def game():
#   answer = random.randint(1,100)
#   chances = set_difficulty()
#   guess = 0
  
#   while guess != answer:
#     guess = int(input(f"You have {chances} attempts remaining to guess the number. \nMake a guess: "))
#     # instead of setting the global variable, we pass it as an argument, and return it
#     chances = check_answer(guess, answer, chances)
#     if chances == 0:
#       print("You ran out of guess. You lose :(")
#     elif guess != answer :
#       print("Guess again")

# game()
logo = """
    __  ___       __             
   / / / (_)___ _/ /_  ___  _____
  / /_/ / / __ `/ __ \/ _ \/ ___/
 / __  / / /_/ / / / /  __/ /    
/_/ ///_/\__, /_/ /_/\___/_/     
   / /  /____/_      _____  _____
  / /   / __ \ | /| / / _ \/ ___/
 / /___/ /_/ / |/ |/ /  __/ /    
/_____/\____/|__/|__/\___/_/     
"""

vs = """
 _    __    
| |  / /____
| | / / ___/
| |/ (__  ) 
|___/____(_)
"""
data = [
    {
        'name': 'Instagram',
        'follower_count': 346,
        'description': 'Social media platform',
        'country': 'United States'
    },
    {
        'name': 'Cristiano Ronaldo',
        'follower_count': 215,
        'description': 'Footballer',
        'country': 'Portugal'
    },
    {
        'name': 'Ariana Grande',
        'follower_count': 183,
        'description': 'Musician and actress',
        'country': 'United States'
    },
    {
        'name': 'Dwayne Johnson',
        'follower_count': 181,
        'description': 'Actor and professional wrestler',
        'country': 'United States'
    },
    {
        'name': 'Selena Gomez',
        'follower_count': 174,
        'description': 'Musician and actress',
        'country': 'United States'
    },
    {
        'name': 'Kylie Jenner',
        'follower_count': 172,
        'description': 'Reality TV personality and businesswoman and Self-Made Billionaire',
        'country': 'United States'
    },
    {
        'name': 'Kim Kardashian',
        'follower_count': 167,
        'description': 'Reality TV personality and businesswoman',
        'country': 'United States'
    },
    {
        'name': 'Lionel Messi',
        'follower_count': 149,
        'description': 'Footballer',
        'country': 'Argentina'
    },
    {
        'name': 'Beyoncé',
        'follower_count': 145,
        'description': 'Musician',
        'country': 'United States'
    },
    {
        'name': 'Neymar',
        'follower_count': 138,
        'description': 'Footballer',
        'country': 'Brasil'
    },
    {
        'name': 'National Geographic',
        'follower_count': 135,
        'description': 'Magazine',
        'country': 'United States'
    },
    {
        'name': 'Justin Bieber',
        'follower_count': 133,
        'description': 'Musician',
        'country': 'Canada'
    },
    {
        'name': 'Taylor Swift',
        'follower_count': 131,
        'description': 'Musician',
        'country': 'United States'
    },
    {
        'name': 'Kendall Jenner',
        'follower_count': 127,
        'description': 'Reality TV personality and Model',
        'country': 'United States'
    },
    {
        'name': 'Jennifer Lopez',
        'follower_count': 119,
        'description': 'Musician and actress',
        'country': 'United States'
    },
    {
        'name': 'Nicki Minaj',
        'follower_count': 113,
        'description': 'Musician',
        'country': 'Trinidad and Tobago'
    },
    {
        'name': 'Nike',
        'follower_count': 109,
        'description': 'Sportswear multinational',
        'country': 'United States'
    },
    {
        'name': 'Khloé Kardashian',
        'follower_count': 108,
        'description': 'Reality TV personality and businesswoman',
        'country': 'United States'
    },
    {
        'name': 'Miley Cyrus',
        'follower_count': 107,
        'description': 'Musician and actress',
        'country': 'United States'
    },
    {
        'name': 'Katy Perry',
        'follower_count': 94,
        'description': 'Musician',
        'country': 'United States'
    },
    {
        'name': 'Kourtney Kardashian',
        'follower_count': 90,
        'description': 'Reality TV personality',
        'country': 'United States'
    },
    {
        'name': 'Kevin Hart',
        'follower_count': 89,
        'description': 'Comedian and actor',
        'country': 'United States'
    },
    {
        'name': 'Ellen DeGeneres',
        'follower_count': 87,
        'description': 'Comedian',
        'country': 'United States'
    },
    {
        'name': 'Real Madrid CF',
        'follower_count': 86,
        'description': 'Football club',
        'country': 'Spain'
    },
    {
        'name': 'FC Barcelona',
        'follower_count': 85,
        'description': 'Football club',
        'country': 'Spain'
    },
    {
        'name': 'Rihanna',
        'follower_count': 81,
        'description': 'Musician and businesswoman',
        'country': 'Barbados'
    },
    {
        'name': 'Demi Lovato',
        'follower_count': 80,
        'description': 'Musician and actress',
        'country': 'United States'
    },
    {
        'name': "Victoria's Secret",
        'follower_count': 69,
        'description': 'Lingerie brand',
        'country': 'United States'
    },
    {
        'name': 'Zendaya',
        'follower_count': 68,
        'description': 'Actress and musician',
        'country': 'United States'
    },
    {
        'name': 'Shakira',
        'follower_count': 66,
        'description': 'Musician',
        'country': 'Colombia'
    },
    {
        'name': 'Drake',
        'follower_count': 65,
        'description': 'Musician',
        'country': 'Canada'
    },
    {
        'name': 'Chris Brown',
        'follower_count': 64,
        'description': 'Musician',
        'country': 'United States'
    },
    {
        'name': 'LeBron James',
        'follower_count': 63,
        'description': 'Basketball player',
        'country': 'United States'
    },
    {
        'name': 'Vin Diesel',
        'follower_count': 62,
        'description': 'Actor',
        'country': 'United States'
    },
    {
        'name': 'Cardi B',
        'follower_count': 67,
        'description': 'Musician',
        'country': 'United States'
    },
    {
        'name': 'David Beckham',
        'follower_count': 82,
        'description': 'Footballer',
        'country': 'United Kingdom'
    },
    {
        'name': 'Billie Eilish',
        'follower_count': 61,
        'description': 'Musician',
        'country': 'United States'
    },
    {
        'name': 'Justin Timberlake',
        'follower_count': 59,
        'description': 'Musician and actor',
        'country': 'United States'
    },
    {
        'name': 'UEFA Champions League',
        'follower_count': 58,
        'description': 'Club football competition',
        'country': 'Europe'
    },
    {
        'name': 'NASA',
        'follower_count': 56,
        'description': 'Space agency',
        'country': 'United States'
    },
    {
        'name': 'Emma Watson',
        'follower_count': 56,
        'description': 'Actress',
        'country': 'United Kingdom'
    },
    {
        'name': 'Shawn Mendes',
        'follower_count': 57,
        'description': 'Musician',
        'country': 'Canada'
    },
    {
        'name': 'Virat Kohli',
        'follower_count': 55,
        'description': 'Cricketer',
        'country': 'India'
    },
    {
        'name': 'Gigi Hadid',
        'follower_count': 54,
        'description': 'Model',
        'country': 'United States'
    },
    {
        'name': 'Priyanka Chopra Jonas',
        'follower_count': 53,
        'description': 'Actress and musician',
        'country': 'India'
    },
    {
        'name': '9GAG',
        'follower_count': 52,
        'description': 'Social media platform',
        'country': 'China'
    },
    {
        'name': 'Ronaldinho',
        'follower_count': 51,
        'description': 'Footballer',
        'country': 'Brasil'
    },
    {
        'name': 'Maluma',
        'follower_count': 50,
        'description': 'Musician',
        'country': 'Colombia'
    },
    {
        'name': 'Camila Cabello',
        'follower_count': 49,
        'description': 'Musician',
        'country': 'Cuba'
    },
    {
        'name': 'NBA',
        'follower_count': 47,
        'description': 'Club Basketball Competition',
        'country': 'United States'
    }
]

import random
import os


def makeGuess(celeb_A, celeb_B):
  print(
    f"Compare A: {celeb_A['name']}, a {celeb_A['description']}, from {celeb_A['country']} "
  )
  print(vs)
  print(
    f"Against B: {celeb_B['name']}, a {celeb_B['description']}, from {celeb_B['country']} "
  )
  guess = input("Who has more followers? Type 'A' or 'B': ")
  if guess == 'A':
    return celeb_A
  else:
    return celeb_B


def findB(celeb_A):
  no_B = random.randint(0, len(data) - 1)
  while data[no_B] == celeb_A:
    no_B = random.randint(0, len(data) - 1)
  return data[no_B]


def game():
  print(logo)
  score = 0
  no_A = random.randint(0, len(data) - 1)
  celeb_A = data[no_A]
  celeb_B = findB(celeb_A)
  answer = celeb_A if celeb_A['follower_count'] > celeb_B[
    'follower_count'] else celeb_B

  gameOver = False
  while not gameOver:
    guess = makeGuess(celeb_A, celeb_B)
    os.system("clear")

    if guess == answer:
      score += 1
      celeb_A = answer
      celeb_B = findB(celeb_A)
      print(logo)
      print(f"You're right! Current score: {score}")
    else:
      print(logo)
      print(f"Sorry, that's wrong. Final score: {score}")
      gameOver = True


game()