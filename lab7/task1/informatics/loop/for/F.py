n = int(input())
x = 0
 
while n > 0:
    digit = n % 10
    n = n // 10
    x = x * 10
    x = x + digit  
 
print(x)