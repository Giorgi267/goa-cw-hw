#  შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ლუწია ეს რიცხვი თუ კენტი
numbers = int(input('enter any number: '))

def num(num1):
    if num1 % 2 == 0:
        return 'luwia'
    else:
        return 'kentia'

print(num(num1 = numbers))