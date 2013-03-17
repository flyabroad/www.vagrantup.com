// add dropshadow to nav on scroll
$(document).ready(function(){
    $(document).scroll(function() {
        var top = $(document).scrollTop();
        if (top > 0) $('nav').addClass("drop-shadow");
        if (top === 0) $('nav').removeClass("drop-shadow");
    });
});

// open/close documentation side nav on small screens
$(document).ready(function(){
    $(".toggle").click(function() {
        $(".sidebar-nav ul").slideToggle('slow');
    });
});

// Redirect to the proper checkout screen for quantity
$(document).ready(function() {
    $("#buy-fusion").click(function() {
        var seats = parseInt($("#seats").val(), 10);
        if (isNaN(seats)) {
            alert("The number of seats you want to purchase must be a number.");
            return;
        } else if (seats <= 0) {
            alert("The number of seats you want must be greater than zero.");
            return;
        }

        window.location = "http://shopify.hashicorp.com/cart/279661674:" + seats;
    });
});
