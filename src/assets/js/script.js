


$(window).on('load', function() {
    
    
    // for vertical tabs
    (function($) {

        $('.collapsible-title').on('click', function() {
          $(this).addClass('is-active').siblings('.collapsible-title').removeClass('is-active');
        });
      
      })(jQuery);



    // PAGE LOADER
    $('.pre-load').stop().animate({ opacity: 0 }, 500, function() {
        $('.pre-load').css({ 'display': 'none' });
        $('body').css({ 'overflow-y': 'auto' });
    });


    // OWL
    let mainSlider = $('.main-slider .owl-carousel');
    if(mainSlider.length) {
        mainSlider.owlCarousel({
            items: 1,
            margin: 0,
            dotsEach: true,
            rtl: true,
            nav: false,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 6000
        });
    }


    let newsSlider = $('.news-slider .owl-carousel');
    if(newsSlider.length) {
        newsSlider.owlCarousel({
            items: 1,
            margin: 0,
            dotsEach: true,
            rtl: true,
            nav: false,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 6000
        });
    }


    let imagesSlider = $('.images-slider .owl-carousel');
    if(imagesSlider.length) {
        imagesSlider.owlCarousel({
            responsive:{
                0:{
                    items:1
                },
                700:{
                    items:2
                },
                1200:{
                    items:3
                }
            },
            margin: 20,
            dotsEach: true,
            rtl: true,
            nav: false,
            // loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 6000
        });
    }

});

$(function() {

    // MENU TOGGLE

    $('.mirror').click(function() {
        $('.navbar-collapse').removeClass('show');
        $('.dropdown-content').fadeOut();
    });


    // CHANGE LANGUAGE

    /*$('#changeLang a').click(function (e) {
        e.preventDefault();
        $('#changeLang a').removeClass('active');
        $(this).addClass('active');
        $('#langText').html($(this).html());
        switch($(this).attr('data-lang')) {
            case 'en':
                $('body').removeClass().addClass('en');
                $('#changeStyle').attr('href', 'css/style-ltr.css');
                break;
            case 'urd':
                $('body').removeClass().addClass('urdu');
                $('#changeStyle').attr('href', 'css/style-rtl.css');
                break;
            case 'sin':
                $('body').removeClass().addClass('sindhi');
                $('#changeStyle').attr('href', 'css/style-rtl.css');
                break;
        }
        $('.owl-carousel').trigger('refresh.owl.carousel');
    });*/


    // DROPDOWN

  


    // VIEW RANDOM IMAGES IN MEMBERS SECTION

    let imagesPath = './assets/images/members-pictures/';
    let imagesArray = [
        'ahmedrazashah.jpg','alinawaz.jpg','anthorny.jpg','aqadir.jpg','azra.jpg','bari.jpg','bijrani.jpg','farhat.jpg',
        'farukh.jpg','ghani.jpg','ghanwerali.jpg','ghazala.jpg','heer.jpg','hina.jpg','hizb.jpg','ikram.jpg','imtia.jpg',
        'kul.jpg','ll.jpg','madad.jpg','marvi.jpg','MrMirNadirAliKhanMagsi.jpg','MrSharjeelInamMemon.jpg','mukes.jpg',
        'mum.jpg','muna.jpg','naeem.jpg','nasira.jpg','nawab.jpg','nawabzada.jpg','nida.jpg','parveen.jpg','qasim.jpg',
        'rauf.jpg','RehanaLeghari.jpg','riaz.jpg','sadia.jpg','sadu.jpg','sagh.jpg','sajid.jpg','shaheen.jpg',
        'shanaz.jpg','shazia.jpg','shela.jpg','singh.jpg','sir.jpg','sohai.jpg','sohra.jpg','SyedQaimAliShah.jpg'

    ];

    let totalImages = imagesArray.length;

    $('.picture-frame').each(function () {
        let imageNumber = Math.round(Math.random()*(totalImages-1));
        $(this).find('img').attr('src', imagesPath + imagesArray[imageNumber]);
    });


    // P CHARACTERS LENGTH
    $('.image-overlay p').each(function () {
        $(this).text($(this).text().substring(0, 40) + ' ...');
    });

});