n, d, c = [int(x) for x in input().split()]
arr = [int(x) for x in input().split()]
arr_sort = sorted(arr)
min_min = arr_sort[0]
max_min = arr_sort[c-1]

res = []
if min_min - d < 0:
    counter = 0
    neg_set = False
    for x in arr:
        if x < max_min or x == max_min and counter < c:
            if x == min_min and not neg_set:
                res.append(x - d)
                neg_set = not neg_set
                counter += 1
            else:
                res.append(x + d)
                counter += 1
        else:
            res.append(x)
elif min_min - d == 0:
    zero_set = False
    for x in arr:
        if x == min_min and not zero_set:
            res.append(min_min - d)
            zero_set = not zero_set
        else:
            res.append(x)
else:
    counter = 0
    for x in arr:
        if x < max_min or x == max_min and counter < c:
            res.append(x - d)
            counter += 1
        else:
            res.append(x)
print(*res)
