/**
 * Sorts an array using insertion sort
 */
function insertionSort(array: number[]): number[] {
  array = array.slice();
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

const unsortedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(insertionSort(unsortedArray))
