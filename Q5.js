// Example Input
const profile = { 
  name: "Charlie", 
  age: 29, 
  address: { 
    city: "San Francisco", 
    zipcode: "94101" 
  } 
};

const updates = { 
  age: 30, 
  address: { 
    zipcode: "94109", 
    country: "USA" 
  } 
};

// ✅ Solution: Merge with spread operator
const mergedProfile = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address
  }
};

console.log(mergedProfile);

// Output:
// { 
//   name: "Charlie", 
//   age: 30, 
//   address: { 
//     city: "San Francisco", 
//     zipcode: "94109", 
//     country: "USA" 
//   } 
// }
