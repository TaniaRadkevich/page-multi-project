function toggleMenu() {
    const menu = document.querySelector('.nav-list-header');
    menu.classList.toggle('active'); // Добавляем/удаляем класс "active"
}

new Swiper('.swiper',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    hashNavigation: {
        watchState:true,
    },
    keyboard: {
        enabled:true,
        onlyInVieweport:true,
        pageUpDown:true,
    },
    loop:true,
    effect:'fade',

});