result_add = 0
result_sub = 0
result_mul = 1
result_div = 1

for num in range(101):
    result_add += num
    result_sub -= num
    result_mul *= num if num != 0 else 1
    if num != 0:
        result_div /= num

print("Sum:", result_add)
print("Subtraction:", result_sub)
print("Multiplication:", result_mul)
print("Division:", result_div)
