# Data Structures in JavaScript

This project demonstrates **basic data structures** in JavaScript, including **Stack**, **Queue**, and **Singly Linked List**, with implementation and usage examples.

## Features

- Stack: Last-In-First-Out (LIFO) data structure  
- Queue: First-In-First-Out (FIFO) data structure  
- Singly Linked List: Dynamic list with nodes  
- Easy-to-understand JavaScript class implementations  
- Demonstrates core operations: push, pop, enqueue, dequeue, add, print  

## Concepts

### Stack

A **Stack** is a LIFO (Last-In-First-Out) data structure:

* **push(item)** → adds an element on top
* **pop()** → removes and returns the top element
* **peek()** → returns the top element without removing it
* **isEmpty()** → checks if the stack is empty

```js
class Stack {
  constructor() { this.items = []; }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
}
```

---

### Queue

A **Queue** is a FIFO (First-In-First-Out) data structure:

* **enqueue(item)** → adds an element at the end
* **dequeue()** → removes and returns the front element
* **front()** → returns the front element without removing it
* **isEmpty()** → checks if the queue is empty

```js
class Queue {
  constructor() { this.items = []; }
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
  front() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
}
```

---

### Linked List

A **Singly Linked List** is a dynamic data structure made of **nodes**, where each node points to the next node.

* **Node**: Stores a value and a pointer to the next node
* **LinkedList**: Manages nodes and provides methods like `add` and `print`

```js
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
```

* **Advantages**: Dynamic size, easy insertion and deletion
* **Disadvantages**: No random access by index

---

## Usage Examples

```js
// Stack Example
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop());  // Output: 20
console.log(stack.peek()); // Output: 10

// Queue Example
const queue = new Queue();
queue.enqueue("sowmiya");
queue.enqueue("ravichandran");
console.log(queue.dequeue()); // Output: "sowmiya"
console.log(queue.front());   // Output: "ravichandran"

// Linked List Example
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print(); // Output: 1 2 3
```
