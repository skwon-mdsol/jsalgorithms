interface IQueue<T> {
  nodes: T[];

  enqueue(value: T): boolean;
  dequeue(): T;
  list(): T[];
}

export default class Queue<T> implements IQueue<T> {
  nodes: T[];

  constructor (nodes: T[]) {
    this.nodes = nodes;
  }

  enqueue (value: T): boolean {
    this.nodes.unshift(value);
    return true;
  }

  dequeue (): T {
    if (!this.nodes.length) return null;
    let element = this.nodes[this.nodes.length - 1];
    this.nodes = this.nodes.slice(0, this.nodes.length - 1);
    return element;
  }

  list (): T[] {
    return this.nodes;
  }
}