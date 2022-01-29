var currentDate = moment().format('dddd MMMM Do YYYY');
var currentDateP = $('#currentDay').text(currentDate);
$('.jombotron').append(currentDateP);
$(".description").on("click", function () {
  // highlight textarea
  $("#description").trigger("focus");
});
// get current day hour as a number
var currentHour = moment().hour();
// loop for each div with row class to get input and set day hour
$('div.row').each((index, element) => {
  // get ID from div.row
  var rowId = element.id;
  // get textarea el with id
  var textareaEl = $('div#' + rowId + '> textarea');
  // get only string number from id for each hour in the row
  var hour = rowId.split('-')[1];
  // set textarea background colors depending if current hour is past, now or present
  if (hour) {
    if (currentHour == hour) {
      textareaEl.addClass("present")
    } else if (currentHour < hour) {
      textareaEl.addClass("future")
    } else {
      textareaEl.addClass("past")
    }
  }
});