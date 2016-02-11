$(document).ready(function () {
  $searchArea = $('#search-area');
  $listArea = $('#list-area');
  $areaSwitchBtn = $('#area-switch-btn');

  $listArea.hide();
  $('#search-results').hide();

  $areaSwitchBtn.click(function () {
    $listArea.slideToggle();
    $searchArea.slideToggle();
  });

  $('#search-input').keyup(function () {
    if ($('#search-results').is(':hidden')) {
      $('#search-results').fadeIn();
    }
    else if ($('#search-input').val().length === 0) {
      $('#search-results').hide();
    }
  });
});