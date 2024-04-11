const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const searchInp = document.querySelector('.search__inp');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('clickedBtn');
    menu.classList.toggle('showMenu');
});


const selectHead = document.querySelectorAll('.select-head');
const selectLists = document.querySelectorAll('.select-body li');


selectHead.forEach(head => {
    head.addEventListener('click', () => {
        head.parentElement.classList.toggle('showCountSelect')
    });
})

selectLists.forEach(list => {
    list.addEventListener('click', () => {
        list.parentElement.parentElement.classList.toggle('showCountSelect');

        list.parentElement.previousElementSibling.children[0].textContent = list.textContent
    });
});


searchInp.addEventListener('input', () => {
    if(searchInp.value.length > 2) {
        searchInp.parentElement.nextElementSibling.classList.remove('d-none')
    } else {
        searchInp.parentElement.nextElementSibling.classList.add('d-none')
    }
})

results = new Swiper('.swiper-results', {
    loop: false,
    spaceBetween: 20,
    navigation: {
      nextEl: '.results-next',
      prevEl: '.results-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2, 
        spaceBetween: 6,
        grid: {
            rows: 2,
            fill: 'row'
          },
      },
      767: {
        slidesPerView: 3, 
        spaceBetween: 10,
        grid: {
            rows: 2,
            fill: 'row'
          },
      },
      991: {
        slidesPerView: 4, 
        spaceBetween: 18,
        grid: {
            rows: 2,
            fill: 'row'
          },
      },
  }
});