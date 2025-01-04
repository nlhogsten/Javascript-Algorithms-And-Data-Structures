/*
- - - PROMPT - - -
REMOVE DUPLICATE ARRAY ITEMS #01
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

function removeDuplicates(nums) {
    let k = 1; // First element is always unique
    if (nums.length === 0) {
        return 0; // If list is empty
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) { // Compare array items next to each other
            nums[k] = nums[i];
            k++;
        }
    }
    return [k, nums.slice(0, k)];
}

// Space Complexity O(1), one contant k
// Time Complexity O(n), iterate through entire list once
console.log(removeDuplicates([1,1,2]))
// Output: (2, [1, 2])
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
// Output: (5, [0, 1, 2, 3, 4])