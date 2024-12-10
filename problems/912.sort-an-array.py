from typing import List

class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if(len(nums) <= 1):
            return nums
        pivot_index: int = 0
        pivot_value = nums[pivot_index]
        left_arr = list()
        right_arr = list()
        for i in range(1, len(nums)):
            if nums[i] <= pivot_value:
                left_arr.append(nums[i])
            else:
                right_arr.append(nums[i])
        return [*self.sortArray(left_arr), pivot_value, *self.sortArray(right_arr)]
        

if __name__ == "__main__":
    nums = [5,1,1,2,0,0]
    solution = Solution()
    print(solution.sortArray(nums))
