var twoSum = function(nums, target) {
  for(let i=0; i<nums.length;i++) {
      for(let j=0; j<nums.length; j++) {
          if(i === j) {
              console.log(i,j)
              continue
          }else if((nums[i] + nums[j]) === target){
            console.log([i,j])
            return [i,j]
          }
      }
  }
};


var nums = [3,2,3]
var target = 6 

var ans = twoSum(nums,target)
console.log(ans)