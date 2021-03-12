
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
    return [];
  }
  let array = [];
  for(let i = 0; i < matrix.lenght; i++) {
    if (i % 2 == 0) {
      array.push(matrix[i]);
    } else {
      array.push(matrix[i].reverse());
    }
  }

  return array.flat();
  
}
