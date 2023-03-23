def array_front9(nums):
    x = len(nums)
    if x > 4:
        x = 4
    for i in range(x):
        if nums[i] == 9:
            return True
    return False
        