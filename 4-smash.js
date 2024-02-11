// WPU Coding Challenge With Pak Dhika
// 4/366

// function smash(words) {
//   return words.join(" ");
// }

// const smash = (words) => words.join(" ");

function smash(words) {
  let hasil = "";
  for (let i = 0; i < words.length; i++) {
    hasil += words[i];
    if (i != words.length - 1) hasil += " ";
  }
  return hasil;
}

// buatkan aku sebuah fungsi
// buatkan aku sebuah variabel kosong
// buatkan aku sebuah pengulangan, yang dimana array akan ditambahkan sesuai dengan panjang array
// buat pengkondisian, dimana jika i tidak sama dengan panjang array dikurang satu, maka array akan dberi spasi (untuk array terakhir tidak diberi)
// kembalikan hasil awal (return)

console.log(smash(["hello", "amazing", "world"]));
