let arr = [1, 2, 3, 4, 5];

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
