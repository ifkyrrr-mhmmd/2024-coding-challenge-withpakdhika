// WPU Coding Challenge With Pak Dhika
// 5/366

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft ? true : false;
};
// jika jarak ke pom bensin dibagi miles per gallon lebih kecil daripadanya, maka hasilnya akan true
console.log(zeroFuel(50, 25, 2));
