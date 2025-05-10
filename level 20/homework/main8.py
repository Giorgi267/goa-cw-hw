my_list = [10, 15, 20, 25, 30, 35, 40]

even_sum = 0
odd_sum = 0

for num in my_list:
    if num % 2 == 0:
        even_sum += num
    else:
        odd_sum += num

print("ლუწი რიცხვების ჯამი:", even_sum)
print("კენტი რიცხვების ჯამი:", odd_sum)
