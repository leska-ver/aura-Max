document.addEventListener('DOMContentLoaded', function() {

    
  //Для одного Слайдера
  // const swiper = new Swiper('.new__slider', {
  //   loop: true,
  //   spaceBetween: 20,
  //   slidesPerView: 1,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + '">' + (index + 1) + "</span>";
  //     },
  //   },
  // });


  //Для двух Слайдеров - new
  //Слайдер-1
  const swiper1 = new Swiper('.new__slider_none-777', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination-1",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  }); 
  
  //Слайдер-2
    const swiper2 = new Swiper('.new__slider_clone-777', {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    }); 








  


  



});