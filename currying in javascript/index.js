//addinng sum of number
// function f(a) {
//   return function f(b) {
//     return function f(c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(f(3)(3));

// performing addition substraction and all opration task

function evaluate(operation) {
  return function f(a) {
    return function f(b) {
      if (operation === "sum") return a + b;
      else if (operation === "substract") return a - b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else {
        ("Invalid opration ");
      }
    };
  };
}

const mul = evaluate("multiply");
console.log(mul(5)(5));
