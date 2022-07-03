
// set a constantly updating date
var dateToday = new Date();

console.log(dateToday)

//TODO:Format time column so each hour is based of of date/time js functions
//TODO: 8 am as proof of concept.

//TODO: Compare current Hour to listed Hours (past, present, future)
//need fuction to compare both values

// currenthour
var currentHour = dateToday.getHours();
console.log(currentHour)

//Set hour to 8 am
var eightAm = dateToday.setHours(8);
console.log(moment(eightAm).format('hh:mm a'))
var nineAm = dateToday.setHours(9);
var tenAm = dateToday.setHours(10)
var elevenAm = dateToday.setHours(11)
var noonPm = dateToday.setHours(12)
var onePm = dateToday.setHours(13)
var twoPm = dateToday.setHours(14)
var threePm = dateToday.setHours(15)
var fourPm = dateToday.setHours(16)
var fivePM = dateToday.setHours(17)

// all the workday hours have been combined
var workDayAmPm = [eightAm, nineAm, tenAm, elevenAm, noonPm, onePm, twoPm, threePm, fourPm, fivePM];

console.log(moment(workDayAmPm[3]).format("hh:mm a"));

// Proof of Formatting Concept.
// var noonPm = dateToday.setHours(12, 00, 00);
// console.log(moment(noonPm).format("hh:mm:ss"))

// var saveBtn = document.getElementById





// //tbody is what we ot append

// function addInput(projectName, type, hourlyRate, dateDue, daysUntil, totalEarned) {

//     //When i submit form
//     //call this function
//     //pass data from input fields

//     //create table row
//     // add all table data to that row
//     // then append the newly created row to the table.


//     var projectRow = $("<tr>");
//     var projectNameEL = $("<td>");
//     projectNameEL.text(projectName);
//     var projectTypeEl = $("<td>").text(type)
//     var projectHourlyRateEl = $("<td>").text(hourlyRate)
//     var projectDateDueEl = $("<td>").text(dateDue)
//     var projectDaysUntilEl = $("<td>").text(daysUntil)
//     var projectTotalEarnedEl = $("<td>").text(totalEarned)
//     projectRow.append(projectNameEL, projectTypeEl, projectHourlyRateEl, projectDateDueEl, projectDaysUntilEl, projectTotalEarnedEl);
//     tableBody.append(projectRow);
// }

// function onFormSubmit(event) {
//     event.preventDefault()
//     var projectNameInput = $("#input-project").val().trim();
//     //Need 5 more of the line above
//     addInput(projectNameInput, "frontend", 40, "12/30/2022", 182, 200000)
// }














//var currentHour = moment().hour()
// console.log
// console.log(moment().hour())
// // $("#currentHour").text(currentHour.format("H"));
// // console.lot(currentHour.format("H"))



// var dateToday = moment();
// $("#currentDay").text(dateToday.format("dddd MMMM, do"));
// console.log(dateToday.format("MMM Do, YYYY"))


// var hourBlock = document.querySelector(".hour-block")

// for (let i = 0; i < hourBlock; i++) {
//     text += hourBlock[i]
// }


// var eightAm = dateToday.setHours(08, 00, 00)
// console.log(eightAm)