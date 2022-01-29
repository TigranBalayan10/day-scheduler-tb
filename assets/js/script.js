var currentDate = moment().format('dddd MMMM Do YYYY');
var currentDateP = $('#currentDay').text(currentDate);
$('.jombotron').append(currentDateP);
$(".description").on("click", function () {
  // highlight textarea
  $("#description").trigger("focus");
});
