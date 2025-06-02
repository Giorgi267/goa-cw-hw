my_list = [10, -5, 20, -3, 30, -1, 0]

positive_sum = 0
negative_sum = 0

for num in my_list:
    if num > 0:
        positive_sum += num
    elif num < 0:
        negative_sum += num

print("დადებითი რიცხვების ჯამი:", positive_sum)
print("უარყოფითი რიცხვების ჯამი:", negative_sum)
