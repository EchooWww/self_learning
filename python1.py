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

import random;
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

fruits = ['Apple', 'Peach', "Pear"]
for fruit in fruits:
  print(fruit + 'Pie')