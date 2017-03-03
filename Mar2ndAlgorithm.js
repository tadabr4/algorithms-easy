function greaterThany
  (inputArray, threshold) {

    var count = 0;
    for(i=0;i < inputArray.length; i++){
      if(inputArray[i] > threshold) {
        count ++;
      }
    }
    console.log("The Answer Is" , count+ "Values greater than" , "threshold + " inthe array);

  }

  var test = [21, 54, 12, 7, ];
  var threshold = 6;
  greaterThany (test, threshold)
