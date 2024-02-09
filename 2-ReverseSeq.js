// WPU Coding Challenge With Pak Dhika
// 2/366

const reverseSeq = (n) => {
  hasil = [];
  for (let i = n; i >= 1; i--) {
    hasil.push(i);
  }
  return hasil;
};

// const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

// const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(10));
