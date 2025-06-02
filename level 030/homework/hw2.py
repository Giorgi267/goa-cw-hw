# შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვებით სავსე სია ამ ფუნქციამ კი უნდა დააბრუნოს ამ სიის რიცხვების ჯამი

def lists():
    nums = [1,2,3,4,5,6,7,8,9,10]
    total = 0
    
    for i in range(len(nums)):
        total += nums[i]
    return total

print(lists())