number = [4,2,1,4,9,6,7,8,1,1012    ]
print(number)    
for i in range(0,9):
    curr = number[i]
    print(i)
    if(number[i] > number[i+1] ):
        number[i] = number[i+1]
        number[i+1] = curr
print("มากสุด = {} น้อยสุด = {}".format(number[0],number[9]))