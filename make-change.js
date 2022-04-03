/*
Exercise: Make Change

Write a function called makeChange to make change for a given amount of money using pennies (1 cent), 
nickels (5 cents), dimes (10 cents), and quarters (25 cents). For example, when making change for 37 cents, 
you could use: 1 quarter, 1 dime and 2 pennies; 3 dimes and 7 pennies; or other combinations.
*/
// switch or if else?
let change;

function makeChange(change) {
  let d = dimes;
  let q = quarters;
  let n = nickels;
  let p = pennies;

  if (change > 25) {
    Math.floor(change / 25) = q;
    change % 25 = change;
  }
  if (change > 10 && change < 25) {
    Math.floor(change / 10) = d;
    change % 10 = change;
  }
  if (change > 5 && change < 10) {
    Math.floor(change / 5) = n;
    change % 5 = change;
  }
  if (change < 5) {
    return (change = p);
  }
  return p, n, d, q;
}
console.log(`Change will be ${q} quarters,
       ${d} dimes, ${n} nickels, and ${p} pennies.`);

// function makeChange(change) {
//   switch (change) {
//     {
//       case : change > 25
//       case :
//       case :
//       case :
//       default:
//      }
//     }
//   };

//if i want it to loop through until the remainder is 0.
// run makeChange as a call back as long as change > 0?
