// test.js

const { capitalize, formatDate, formatTime, shuffleArray, filterArray } = require('react-native-helpers');

// capitalize() test
console.log(capitalize('hello')); // Should print "Hello"

// formatDate() test
console.log(formatDate(new Date())); // Should print the current date in a human-readable format

// formatTime() test
console.log(formatTime(new Date())); // Should print the current time in a human-readable format

// shuffleArray() test
console.log(shuffleArray([1, 2, 3, 4, 5])); // Should print a shuffled array

// filterArray() test
console.log(filterArray([1, 2, 3, 4, 5], (num) => num % 2 === 0)); // Should print an array with even numbers
