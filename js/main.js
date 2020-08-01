$(document).ready(() => {

    $('.category').click((e) => {
        let currentElemennt = $(e.target);
        $('.product-container').hide();
        let id = currentElemennt.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        currentElemennt.addClass('active');

        $('#' + id + ' .products').slick('refresh');
        $('#' + id + ' .products-nav').slick('refresh');
    });

    $('#burgers-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#burgers-container .products-nav'
    });
    $('#burgers-container .products-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '#burgers-container .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('#fries-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#fries-container .products-nav'
    });
    $('#fries-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#fries-container .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('#souces-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#souces-container .products-nav'
    });
    $('#souces-container .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#souces-container .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('#drinks-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#drinks-container .products-nav'
    });
    $('#drinks-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#drinks-container .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('#reviews').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });

    $('.open-modal').click(() => {
        $('#reservation-container').css('display', 'flex');
    });
    $('#reservation-cancel-close, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();
        }
    });

    $('#reserve-button > button').click(() => {
        let name = $('#name');
        let count = $('#count');
        let phone = $('#phone');
        let time = $('#time');

        if (name.val() && count.val() && time.val() && time.val()){

            $.ajax({
               type:'post',
               url:'mail.php',
               data:'name=' + name.val() + '&count=' + count.val() + '&phone=' + phone.val() + '&time' + time.val(),
               success: () =>{
                   $('#reservation-sent').show();
                   $('#reservation-content').hide();
               },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования.Свяжитесь пожалуйста,по номеру телефона.')
                }
            });
        }else{
            $('#reserve-error').show();
        }
    });

});


