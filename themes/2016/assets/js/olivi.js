$(document).ready(function () {
  $('#list-area').hide();
  $('#search-results').hide();
  $('#contato-box').hide();

  $('#area-switch-btn').click(function () {
    $('#list-area').slideToggle();
    $('#search-area').slideToggle();

    $(this).toggleClass('icon fa-th fa-3x');
    $(this).toggleClass('icon fa-search fa-3x');
  });

  $('#search-input').keyup(function () {
    if ($('#search-results').is(':hidden')) {
      $('#search-results').fadeIn();
    }
    else if ($(this).val().length === 0) {
      $('#search-results').hide();
    }
  });

  $('#contato-btn').click(function () {
    $('#contato-box').slideToggle();
  });
});