const getCurrentDate = () => {
  const currentDate = moment().format("dddd, Do of MMMM YYYY, h:mm:ss");
  $("#currentDay").text(currentDate);
};

const colorCodeBlock = () => {
  text.each(setcolor);
};

// using setinterval for the clock second to repeat everysecond
setInterval(getCurrentDate, 1000);

const renderTextArea = () => {
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));

  if (plannerEvents !== null) {
    const getTheCurrentHour = moment().hour();
    const timeBlockArray = $(".container .row");
    // the folllowing is declared as function
    const callback = function () {
      const textArea = $(this).find("textarea");

      // const time = parseInt($(this).data("time"), 10);
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
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
};

const onclick = function (event) {
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));
  const target = $(event.target);
  //this stops event bubbling
  if (target.is("button")) {
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

const onload = () => {
  getCurrentDate();
  renderTextArea();
  $(".container").click(onClick);
};

$(window).ready(onload);
