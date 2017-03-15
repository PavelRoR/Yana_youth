$(function() {
    $('#first .trigger').on('click', function(event) {
        event.preventDefault();
        $('#modal_1').fadeIn(500);
    });
    $('#second .trigger').on('click', function(event) {
        event.preventDefault();
        $('#modal_2').fadeIn(500);
    });
    $('#third .trigger').on('click', function(event) {
        event.preventDefault();
        $('#modal_3').fadeIn(500);
    });
    $('#fourth .trigger').on('click', function(event) {
        event.preventDefault();
        $('#modal_4').fadeIn(500);
    });
    $('#fifth .trigger').on('click', function(event) {
        event.preventDefault();
        $('#modal_5').fadeIn(500);
    });
    $('#sixth .trigger').on('click', function(event) {
        event.preventDefault();
        $('#modal_6').fadeIn(500);
    });
    $('#seventh .trigger').on('click', function(event) {
        event.preventDefault();
        $('#modal_7').fadeIn(500);
    });
    $('.close').on('click', function(event) {
        event.preventDefault();
        $('.modal').fadeOut(500);
    });
});

$(function() {

    $(".video__img").click(function() {
        var dataYoutube = $(this).parents('.js-video').attr('data-youtube');
        $(this).parents('.js-video').html('<iframe src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" allowfullscreen></iframe>')
    });

});
$(function() {

    $(".video__img").click(function() {
        var dataYoutube = $(this).parents('.js-video').attr('data-youtube');
        $(this).parents('.js-video').html('<iframe src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" allowfullscreen></iframe>')
    });

});

$(function() {
    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});