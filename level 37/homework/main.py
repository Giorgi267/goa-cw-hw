# გააკეთეთ random student generator რომელსაც გადაეცემა ჯგუფის მოსწავლეებით სავსე სია და დაგვიბრუნებს რენდომულად განაწილებულ გუნდებს მზგავსად როგორც გავაკეთეთ წინა გაკვეთილზე

import random

lists = ['gio', 'nika', 'giorgi', 'ana', 'sofia', 'giorgi gloveli', 'aleko', 'goga', 'gabrieli']
new_list = []

while lists:
    rand = random.choice(lists)
    new_list.append(rand)
    lists.remove(rand)

grouped_teams = []
while new_list:
    group = new_list[:3]
    grouped_teams.append(group)
    new_list = new_list[3:]


i = 1
for team in grouped_teams:
    team_members = ""
    for member in team:
        if team_members:
            team_members += ", "
        team_members += member
    print("Group", i, ":", team_members)
    i += 1


#სტილის შვილობილი ელემენტი