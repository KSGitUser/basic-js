module.exports = function countCats(matrix) {
  const stringToFind = '^^';
  let catsNumber = 0;
  matrix.map(arr => arr.map(item => {
    catsNumber += stringToFind === item ? 1 : 0; 
  }));

  return catsNumber;
};
