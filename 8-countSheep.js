var countSheep = function (num) {
  let hasil = "";
  for (i = 1; i <= num; i++) {
    hasil += i + " sheep...";
  }

  return hasil;
};

console.log(countSheep(3));
