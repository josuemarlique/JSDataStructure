//get, insert, hash

export class HashTable<T> {
  buckets: HashNode<T>[];
  numBuckets: number;

  constructor(size: number) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
  }

  // our hash function will return the index for us to use to place the data
  hash(key: string): number {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    let bucket = total % this.numBuckets; // will give a number between 0 and the numbucket size - 1 were looking to get between 0 and the largest remainder which is numbuckets -1
    return bucket;
  }

  insert(key: string, value: T) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    } else if (this.buckets[index].key === key) {
      //update if first node at index is the one to update
      this.buckets[index].value = value;
    } else {
      let currentNode = this.buckets[index];

      while (currentNode.next) {
        //this will update the value if the key is already there
        if (currentNode.next.key === key) {
          currentNode.next.value = value;
          return;
        }

        //use this to go through the list of node in index and update current node so at the end we can set the next
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, value);
    }
  }

  get(key: string): T | null {
    const index = this.hash(key);

    if (!this.buckets[index]) return null;
    else {
      let currentNode: HashNode<T> | null = this.buckets[index];

      while (currentNode) {
        if (currentNode.key === key) {
          return currentNode.value;
        }

        currentNode = currentNode.next;
      }

      return null;
    }
  }

  retrieveAll() {
    let allNodes = [];
    // return array of all hashnode in hash table
    for (let i = 0; i < this.numBuckets; i++) {
      let currentNode: HashNode<T> | null = this.buckets[i];
      while (currentNode) {
        allNodes.push(currentNode);
        currentNode = currentNode.next;
      }
    }

    return allNodes;
  }
}

export class HashNode<T> {
  key: string; //went with string but can be anything, string and num are immutable and our hash func is string base
  value: T;
  next: HashNode<T> | null;

  constructor(key: string, value: T, next: HashNode<T> | null = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}
