// WPU Coding Challenge With Pak Dhika
// 7/366

// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }
//   return z;
// }

// function countBy(x, n) {
//   return [...Array(n)].map((el, i) => (i + 1) * x);
// }

const countBy = (x, n) => [...Array(n)].map((el, i) => (i + 1) * x);

// learn with pak Dhika channel WPU

console.log(countBy(2, 5));
