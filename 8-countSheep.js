// WPU Coding Challenge With Pak Dhika
// 8/366

// var countSheep = function (num) {
//   let hasil = "";
//   for (i = 1; i <= num; i++) {
//     hasil += i + " sheep...";
//   }

//   return hasil;
// };

// var countSheep = function (num) {
//   let hasil = "";
//   for (i = 1; i <= num; i++) {
//     hasil += `${i} sheep...`;
//   }

//   return hasil;
// };

var countSheep = function (num) {
  return [...Array(num)].map((el, i) => `${i + 1} sheep...`).join("");
};

console.log(countSheep(3));
