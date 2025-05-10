#  მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ კი შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ ორ რიცხვს ხოლო ფუნქცია დააბრუნებს ამ ორი რიცხვის ჯამს, ასევე გააკეთე ასეთი 4 ფუნქცია სხვადასხვა მათემატიკური მოქმედებებისთვის, გამოიყენეთ პარამეტრები და არგუმენტად გადაეცით მომხარებლის შემოტანილი რიცხვები


num1 = int(input('enter first number: '))
num2 = int(input('enter second number: '))

def plus(num1, num2):
    return num1 + num2

def min(num1, num2):
    return num1 - num2

def multyply(num1, num2):
    return num1 * num2

def division(num1, num2):
    return num1 / num2

print(plus(num1, num2))
print(min(num1, num2))
print(multyply(num1, num2))
print(division(num1, num2))
