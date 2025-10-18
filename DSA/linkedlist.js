class Node {
  constructor(value) { this.value = value; this.next = null; }
}

class LinkedList {
  constructor() { this.head = null; }
  add(value) {
    const newNode = new Node(value);
    if (!this.head) this.head = newNode;
    else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
  }
  print() {
    let current = this.head;
    while (current) { console.log(current.value); current = current.next; }
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print(); // 1 2 3
