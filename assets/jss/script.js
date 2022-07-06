//TODO:Format time column so each hour is based of of date/time js functions
//TODO: 8 am as proof of concept.

//TODO: Compare current Hour to listed Hours (past, present, future)
// set a constantly updating date
//Local Storage Retrival
var saveBtn = $(".saveBtn")
var textArea = $("#textArea")
var toDoListDisplay = $("#todo-list-display")
var currentDayDisplay = document.querySelector("#currentDay")

var eightRow = document.querySelector("#eightAmRow")
var nineRow = document.querySelector("#nineAmRow")
var tenRow = document.querySelector("#tenAmRow")
var elevenRow = document.querySelector("#elevenAmRow")
var twelveRow = document.querySelector("#twelvePmRow")
var oneRow = document.querySelector("#onePmRow")
var twoRow = document.querySelector("#twoPmRow")
var threeRow = document.querySelector("#threePmRow")
var fourRow = document.querySelector("#fourPmRow")
var fiveRow = document.querySelector("#fivePmRow")
//This turns the tableRow into an array
// var tableRow = [eightRow, nineRow, tenRow, elevenRow, twelveRow, oneRow, twoRow, threeRow, fourRow, fiveRow,]
// console.log(tableRow[1])

var dateToday = new Date();
var currentHour = dateToday.getHours();
console.log(currentHour)

//TODO: to display current date.
function displayCurrentDay() {
    var displayDate = "The current date is " + moment().format('dddd MMMM, Do YYYY');
    currentDayDisplay.textContent = displayDate
}
displayCurrentDay()


// function compareHour() {

//     //     for (let i = 0; i < tableRow.length; i++) {
//     //         console.log(tableRow.getAttribute("data-time", ""))

//     if (tableRow.getAttribute("data-time") < currentHour.getAttribute("data-time")) {
//         tableRow.removeClass("future")
//         tableRow.removeClass("present")
//         tableRow.addClass("past")
//     } else if (tableRow.getAttribute("data-time") > currentHour.getAttribute("data-time")) {
//         tableRow.removeClass("past")
//         tableRow.removeClass("present")
//         tableRow.addClass("future")
//     }
//     else if (tableRow.getAttribute("data-time") === currentHour.getAttribute("data-time")) {
//         tableRow.removeClass("future")
//         tableRow.removeClass("past")
//         tableRow.addClass("present")
//         //         if (tableRow.getAttribute("data-time") < currentHour.getAttribute("data-time")) {
//         //             tableRow.removeClass("future")
//         //             tableRow.removeClass("present")
//         //             tableRow.addClass("past")
//         //         } else if (tableRow.getAttribute("data-time") > currentHour.getAttribute("data-time")) {
//         //             tableRow.removeClass("past")
//         //             tableRow.removeClass("present")
//         //             tableRow.addClass("future")
//         //         }
//         //         else if (tableRow.getAttribute("data-time") === currentHour.getAttribute("data-time")) {
//         //             tableRow.removeClass("future")
//         //             tableRow.removeClass("past")
//         //             tableRow.addClass("present")

//         //         }
//         //     }
//         // }
//         // compareHour()

// 
//Set hour to 8 am
var eightAm = dateToday.setHours(8);
console.log(eightAm)
var nineAm = dateToday.setHours(9);
console.log(nineAm);
var tenAm = dateToday.setHours(10)
var elevenAm = dateToday.setHours(11)
var noonPm = dateToday.setHours(12)
var onePm = dateToday.setHours(13)
var twoPm = dateToday.setHours(14)
var threePm = dateToday.setHours(15)
var fourPm = dateToday.setHours(16)
var fivePm = dateToday.setHours(17)
var workDayAmPm = [eightAm, nineAm, tenAm, elevenAm, noonPm, onePm, twoPm, threePm, fourPm, fivePm];
//To fill HOURS table column
// for now use this 
// TODO: eventually work on a solution with for loop.
var eightBlock = document.getElementById("eight-block");
var nineBlock = document.getElementById("nine-block");
var tenBlock = document.getElementById("ten-block");
var elevenBlock = document.getElementById("eleven-block");
var twelveBlock = document.getElementById("twelve-block");
var oneBlock = document.getElementById("one-block");
var twoBlock = document.getElementById("two-block");
var threeBlock = document.getElementById("three-block");
var fourBlock = document.getElementById("four-block");
var fiveBlock = document.getElementById("five-block");

//All together

var workDayColumnText = [eightBlock, nineBlock, tenBlock, elevenBlock, twelveBlock, oneBlock, twoBlock, threeBlock, fourBlock, fiveBlock]


// takes text block content and turns it into formatted hour times.
function intialization() {
    eightBlock.textContent = moment(workDayAmPm[0]).format("hh:00 a");
    console.log(eightBlock.textContent);
    nineBlock.textContent = moment(workDayAmPm[1]).format("hh:00 a");
    // console.log(nineBlock.textContent);
    tenBlock.textContent = moment(workDayAmPm[2]).format("hh:00 a");
    // console.log(tenBlock.textContent);
    elevenBlock.textContent = moment(workDayAmPm[3]).format("hh:00 a");
    // console.log(elevenBlock.textContent);
    twelveBlock.textContent = moment(workDayAmPm[4]).format("hh:00 a");
    // console.log(twelveBlock.textContent)
    oneBlock.textContent = moment(workDayAmPm[5]).format("hh:00 a");
    // console.log(oneBlock.textContent);
    twoBlock.textContent = moment(workDayAmPm[6]).format("hh:00 a");
    // console.log(twoBlock.textContent);
    threeBlock.textContent = moment(workDayAmPm[7]).format("hh:00 a");
    // console.log(threeBlock.textContent);
    fourBlock.textContent = moment(workDayAmPm[8]).format("hh:00 a");
    // console.log(fourBlock.textContent);
    fiveBlock.textContent = moment(workDayAmPm[9]).format("hh:00 a")
    // console.log(fiveBlock.textContent);

}
//Starter functions
intialization()
// WORK ON
function renderLastRegistered() {
    var toDoItem = localStorage.getItem("todo-item")

    toDoListDisplay.textContent = toDoItem

    console.log(toDoItem)
}
saveBtn.on("click", function (event) {
    event.preventDefault();

    var toDoItem = textArea.val();

    localStorage.setItem($(this).data("time"), toDoItem)
    renderLastRegistered();
    console.log(toDoItem)
})

