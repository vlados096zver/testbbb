$(document).ready(function() {

new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    slidesNavigation: true,
    controlArrows: false,
    navigation: true,
    slidesNavPosition: 'bottom',
  });

$(document).on('click', '.help__show', function(){
    $('.help__box').show();
    $(this).hide();
})


});
