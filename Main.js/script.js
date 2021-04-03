// var timeDisplayEl = $("#time-display");

// handle displaying the time
// const currentTime = () => {
//   const rightNow = moment().format("MMM DD, YYYY");
//   $("#time-display").text(rightNow);
//   return rightNow;
// };

const getCurrentDate = () => {
  const currentDate = moment().format("dddd Do MMMM");
  $("#currentDay").text(currentDate);
  return currentDate;
};
