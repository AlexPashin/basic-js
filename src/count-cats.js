module.exports = function countCats(matrix) {
  if (typeof matrix === 'undefined' || matrix.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] === '^^') count++;
  return count;
};
