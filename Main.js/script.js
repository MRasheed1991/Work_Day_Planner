const getCurrentDate = () => {
  const currentDate = moment().format("dddd, Do of MMMM YYYY, h:mm:ss");
  $("#currentDay").text(currentDate);
};

// using setinterval for the clock second to repeat everysecond
setInterval(getCurrentDate, 1000);
const renderTextArea = () => {
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));
  if (plannerEvents !== null) {
    const getTheCurrentHour = moment().hour();
    const timeBlockArray = $(".container .row");
    function callback() {
      const textArea = $(this).find("textarea");
      const time = parseInt($(this).data("time"));
      if (time === getTheCurrentHour) {
        textArea.removeClass("past").addClass("present");
      }
      if (time > getTheCurrentHour) {
        textArea.removeClass("present").addClass("future");
      }
    }
    timeBlockArray.each(callback);
  }
};
const onload = () => {};

$(document).ready(onload);
