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

//***********2 version********************

//return an ARRAY [1], [2]..
function forwardPrintingWithSlice(arr, i = 0, j = 1) {
  if (i === arr.length) return;

  console.log(arr.slice(i, j));
  forwardPrintingWithSlice(arr, i + 1, j + 1);
}
