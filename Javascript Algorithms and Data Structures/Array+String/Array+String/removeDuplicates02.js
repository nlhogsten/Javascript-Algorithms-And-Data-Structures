/*
- - - PROMPT - - -
REMOVE DUPLICATE ARRAY ITEMS #02
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. 
The relative order of the elements should be kept the same.
Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. 
It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. 
You must do this by modifying the input array in-place with O(1) extra memory.
*/

function removeDuplicates(nums) {
    if (nums.length <= 2) {
        return [nums.length, nums]; // Arrays 2 items long always auto return
    }
    let k = 2; // Number of elements allowed at most
    for (i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k-2]) { // Compare values 2 items apart
            nums[k] = nums[i];
            k++;
        }
    }
    return [k, nums.slice(0,k)]
}

// Space Complexity O(1), one contant k
// Time Complexity O(n), iterate through entire list once
console.log(removeDuplicates([1,1,1,2,2,3]))
// Output: (5, [1,1,2,2,3])
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
// Output: (7, [0,0,1,1,2,3,3])