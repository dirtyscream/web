] = root2
        elif rank[root1] > rank[root2]:
            parent[root2] = root1
        else:
            parent[root2] = root1
            rank[root1] += 1


# Чтение входных данных
n, m = map(int, input().split())
nodes = []