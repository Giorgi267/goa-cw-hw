numbers = [12, 15, 23, 42, 56, 67, 88, 91, 34, 20]

for num in numbers[:]:
    if num % 2 == 0:
        numbers.remove(num)

print("List after removing even numbers:", numbers)
