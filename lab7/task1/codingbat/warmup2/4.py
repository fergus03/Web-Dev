def front_times(str, n):
    front = 3
    if len(str) < front:
        front = len(str)
    f = str[:front]

    result = ""
    for i in range(n):
        result += f
    return result