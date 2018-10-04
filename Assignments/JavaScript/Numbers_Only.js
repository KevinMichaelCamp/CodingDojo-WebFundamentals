function numbersOnly(arr){
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === "number"){
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

// Test Case
console.log("Test Case 1");
var arr1 = [1, "apple", -3, "orange", 0.5];
numbersOnly(arr1);
// newArray is [1, -3, 0.5]

// Part 2 - work in place
function numbersOnly(arr){
  var temp;

  for (var i = 0; i < arr.length; i++) {
    while (typeof arr[i] != "number") {
      for (var j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr.pop();
    }
  }
  console.log(arr);
}

// Test Case
console.log("Test Case 1");
var arr1 = [1, "apple", -3, "orange", 0.5];
numbersOnly(arr1);
// newArray is [1, -3, 0.5]
