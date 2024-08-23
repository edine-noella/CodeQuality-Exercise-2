function calculateDiscount(totalPrice) {
    // var disc;
    // if (totalamount > 100) {
    //   disc = totalamount * 0.1;
    // } else {
    //   disc = totalamount * 0.05;
    // }
    // return disc;

    return (totalPrice > 100) ? totalPrice * 0.1 : totalPrice * 0.05;

  }

    console.log(calculateDiscount(150)); 