import DoublyLinkedList, { LLNode } from './DoublyLinkedList';

describe('DoublyLinkedList', () => {
  describe('prepend', () => {
    let linkedList;

    beforeEach(() => {
      linkedList = new DoublyLinkedList(null, null);
    });

    it('adds node to head', () => {
      linkedList.prepend('1');
      expect(linkedList.list()).toEqual(['1']);
    });

    it('adds node to head again', () => {
      linkedList.append('2');
      linkedList.append('3');
      linkedList.append('4');
      linkedList.prepend('1');
      expect(linkedList.list()).toEqual(['1', '2', '3', '4']);
    })
  });

  describe('append', () => {
    let linkedList;

    beforeEach(() => {
      linkedList = new DoublyLinkedList(null, null);
    })

    it('adds node if no head', () => {
      linkedList.append('1');
      expect(linkedList.list()).toEqual(['1']);
    });

    it ('adds node if length === 1', () => {
      linkedList.append('1');
      linkedList.append('2');
      expect(linkedList.list()).toEqual(['1', '2']);
    });

    it ('adds node if length === 5', () => {
      linkedList.append('1');
      linkedList.append('2');
      linkedList.append('3');
      linkedList.append('4');
      linkedList.append('5');
      expect(linkedList.list()).toEqual(['1', '2', '3', '4', '5']);
    });
  });

  describe('reverseList', () => {
    let linkedList;

    beforeEach(() => {
      linkedList = new DoublyLinkedList(null, null);
      linkedList.append('1');
      linkedList.append('2');
      linkedList.append('3');
      linkedList.append('4');
    });

    it('lists out elements in reverse order', () => {
      expect(linkedList.reverseList()).toEqual(['4', '3', '2', '1']);
    });
  });

  describe('delete', () => {
    let linkedList;

    beforeEach(() => {
      linkedList = new DoublyLinkedList(null, null);
      linkedList.append('1');
    });

    it('deletes head', () => {
      expect(linkedList.delete('1')).toBeTruthy();
      expect(linkedList.list()).toEqual([]);
    });

    it('deletes 2nd element', () => {
      linkedList.append('2');
      expect(linkedList.delete('2')).toBeTruthy();
      expect(linkedList.list()).toEqual(['1']);
    });

    it ('deletes 2nd element in middle of list', () => {
      linkedList.append('2');
      linkedList.append('3');
      expect(linkedList.delete('2')).toBeTruthy();
      expect(linkedList.list()).toEqual(['1', '3']);
    })
  });
});