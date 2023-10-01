n, k = map(int, input().split())
password = input()

# Создаем словарь для подсчета количества каждого символа в пароле
char_count = {}
for char in password:
    if char in char_count:
        char_count[char] += 1
    else:
        char_count[char] = 1

# Сортируем символы по количеству вхождений в порядке убывания
sorted_chars = sorted(char_count.items(), key=lambda x: x[1])

# Удаляем k символов из пароля
remaining_chars = len(sorted_chars)
for char, count in sorted_chars:
    if k >= count:
        k -= count
        remaining_chars -= 1
    else:
        break

print(remaining_chars)
