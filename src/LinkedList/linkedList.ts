import { DoublyListNode, IDoublyListNode } from "./doublyListNode";

interface ILinkedList<T> {
  head: IDoublyListNode<T> | null;
  tail: IDoublyListNode<T> | null;

  AddToHead(value: T): void;
}

export class LinkedList<T> implements ILinkedList<T> {
  head: any;
  tail: any;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  AddToHead(value: T): void {
    let oldHead = this.head; //the old head is our current head before the new node creation
    let newNode = new DoublyListNode<T>(value);
    newNode.next = oldHead;
    newNode.prev = null;

    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }

    this.head = newNode;
  }

  AddToTail(value: T): void {
    let oldTail = this.tail; //the old head is our current head before the new node creation
    let newNode = new DoublyListNode<T>(value);
    newNode.next = null;
    newNode.prev = oldTail;

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
  }

  RemoveHead<T>(): T | null {
    if (!this.head) return null;

    let val = this.head.value as T;
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    return val;
  }

  RemoveTail<T>(): T | null {
    if (!this.tail) return null;

    let val = this.tail.value as T;
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    return val;
  }

  Search<T>(value: T): IDoublyListNode<T> | null {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  //find an index and return all the index of that value in an array
  IndexOf(value: T): number[] {
    let currentNode = this.head;
    let index = 0;
    let indexes: number[] = [];

    while (currentNode) {
      if (currentNode.value === value) indexes.push(index);

      index++;
      currentNode = currentNode.next;
    }

    return indexes;
  }
}
