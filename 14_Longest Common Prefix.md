## 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

> Thinking process
1. Sort the array
2. Compare the first and the last element to find the common prefix, which would be the common prefix of the whole array (一个最大公约数的概念)

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        Arrays.sort(strs);
        String first = strs[0];
        String last = strs[strs.length-1];
        int lastIndex = 0;
        while (lastIndex < first.length() && lastIndex < last.length()) {
            if (first.charAt(lastIndex) == last.charAt(lastIndex)) lastIndex++;
            else break;
        }
        return first.substring(0, lastIndex);
    }
}
```
🕙Time Complexity: O(NlogN) + O(M); // Sorting + loop
😄Runtime Beats: 79.69%
