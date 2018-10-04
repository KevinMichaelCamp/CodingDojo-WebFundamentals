function slotMachine(quarters, leaveAt) {
  var total = quarters;
  var winLose;
  var winAmount;

  for (quarters; quarters >= 0; quarters--) {
    // Check if player has money
    if (quarters === 0) {
      console.log("You are broke");
      break;
    }
    // Odds - 1 in 100
    winLose = Math.ceil(Math.random() * 100);
    console.log(winLose);
    // If player wins, random winnings 50 - 100
    if (winLose === 1) {
      winAmount = Math.floor(Math.random() * 50) + 50;
      console.log("You win " + winAmount + " quarters!!!");
      quarters = quarters + winAmount;
      console.log("You now have " + quarters + " quarters.");
      if (quarters >= leaveAt) {
        console.log("Congrats! You got your " + leaveAt + " quarters.");
        break;
      }
    }
  }
}

slotMachine(100, 200);
