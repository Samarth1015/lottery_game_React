function generateNNumber(n) {
  let array = new Array(n).fill(0);

  return array.map(() => {
    return Math.floor(Math.random() * 10);
  });
}
let sum = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};
export { generateNNumber, sum };
