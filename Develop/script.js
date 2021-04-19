var currentTime = moment();
var format = "HH:mm"
var nineInput = document.getElementById("nine");
var tenInput = document.getElementById("ten");
var elevenInput = document.getElementById("eleven");
var twelveInput = document.getElementById("twelve");
var oneInput = document.getElementById("one");
var twoInput = document.getElementById("two");
var threeInput = document.getElementById("three");
var fourInput = document.getElementById("four");
var fiveInput = document.getElementById("five");


// opening time display
var openHeader = function () {
  document.getElementById("currentDay")
  .textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}
setInterval(openHeader, 1000);

// focus element

// local storage
$(".saveBtn").on("click", function() {
  console.log("I work")
});















// dynamic color change for time blocks
// 9am
var nine = function() {
  var startTime = moment("09:00:00", format);
  var endTime = moment("10:00:00", format);
  
  if (currentTime.isBetween(startTime, endTime)) {
    $("#nine").addClass("present");
  }
  else if (moment().isBefore(startTime, format)) {
    $("#nine").addClass("future")
  } else {
    $("#nine").addClass("past");
  }
};
// 10am
var ten = function() {
  var startTime = moment("10:00:00", format);
  var endTime = moment("11:00:00", format);
  
  if (currentTime.isBetween(startTime, endTime)) {
    $("#ten").addClass("present");
  }
  else if (moment().isBefore(startTime, format)) {
    $("#ten").addClass("future")
  } else {
    $("#ten").addClass("past");
  }
};
// 11am
var eleven = function() {
  var startTime = moment("11:00:00", format);
  var endTime = moment("12:00:00", format);
  
  if (currentTime.isBetween(startTime, endTime)) {
    $("#eleven").addClass("present");
  }
  else if (moment().isBefore(startTime, format)) {
    $("#eleven").addClass("future")
  } else {
    $("#eleven").addClass("past");
  }
};
// 12am
var twelve = function() {
  var startTime = moment("12:00:00", format);
  var endTime = moment("13:00:00", format);
  
  if (currentTime.isBetween(startTime, endTime)) {
    $("#twelve").addClass("present");
  }
  else if (moment().isBefore(startTime, format)) {
    $("#twelve").addClass("future")
  } else {
    $("#twelve").addClass("past");
  }
};
// 1pm
var one = function() {
  var startTime = moment("13:00:00", format);
  var endTime = moment("14:00:00", format);
  
  if (currentTime.isBetween(startTime, endTime)) {
    $("#one").addClass("present");
  }
  else if (moment().isBefore(startTime, format)) {
    $("#one").addClass("future")
  } else {
    $("#one").addClass("past");
  }
};
// 2pm
var two = function() {
  var startTime = moment("14:00:00", format);
  var endTime = moment("15:00:00", format);
  
  if (currentTime.isBetween(startTime, endTime)) {
    $("#two").addClass("present");
  }
  else if (moment().isBefore(startTime, format)) {
    $("#two").addClass("future")
  } else {
    $("#two").addClass("past");
  }
};
// 3pm
var three = function() {
  var startTime = moment("15:00:00", format);
  var endTime = moment("16:00:00", format);
  
  if (currentTime.isBetween(startTime, endTime)) {
    $("#three").addClass("present");
  }
  else if (moment().isBefore(startTime, format)) {
    $("#three").addClass("future")
  } else {
    $("#three").addClass("past");
  }
};
// 4pm
var four = function() {
  var startTime = moment("16:00:00", format);
  var endTime = moment("17:00:00", format);
  
  if (currentTime.isBetween(startTime, endTime)) {
    $("#four").addClass("present");
  }
  else if (moment().isBefore(startTime, format)) {
    $("#four").addClass("future")
  } else {
    $("#four").addClass("past");
  }
};
// 5pm
var five = function() {
  var startTime = moment("17:00:00", format);
  var endTime = moment("18:00:00", format);
  
  if (currentTime.isBetween(startTime, endTime)) {
    $("#five").addClass("present");
  }
  else if (moment().isBefore(startTime, format)) {
    $("#five").addClass("future")
  } else {
    $("#five").addClass("past");
  }
};

nine();
ten();
eleven();
twelve();
one();
two();
three();
four();
five();