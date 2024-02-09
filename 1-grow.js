// WPU Coding Challenge With Pak Dhika
// 1/366

function grow(x) {
  let hasil = x[0];
  for (let i = 1; i < x.length; i++) {
    hasil *= x[i];
  }
  return hasil;
}

// function grow(x) {
//   const hasil = x.reduce((nilaiAwal, nilaiSaatIni) => nilaiAwal * nilaiSaatIni);
//   return hasil;
// }

// const grow = (x) =>
//   x.reduce((nilaiAwal, nilaiSaatIni) => nilaiAwal * nilaiSaatIni);

console.log(grow([2, 2, 2, 2, 2, 2]));
