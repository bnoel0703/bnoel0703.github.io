// JavaScript Document
$(document).ready(function() {
  $('.column-icon').animate({opacity: 1}, 2000);
});

$('modal-button').on("click", (function() {
  $('.slidingAlert').delay(3000).slideUp(400);
}));
