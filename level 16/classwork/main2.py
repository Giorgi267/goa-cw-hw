correct_password = 'giorga12'
count = 0
passw = input('enter password: ')
while passw != correct_password:
    count += 1
    if passw == correct_password:
        print('access granted')
        print(count)
    else:
        passw = input('enter password again: ')
        