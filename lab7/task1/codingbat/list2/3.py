def big_diff(nums):
    minn = nums[0]
    maxx = nums[0]

    for i in range(1, len(nums)):
        minn = min(minn, nums[i])
        maxx = max(maxx, nums[i])
    return maxx - minn