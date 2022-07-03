var currentHour = moment().hour()
console.log(moment().hour())
// $("#currentHour").text(currentHour.format("H"));
// console.lot(currentHour.format("H"))


var eightAm = moment(time, "08:00:00").format("H")
// $("#eightAM").text(eightAm);
console.log(eightAm)



var dateToday = moment();
$("#currentDay").text(dateToday.format("dddd MMMM, do"));
console.log(dateToday.format("MMM Do, YYYY"))