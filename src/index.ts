// import { LinkedList } from "./LinkedList/linkedList";

// let list = new LinkedList();

// list.AddToHead(1);
// list.AddToHead(2);
// list.AddToHead("3");
// list.AddToTail(0);
// list.AddToTail(-1);

// console.log(list.head?.value);
// console.log(list.head?.next?.value);
// console.log(list.head?.next?.next?.value);
// console.log(`removing from head: ${list.RemoveHead()}`);
// console.log(`removing from tail: ${list.RemoveTail()}`);

// console.log(list.head?.value);
// console.log(list.head?.next?.value);
// console.log(list.head?.next?.next?.value);

// list.AddToTail(243);
// list.AddToTail(2);
// list.AddToTail(1);

// // console.log(list.Search(243)?.value);

// //2,1,0,243,2,1;
// console.log(list.IndexOf(244));

// function factorial(val: number): number {
//   if (val == 1) {
//     // this is the base case, its where we tell the function when to stop calling itself
//     return val;
//   } else {
//     return val * factorial(val - 1);
//   }
// }

// // 4 * 3 * 2 * 1
// console.log(factorial(-4));

// import { BST, TraversOrder } from "./BinarySearchTree/BinarySearchTree";
import { BST } from "./BinarySearchTree/BinarySearchTree";

var bst = new BST(50);
bst.Insert(30);
bst.Insert(20);
bst.Insert(10);
bst.Insert(45);
bst.Insert(35);
bst.Insert(70);
bst.Insert(60);
bst.Insert(59);
bst.Insert(100);
bst.Insert(85);
bst.Insert(105);

// console.log(bst.right?.right);

//console.log(bst.Contains(58));

// bst.DepthFirstTraversal((value) => console.log(value), TraversOrder.PostOrder);

// bst.BreadthFirstTraversal((node) => console.log(node.value));

console.log(bst.GetMinVal());
console.log(bst.GetMaxVal());
