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

// display last
function displayLast() {
  var nineSaved = localStorage.getItem("nineInput");
  var tenSaved = localStorage.getItem("tenInput");
  var elevenSaved = localStorage.getItem("elevenInput");
  var twelveSaved = localStorage.getItem("twelveInput");
  var oneSaved = localStorage.getItem("oneInput");
  var twoSaved = localStorage.getItem("twoInput");
  var threeSaved = localStorage.getItem("threeInput");
  var fourSaved = localStorage.getItem("fourInput");
  var fiveSaved = localStorage.getItem("fiveInput");
  
  nineInput.textContent = nineSaved;
  tenInput.textContent = tenSaved;
  elevenInput.textContent = elevenSaved;
  twelveInput.textContent = twelveSaved;
  oneInput.textContent = oneSaved;
  twoInput.textContent = twoSaved;
  threeInput.textContent = threeSaved;
  fourInput.textContent = fourSaved;
  fiveInput.textContent = fiveSaved; 
};

displayLast();

// focus element
function focus() {
  document.querySelector("textarea").focus();
};

// local storage
$(".saveBtn").on("click", function() {
  // 9am
  var nine = nineInput.value;
  nineInput.textContent = nine;
  localStorage.setItem("nineInput", nine);
  console.log(nine)
  // 10am
  var ten = tenInput.value;
  tenInput.textContent = ten;
  localStorage.setItem("tenInput", ten);
  console.log(ten)
  // 11am
  var eleven = elevenInput.value;
  elevenInput.textContent = eleven;
  localStorage.setItem("elevenInput", eleven);
  console.log(eleven)
  // 12am
  var twelve = twelveInput.value;
  twelveInput.textContent = twelve;
  localStorage.setItem("twelveInput", twelve);
  console.log(twelve)
  // 1pm
  var one = oneInput.value;
  oneInput.textContent = one;
  localStorage.setItem("oneInput", one);
  console.log(one)
  // 2pm
  var two = twoInput.value;
  twoInput.textContent = two;
  localStorage.setItem("twoInput", two);
  console.log(two)
  // 3pm
  var three = threeInput.value;
  threeInput.textContent = three;
  localStorage.setItem("threeInput", three);
  console.log(three)
  // 4pm
  var four = fourInput.value;
  fourInput.textContent = four;
  localStorage.setItem("fourInput", four);
  console.log(four)
  // 5pm
  var five = fiveInput.value;
  fiveInput.textContent = five;
  localStorage.setItem("fiveInput", five);
  console.log(five)
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