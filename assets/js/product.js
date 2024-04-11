products = new Swiper('.swiper-products', {
    loop: false,
    spaceBetween: 20,
    navigation: {
      nextEl: '.products-next',
      prevEl: '.products-prev',
    },
    breakpoints: {
      0: {
          slidesPerView: 2,
          grid: {
              rows: 4,
              fill: 'row'
            },
      },
      992: {
        slidesPerView: 3, 
        grid: {
            rows: 4,
            fill: 'row'
          },
      },
      1200: {
        slidesPerView: 4, 
        grid: {
            rows: 3,
            fill: 'row'
          },
      },
  }
});
