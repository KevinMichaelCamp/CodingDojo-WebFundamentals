function haveTime(hour, minute, period) {
  var dayNight;

  // Set var dayNight to morning or evening
  if (period === 'am') {
    dayNight = ' in the morning';
  } else {
    dayNight = ' in the evening'
  }

  // Give Time

  if (minute === 5) {
    console.log("It's five after " + hour + dayNight + ".");
  } else if (minute === 15) {
    console.log("It's a quarter after " + hour + dayNight + ".");
  } else if (minute === 30) {
    console.log("It's half past " + hour + dayNight + ".");
  } else if (minute === 45) {
    console.log("It's a quarter till " + (hour + 1) + dayNight + ".");
  } else if (minute < 30) {
    console.log("It's just after " + hour + dayNight + '.');
  } else if (minute > 30) {
    console.log("It's almost " + (hour + 1) + dayNight + '.');
  }
}


// Test Cases
console.log("Test Case 1");
var hour1 = 8;
var minute1 = 50;
var period1 = 'am';
haveTime(hour1, minute1, period1)
console.log("*****************************");

console.log("Test Case 2");
var hour2 = 4;
var minute2 = 25;
var period2 = 'pm';
haveTime(hour2, minute2, period2)
console.log("*****************************");

console.log("Test Case 3");
var hour3 = 8;
var minute3 = 30;
var period3 = 'am';
haveTime(hour3, minute3, period3)
console.log("*****************************");

console.log("Test Case 4");
var hour4 = 8;
var minute4 = 45;
var period4 = 'am';
haveTime(hour4, minute4, period4)
console.log("*****************************");
