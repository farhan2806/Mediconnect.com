AOS.init({
  duration: 700
});
AOS.init({
  disable: function () {
    var maxWidth = 1200;
    return window.innerWidth < maxWidth;
  }
});
$('.carousel').on('slide.bs.carousel', function (event) {
  var height = $(event.relatedTarget).height();
  var $innerCarousel = $(event.target).find('.carousel-inner');
  $innerCarousel.animate({
    height: height
  });
});
$(function () {
  $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
  trigger: 'focus'
})
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

window.onload = function () {
  const logo = document.querySelector('.left img');
  logo.style.animation = 'fadeInLeft 1s ease';
  logo.style.opacity = '1';
};

function bodyCheck() {
  console.log("here")
  window.location.href = 'booking_doc_form.php'
}
