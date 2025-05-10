ages = [15, 15, 16, 16, 16, 16, 16, 16, 15, 17, 17, 17, 17, 19, 21, 21, 23, 25, 25, 26, 32]

average_age = sum(ages) / len(ages)

most_common_age = 0
for age in ages:
    if ages.count(age) > ages.count(most_common_age):
        most_common_age = age

print("Average age:", average_age)
print("Most common age:", most_common_age)
