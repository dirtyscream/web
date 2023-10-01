import heapq

# Функция для вычисления расстояния между двумя точками
def distance(point1, point2):
    x1, y1 = point1
    x2, y2 = point2
    return (x1 - x2) ** 2 + (y1 - y2) ** 2

# Функция для нахождения корня дерева
def find_root(parent, node):
    if parent[node] == node:
        return node
    return find_root(parent, parent[node])

# Функция для объединения двух деревьев
def union(parent, rank, node1, node2):
    root1 = find_root(parent, node1)
    root2 = find_root(parent, node2)
    if root1 != root2:
        if rank[root1] < rank[root2]:
            parent[root1] = root2
        elif rank[root1] > rank[root2]:
            parent[root2] = root1
        else:
            parent[root2] = root1
            rank[root1] += 1

# Чтение входных данных
n, m = map(int, input().split())
nodes = []
for _ in range(n):
    x, y = map(int, input().split())
    nodes.append((x, y))
for _ in range(m):
    x, y = map(int, input().split())
    nodes.append((x, y))

# Создаем список рёбер
edges = []
for i in range(n + m):
    for j in range(i + 1, n + m):
        edges.append((i, j, distance(nodes[i], nodes[j])))

# Сортируем рёбра по длине
edges.sort(key=lambda x: x[2])

# Инициализируем структуры данных для хранения родителей и рангов
parent = list(range(n + m))
rank = [0] * (n + m)

# Построение минимального остовного дерева
tree_edges = []
total_length = 0
for edge in edges:
    u, v, length = edge
    if find_root(parent, u) != find_root(parent, v):
        tree_edges.append(edge)
        total_length += length
        union(parent, rank, u, v)

# Вывод результатов
print(len(tree_edges), total_length)
for u, v, _ in tree_edges:
    if u < n and v < n:
        print(f"c {u + 1} c {v + 1}")
    elif u >= n and v >= n:
        print(f"s {u - n + 1} s {v - n + 1}")
    else:
        print(f"c {u + 1} s {v - n + 1}")
