$(document).ready(function () {
  $searchArea = $('#searchArea');
  $listArea = $('#listArea');
  $searchListSwitchBtn = $('#searchListSwitchBtn');

  $listArea.hide();

  $searchListSwitchBtn.click(function () {
    $listArea.slideToggle('slow');
    $searchArea.slideToggle('slow');
  });
});