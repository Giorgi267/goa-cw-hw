from turtle import *

speed(30)
width(7)

penup()
goto(-200, -50)
pendown()

forward(400)
left(90)

forward(200)
left(90)

forward(400)
left(90)

forward(200)
left(90)

penup()
goto(-30,-50)
pendown()
color('brown')

left(90)
forward(90)

right(90)
forward(60)

right(90)
forward(90)

penup()
goto(20,0)
pendown()
color('black')

begin_fill()
circle(20,0)
end_fill()

penup()
goto(200,150)
pendown()

color('purple')

begin_fill()
left(215)
forward(150)

left(110)
forward(150)
end_fill()

penup()
goto(-200,150)
pendown()
color('pink')

begin_fill()
right(175)
forward(150)

left(250)
forward(170)
end_fill()

penup()
goto(-150,100)
pendown()
color('yellow')

left(50)

begin_fill()
forward(75)
right(90)
forward(75)
right(90)
forward(75)
right(90)
forward(75)
right(90)
end_fill()

penup()
goto(150,100)
pendown()

begin_fill()

right(90)

forward(75)
right(90)
forward(75)
right(90)
forward(75)
right(90)
forward(75)
right(90)
forward(75)
right(90)

end_fill()









exitonclick()