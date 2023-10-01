servers = int(input())
n_data = int(input())
p = servers
while n_data >= p:
    n_data = n_data - p
    if p > 1:
        p = p - 1
    else:
        p = servers
print(int(n_data))