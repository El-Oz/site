// Add /en to links if site in english
jQuery(document).ready(function ($) {
    if (window.location.pathname.split('/')[1] === 'en') {
        var t;

        $.each($('#page').find('a'), function (i, el) {
            if (el.pathname && el.pathname.split('/')[1] != 'en') {
                // dev localhost
                t = el.pathname;
                t = t.split('/');
                t.splice(1, 0, 'en');
                t = t.join('/');
                el.href = el.protocol + '//' + el.hostname + t + el.search + el.hash;
                //el.href = el.protocol + '//' + el.hostname + '/en' + el.pathname + el.hash + el.search;
            }
        });

        var LangImg = $('.trp-language-switcher-container').find('img[title="العربية"]'), t;
        t = LangImg.parents('a')[0].pathname.split('/');
        t.splice(1, 1);
        t = t.join('/');
        // local test 2 , live 1
        LangImg.parents('a').attr("href", t);
    }

    var elem, elemImg;
    if ($('.woocommerce-product-header')[0]) {
        $.each($('.woocommerce-product-header'), function (i, el) {
            elem = $(el);
            elemImg = elem.find('img');
            if (elemImg.height() < elem.height()) {
                elem.css({
                    backgroundImage: 'url("' + elemImg[0].src + '")',
                    backgroundSize: 'cover'
                });
                elemImg.css('display', 'none');
            }
        })
    }

    if ($('.child-cats-list')[0]) {
        $.each($('.child-cats-list').find('a'), function (i, el) {
            elem = $(el);
            elemImg = elem.find('img');
            elem.css({
                backgroundImage: 'url("' + elemImg[0].src + '")',
                backgroundSize: 'cover'
            });
            elemImg.css('opacity', '0');
        })
    }

    var sc = $('.swiper-container');

    if (sc[0]) {
        setTimeout(function() {
            var bulletHeight = $('.swiper-pagination').outerHeight();
            $('.swiper-container').css({
                paddingBottom: bulletHeight + 30 + 'px'
            });
        }, 2000);
    }

    // fix menu on blog page
    var activePage = window.location.pathname.split('/')[1] === "en" ? window.location.pathname.split('/')[2] : window.location.pathname.split('/')[1];

    if (activePage === 'blog') {
        $('#menu-item-5886').find('li').removeClass('current-menu-item');
    }

});