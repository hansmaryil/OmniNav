$('.navbar-scroll').click(function () {
    var divID = '#' + this.id;
    $('html, body').animate({
        scrollTop: $(divID).offset().top
    }, 2000);
});