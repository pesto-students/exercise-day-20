/** Q1 (*)
 * Create a function to modify the the keys of an object.
 * according to the callback function provided.
*/
function modifyObjectKeys() {}

/** Q2 (*)
 * Create a function to modify the the values of an object.
 * according to the callback function provided.
*/
function modifyObjectValues() {}

/** Q3 (*)
 * Strip a substring from the start/end of a string such that:
 * stripper('foobarfoo', 'foo');
 * //=> 'bar'

 * stripper('unicorncake', 'unicorn');
 * //=> 'cake'
*/
function stripper() {}

/** Q4 (*)
 * Capitalize every word in a string: unicorn cake → Unicorn Cake
*/
function titleize() {}

/** Q5 (*)
 * Create a function to generate random numbers that are consecutively unique
 *
 * const rand = uniqueRandom(1, 10);
 *
 * console.log(rand(), rand(), rand());
 * //=> 5 2 6
*/
function uniqueRandom() {}

const linearSearch = (arr, num) =>
  arr.indexOf(num);
  // if (typeof (num) !== 'number') { return -1; }
  // for (let i = 0; i < arr.length; i += 1) {
  //   if (num === arr[i]) { return i; }
  // }
  // return -2;


module.exports = {
  modifyObjectKeys,
  modifyObjectValues,
  stripper,
  titleize,
  uniqueRandom,
  linearSearch,
};
