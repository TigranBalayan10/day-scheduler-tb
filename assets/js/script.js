var currentDate = moment().format('MMMM Do YYYY');
var currentDateP = $('#currentDay').text(currentDate);
$('.jombotron').append(currentDateP);

$(".description").on("textarea", function() {
    // highlight textarea
    $("#description").trigger("focus");
  });;


