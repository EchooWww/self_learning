package DSnA;
/** An SLList is a list of integers, which hides the terrible truth
 * of the nakedness within. */

 // Easier to instantiate because it's not "naked"
public class SLList<LochNess> {
  public class StuffNode {
    public LochNess item;
    public StuffNode next;
  
    public StuffNode(LochNess i, StuffNode n) {
      item = i;
      next = n;
    }
  
  }

  private StuffNode first;
  private int size;
 
  public SLList (LochNess x) {
    first = new StuffNode(x, null);
    size = 1;
  }


  public void addFirst(int x) {
  first = new StuffNode(x, null);
  size++;
  }

  public int getFirst() {
    return first.next.item;
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
