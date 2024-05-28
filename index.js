let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById("home_score");
let guestScoreEl = document.getElementById("guest_score");

function incrementby1() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function incrementby2() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function incrementby3() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

// creating a function to increment the guest score by 1, 2, or 3
function guestincrementby1() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function guestincrementby2() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function guestincrementby3() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}
