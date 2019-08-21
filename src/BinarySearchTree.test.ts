import { BSTree } from './BinarySearchTree';

describe('Binary Search Tree', () => {
  let tree: BSTree;

  describe('insert', () => {

    beforeEach(() => {
      tree = new BSTree();
    });

    it('adds node to root if root doesnt exist', () => {
      tree.insert(10);
      expect(tree.root.value).toEqual(10);
    });

    it('adds node to left if less than', () => {
      tree = new BSTree();
      tree.insert(10);
      tree.insert(9);
      expect(tree.root.left.value).toEqual(9);
    });

    it('adds node to right if greater than', () => {
      tree = new BSTree();
      tree.insert(10);
      tree.insert(11);
      expect(tree.root.right.value).toEqual(11);
      expect(tree.root.left).toBeFalsy();
    });

    it('complex example', () => {
      tree = new BSTree();
      tree.insert(10);
      tree.insert(11);
      tree.insert(12);
      tree.insert(9);
      expect(tree.root.right.right.value).toEqual(12);
      expect(tree.root.left.left.value).toEqual(9);
    });
  });
});