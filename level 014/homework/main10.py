# მომხმარებლისგან რიცხვების მიღება
num1 = int(input("enter first number: "))
num2 = int(input("enter second name: "))
num3 = int(input("enter third name: "))

# range() ფუნქციის შექმნა
for i in range(num1, num2, num3):
    # გამოთვლის და დაბეჭდავს რიცხვის კვადრატს
    print(i**2)  