// WPU Coding Challenge With Pak Dhika
// 6/366

// function DNAtoRNA(dna) {
//   let rna = "";
//   for (i = 0; i < dna.length; i++) {
//     dna[i] === "T" ? (rna += "U") : (rna += dna[i]);
//   }
//   return rna;
// }

// const DNAtoRNA = (dna) =>
//   dna
//     .split("")
//     .map((el) => (el === "T" ? "U" : el))
//     .join("");

const DNAtoRNA = (dna) => dna.split("T").join("U");

console.log(DNAtoRNA("GCATTTT"));

// js help aku buat variabel dengan nama DNA,
// lalu lakukan perintah di dalamnya javascriptt tolong split dulu elemennya,
// kemudian satukan kembali menggunakan fungsi map ( yang akan berbentuk sebuah string), lalu lakukan pengkondisian di dalamnya,
// lalu jika sudah, gabungkan kembali stringnya dengan menggunakan fungsi join( disertai dengan tanda petik(kosong))
