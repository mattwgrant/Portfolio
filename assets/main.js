$("a").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        2500);
});