def sum2(nums):
    sum = 0
    if len(nums) > 1:
        sum = nums[0] + nums[1]
    else:
        for i in range(len(nums)):
            sum += nums[i]
    return sum
