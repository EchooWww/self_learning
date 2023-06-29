# Framework Thinking in Solving Algorithm Problems

## Basics

### Storage methods

底层的存储方式只有两种： Array (sequential storage) and linked list (linked storage)

Queue and stack can be implemented with both array and linked list, but need to deal with specific cases:

- Array
  - Continuous in memory, random access, quick access O(1)
  - Time complexity of resize, insertion and deletion: O(N)
  - Save memory
- Linked list
  - Time complexity of insertion/ deletion: O(1), no need to worry about resizing
  - No random access, need to iterate to access
  - Consumes more memory to store the pointers to next node

### Basic Manipulation :CURD/ Traverse + Access

- Ways to traverse: iteration(array), recursion(linked list, trees)

### Tips

- 虽然字符串⽀持⽤†+ 进⾏拼接，但是效率并不⾼，并不建议在†for 循环中使⽤。如果需要进⾏频繁的字符串拼接，推荐使⽤ StringBuilder

```java
StringBuilder sb = new StringBuilder();
for (char c = 'a'; c <= 'f'; c++) {
  sb.append(c);
}
// append ⽅法⽀持拼接字符、字符串、数字等类型
sb.append('g').append("hij").append(123);
```

- When comparing wrapper classes, use equals() instead of == (need to be aware when doing comparison in most data structures)

### Interfaces - Classes of Data Structures in Java

- Collection (extended by other interfaces in the following)
  - List
    - ArrayList: Implements a resizable array.
    - LinkedList: Implements a doubly linked list.
  - Set
    - HashSet: Implements a set using a hash table.
    - TreeSet: Implements a set using a self-balancing binary search tree.
  - Queue
    - LinkedList: Implements a queue using a linked list.
    - ArrayDeque: Implements a double-ended queue using an array.
  - Deque
    - ArrayDeque: Implements a double-ended queue using an array.
  - Map
    - HashMap: Implements a map using a hash table.
    - TreeMap: Implements a map using a self-balancing binary search tree.

```java
//Normal declaration syntax
List <Integer> nums = new ArrayList<>();
// use the class name after new keyword, but declare with the name of interface
```

# Linked List

# Arrays

## Tricks in 2d-array problems

### Rotate 90 degrees

Intuition: rotate 90 degrees means elements in the same row will be in the same column in the new array, and the order will be reversed.

- So our first step: reverse the 2d-array symmetrically
- Second step: reverse the elements in each row

The time complexity is O(n^2), space complexity is O(1)

> [Leetcode 48. Rotate Image (Medium)](https://leetcode.com/problems/rotate-image/)
> Solve the problem in place, that is, without using extra space.

- Pay attention to the index of the matrix, and the boundary of the matrix. If we swap all the indices, we will get the original matrix.

```java
class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        for(int i = 0; i < n; i++) {
          // j = i, because we only need to swap the upper triangle of the matrix
            for (int j = i; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
        for(int p = 0;  p < n; p++) {
          // k < n/2, because we only need to swap the left half of the matrix
            for (int k = 0;  k < n/2; k++) {
                int temp = matrix[p][k];
                matrix[p][k] = matrix[p][matrix.length - 1 - k];
                matrix[p][matrix.length - 1 - k] = temp;
            }
        }
    }
}
```

### Rotate 180 degrees

- First step: reverse the elements in each row
- Second step: reverse the elements in each column

## Spiral Matrix Problems

- Spiral matrix means the elements are arranged in a spiral order, like the following. We need to find a proper way to traverse the matrix.

- We do it by dynamically changing the boundaries of the matrix, and use four variables to represent the boundaries: left, right, top, bottom.

```
1 2 3
8 9 4
7 6 5
```

> [Leetcode 54. Spiral Matrix (Medium)](https://leetcode.com/problems/spiral-matrix/)

```java
public List<Integer> spiralOrder(int[][] matrix) {
  int m = matrix.length, n = matrix[0].length;
  int top = 0, left = 0, bottom = m - 1, right = n - 1;
  List<Integer> res = new ArrayList<>();
  // if not all the elements are added to the list, continue the loop to traverse elements from top to bottom, right to left, bottom to top, left to right...
  while (res.size() < m * n) {
      // traverse the top row
      if (top<=bottom) {
          for(int i = left; i <= right; i++) {
              res.add(matrix[top][i]);
          }
          top++;
      }
      // traverse the right column
      if (left<=right) {
          for(int j = top; j <= bottom; j++) {
              res.add(matrix[j][right]);
          }
          right--;
      }
      // traverse the bottom row
      if (top<=bottom) {
          for(int p = right; p >=left; p--) {
              res.add(matrix[bottom][p]);
          }
          bottom--;
      }
      // traverse the left column
      if (left<=right) {
          for(int k = bottom; k >= top; k--) {
              res.add(matrix[k][left]);
          }
          left++;
      }
  }
  return res;
}
```

## Sliding Window Problems

A special case of 2 pointers. We have right and left pointers. First we use the right pointer to expand the window, and then use the left pointer to shrink the window. We need to find the maximum/ minimum/ average/ sum of the elements in the window.

### Framework of sliding window problems

- Time complexity: O(n)
- If all possible values are lower/ upper bounded, we can use an array of size 26 to represent the window, and use a counter to represent the number of elements in the window, which would be more efficient than using a hashmap.

```java

/* 滑动窗口算法框架 */
void slidingWindow(String s) {
    // 用合适的数据结构记录窗口中的数据
    HashMap<Character, Integer> window = new HashMap<>();

    int left = 0, right = 0;
    while (right < s.length()) {
        // c 是将移入窗口的字符
        char c = s.charAt(right);
        window.put(c, window.getOrDefault(c, 0) + 1);
        // 增大窗口
        right++;
        // 进行窗口内数据的一系列更新
        // 判断左侧窗口是否要收缩, 条件可能根据具体情况有所不同
        while (left < right && window needs shrink) {
            // d 是将移出窗口的字符
            // Before shrinking the window, we need to update the result if necessary
            char d = s.charAt(left);
            window.put(d, window.get(d) - 1);
            // 缩小窗口
            left++;
            // 进行窗口内数据的一系列更新
            ...
        }
    }
}
```

### Problems

> [Leetcode 76. Minimum Window Substring (Hard)](https://leetcode.com/problems/minimum-window-substring/)

```java
class Solution {
    public String minWindow(String s, String t) {
       // Since s and t can be in lower and upper case, and the frequencies can be more than 1,we need to use an hashmap to store the characters and their frequencies
        Map<Character, Integer> window = new HashMap<>();
        Map<Character, Integer> need = new HashMap<>();
        for(char c: t.toCharArray()) {
            need.put(c, need.getOrDefault(c, 0) + 1);
        }
        int left = 0, right = 0, start = 0, valid = 0;
        // As we need to find the minimum, we initialize the length of the window to be the maximum value
        int len = Integer.MAX_VALUE;
        while (right < s.length()) {
            char d = s.charAt(right);
            right ++;
            if(need.containsKey(d)) {
                window.put(d, window.getOrDefault(d, 0) + 1);
                // Increment the number of valid characters in the window if the frequency in the window is equal to the frequency in the target string
                if (need.get(d).equals(window.get(d))) valid++;
            }
            while (valid == need.size()){
                // Update the result if necessary
                if (right - left < len) {
                    start = left;
                    len = right - left;
                }
                char e = s.charAt(left);
                left ++;
                if(need.containsKey(e)) {
                    if(need.get(e).equals(window.get(e))) valid--;
                    window.put(e, window.get(e) - 1);
                }
            }
        }
        // If the length of the window is still the maximum value, it means that there is no such window, so return an empty string
        // The 'right' pointer has already been incremented, so we exclude it from the substring we return
        return len == Integer.MAX_VALUE? "": s.substring(start, start + len);

    }
}
```

> [Leetcode 567. Permutation in String (Medium)](https://leetcode.com/problems/permutation-in-string/)

- Another example of sliding window problem: the window length is fixed, and we need to find if at least one window is valid.
- Pay attention to the shrinking condition: when the length of the window is equal to the length of the target string, we need to shrink the window.

```java
class Solution {
    public boolean checkInclusion(String s1, String s2) {
        // Initialize 2 int arrays to store frequencies of characters in our target and our window
        int[] need = new int[26], window = new int[26];
        // Our target int array
        for(char c:s1.toCharArray()) need[c-'a']++;
        int left = 0, right = 0;
        // Check our window until the end of the array
        while(right < s2.length()) {
            char d = s2.charAt(right);
            right++;
            // If the character exists in our target, increase the corresponding element in our window
            if(need[d-'a']!=0) window[d-'a']++;
            // When the length of window equals our target string
            if(right - left == s1.length()) {
                // Check if the frequencies of chars in target and our window are equal
                if (areArraysEqual(need,window)) return true;
                // Shrink our window and update the frequencies in our window array
                char e = s2.charAt(left);
                left++;
                // If the char to be excluded is in our target, decrease the frequency
                if(need[e-'a']!=0) window[e-'a']--;
            }
        }
        return false;
    }
    // Helper method to judge if 2 int arrays are equal
    public boolean areArraysEqual(int[] arr1, int[] arr2) {
        for (int i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            }
        }
    return true;
    }
}
```

> [Leetcode 438. Find All Anagrams in a String (Medium)](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

- As we want all chars in the window to be unique, we don't need to store the frequencies of chars in the window. Instead, we can use a set to store the chars in the window.
- If there's a duplicate char, it must be the one that we just added to the window. So we can shrink the window until the duplicate char is removed.
- We update the length of the window when we add a new unique char to the window, and we want the maximum length of the window.

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> window = new HashSet<>();
        int left = 0, right = 0, res = 0;
        while(right < s.length()) {
            char c = s.charAt(right);
            if(!window.contains(c)) {
                window.add(c);
                right++;
                res = Math.max(res, right - left);
            } else {
                window.remove(s.charAt(left));
                left++;
            }
        }
        return res;
    }
}
```

# Binary Tree and Recursions

```

```
