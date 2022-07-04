
//TODO:Format time column so each hour is based of of date/time js functions
//TODO: 8 am as proof of concept.

//TODO: Compare current Hour to listed Hours (past, present, future)
// set a constantly updating date
//Local Storage Retrival




var dateToday = new Date();
//console.log(dateToday)
//need fuction to compare both values
// currenthour
var currentHour = dateToday.getHours();
//Set hour to 8 am
var eightAm = dateToday.setHours(8);
console.log(moment(eightAm).format('hh a'))
var nineAm = dateToday.setHours(9);
var tenAm = dateToday.setHours(10)
var elevenAm = dateToday.setHours(11)
var noonPm = dateToday.setHours(12)
var onePm = dateToday.setHours(13)
var twoPm = dateToday.setHours(14)
var threePm = dateToday.setHours(15)
var fourPm = dateToday.setHours(16)
var fivePm = dateToday.setHours(17)
// all the workday hours have been combined
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
    // console.log(eightBlock.textContent);
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

function renderLastRegistered() {
    var toDoItem = localStorage.getItem("todo-item")

    toDoListDisplay.textContent = toDoItem

    console.log(toDoItem)
}
saveBtn.on("click", function (event) {
    event.preventDefault();

    var toDoItem = textArea.value;

    localStorage.setItem("todo-item", toDoItem)
    renderLastRegistered();
    console.log(renderLastRegistered)
})

var saveBtn = $(".saveBtn")
var textArea = $("#eight-am-text")
var toDoListDisplay = $("#todo-list-display")