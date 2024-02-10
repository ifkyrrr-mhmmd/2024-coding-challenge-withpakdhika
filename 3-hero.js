// WPU Coding Challenge With Pak Dhika
// 3/366

// function hero(bullets, dragons) {
//   //   jika peluru 2 maka bisa membunuh naga(true), jika kurang maka hasilnya akan false
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function hero(bullets, dragons) {
//   return bullets >= dragons * 2;
// }

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

console.log(hero(8, 5));
