import DoublyLinkedList from './DoublyLinkedList';

interface IHashTable<V> {
  table: DoublyLinkedList<DoublyLinkedList<V>>;
  modNum: number;
  numElements: number;

  size(): number;
  hash(key: string): number;
}
/*
  const hash = hashfunc(key)
  const index = hash % length 
*/

export default class HashTable<V> implements IHashTable<V> {
  table: DoublyLinkedList<DoublyLinkedList<V>>
  modNum: number = 2069;
  numElements: number;

  constructor (size = 16) {
    this.table = new DoublyLinkedList<DoublyLinkedList<V>>(null, null);
    this.numElements = 0;
    for (let i = 0; i < size; i++) {
      this.table.append(new DoublyLinkedList<V>(null, null));
    }
  }

  size(): number {
    return this.numElements;
  }

  hash(key: string) {
    /*
    const hash: number = Array.from(key).reduce(
      (hashAccumulator: number, keySymbol: string) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );

    return hash % this.table.size();
    */
    return 0;
  }
}