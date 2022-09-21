

// navbar scrolling background
$(window).on("scroll",function () {

    var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar"),
        navbloglogo = $(".blog-nav .logo> img"),
        logo = $(".navbar .logo> img");

    if(bodyScroll > 100){
        navbar.addClass("nav-scroll");
        logo.attr('src', 'images/logo/logo-dark.png');

    }else{
        navbar.removeClass("nav-scroll");
        logo.attr('src', 'images/logo/logo-light.png');
        navbloglogo.attr('src', 'images/logo/logo-dark.png');
    }
});
$('.testimonial-slider').owlCarousel({
    responsiveClass:true,
    margin:20,
    dots: false,
    autoWidth:false,
    nav: true,
    autoplay:true,
    navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
    autoplayTimeout: 3000,
    autoplayStopOnLast: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:2
        },
        1200:{
            items:2
        }

    }

});

$('.news-slider').owlCarousel({
    loop:true,
    dots:false,
    nav:false,
    margin: 30,
    autoplay:true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    nav:false,
    margin: 30,
    autoplay:true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


//LightBox / Fancybox
if($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        helpers : {
            media : {}
        }
    });
}

// YouTubePopUp
jQuery("a.bla-1").YouTubePopUp();

//
var switcher = $('#switcher');

switcher.change(function(event) {
    
    var monthlyPlan = $('#monthly-plan');
    var yearlyPlan = $('#yearly-plan');
    var pricingMonthly = $('#filt-monthly');
    var pricingYearly = $('#filt-yearly');

    if ($(this).is(':checked')) {

        pricingMonthly.removeClass('active');
        monthlyPlan.removeClass('active');
        pricingYearly.addClass('active');
        yearlyPlan.addClass('active');
    }else{
       pricingMonthly.addClass('active');
       pricingYearly.removeClass('active');
       yearlyPlan.removeClass('active'); 
       monthlyPlan.addClass('active');
    }
});


//back to top
$(window).scroll(function(){
    if ($(this).scrollTop()>300) {
        $('#scroll').fadeIn();
    }else{
        $('#scroll').fadeOut();
    }
});

//
if($('.tabs-box').length){
    $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));
        
        if ($(target).is(':visible')){
            return false;
        }else{
            target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
            target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
            $(target).fadeIn(300);
            $(target).addClass('active-tab');
        }
    });
}