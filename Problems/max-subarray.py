# def maxSubArray(nums):
#     a = []
#     for i in range(0,len(nums)-1):
#         if(nums[i] > 0 and (nums[i]+nums[i+1] > 0)):
#             a.append(nums[i])
#             for j in range(i+1,len(nums)-1):
#                 if(nums[j+1] > 0): a.append(j)
#                 else: a.pop()

#             print(a)




# s = [-2,1,-3,4,-1,2,1,-5,4]
# # s = [1,2,3,4,5]
# maxSubArray(s)



def maxSubArray(nums):
    maxSub = nums[0]
    curSum = 0

    for i in nums:
        if(curSum < 0):
            curSum = 0
        curSum += i
        maxSub = max(maxSub, curSum)
    
    print(maxSub)



s = [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(s)
