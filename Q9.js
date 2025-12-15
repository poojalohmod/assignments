// Combined Example: Scoping & Optional Chaining

// a) Scoping with let/var
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); // 20 → var is function/global scoped
// console.log(x); // ReferenceError → let is block scoped

// b) Optional Chaining
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email); // "test@mail.com"
console.log(profile?.user?.details?.phone); // undefined (safe, no error)

// c) Example preventing runtime error
const company = {
  name: "TechCorp",
  location: {
    city: "Delhi"
    // no 'address' object here
  }
};
// With optional chaining → safe
console.log(company?.location?.address?.street); // undefined
