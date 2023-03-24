def make_bricks(small, big, goal):
    x = min(big, goal // 5)
    if goal - (x * 5) <= small:
        return True
    return False