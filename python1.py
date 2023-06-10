"""Our first Python source file."""
from operator import floordiv, mod, mul

def devide_exact(n,d):
  return floordiv(n,d), mod(n,d)
q,r = devide_exact(2013,10)
# run with python3 python1.py
# Will only diaplay the value of q and r with the print statement
# Can run in interactive mode by typing python3 -i python1.py
print('Quitent:',q,'Remainder:',r)

def area(radius = 3):
    return mul(radius, radius)

area()
area(3)