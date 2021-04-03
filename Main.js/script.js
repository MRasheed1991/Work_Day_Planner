// var timeDisplayEl = $("#time-display");

// handle displaying the time
// const currentTime = () => {
//   const rightNow = moment().format("MMM DD, YYYY");
//   $("#time-display").text(rightNow);
//   return rightNow;
// };

const getCurrentDate = () => {
  const currentDate = moment().format("dddd, Do of MMMM YYYY, h:mm:ss");
  $("#currentDay").text(moment().format("dddd, Do of MMMM YYYY, h:mm:ss"););
};

setInterval(getCurrentDate, 1000);

getCurrentDate();
