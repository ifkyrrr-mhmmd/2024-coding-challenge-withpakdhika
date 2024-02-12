// WPU Coding Challenge With Pak Dhika
// 6/366

// function DNAtoRNA(dna) {
//   let rna = "";
//   for (i = 0; i < dna.length; i++) {
//     dna[i] === "T" ? (rna += "U") : (rna += dna[i]);
//   }
//   return rna;
// }

const DNAtoRNA = (dna) =>
  dna
    .split("")
    .map((el) => (el === "T" ? "U" : el))
    .join("");

console.log(DNAtoRNA("GCATTTT"));
