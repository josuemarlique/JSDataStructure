// each node is a BST it self if you think about it
//insert
//contain
//DFT depth first traversal

// start at the top go to all left nodes then go back up to node with a right node and check
// all left nodes again, then go back up again to a node with right and keep performing
//recursively
// maybe you know you traversed it all if node is a right leaf and has no children.

//BFT Breath first traversal
// start at the top go down each level before we go to next levels
export enum TraversOrder {
  InOrder = 1,
  PreOrder,
  PostOrder,
}

export class BST<T> {
  value: T;
  left: BST<T> | null;
  right: BST<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: T) {
    if (value <= this.value) {
      // read it as "if there is NO left" Then
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value);
    } else if (value > this.value) {
      if (!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
  }

  contains(value: T): boolean {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }

    return false;
  }

  //goes down the branch
  depthFirstTraversal(iteratorFunc: (value: T) => void, order: TraversOrder) {
    //in order depth first traversal
    if (order === TraversOrder.PreOrder) iteratorFunc(this.value);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === TraversOrder.InOrder) iteratorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if (order === TraversOrder.PostOrder) iteratorFunc(this.value);
  }

  // goes down the branch level by level
  breadthFirstTraversal(iteratorFunc: (node: BST<T>) => void) {
    let queue = [this] as BST<T>[]; // THE TRICK is the queue
    while (queue.length) {
      let treeNode: BST<T> = queue.shift() as BST<T>;
      iteratorFunc(treeNode);
      if (treeNode.left) queue.push(treeNode.left);
      if (treeNode.right) queue.push(treeNode.right);
    }
  }

  getMinValWhileLoop(): T {
    let node: BST<T> = this;
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  getMaxValWhileLoop(): T {
    let node: BST<T> = this;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }

  getMinVal(): T {
    if (this.left) return this.left.getMinVal();
    else return this.value;
  }

  getMaxVal(): T {
    if (this.right) return this.right.getMaxVal();
    else return this.value;
  }
}
