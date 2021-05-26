
// JavaScript Document
jQuery(document).ready(function ($) {
    'use strict';

// jQuery for page scrolling feature - requires jQuery Easing plugin
        $('.page-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

// Scroll Plugin
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 600) {
            $('.sticky-navigation').animate({"top": '0', "opacity": '1'}, 0);
        } else {
            $('.sticky-navigation').animate({"top": '-100', "opacity": '0'}, 0);
        }
        return false;
    });

}); // end Document.ready
