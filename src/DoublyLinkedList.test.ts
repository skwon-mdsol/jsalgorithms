import DoublyLinkedList, { LLNode } from './DoublyLinkedList';

describe('DoublyLinkedList', () => {

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
});