//THIS WAS NOT TESTED, BUT SHOULD WORK
export interface ISinglyListNode<T> {
  value: T;
  next: ISinglyListNode<T> | null;
}

export class SinglyListNode<T> implements ISinglyListNode<T> {
  value: T;
  next: ISinglyListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
