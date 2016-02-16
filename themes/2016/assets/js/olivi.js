$(document).ready(function () {
  $('#contact-box').hide();
  $('#list-area').hide();
  $('#search-input').focus();

  $('#contact-btn').click(function () {
    $('#contact-box').slideToggle('fast');
  });

  $('#switch-btn').click(function () {
    $('#list-area').slideToggle();
    $('#search-area').slideToggle('fast');

    if ($('#search-area').is(':visible')) {
      $('#search-input').focus();
    }
  });
});