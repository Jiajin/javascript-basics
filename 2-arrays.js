const assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 0 ---------------------- */
// define a function that accepts an array of letters and returns the reversely sorted array
// the returned array should be sorted in descending alphabetical order
function reverseSortLetters(arrays) {
  return arrays.sort().reverse();
}

// Assertions (do not change)
assertEquals(reverseSortLetters(["a", "b", "c", "d"]), ["d", "c", "b", "a"]);
assertEquals(reverseSortLetters(["d", "c", "b", "a"]), ["d", "c", "b", "a"]);

/* ---------------------- EXERCISE 1 ---------------------- */
// define a function that returns the smallest number using sort

function getSmallest(numbers) {
  //return numbers.sort((a, b) => a - b)[0];
  return  Math.min(...numbers);
}

// Assertions (do not change)
assertEquals(getSmallest([1, 2, 3, 4]), 1);
assertEquals(getSmallest([4, 3, 2, 1]), 1);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns the sum of an array
function sum(array) {
  //const reducer =  (sum, value) => sum + value;
  return array.reduce((sum, value) =>sum + value);
}

// Assertions (do not change)
assertEquals(sum([1, 2]), 3);
assertEquals(sum([1, 2, 3, 4]), 10);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns an array of even numbers
function evenNumbersOnly(array) {
  return array.filter(x => x%2 === 0);
}

// Assertions (do not change)
assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 4 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier.
function sumEvenNumbers(array) {
  return sum(evenNumbersOnly(array));
}

// Assertions (do not change)
assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers([10, 11, 12]), 22);

/* ---------------------- BONUS: EXERCISE 5 ---------------------- */
// Write a Javascript function to compute the union of two arrays.
// the returned array should be sorted in ascending order
// (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])

function sortedUnion(arr1, arr2) {
  //Long answer
  // let resultArr = arr1.concat(arr2).sort((a, b) => a - b);
  // let resultSet = new Set(resultArr);
  // console.log(resultSet);
  // return Array.from(resultSet);

  //Short answer, but not using spread operator
  //return Array.from(new Set(arr1.concat(arr2).sort((a,b) => a-b)));

  //short answer using spread operator
  let uniqueArray = [...new Set([...arr1, ...arr2])];
  return uniqueArray.sort((a,b) => a-b);

}

// Assertions (do not change)
assertEquals(sortedUnion([1], [2]), [1, 2]);
assertEquals(sortedUnion([1, 3], [2]), [1, 2, 3]);
assertEquals(sortedUnion([1, 3], [11, 2]), [1, 2, 3, 11]);
assertEquals(sortedUnion([1, 2, 3], [100, 2, 1, 10]), [1, 2, 3, 10, 100]);
