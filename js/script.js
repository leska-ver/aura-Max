document.addEventListener('DOMContentLoaded', function() {

    
  //Слайдер
  const swiper = new Swiper('.new__slider', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });



  //Другие аукционы .auction-card__item//
  const list = document.getElementById('auction-card__list_js');
  const moreButton = document.getElementById('button-hidde');
  moreButton.addEventListener('click', function () {
    list.classList.toggle('full');
  });




});