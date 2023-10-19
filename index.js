// Capitalizes the first letter of a given text.
export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Formats a date in a human-readable format.
export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
}

// Formats a time in a human-readable format.
export function formatTime(time) {
  return new Date(time).toLocaleTimeString();
}

// Shuffles the elements of an array randomly.
export function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Filters an array based on a provided predicate function.
export function filterArray(array, predicate) {
  return array.filter(predicate);
}
