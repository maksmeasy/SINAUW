$(function () {

  $('.questions__accord-link').on('click', function (e) {
    if ($(this).hasClass('questions__accord-link--active')) {
        $(this).removeClass('questions__accord-link--active')
        $(this).children('.questions__accord-text').slideUp()
    }
    else {
        $('.questions__accord-link').removeClass('questions__accord-link--active')
        $('.questions__accord-text').slideUp()
        $(this).addClass('questions__accord-link--active')
        $(this).children('.questions__accord-text').slideDown()
    }
  })

})