
# *
# **
# ***
# ****
# *****

def ascending_starts():
  a = '*'
  for i in range(1,6,1):
    print(i*a)

# ascending_starts()

# *****
# ****
# ***
# **
# *

def decending_starts():
  a = '*'
  for i in range(5,0,-1):
    print(i*a)

# decending_starts()


# 1
# 12
# 123
# 1234
# 12345


def ascending_numbers():
  a = []
  for i in range(1,6,1):
    a.append(str(i))
    print(''.join(a))

# ascending_numbers()


# 1
# 22
# 333
# 4444
# 55555


def ascending_repeated_numbers():
  for i in range(1,6,1):
    a = str(i)
    print(i*a)

# ascending_repeated_numbers()

