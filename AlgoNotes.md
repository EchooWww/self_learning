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

# Binary Tree and Recursions
