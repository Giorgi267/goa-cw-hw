# შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ეს რიცხვი დადებითია თუ უარყოფითი

nums = int(input('enter any number: '))

def num(num1):
    if num1 > 0:
        return 'dadebitia'
    else:
        return 'uaryofitia'

print(num(num1=nums))