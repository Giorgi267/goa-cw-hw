from random import randint
numb = randint(1,11)
count = 0
guess = int(input('guess the number: '))
while guess != numb:
    guess = int(input('wrong! enter again:'))
    count += 1
print('you guessed')