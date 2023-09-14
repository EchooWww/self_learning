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