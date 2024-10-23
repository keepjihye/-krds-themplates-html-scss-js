// .all_menu클릭하면 #nav_all에 active 추가하기
$('.all_menu').click(function () {
    $('#nav-all').addClass("active");
    $('.nav-all__wrap').addClass("active");
});

$('#nav-all').click(function () {
    $('#nav-all').removeClass('active')
    $('.nav-all__wrap').removeClass("active");;
});

$("#gnb").mouseenter(function () {
    $('header').addClass("active");
});
$("#gnb").mouseleave(function () {
    $('header').removeClass("active");
});


$(".lang").on({
    click: function () {
        $(".lang__lst").slideDown();
    },
    mouseleave: function () {
        $(".lang__lst").slideUp();
    }
})