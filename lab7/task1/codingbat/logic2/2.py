def fix_teen(n):
    if n not in (15, 16) and n >= 13 and n <= 19:
        return 0
    return n
def no_teen_sum(a, b, c):
    return fix_teen(a) + fix_teen(b) + fix_teen(c)