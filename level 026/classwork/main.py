# პირველი სია სახელებით
list1 = ["Anna", "Ben", "Catherine", "Daniel", "Emily"]

# მეორე სია სახელებით
list2 = ["Frank", "Grace", "Henry", "Isla", "Jack"]

# სიების გაერთიანება
merged_list = list1 + list2

# 5 ინდექსზე ახალი სახელის ჩასმა
new_name = "Michael"
merged_list.insert(5, new_name)

# გაერთიანებული სიის სიგრძის გამოთვლა
list_length = len(merged_list)

# ჩემი სახელის რაოდენობის გამოთვლა და ინდექსის პოვნა
my_name = "Michael"
name_count = merged_list.count(my_name)
name_indices = [index for index, value in enumerate(merged_list) if value == my_name]

# შედეგის ბეჭდვა
print("Merged List:", merged_list)
print("Length of Merged List:", list_length)
print(f"The name '{my_name}' appears {name_count} time(s).")
print(f"The name '{my_name}' is found at indices: {name_indices}")
