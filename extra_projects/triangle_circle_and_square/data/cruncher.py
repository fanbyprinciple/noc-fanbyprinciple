import os

(_,_,filenames) = next(os.walk("./"))

circles = []
squares = []
triangles = []

for i in filenames:
    if(i[0] == 'c'):
        circles.append(i)
    elif(i[0] == 's'):
        squares.append(i)
    elif(i[0] == 't'):
        triangles.append(i)

circles.remove('cruncher.py')

print(circles)
print(squares)
print(triangles)

def rename_file(prename, name_array):
    for i, element in enumerate(name_array):
        os.rename(element, prename+str(i)+".png")

rename_file("circle", circles)
rename_file("square", squares)
rename_file("triangle", triangles)