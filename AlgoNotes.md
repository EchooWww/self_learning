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

## Two-pointer Technique in Linked List

## Reverse Linked List with recursion

## Reverse Linked List in k groups

## Judge palindrome linked list

# Arrays

## Prefix Sum

- An elegant way to solve problems that require to calculate the sum of a subarray, with time complexity of O(1) for each query.
- The idea is to calculate the prefix sum of the array, and store the sum in a new array. Then we can get the sum of any subarray by calculating the difference between the prefix sum of the end index and the start index.
- For example, if we want sum of subarray [i, j], we can get it by prefixSum[j] - prefixSum[i-1]

### Prefix Sum Problem in 1d-array

> [Leetcode 303. Range Sum Query - Immutable (Easy)](https://leetcode.com/problems/range-sum-query-immutable/)

```java
class NumArray {
    private int[] nums;
    private int[] prevs;
    public NumArray(int[] nums) {
        this.nums = nums;
        // Detail: we need to initialize the prevs array with length of nums.length + 1, because we need to store the sum of the first i elements in prevs[i]
        prevs = new int[nums.length+1];
        prevs[0] = 0;
        for(int i = 1; i < prevs.length; i++) {
            prevs[i] = prevs[i-1] + nums[i-1];
        }
    }

    public int sumRange(int left, int right) {
        return prevs[right + 1] - prevs[left];
    }
}
```

### Prefix Sum Problem in 2d-array

> [Leetcode 304. Range Sum Query 2D - Immutable (Medium)](https://leetcode.com/problems/range-sum-query-2d-immutable/)

- For any area in the 2d-array, we can convert it to the result of calculations of 4 areas starting from [0,0].

```java
class NumMatrix {
    private int[][] matrix;
    private int[][] prev;
    public NumMatrix(int[][] matrix) {
        this.matrix = matrix;
        int r = matrix.length;
        int c = matrix[0].length;
        prev = new int[r+1][c+1];
        for(int i = 1; i <= r; i++) {
            for(int j = 1; j <= c; j++) {
                prev[i][j] = prev[i-1][j] + prev[i][j-1] - prev[i-1][j-1] + matrix[i-1][j-1];
            }
        }
    }

    public int sumRegion(int row1, int col1, int row2, int col2) {
        return prev[row2 + 1][col2 + 1] - prev[row1][col2 + 1] - prev[row2 + 1][col1] + prev[row1][col1];
    }
}
```

## Difference Array

- Difference array is an array that stores the difference between adjacent elements in the original array. We can transfer between the original array and the difference array by the following formula:
  - diff[i] = nums[i] - nums[i-1]
  - nums[i] = diff[i] + nums[i-1]
- When we need to update a range of elements in the original array, we can update the difference array instead, which is much faster.
- For example, if we want to increment all the elements in the range [i, j] by 1, we can update the difference array by:
  - diff[i] += 1
  - diff[j+1] -= 1 // Only when j+1 is in the range of the difference array

### Difference Array Problem

> [Leetcode 1109. Corporate Flight Bookings (Medium)](https://leetcode.com/problems/corporate-flight-bookings/)

```java
class Solution {
    public int[] corpFlightBookings(int[][] bookings, int n) {
        int[] res = new int[n];
        int[] diff = new int[n];
        for(int[] record: bookings) {
            diff[record[0] - 1] += record[2];
            // Only when j+1 is in the range of the difference array
            if(record[1] < n) diff[record[1]] -= record[2];
        }
        res[0] = diff[0];
        for(int i = 1; i < n; i++) {
            res[i] = res[i-1] + diff[i];
        }
        return res;
    }
}
```

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

```bash
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

## Binary Search

There are many details in writing binary search algorithm. Here we list some common mistakes that we should avoid.

- To avoid overflow, we should use `int mid = left + (right - left) / 2` instead of `int mid = (left + right) / 2`.
- Depending on whether to include `right` in the search range, we should use 2 different conditions.
  - When `right` is included
  ```java
  // Initialize right to be the last index of the array
  int right = nums.length - 1;
  // Set the condition to be left <= right, so when left == right, we still have one element to check
  while(left <= right) {
      int mid = left + (right - left) / 2;
      if(nums[mid] == target) {
          return mid;
      } else if(nums[mid] < target) {
          left = mid + 1;
      } else {
          // Update right to be mid - 1, so we can exclude mid from the search range
          right = mid - 1;
      }
  }
  ```
  - When `right` is excluded
  ```java
  // Initialize right to be the length of the array
  int right = nums.length;
  // Set the condition to be left < right, so when left == right, we have checked all elements in the array
  while(left < right) {
      int mid = left + (right - left) / 2;
      if(nums[mid] == target) {
          return mid;
      } else if(nums[mid] < target) {
          left = mid + 1;
      } else {
          // Update right to be mid, so we can exclude mid from the search range
          right = mid;
      }
  }
  ```
  There's a framework of binary search algorithm that we can follow.

```java
int left = 0;
int right = nums.length - 1;
while(left<=right) {
  int mid = left + (right - left) / 2;
  if(nums[mid] == target) {
    ...
  } else if(nums[mid] < target) {
    ...
  } else if (nums[mid] > target){
    ...
  }
}

```

### Find the target and return its index

> [Leetcode 704. Binary Search (Easy)](https://leetcode.com/problems/binary-search/)

```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while(left <= right) {
            int mid = left + (right - left) / 2;
            if(nums[mid] == target) {
                return mid;
            } else if(nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
```

### Find the first target and return its index

- One condition to return -1: `left == nums.length`, which means that we have checked all elements in the array and the target is not found.
- The other condition to return -1: `nums[left] != target`, which means that we can find the position of the target in the array, but the target is not found.
- Pay attention: when `nums[mid] == target`, we should update `right` instead of returning immediately, because we want to find the first target.

### Find the last target and return its index

- When `nums[mid] == target`, we should update `left` to be `mid + 1`
- The conditions of returning -1 are similar to the previous question. This time we check `right` instead of `left`, whether `right ` is equal to `-1` or `nums[right] != target`.

> [Leetcode 34. Find First and Last Position of Element in Sorted Array (Medium)](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int leftBound = findLeft(nums, target);
        int rightBound = findRight(nums, target);
        return new int[]{leftBound, rightBound};
    }
    public int findLeft(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        while(left <= right) {
            int mid = left + (right - left)/2;
            if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return left > nums.length - 1 || nums[left] != target? -1: left;
    }

    public int findRight(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left)/2;
            if (nums[mid] <= target) left = mid + 1;
            else right = mid - 1;
        }
        return right < 0 || nums[right] != target? -1: right;
    }
}

```

# Binary Tree and Recursions

```

```
