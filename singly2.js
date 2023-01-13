class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Singly {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const current = this.head;
    const newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) this.tail = this.head = null;

    return newTail;
  }

  shift() {
    if (!this.head) return undefined;

    const current = this.head;
    this.head = current.next;
    this.length--;

    if (this.length === 0) this.tail = this.head = null;

    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) return (this.head = this.tail = newNode);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return false;

    let current = this.head;
    let counter = 0;

    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);

    if (index === this.length - 1) return !!this.push(val);

    const prev = this.get(index - 1);
    const newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) return !!this.shift();

    if (index === this.length) return !!this.pop();

    const prev = this.get(index - 1);

    const removed = prev.next;

    prev.next = removed.next;
    this.length--;

    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const s = new Singly();

s.push("hello");
s.push("world");
s.push("harshal");
s.push("nik");

s.reverse();
console.log(JSON.stringify(s, null, 2));
