numbers = [12, 15, 23, 42, 56, 67, 88, 91, 34, 20]
even_numbers = []

for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)

print("Even numbers:", even_numbers)
