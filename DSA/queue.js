class Queue {
  constructor() { this.items = []; }
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
  front() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
}

const queue = new Queue();
queue.enqueue("sowmiya");
queue.enqueue("ravichandran");
console.log(queue.dequeue()); // "A"
console.log(queue.front());   // "B"
