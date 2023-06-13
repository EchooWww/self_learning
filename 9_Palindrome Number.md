## 9. Palindrome Number

Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?

> Thinking Process:
1. Palindrome => reversed = original;
2. If not convert int to string, we should use divide and mod to reverse an integer;
3. And compare the reversed integer to the original one to see if they equal

```Java

class Solution {
    public boolean isPalindrome(int x) {
        int reversed = 0;
        int original = x;
        //beware don't write as x/10 >= 0, might cause infinite loops
        while (x > 0) {
            reversed = reversed * 10 + x % 10;
            x = x /10;
        }
        if (reversed == original) return true;
        return false;
    }
}

```
🕙Time Complexity: O(N)
😄Runtime Beats: 99.25%