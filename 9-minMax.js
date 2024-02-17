// WPU Coding Challenge With Pak Dhika
// 9/366

// Cara Barbar
// var min = function (list) {
//   let nilaiMin = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (nilaiMin > list[i]) {
//       nilaiMin = list[i];
//     }
//   }
//   return nilaiMin;
// };

// var max = function (list) {
//   let nilaiMax = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (nilaiMax < list[i]) {
//       nilaiMax = list[i];
//     }
//   }
//   return nilaiMax;
// };

// menggunakan fungsi sort
// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

// menggunakan fungsi Math
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-53, 57, 30, 29, -54, 0, -110]));
