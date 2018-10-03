// Reward after 30 days
var total = 0
var reward = .01;
var day = 1;

for (var i = 1; i <= 30; i++) {
  total = total + reward;
  console.log("Day " + day + ":" + total.toFixed(2));
  day++;
  reward = reward * 2;
}

console.log("After 30 days, the reward is " + total.toFixed(2));

# of Days
for reward to be > or = 10000
var total = 0
var reward = .01;
var day = 1;

for(var i = 1; i <= 30; i++){
  total = total + reward;
  console.log("Day " + day + ":" + total.toFixed(2));
  if(total >= 10000){
    break;
  }
  day ++;
  reward = reward * 2;
}

console.log("It takes " + day + " days for the reward to reach $10,000.");

// # of Days for reward to be > or = 100000000
var total = 0
var reward = .01;
var day = 1;

for(var i = 1; i > 0; i++){
  total = total + reward;
  console.log("Day " + day + ":" + total.toFixed(2));
  if(total >= 1000000000){
    break;
  }
  day ++;
  reward = reward * 2;
}

console.log("It takes " + day + " days for the reward to reach $1,000,000,000.");

// # of days for reward to reach infinity
var total = 0
var reward = .01;
var day = 1;

for(var i = 1; i > 0; i++){
  total = total + reward;
  console.log("Day " + day + ":" + total.toFixed(2));
  if(total >= Infinity){
    break;
  }
  day ++;
  reward = reward * 2;
}

console.log("It takes " + day + " days for the reward to reach Infinity");
