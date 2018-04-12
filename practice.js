let arr = [1, 2, 3, 4, 5];

//return 1, 2, 3, ..
function printForward(arr, i = 0) {
  if (i === arr.length) return;

  console.log(arr[i]);
  print(arr, i + 1);
}

function printRecursive(arr, i = 0) {
  if (i === arr.length) return;

  print(arr, i + 1);
  console.log(arr[i]);
}

printForward(arr);
printRecursive(arr);

//***********2 version with SLICE - it returns ARR!!!********************

//return an ARRAY [1], [2]..
function forwardPrintingWithSlice(arr, i = 0, j = 1) {
  if (i === arr.length) return;

  console.log(arr.slice(i, j));
  forwardPrintingWithSlice(arr, i + 1, j + 1);
}

function backwardPrintingWithSlice(arr, i = 0, j = 1) {
  if (i === arr.length) return;

  backwardPrintingWithSlice(arr, i + 1, j + 1);
  console.log(arr.slice(i, j));
}
backwardPrintingWithSlice(arr);

//**********Binary Search Tree****************

class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let eight = new BSTNode(8);
let five = new BSTNode(5);
let two = new BSTNode(2);
let six = new BSTNode(6);
let twelve = new BSTNode(12);

eight.left = five;
eight.right = twelve;
five.left = two;
five.right = six;

function InOrderTraversal(curr) {
  let result = [];

  function helper(curr) {
    if (!curr) return;

    helper(curr.left);
    result.push(curr.value);
    helper(curr.right);
  }

  helper(curr);
  return result;
}

console.log(InOrderTraversal(eight));
