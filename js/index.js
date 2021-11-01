new Swiper('.swiper',{
    navigation: {
    nextEl: '.portfolio__arrow_right',
    prevEl: '.portfolio__arrow_left',
    disabledClass:'portfolio__arrow_disable',
},
    breakpoints:{
        480:{
            grid:{
                fill: 'row',
                rows: 2
            }
        },
        768:{
        slidesPerView: 2,
        grid:{
            fill: 'row',
            rows: 2
            }
        }
    }
    });

$('.header__contacts-burger').click(() => {
    $('.header__contacts').slideToggle();
})

/* Вывод модального окна*/
$('.present__order-btn').click(() => {
    $('.page__overlay_modal').fadeIn(400).css('display','flex')
})
/*Закрываем  модальное окно */
$('.modal__close').click(() =>{
    $('.page__overlay_modal').fadeOut(400)
})