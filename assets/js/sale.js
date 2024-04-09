const sale_products = new Swiper('.swiper-sale-products', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 6,
    navigation: {
      nextEl: '.sale-products-next',
      prevEl: '.sale-products-prev',
    },

});

const sale = new Swiper('.swiper-sale', {
  loop: false,
  navigation: {
    nextEl: '.sale-next',
    prevEl: '.sale-prev',
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: 'row'
          },
    },
    767: {
      slidesPerView: 3, 
      spaceBetween: 45,
      grid: {
          rows: 3,
          fill: 'row'
        },
    },
}

});