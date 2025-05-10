
#turtle import

from turtle import *
speed(30)
width(7)
color('purple')

#for home

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#for door

forward(70)
color('yellow')
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

#for the roof

penup()
goto(200, 200)
pendown()


color('red')
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(170,170)
pendown()

#for the first window

color('brown')
begin_fill()
right(60)
forward(35)
left(90)
forward(35)
left(90)
forward(35)
left(90)
forward(35)
end_fill()

#for the second window

penup()
goto(70,170)
pendown()
begin_fill()
left(90)
forward(35)
left(90)
forward(35)
left(90)
forward(35)
left(90)
forward(35)
end_fill()


#this is bcause our writing has not disappeared
exitonclick()