# React Native Helpers

This is a collection of helper functions for React Native applications.

## Installation

You can install this package using npm:


## Usage

Example usage of the helper functions:

## Filtering Arrays

Filters an array based on a provided predicate function and returns a new array containing the filtered elements.

```javascript
import {filterArray } from 'react-native-helpers';

const numbers = [1, 2, 3, 4, 5];

// Filter even numbers
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);

console.log(evenNumbers); // Should print [2, 4]

```

## Shuffling Arrays

Shuffles the elements of an array randomly and returns a new shuffled array.

```javascript

import { shuffleArray } from 'react-native-helpers';

// Shuffle the array
const shuffledArray = shuffleArray(numbers);

console.log(shuffledArray); // Should print an array with elements in random order

```

## Formatting Time

Formats a time in a human-readable format and returns the formatted time string.

```javascript

import { formatTime } from 'react-native-helpers';

const currentTime = new Date();

// Format the time
const formattedTime = formatTime(currentTime);

console.log(formattedTime); // Should print the current time in a human-readable format

```

## Formatting Dates

Formats a date in a human-readable format and returns the formatted date string.

```javascript

import { formatDate } from 'react-native-helpers';

const currentDate = new Date();

// Format the date
const formattedDate = formatDate(currentDate);

console.log(formattedDate); // Should print the current date in a human-readable format

```

## Capitalizing Text

Capitalizes the first letter of a given text and returns the capitalized text.

```javascript

import { capitalize } from 'react-native-helpers';

const originalText = 'hello';

// Capitalize the text
const capitalizedText = capitalize(originalText);

console.log(capitalizedText); // Should print "Hello"

```
