names = ["Ana", "Gio", "Nino", "Ana", "Lasha", "Ana", "Mari", "Ana"]
my_name = "Gio"

count = 0
for name in names:
    if name == my_name:
        count += 1

print("Your name appears", count, "times in the list.")
