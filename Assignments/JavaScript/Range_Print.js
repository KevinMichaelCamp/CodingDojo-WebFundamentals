function printRange(start, end, skip){
  for(var i = start; i < end; i = i + skip){
    console.log(i);
  }
}

// Test Cases
console.log("Test Case 1");
printRange(2,10,2);
console.log("***************");

console.log("Test Case 2");
printRange(1,1000,7);
console.log("***************");

console.log("Test Case 3");
printRange(-100,0,3);
console.log("***************");
