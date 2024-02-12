function DNAtoRNA(dna) {
  let rna = "";
  for (i = 0; i < dna.length; i++) {
    dna[i] === "T" ? (rna += "U") : (rna += dna[i]);
  }
  return rna;
}

console.log(DNAtoRNA("GCATTTT"));
