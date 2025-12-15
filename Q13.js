function processCategories(categories) {
  // Step 1: Use reduce() to count occurrences
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return categoryCount;
}

// Extra Challenge
function processCategoriesSorted(categories) {
  // Step 1: Count occurrences
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Step 2: Convert to entries and sort by count (descending)
  const sortedCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])   // sort by count
    .map(entry => entry[0]);       // extract only category names

  return sortedCategories;
}

// Example usage:
const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(processCategories(input));
// Output: { electronics: 2, clothing: 2, toys: 3 }

console.log(processCategoriesSorted(input));
// Output: [ 'toys', 'electronics', 'clothing' ]
