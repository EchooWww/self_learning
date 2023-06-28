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

另外，虽然字符串⽀持⽤†+ 进⾏拼接，但是效率并不⾼，并不建议在†for 循环中使⽤。如果需要进⾏频繁的
字符串拼接，推荐使⽤ StringBuilder

```java
*StringBuilder sb = new StringBuilder();*
*for (char c = 'a'; c <= 'f'; c++) {*
	*sb.append(c);*
*}*
*// append ⽅法⽀持拼接字符、字符串、数字等类型*
*sb.append('g').append("hij").append(123);*
```

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

# Binary Tree and Recursions
