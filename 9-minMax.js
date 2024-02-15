// WPU Coding Challenge With Pak Dhika
// 9/366

// Cara Barbar
var min = function (list) {
  let nilaiMin = list[0];
  for (let i = 1; i < list.length; i++) {
    if (nilaiMin > list[i]) {
      nilaiMin = list[i];
    }
  }
  return nilaiMin;
};

var max = function (list) {
  let nilaiMax = list[0];
  for (let i = 1; i < list.length; i++) {
    if (nilaiMax < list[i]) {
      nilaiMax = list[i];
    }
  }
  return nilaiMax;
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
