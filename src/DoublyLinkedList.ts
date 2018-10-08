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
  list(): string[];
  delete(value: string): boolean;
}

export default class DoublyLinkedList implements LinkedListInterface {
  head: LLNode;
  tail: LLNode;

  constructor (head: LLNode, tail: LLNode) {
    this.head = head;
    this.tail = tail;
  }

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

  delete (value: string): boolean {
    let node = this.head;
    return false;
  }
}
