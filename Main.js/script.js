//following function to get the current date and time
const getCurrentDate = () => {
  const currentDate = moment().format("dddd, Do of MMMM YYYY, h:mm:ss");
  $("#currentDay").text(currentDate);
};

// using setinterval for the clock to refresh everysecond
setInterval(getCurrentDate, 1000);

const colorCodeBlock = () => {
  text.each(setcolor);
};

const renderTextArea = () => {
  //fetches data from local storage
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));

  if (plannerEvents !== null) {
    const getTheCurrentHour = moment().hour();
    const timeBlockArray = $(".container .row");

    const callback = function () {
      //get data-time value from row
      const textArea = $(this).find("textarea");

      const time = parseInt($(this).data("time"));

      if (time === getTheCurrentHour) {
        textArea.removeClass("past").addClass("present");
      } else if (time > getTheCurrentHour) {
        textArea.removeClass("past").addClass("future");
      }
      const plannedEvent = plannerEvents[time];
      $(this).find("textarea").text(plannedEvent);
    };
    timeBlockArray.each(callback);
  } else {
    //add empty array in local storage
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
};

const onClick = function (event) {
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));
  const target = $(event.target);
  //this stops event bubbling
  if (target.is("button") || target.is("i")) {
    const key = target.attr("id");
    const value = target.parent().find("textarea").val();

    //new object that stores user text
    const filledScheduleObject = {
      ...plannerEvents,
      [key]: value,
    };

    //this pushes the user text in local storage
    localStorage.setItem("plannerEvents", JSON.stringify(filledScheduleObject));
  }
};
//declaring a function in a onLoad var to call different function when the page is loaded
const onLoad = () => {
  getCurrentDate();
  renderTextArea();
  $(".container").click(onClick);
};
// run the code when page is ready or Loaded
$(window).ready(onLoad);
