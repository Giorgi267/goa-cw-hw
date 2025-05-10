names = ["John", "Tom", "Alice", "Tina", "Bob", "Tony", "Emma"]
new_names = []

for name in names:
    if not name.startswith("T"):
        new_names.append(name)

print("New list:", new_names)
