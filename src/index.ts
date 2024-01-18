import { LinkedList } from "./LinkedList/linkedList";

let list = new LinkedList();

list.AddToHead(1);
list.AddToHead(2);
list.AddToHead("3");
list.AddToTail(0);
list.AddToTail(-1);

console.log(list.head?.value);
console.log(list.head?.next?.value);
console.log(list.head?.next?.next?.value);
console.log(`removing from head: ${list.RemoveHead()}`);
console.log(`removing from tail: ${list.RemoveTail()}`);

console.log(list.head?.value);
console.log(list.head?.next?.value);
console.log(list.head?.next?.next?.value);

list.AddToTail(243);
list.AddToTail(2);
list.AddToTail(1);

// console.log(list.Search(243)?.value);

//2,1,0,243,2,1;
console.log(list.IndexOf(244));
