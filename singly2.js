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
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) this.head = this.tail = null;
    return newTail;
  }
}

const s = new Singly();

s.push("hello");
s.push("workd");
s.push("lalit");

s.pop();
console.log(s);
s.pop();
console.log(s);
