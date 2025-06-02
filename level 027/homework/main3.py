num1 = int(input())
num2 = int(input())
total_sum = 0
total_product = 1

for i in range(num1, num2 + 1):
    total_sum += i
    total_product *= i

print(total_sum)
print(total_product)
