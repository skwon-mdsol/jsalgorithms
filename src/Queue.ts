interface IQueue {
  nodes: any[];

  enqueue(value: string): boolean;
  dequeue(): any;
  list(): any[];
}

export default class Queue implements IQueue {
  nodes: any[];

  constructor (nodes: any[]) {
    this.nodes = nodes;
  }

  enqueue (value: string): boolean {
    this.nodes.unshift(value);
    return true;
  }

  dequeue (): any {
    if (!this.nodes.length) return null;
    let element = this.nodes[this.nodes.length - 1];
    this.nodes = this.nodes.slice(0, this.nodes.length - 1);
    return element;
  }

  list (): string[] {
    return this.nodes;
  }
}