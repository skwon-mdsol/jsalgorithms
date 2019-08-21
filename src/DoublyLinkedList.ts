interface ILLNode<T> {
  next: LLNode<T>;
  previous: LLNode<T>;
  value: T;
}

export class LLNode<T> implements ILLNode<T> {
  next: LLNode<T>;
  previous: LLNode<T>;
  value: T;

  constructor(value: T, next: LLNode<T>, previous: LLNode<T>) {
    this.value = value;
    this.next = next;
  }
}

interface ILinkedList<T> {
  head: LLNode<T>;
  tail: LLNode<T>;

  append(value: T): DoublyLinkedList<T>;
  prepend(value: T): DoublyLinkedList<T>;
  list(): T[];
  reverseList(): T[];
  delete(value: T): boolean;
}

export default class DoublyLinkedList<T> implements ILinkedList<T> {
  head: LLNode<T>;
  tail: LLNode<T>;

  constructor (head: LLNode<T>, tail: LLNode<T>) {
    this.head = head;
    this.tail = tail;
  }

  prepend (value: T): DoublyLinkedList<T> {
    // null head case
    const newNode = new LLNode<T>(value, null, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this
    }

    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;

    return this;
  }

  append (value: T): DoublyLinkedList<T> {
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

  list(): T[] {
    let node = this.head;
    let res = [];
    while (node) {
      res.push(node.value);
      node = node.next;
    }
    return res;
  }

  reverseList(): T[] {
    let res = [];
    let node = this.tail;
    while (node) {
      res.push(node.value);
      node = node.previous;
    }
    return res;
  }

  delete(value: T): boolean {
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
