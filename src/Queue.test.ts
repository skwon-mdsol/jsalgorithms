import Queue from './Queue';

describe('Queue', () => {
  describe('list', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue([1, 2]);
    });

    it('returns all nodes', () => {
      expect(queue.list()).toEqual([1, 2]);
    });
  });

  describe('enqueue', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue([1, 2]);
    });

    it('adds element on the top', () => {
      expect(queue.enqueue(0)).toBeTruthy();
      expect(queue.list()).toEqual([0, 1, 2]);
    });

    it('adds element in empty queue', () => {
      queue = new Queue([]);
      queue.enqueue(0);
      expect(queue.list()).toEqual([0]);
    })
  });

  describe('dequeue', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue([1, 2]);
    });

    it('removes last element', () => {
      expect(queue.dequeue()).toEqual(2);
    });

    it('returns null if no elements', () => {
      queue = new Queue([]);
      expect(queue.dequeue()).toEqual(null);
    });
  });
});