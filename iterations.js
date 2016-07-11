// BUBBLE SORT
function swap(array,i,j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  var length = array.length;
  var sorted = true;

  for (var i = 0; i < length; i++) {
    for (var j = 1; j < length - i; j++) {
      if (array[j-1] > array[j]) {
        swap(array,j-1,j);
        sorted = false;
      }
      console.log(array);
    }
    if (sorted) {
      break;
    }
  }
  return array;
}
console.log(bubbleSort([90, 74, 25, 14, 85, 35, 81, 69, 7, 83, 2]));
console.log(bubbleSort([1,2,3,4,5,6,7,8,9]));
console.log(bubbleSort([9,8,7,6,5,4,3,2,1]));



// SELECTION SORT
function swap(array,i,j) {
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(arr) {
  var length = arr.length;
  var min;
  for (var i = 0; i < length; i++) {
    min = i; // if min found in the unsorted portion of the arr, save the index to be swapped
    for (var j = i + 1; j < length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    swap(arr,i,min);
  }
  return arr;
}
console.log(selectionSort([79, 74, 25, 14, 85, 35, 81, 69, 7, 83, 2]));
console.log(selectionSort([1,2,3,4,5,6,7,8,9]));
console.log(selectionSort([9,8,7,6,5,4,3,2,1]));




// INSERTION SORT
function insertionSort(arr) {
  var length = arr.length;
  var element; // element to be inserted
  var index; // represents where the element is going to be inserted at

  for (var i = 1; i < length; i++) { // outer loop represents the unsorted portion of the array
    element = arr[i];
    index = i;

    for (var j = i - 1; j > -1 && element < arr[j]; j--) { // innner loop represents the sorted portion of the array
      arr[j+1] = arr[j];
      index = j;
    }
    arr[index] = element;
  }
  return arr;
}

console.log(insertionSort([79, 74, 25, 14, 85, 35, 81, 69, 7, 83, 2]));
console.log(insertionSort([1,2,3,4,5,6,7,8,9]));
console.log(insertionSort([9,8,7,6,5,4,3,2,1]));


