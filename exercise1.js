
function calculateArrayAverage(numbers) {
    // var sum = 0;
    // var count = 0;
    // for (var i = 0; i < numbers.length; i++) {
    //   sum += numbers[i];
    //   count++;
    // }
    // var average = sum / count;
    // return average;

    return numbers.reduce((a, b) => a + b , 0) / numbers.length;

  }

  console.log(calculateArrayAverage([1, 2, 3, 4, 5])); // 3
 
  