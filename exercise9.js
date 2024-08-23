function calculateSumOfMatrix(matrix) {
    // var sum = 0;
    // for (var i = 0; i < matrix.length; i++)
    //   for (var j = 0; j < matrix[i].length; j++)
    //     sum += matrix[i][j];
    // return sum;

    return matrix.flat().reduce((a, b) => a + b, 0);
   
  }

    console.log(calculateSumOfMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));