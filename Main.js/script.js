var timeDisplayEl = $("#time-display");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY");
  timeDisplayEl.text(rightNow);
  console.log(moment());
}

displayTime();
