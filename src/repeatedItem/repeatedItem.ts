/**
 * Returns the first repeated item from an array if any
 * @throws {Error} if there is no item repetition
 */
function repeatedItemLoops<T>(array: T[]): T {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) return array[i];
    }
  }
  throw new Error('No item repetition');
}

/**
 * Returns the first repeated item from an array if any
 * @throws {Error} if there is no item repetition
 */
function repeatedItem<T>(array: T[]): T {
  const set = new Set<T>();
  for (const item of array) {
    if (set.has(item)) return item;
    else set.add(item);
  }
  // throw new Error('No item repetition');
  // converted for plunker output
  return Error('No item repetition');
}

const itemRepetition = [1, 3, 5, 9, 1]
const noItemRepetition = [1, 3, 5, 9]

console.log(repeatedItem(itemRepetition))
console.log(repeatedItem(noItemRepetition))