# შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი ფუნქციამ უნდა დაგვიბრუნოს მისი საპირისპირო რიცხვი

nums = int(input('enter any number: '))

def num(num1):
    if num1 > 0:
        return -num1
    
print(num(num1=nums))