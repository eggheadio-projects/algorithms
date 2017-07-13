/**
 * Returns a random int between
 * @param start inclusive
 * @param before exclusive
 */
function randomInt(start: number, before: number) {
  return start + Math.floor(Math.random() * (before - start));
}




// output
console.log("Random Integers: ")
console.log(randomInt(1, 10))
console.log(randomInt(1, 10))
console.log(randomInt(1, 10))


