$(document).ready(function () {
  $searchArea = $('#search-area');
  $listArea = $('#list-area');
  // $addedShows = $('.added-img');
  $areaSwitchBtn = $('#area-switch-btn');

  $listArea.hide();

  $areaSwitchBtn.click(function () {
    $listArea.slideToggle();
    $searchArea.slideToggle();
  });

  // $addedShows.click(function (event) {
  //   $(event.target).parent().remove();
  // });
});