function fancyArray(arr, symbol, reverse){
  // Normal order
  if (reverse === false) {
    for(var i = 0; i < arr.length; i ++){
      console.log(i + " " + symbol + " " + arr[i]);
    }
  }
  //Reverse order
  else {
    for (var i = arr.length - 1; i >= 0; i--) {
      console.log(i + " " + symbol + " " + arr[i]);
    }
  }
}

// Test Cases
console.log("Test Case 1");
var arr1 = ["James", "Jill", "Jane", "Jack"];
fancyArray(arr1, "->", false);
console.log("***************************");

console.log("Test Case 2");
var arr2 = ["James", "Jill", "Jane", "Jack"];
fancyArray(arr2, "■", true);
console.log("***************************");
