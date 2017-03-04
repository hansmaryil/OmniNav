$(document).ready(function () {
    function collapseNavbar() {
        $(".navbar").offset().top > 50 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
    }
    $(window).scroll(collapseNavbar), $(document).ready(collapseNavbar), $(function() {
        $("a.page-scroll").bind("click", function(e) {
            var divID = '#' + this.getAttribute('data-target');
            if(divID != '#page-top') {
                var scroll_point = $(divID).offset().top - $("#fixed-navbar").outerHeight(true);
            }
            else {
                var scroll_point = $(divID).offset().top 
            }
            $("html, body").stop().animate({
                scrollTop: scroll_point
            }, 1000), e.preventDefault()
        })
    }), $(".navbar-collapse ul li a").click(function() {
        $(this).closest(".collapse").collapse("toggle")
    });

});
