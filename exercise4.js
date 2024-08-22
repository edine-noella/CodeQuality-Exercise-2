function findEvenNumbers(numbers) {
    // var evenNumbers = [];
    // for (var i = 0; i < numbers.length; i++) {
    //   if (numbers[i] % 2 === 0) {
    //     evenNumbers.push(numbers[i]);
    //   }
    // }
    // return evenNumbers;

    return numbers.filter((number)=> number % 2 === 0);

  }

    console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));
