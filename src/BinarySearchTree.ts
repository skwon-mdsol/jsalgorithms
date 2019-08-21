interface IBSNode {
  left?: BSNode;
  right?: BSNode;
  value: Number;
}

interface IWithParent {
  parent?: BSNode;
}

interface IRotate {
  (a: BSNode): BSNode;
}

const simpleRightRotate: IRotate = (a) => {
  const left = a.left;
  a.left = left.right;
  left.right = a;
  return left.right;
}

const complexRightRotate: IRotate = (a) => {
  const parent = a.parent;
  const b = a.right;

  if (b.right) {
    b.right.parent = a;
  }
  a.left = b.right;

  b.right = a;
  // update parent link
  // 1) checks for parent in the case of root
  // 2) checks if A was the right or left child
  if (parent) {
    if (parent.left && parent.left.value === a.value) {
      parent.left = b;
    } else {
      parent.right = b;
    }
  }

  return b;
}

export class BSNode implements IBSNode, IWithParent {
  left?: BSNode;
  right?: BSNode;
  parent?: BSNode;
  value: Number;

  constructor(value: Number, left: BSNode, right: BSNode, parent: BSNode) {
    this.left = left;
    this.right = right;
    this.value = value;
    this.parent = parent;
  }
}

interface IBSTree {
  root?: BSNode;

  insert(value: number): boolean;
}

export class BSTree implements IBSTree {
  root?: BSNode;

  constructor(root?: BSNode) {
    this.root = root;
  }

  insert(value: Number) {
    const { root } = this;
    let curr = root;

    if (!curr) {
      this.root = new BSNode(value, null, null, null);
      return true;
    }

    while (true) {
      if (value > curr.value) {
        if (!curr.right) {
          curr.right = new BSNode(value, null, null, null);
        }
        curr = curr.right;
        break;
      } else if (value < curr.value) {
        if (!curr.left) {
          curr.left = new BSNode(value, null, null, null);
        }
        curr = curr.left;
        break;
      }
    }

    return true;
  }
}