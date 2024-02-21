export interface IDoublyListNode<T> {
  value: T;
  next: IDoublyListNode<T> | null;
  prev: IDoublyListNode<T> | null;
}

export class DoublyListNode<T> implements IDoublyListNode<T> {
  value: T;
  next: IDoublyListNode<T> | null;
  prev: IDoublyListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  //TODO: finish implementing one day lol
}
