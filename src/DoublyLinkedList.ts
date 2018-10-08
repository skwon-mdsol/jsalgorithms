interface LLNodeInterface {
  next: LLNode;
  previous: LLNode;
  value: string;
}

export class LLNode implements LLNodeInterface {
  next: LLNode;
  previous: LLNode;
  value: string;

  constructor(value: string, next: LLNode, previous: LLNode) {
    this.value = value;
    this.next = next;
  }
}

interface LinkedListInterface {
  head: LLNode;
  tail: LLNode;

  append(value: string): DoublyLinkedList;
  // prepend(value: string): DoublyLinkedList;
  list(): string[];
  reverseList(): string[];
  delete(value: string): boolean;
}

export default class DoublyLinkedList implements LinkedListInterface {
  head: LLNode;
  tail: LLNode;

  constructor (head: LLNode, tail: LLNode) {
    this.head = head;
    this.tail = tail;
  }

  // prepend (value: string): Dou

  append (value: string): DoublyLinkedList {
    const newNode = new LLNode(value, null, null);

    // if no head node exists
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;

    return this;
  }

  list (): string[] {
    let node = this.head;
    let res = [];
    while (node) {
      res.push(node.value);
      node = node.next;
    }
    return res;
  }

  reverseList (): string[] {
    let res = [];
    let node = this.tail;
    while (node) {
      res.push(node.value);
      node = node.previous;
    }
    return res;
  }

  delete (value: string): boolean {
    let node;
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = null;
      this.tail = null;
      return true;
    }

    node = this.head.next;
    while (node && node.value !== value) {
      node = node.next;
    }

    if (node.value === this.tail.value) {
      this.tail = this.tail.previous;
      this.tail.next = null;
      return true;
    } else if (node.value === value) {
      node.previous.next = node.next;
      node.next.previous = node.previous;
      node = null;
      return true;
    } else {
      return false;
    }
  }
}
