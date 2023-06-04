package DSnA;
/** An SLList is a list of integers, which hides the terrible truth
 * of the nakedness within. */

 // Easier to instantiate because it's not "naked"
public class SLList {
  public class IntNode {
    public int item;
    public IntNode next;
  
    public IntNode(int i, IntNode n) {
      item = i;
      next = n;
    }
  
  }
  // public IntNode first;
  private IntNode sentinel;
  private int size;
  public SLList() {
    sentinel = new IntNode(63, null);
    size = 0;
  }

  public SLList (int x) {
    sentinel = new IntNode(63, null);
    sentinel.next = new IntNode(x, null);
    size = 1;
  }


  public void addFirst(int x) {
  sentinel.next = new IntNode(x, sentinel.next);
  size++;
  }

  public int getFirst() {
    return sentinel.next.item;
  }

  public void addLast(int x) {
    addLast(sentinel, x);
    size++;
  }

  private void addLast(IntNode p, int x) {
    // if (p == null) {
    //   p = new IntNode(x, null);
    // }
    // else 
    if (p.next == null) p.next = new IntNode(x, null);
    else addLast(p.next,x);
  }

  // public int size() {
  //   return size(first);
  // }

  // private int size(IntNode p) {
  //   if (p.next == null) return 1;
  //   else return size(p.next);
  // }

  public static void main(String[] args) {
    /* Creates a list of one integer, namely 10 */
    // SLList L = new SLList(15);
    L.addFirst(10);
    L.addFirst(5);
    // L.addLast(20);
    // System.out.println(L.size());
  }
}
