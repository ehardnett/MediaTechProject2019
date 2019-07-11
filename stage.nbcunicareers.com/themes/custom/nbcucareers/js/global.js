/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

    'use strict';

    Drupal.behaviors.bootstrap_barrio_subtheme = {
        attach: function(context, settings) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('body').addClass("scrolled");
                } else {
                    $('body').removeClass("scrolled");
                }
            });

        }
    };

})(jQuery, Drupal);
// Load more and show less in Brnd page
(function($) {
    //var x=24;
    // execute on window resize
    function checkWidth() {
        var x = 16;
        /* var x= 24;
        var windowsize = $(window).width();
		console.log('windowsize size:'+windowsize );
        if (windowsize < 481) {
			var x=40;
		} else if (windowsize < 992) {
            //if the window is greater than 440px wide.
			var x=12;
        } else {
			var x=24;
		} */

        return x;

    }
    // Execute on load
    var x = checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    console.log('start console');
    var size_li = $(".brand-display-page div.brand-col-sep").length;
    console.log('total size:' + size_li);
    console.log('x size:' + x);
    //var x=24;
    //var count_item=24;
    var count_item = 16;
    $('div.brand-display-page div.brand-col-sep:lt(' + x + ')').show();
    if (x >= size_li) {
        $('div.brand-display-page #loadMore').hide();
        $('div.brand-display-page #showLess').hide();
    }
    $('div.brand-display-page #loadMore').click(function() {
        x = (x + count_item <= size_li) ? x + count_item : size_li;
        console.log('load more size:' + size_li);
        console.log('load more x:' + x);
        $('.brand-display-page div.brand-col-sep:lt(' + x + ')').show();
        /* if(x <= count_item){ // display show less button
        	$('div.brand-display-page #showLess').hide();
        } else {
        	$('div.brand-display-page #showLess').show();
        } */
        if (x >= size_li) { // display load more button
            $('div.brand-display-page #loadMore').hide();
            $('div.brand-display-page #showLess').show();
        } else {
            $('div.brand-display-page #loadMore').show();
        }
    });
    $('div.brand-display-page #showLess').click(function() {
        if (x % count_item != 0) {
            x = (x - count_item <= count_item) ? count_item : x - (x % count_item);
        } else {
            x = (x - count_item <= count_item) ? count_item : x - count_item;
        }

        console.log('show less size:' + size_li);
        console.log('show less x:' + x);
        $('.brand-display-page div.brand-col-sep').not(':lt(' + x + ')').hide();
        /* if(x >= size_li){
        	//$('div.brand-display-page #loadMore').hide();
        }else{
        	$('div.brand-display-page #loadMore').show();
        } */
        if (x <= count_item) {
            $('div.brand-display-page #showLess').hide();
            $('div.brand-display-page #loadMore').show();
        } else {
            $('div.brand-display-page #showLess').show();
        }
    });
    console.log('end console');

    /*
	//Brightcove Video Pause for program page
	$("#mymodal").on("hidden.bs.modal", function () {
    // put your default event here		
		var val=$('#mymodal video').attr('id');		
			videojs(val).pause();
	});
	$("#mymodal").on("shown.bs.modal", function () {
    // put your default event here		
		var val=$('#mymodal video').attr('id');	
		videojs(val).play();
	});
	
	$("#mymodal_one").on("shown.bs.modal", function () {
    // put your default event here		
		var val=$('#mymodal_one video').attr('id');		
		videojs(val).play();
	});
	$("#mymodal_one").on("hidden.bs.modal", function () {
    // put your default event here		
		var val=$('#mymodal_one video').attr('id');		
			videojs(val).pause();
	});*/

    $(".scrollTo").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: ($(target).offset().top)
        }, 2000);
    });

    if ($(window).width() > 992) {
        if ($('.path-programs').length) {
            var width = '64%';
            var height = '36%';
            if ($('.secondary_banner_section').length) {
                $('.secondary_banner_img').css({
                    width: width,
                    height: height
                });
                $('.secondary_banner_content').css({
                    width: height,
                    height: height
                });
            }
        }
        if ($('.path-benefits').length) {
            var width = '64%';
            var height = '36%';
            if ($('.bottom-banner-section-sep').length) {
                $('.program-image-top').css({
                    width: width
                });
                $('.program-image-bottom').css({
                    width: height
                });
            }
        }
        if ($('.tt-view-benefits_tiles').length) {
            var width = '64%';
            var height = '36%';
            if ($('.bottom-banner-section-sep').length) {
                $('.program-image-top').css({
                    width: width
                });
                $('.program-image-bottom').css({
                    width: height
                });
            }
        }
        if ($('.node--type-specialized-programs').length) {
            var width = '64%';
            var height = '36%';
            if ($('.program-img-container').length) {
                $('.program-image-top').css({
                    width: width
                });
                $('.program-image-bottom').css({
                    width: height
                });
            }
        }
        if ($('.path-faq').length) {
            var width = '64%';
            var height = '36%';
            if ($('.secondary_banner_section').length) {
                $('.second_img').css({
                    width: width,
                    height: height
                });
                $('.second_content').css({
                    width: height,
                    height: height
                });
            }
        }
    }
    $(window).resize(function() {
        if ($(window).width() > 992) {
            var width = '64%';
            var height = '36%';
            if ($('.path-programs').length) {
                if ($('.secondary_banner_section').length) {
                    $('.secondary_banner_img').css({
                        width: width,
                        height: height
                    });
                    $('.secondary_banner_content').css({
                        width: height,
                        height: height
                    });
                }
            }
            if ($('.path-benefits').length) {
                if ($('.bottom-banner-section-sep').length) {
                    $('.program-image-top').css({
                        width: width
                    });
                    $('.program-image-bottom').css({
                        width: height
                    });
                }
            }
            if ($('.tt-view-benefits_tiles').length) {
                if ($('.bottom-banner-section-sep').length) {
                    $('.program-image-top').css({
                        width: width
                    });
                    $('.program-image-bottom').css({
                        width: height
                    });
                }
            }
            if ($('.node--type-specialized-programs').length) {
                if ($('.program-img-container').length) {
                    $('.program-image-top').css({
                        width: width
                    });
                    $('.program-image-bottom').css({
                        width: height
                    });
                }
            }
            if ($('.path-faq').length) {
                if ($('.secondary_banner_section').length) {
                    $('.second_img').css({
                        width: width,
                        height: height
                    });
                    $('.second_content').css({
                        width: height,
                        height: height
                    });
                }
            }
        }
    });

    /*//Brightcove Video Pause for Home page
	$("#video_popup").on("hidden.bs.modal", function () {
    // put your default event here		
		var val=$('#video_popup video').attr('data-video-id');		
			videojs(val).pause();
	});
	$("#video_popup").on("shown.bs.modal", function () {
    // put your default event here
		var val=$('#video_popup video').attr('data-video-id');
		videojs(val).play();
	});
	*/

    /*function iosfullscreen(vid) {
	  videojs.getPlayer(vid).ready(function() {
		var myPlayer = this,
			fullScreenElement = document.getElementsByClassName("vjs-fullscreen-control")[0];
		if (videojs.browser.IS_IOS ) {
			fullScreenElement.parentNode.removeChild(fullScreenElement);
		}
	  });
  }
  $(".path-frontpage video").each(function() {
	  var vid = $(this).attr('data-video-id');
	  iosfullscreen(vid)
  });*/

    /*$(".path-frontpage .secondary_banner_img").on( "click", function() {
      $('body').css('overflow','visible');
    });*/
    /*$(function(){
      $(window).scroll(function(){
        if($( ".path-frontpage .modal.show" ).length){
          $('.path-frontpage .modal .modal-header .close').trigger('click');
        }
      });
    });*/

    /*$(window).scroll(function() {
    	for (var i = 0; i < Object.keys(videojs.players).length; i++) {
    	  videojs(Object.keys(videojs.players)[i]).pause();
    	}		
    });*/

    /*$(window).scroll(function(){
    	if (!$('body').hasClass("modal-open")) {	
    		//$('.modal .close').trigger('click');
    	}
    });*/

    $(window).on("shown.bs.modal", function(e) {
        // put your default event here
        //$('body').removeClass('modal-open');
        var val = "";
        if ($('#mymodal .modal-content .video-js').length && $('#mymodal .modal-content .video-js').is(":visible")) {
            val = $('#mymodal .modal-content .video-js .vjs-tech').attr('id');
            videojs(val).play();
        } else if ($('#mymodal_one .modal-content .video-js').length && $('#mymodal_one .modal-content .video-js').is(":visible")) {
            val = $('#mymodal_one .modal-content .video-js .vjs-tech').attr('id');
            videojs(val).play();
        } else if ($('#video_popup .modal-content .video-js').length && $('#video_popup .modal-content .video-js').is(":visible")) {
            val = $('#video_popup .modal-content .video-js .vjs-tech').attr('data-video-id');
            videojs(val).play();
        }
        console.log(val);
    });
    $(window).on("hidden.bs.modal", function(e) {
        // put your default event here
        var val = "";
        if ($('#mymodal .modal-content .video-js').length) {
            val = $('#mymodal .modal-content .video-js .vjs-tech').attr('id');
            videojs(val).pause();
        }
        if ($('#mymodal_one .modal-content .video-js').length) {
            val = $('#mymodal_one .modal-content .video-js .vjs-tech').attr('id');
            videojs(val).pause();
        }
        if ($('#video_popup .modal-content .video-js').length) {
            val = $('#video_popup .modal-content .video-js .vjs-tech').attr('data-video-id');
            videojs(val).pause();
        }
        console.log(val);
    });

    /* toggle */
    $('.navbar-toggler').click(function() {
        $('#CollapsingNavbar').toggleClass('show');
        //$('#CollapsingNavbar.show .navigation').height($(document).height());
    });
    $(window).resize(function() {
        resize();
    });

    /* Specialized program page active title */
    jQuery('.program-top-banner li').each(function(i) {
        var listIDs = jQuery(this).find('a').attr('href');
        if (window.location.href.indexOf(listIDs) > -1) { //there should not be quote.
            jQuery(this).addClass('active');
        }
    });

    var activeCount = 0;
    jQuery('.view-display-id-privacymenu li').each(function(i) {
        var listIDs = jQuery(this).find('a').attr('href');
        if (window.location.href.indexOf(listIDs) > -1) { //there should not be quote.
            jQuery(this).find('span').addClass('selected');
            activeCount++;
        }
    });
    if (activeCount == 0) {
        jQuery('.view-display-id-privacymenu li:first-child span').addClass('selected');
    }

    /* Privacy poilcy page  */
    jQuery(".view-display-id-privacymenu li a").on('click', function(e) {
        $(".view-display-id-privacymenu li span").removeClass('selected');
        $(this).parent().addClass('selected');
    });

    $('.search-form-wrapper .search-form .fa-arrow-right, .search-form-wrapper .search-form .fa-search').click(function() {
        if ($('.search-form-wrapper .search-form input[name=keyword]').val()) {
            $('.search-form-wrapper form').trigger('submit');
        }
    });
    $('.node--type-specialized-programs .program-top-banner .item-list ul').find('li').each(function() {
        var url = $(this).find('a').attr("href") + "/#specialized-program-content";
        $(this).find('a').attr('href', url);
    });

    if ($('.path-benefits .tt-view-benefits_tiles .with-benefits-tiles-background img.img-fluid').length) {
        var tiles_bg = $('.path-benefits .tt-view-benefits_tiles .with-benefits-tiles-background img.img-fluid').attr('src');
        $('.path-benefits .tt-view-benefits_tiles .with-benefits-tiles-background').css("background-image", "url(" + tiles_bg + ")");

    };

})(jQuery);
/**FAQ Filter **/
jQuery(document).ready(function() {
    jQuery("#faq-search-input").on("keyup", function() {
        var value = jQuery(this).val().toLowerCase();
        jQuery("#accordion .accordion_search").filter(function() {
            jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    resize();
});

jQuery('#accordionmobile').find('.collapse').on('show.bs.collapse', function() {
    jQuery(this).parent().find(".card-header p i").removeClass("fa-chevron-down").addClass("fa-chevron-up").css('color', '#F06E37');
}).on('hide.bs.collapse', function() {
    jQuery(this).parent().find(".card-header p i").removeClass("fa-chevron-up").addClass("fa-chevron-down").css('color', '#A7A9AC');
});
jQuery('button.navbar-toggler').click(function() {
    var current = jQuery(this);
    //jQuery('a.navbar-brand').css('max-width','90%');
    jQuery('#CollapsingNavbar').css('z-index', '9999');
    /*jQuery('#navbar-main a.navbar-brand').css({"z-index":"1000","padding-left":"15px !important"});*/
    /*if(jQuery('#block-nbcucareers-main-menu a.navbar-brand').length == 0 ) {
    	jQuery('#navbar-main a.navbar-brand').clone().prependTo('#block-nbcucareers-main-menu');	
    }*/
    jQuery('#block-nbcucareers-main-menu').height(jQuery(window).height() - 25);
    jQuery('#block-nbcucareers-main-menu').addClass('position-fixed');
    jQuery('#navbar-main').addClass('invisible');
    jQuery('html, body').addClass('position-fixed');
    jQuery("#navbar-main").css('cssText', 'background-color: #EEEEEE !important');
    jQuery("#navbar-main .navbar-brand, #navbar-main .navbar-toggler-right").addClass('d-none');
    jQuery('#block-nbcucareers-main-menu a.navbar-brand').removeClass('d-none');
    jQuery('.mobile-navbar-brand').removeClass('d-none');
    setTimeout(function() {
        if (jQuery('#CollapsingNavbar').hasClass('show')) {
            jQuery('body').css('overflow', 'hidden');
        } else {
            jQuery('body').css('overflow', 'auto');
        }
    }, 300);
    if (jQuery('body').hasClass('user-logged-in')) {
        jQuery('.user-logged-in').css('padding-top', '0px');
    }
});

jQuery('#block-nbcucareers-main-menu .nav-link').click(function() {
    if (jQuery(window).width() < 992) {
        jQuery(this).parent().css("background", "#dadada");
        jQuery(this).css("color", "#0079c0");
        location.href = jQuery(this).attr('href');
    }
});

function closeMenuItem() {
    jQuery('.navigation').css({
        '-webkit-transition-delay': '0ms',
        'transition-delay': '0ms',
        '-webkit-transition-duration': '700ms',
        'transition-duration': '700ms'
    });
    jQuery('.navigationParent').css({
        '-webkit-transition-delay': '200ms',
        'transition-delay': '200ms',
        '-webkit-transition-duration': '800ms',
        'transition-duration': '800ms'
    });
    jQuery('button.navbar-toggler').trigger('click');
    //jQuery('a.navbar-brand').css('max-width','100%');
    jQuery("#navbar-main").css('cssText', 'background-color: #FFFFFF !important');
    jQuery("#navbar-main .navbar-brand, #navbar-main .navbar-toggler-right").removeClass('d-none');
    jQuery('#navbar-main').removeClass('invisible');
    jQuery('#block-nbcucareers-main-menu a.navbar-brand').addClass('d-none');
    jQuery('.mobile-navbar-brand').addClass('d-none');
    jQuery('#block-nbcucareers-main-menu').removeClass('position-fixed');
    jQuery('html, body').removeClass('position-fixed');
    jQuery('#block-nbcucareers-main-menu').height("");
    setTimeout(function() {
        jQuery('.navigation').css({
            '-webkit-transition-delay': '200ms',
            'transition-delay': '200ms',
            '-webkit-transition-duration': '800ms',
            'transition-duration': '800ms'
        });
        jQuery('.navigationParent').css({
            '-webkit-transition-delay': '0ms',
            'transition-delay': '0ms',
            '-webkit-transition-duration': '700ms',
            'transition-duration': '700ms'
        });
    }, 300);
    if (jQuery('body').hasClass('user-logged-in')) {
        jQuery('.user-logged-in').css('padding-top', '39px');
    }
    setTimeout(function() {
        jQuery('#CollapsingNavbar').css('z-index', '0');
        //jQuery('#navbar-main a.navbar-brand').css({'z-index':'100','padding-left':'20px !important'});
    }, 1000);
}


/** Text Slide/scrol animate **/

jQuery(document).ready(function($) {
    //set animation timing
    var animationDelay = 2500,
        //loading bar effect
        barAnimationDelay = 3800,
        barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
        //letters effect
        lettersDelay = 50,
        //type effect
        typeLettersDelay = 150,
        selectionDuration = 500,
        typeAnimationDelay = selectionDuration + 800,
        //clip effect 
        revealDuration = 600,
        revealAnimationDelay = 1500;

    initHeadline();


    function initHeadline() {
        //insert <i> element for each letter of a changing word
        singleLetters($('.cd-headline.letters').find('b'));
        //initialise headline animation
        animateHeadline($('.cd-headline'));
    }

    function singleLetters($words) {
        $words.each(function() {
            var word = $(this),
                letters = word.text().split(''),
                selected = word.hasClass('is-visible');
            for (i in letters) {
                if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
            }
            var newLetters = letters.join('');
            word.html(newLetters).css('opacity', 1);
        });
    }

    function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function() {
            var headline = $(this);

            if (headline.hasClass('loading-bar')) {
                duration = barAnimationDelay;
                setTimeout(function() {
                    headline.find('.cd-words-wrapper').addClass('is-loading')
                }, barWaiting);
            } else if (headline.hasClass('clip')) {
                var spanWrapper = headline.find('.cd-words-wrapper'),
                    newWidth = spanWrapper.width() + 10
                spanWrapper.css('width', newWidth);
            } else if (!headline.hasClass('type')) {
                //assign to .cd-words-wrapper the width of its longest word
                var words = headline.find('.cd-words-wrapper b'),
                    width = 0;
                words.each(function() {
                    var wordWidth = $(this).width();
                    if (wordWidth > width) width = wordWidth;
                });
                headline.find('.cd-words-wrapper').css('width', width);
            };

            //trigger animation
            setTimeout(function() {
                hideWord(headline.find('.is-visible').eq(0))
            }, duration);
        });
    }

    function hideWord($word) {
        var nextWord = takeNext($word);

        if ($word.parents('.cd-headline').hasClass('type')) {
            var parentSpan = $word.parent('.cd-words-wrapper');
            parentSpan.addClass('selected').removeClass('waiting');
            setTimeout(function() {
                parentSpan.removeClass('selected');
                $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
            }, selectionDuration);
            setTimeout(function() {
                showWord(nextWord, typeLettersDelay)
            }, typeAnimationDelay);

        } else if ($word.parents('.cd-headline').hasClass('letters')) {
            var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
            hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
            showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

        } else if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({
                width: '2px'
            }, revealDuration, function() {
                switchWord($word, nextWord);
                showWord(nextWord);
            });

        } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
            $word.parents('.cd-words-wrapper').removeClass('is-loading');
            switchWord($word, nextWord);
            setTimeout(function() {
                hideWord(nextWord)
            }, barAnimationDelay);
            setTimeout(function() {
                $word.parents('.cd-words-wrapper').addClass('is-loading')
            }, barWaiting);

        } else {
            switchWord($word, nextWord);
            setTimeout(function() {
                hideWord(nextWord)
            }, animationDelay);
        }
    }

    function showWord($word, $duration) {
        if ($word.parents('.cd-headline').hasClass('type')) {
            showLetter($word.find('i').eq(0), $word, false, $duration);
            $word.addClass('is-visible').removeClass('is-hidden');

        } else if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({
                'width': $word.width() + 10
            }, revealDuration, function() {
                setTimeout(function() {
                    hideWord($word)
                }, revealAnimationDelay);
            });
        }
    }

    function hideLetter($letter, $word, $bool, $duration) {
        $letter.removeClass('in').addClass('out');

        if (!$letter.is(':last-child')) {
            setTimeout(function() {
                hideLetter($letter.next(), $word, $bool, $duration);
            }, $duration);
        } else if ($bool) {
            setTimeout(function() {
                hideWord(takeNext($word))
            }, animationDelay);
        }

        if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
            var nextWord = takeNext($word);
            switchWord($word, nextWord);
        }
    }

    function showLetter($letter, $word, $bool, $duration) {
        $letter.addClass('in').removeClass('out');

        if (!$letter.is(':last-child')) {
            setTimeout(function() {
                showLetter($letter.next(), $word, $bool, $duration);
            }, $duration);
        } else {
            if ($word.parents('.cd-headline').hasClass('type')) {
                setTimeout(function() {
                    $word.parents('.cd-words-wrapper').addClass('waiting');
                }, 200);
            }
            if (!$bool) {
                setTimeout(function() {
                    hideWord($word)
                }, animationDelay)
            }
        }
    }

    function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function takePrev($word) {
        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }

    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }

    /** Location Continent Tab **/

    (function($) {
        //Attach this new method to jQuery

        $.fn.extend({

            //This is where you write your plugin's name
            champ: function(options) {
                //Iterate over the current set of matched elements

                var defaults = {
                    selector: "tab_wrapper",
                    plugin_type: "tab",
                    side: "",
                    //responsive: "true",
                    active_tab: "1",
                    controllers: "false",
                    ajax: "false",
                    multiple_tabs: "false",
                    show_ajax_content_in_tab: "false",
                    content_path: "false"
                }


                var obj = $.extend(defaults, options);

                var li_rel = 1,
                    div_rel = 1;

                return this.each(function() {

                    var plugin_type = obj.plugin_type;
                    var side = obj.side;
                    var active_tab = obj.active_tab;
                    var controllers = obj.controllers;
                    //var responsive = obj.responsive;
                    var multiple_tabs = obj.multiple_tabs;
                    var ajax = obj.ajax;
                    var show_ajax_content_in_tab = obj.show_ajax_content_in_tab;
                    var content_path = obj.content_path;

                    var tab_content_selector = $(this).find(" > div > div.tab_content");
                    var tab_selector = $(this).find(" >ul li");
                    var parent = $(this);
                    var controller_parent = $(".controller").closest(".tab_wrapper");
                    var con_siblings;


                    if (side != "") {
                        parent.addClass(side + "_side");
                    }

                    if (controllers == "true") {
                        parent.addClass("withControls");
                        parent.append("<div class='controller'>
<span class='previous'>previous</span>
<span class='next'>next</span>
</div>");
                    }

                    if (plugin_type == "accordion") {
                        //alert(34);
                        parent.addClass("accordion");
                        parent.removeClass(side + "_side");
                        parent.removeClass("withControls");
                        $(".controller", parent).remove();
                    }

                    if (ajax == "true") {
                        $.ajax({
                            url: content_path,
                            success: function(result) {
                                $(" .tab_content.tab_" + show_ajax_content_in_tab, parent).html(result);
                            }
                        });

                        $(document).ajaxError(function(event, request, settings) {
                            $(" .tab_content.tab_" + show_ajax_content_in_tab, parent).prepend("<h4 class='error'>Error requesting page " + settings.url + "</h2>");
                        });
                    }


                    function hide_controls(parent) {
                        if (parent.find(" >ul li:eq(0)").hasClass("active")) {
                            $(".controller .previous", parent).hide();
                        } else {
                            $(".controller .previous", parent).show();
                        }

                        if (parent.find(" >ul li").last().hasClass("active")) {
                            $(".controller .next", parent).hide();
                        } else {
                            $(".controller .next", parent).show();
                        }
                    }

                    $(".controller .previous", $(this)).click(function() {
                        con_siblings = $(this).closest(".controller");
                        con_siblings.siblings("ul").find("li.active").prev().trigger("click");
                        hide_controls(controller_parent);

                    });

                    $(".controller .next", $(this)).click(function() {
                        con_siblings = $(this).closest(".controller");
                        con_siblings.siblings("ul").find("li.active").next().trigger("click");
                        hide_controls(controller_parent);

                    });

                    $(this).find(" >ul li").removeClass("active");
                    $(this).find(" > div > div.tab_content").removeClass("active");

                    if (active_tab == "") {
                        $(this).find(" >ul li:eq(0)").addClass("active").show(); //set active tab on load   
                        $(this).find(" > div > div.tab_content:eq(0)").addClass("active").show(); //set active tab on load   
                        hide_controls(parent);

                    } else {
                        $(this).find(" >ul li:eq(" + (active_tab - 1) + ")").addClass("active").show(); //set active tab on load
                        $(this).find(" > div > div.tab_content:eq(" + (active_tab - 1) + ")").addClass("active").show(); //set active tab on load
                        hide_controls(parent);
                    }

                    tab_content_selector.first().addClass("first");
                    tab_content_selector.last().addClass("last");


                    // add class to content div
                    tab_content_selector.each(function() {
                        var tab_count = $(this).parents(".tab_wrapper").length;
                        var add_relation = "tab_" + tab_count + "_" + div_rel;
                        //var add_relation = "tab_" + div_rel;
                        $(this).addClass(add_relation);
                        if ($(window).width() < 992) {
                            $(this).attr("title", add_relation);
                        }
                        div_rel++;
                    });


                    if (multiple_tabs == "true") {
                        var get_parent = $(this).closest(".tab_wrapper");
                        var active_tab_text = $(this).find(" >ul li:eq(0)").text();
                        get_parent.addClass("show-as-dropdown");
                        get_parent.prepend("<div class='active_tab'>
<span class='text'>" + active_tab_text + "</span>
<span class='arrow'>
</span>
</div>");
                    }

                    $(".active_tab").click(function() {

                        $(this).next().stop(true, true).slideToggle();
                    });

                    // add relation attr to li and generate accordion header for mobile

                    //if (responsive == "true") {
                    tab_selector.each(function() {
                        var tab_count = $(this).parents(".tab_wrapper").length;
                        var add_relation = "tab_" + tab_count + "_" + li_rel;

                        var accordian_header = $(this).text();
                        //var add_relation = "tab_" + li_rel;
                        var get_parent = $(this).closest(".tab_wrapper");
                        $(this).attr("rel", add_relation);

                        var current_tab_class = $(this).attr("class");

                        tab_content_selector.each(function() {
                            if ($(this).hasClass(add_relation)) {
                                if ($(window).width() > 992) {
                                    get_parent.find(" > div > div.tab_content." + add_relation).before("<div class='accordian_header " + add_relation + ' ' + current_tab_class + "'>" + accordian_header + "<span class='arrow'>
</span>
</div>");
                                } else {
                                    get_parent.find(" > div > div.tab_content." + add_relation).before("<div title='" + add_relation + "' class='accordian_header " + add_relation + ' ' + current_tab_class + "'>" + accordian_header + "<span class='arrow'>
</span>
</div>");
                                }
                            }
                        });
                        li_rel++;
                    });
                    // }


                    // on click of accordion header slideUp/SlideDown respective content
                    $(".accordian_header").click(function() {
                        var clicked_header = $(this).attr("title");
                        var content_status = $(this).next(".tab_content").css("display");
                        var get_closest_parent = $(this).closest(".tab_wrapper");

                        if (content_status == "none") {
                            get_closest_parent.find(">.content_wrapper >.accordian_header").removeClass("active");
                            $(this).addClass("active");
                            get_closest_parent.find(">ul >li").removeClass("active");
                            get_closest_parent.find(">ul >li[rel='" + clicked_header + "']").addClass("active");

                            tab_content_selector.removeClass("active").stop(true, true).slideUp();
                            get_closest_parent.find(" > div > div.tab_content." + clicked_header).addClass("active").stop(true, true).slideDown();
                        } else {
                            get_closest_parent.find(">.content_wrapper >.accordian_header").removeClass("active");
                            $(this).removeClass("active");
                            get_closest_parent.find(">ul >li").removeClass("active");
                            get_closest_parent.find(" > div > div.tab_content." + clicked_header).removeClass("active").stop(true, true).slideUp();
                        }
                    });

                    // on click of tab hide/show respective content
                    tab_selector.click(function() {

                        var clicked_tab = $(this).attr("rel");
                        var get_new_closest_parent = $(this).closest(".tab_wrapper");
                        var get_closest_tab_list = $(this).closest(".tab_list");
                        get_closest_tab_list.next(".content_wrapper").find(" >.accordian_header").removeClass("active");

                        get_new_closest_parent.find(".accordian_header." + clicked_tab).addClass("active");

                        tab_content_selector.removeClass("active").hide();
                        get_new_closest_parent.find(" > div > div.tab_content." + clicked_tab).addClass("active").show();
                        tab_selector.removeClass("active");
                        $(this).addClass("active");
                        hide_controls(get_new_closest_parent);
                        var winWidth = $(window).width();

                        if (multiple_tabs == "true") {
                            if ($(this).parent(".tab_list").parent(".show-as-dropdown")) {
                                var selected_tab_text = $(this).text();
                                $(".active_tab .text").text(selected_tab_text);
                            }
                            if (winWidth <= 992) {

                                $(this).closest(".tab_list").stop(true, true).slideUp();
                            }
                        }
                    });

                });
            }
        });

    })(jQuery);

    $(".first_tab").champ();

    $('.path-careers .slick-next.slick-arrow').html(' ');
    $('.path-careers .slick-prev.slick-arrow').html(' ');
    $('.path-careers .slick-next.slick-arrow').after('<span class="slick-next slick-arrow carousel-control-next-icon">
</span>');
    $('.path-careers .slick-prev.slick-arrow').before('<span class="slick-prev slick-arrow carousel-control-prev-icon">
</span>');
    $(document).on('click', '.path-careers .carousel-control-next-icon', function() {
        $(this).prev().trigger('click');
    });
    $(document).on('click', '.path-careers .carousel-control-prev-icon', function() {
        $(this).next().trigger('click');
    });
    $('.mobile-margin-location .continent-state, .mobile-margin-location .tab_content').find('a').on('click', function() {
        if (jQuery(window).width() < 767) {
            var currentSelect = $(this);
            var target = $(this).attr('target');
            $('.mobile-margin-location .continent-state').find('a').css('background', '');
            $(this).css('background', '#f3f3f3');
            if (target == "_blank") {
                setTimeout(function() {
                    window.open(currentSelect.attr('href'));
                }, 100);
            } else {
                location.href = $(this).attr('href');
            }
            setTimeout(function() {
                currentSelect.css('background', '');
            }, 2000);
        } else if (jQuery(window).width() > 767) {
            $(this).css('color', '#009DD6');
        }
    });
    $('.view-id-program_business .term_data a, .node--type-specialized-programs .view-id-program_termname a, .program-page-link a, #block-nbcucareers-content .culture-title a, .jobs-main-search-react .external-links .item-wrapper a, .path-careers p.sidelink a, .path-careers .sidelink a .field__item, .tt-view-privacy-menu a').on('click', function(event) {
        if (jQuery(window).width() < 767) {
            event.preventDefault();
            var currentSelect = $(this);
            var target = $(this).attr('target');
            $('.view-id-program_business .term_data a, .node--type-specialized-programs .view-id-program_termname a, .program-page-link a, #block-nbcucareers-content .culture-title a, .jobs-main-search-react .external-links .item-wrapper a, .path-careers p.sidelink a, .path-careers .sidelink a .field__item, .tt-view-privacy-menu a').parent().css('background', '');
            $(this).parent().css('background', '#f3f3f3');
            if (target == "_blank") {
                setTimeout(function() {
                    window.open(currentSelect.attr('href'));
                }, 100);
            } else {
                location.href = $(this).attr('href');
            }
            setTimeout(function() {
                currentSelect.parent().css('background', '');
            }, 3000);
        }
    });
    $('.path-careers .professional-career-section .career-col-sep a').on('click', function() {
        if (jQuery(window).width() < 767) {
            var currentSelect = $(this);
            var target = $(this).attr('target');
            $('.path-careers .professional-career-section .career-col-sep a').parent().parent().css('background', '');
            $(this).parent().parent().css('background', '#f3f3f3');
            if (target == "_blank") {
                setTimeout(function() {
                    window.open(currentSelect.attr('href'));
                }, 100);
            } else {
                location.href = $(this).attr('href');
            }
            setTimeout(function() {
                currentSelect.parent().parent().css('background', '');
            }, 2000);
        }
    });

    $('.mobile-tab3-outer #erg_accordion').find('a').on('click', function() {
        var current = $(this);
        $('.mobile-tab3-outer #erg_accordion .card-header').css('border-bottom', '1px solid rgba(0, 0, 0, 0.125)');
        setTimeout(function() {
            if (current.hasClass('collapsed')) {
                current.parent().css('border-bottom', '1px solid rgba(0, 0, 0, 0.125)');
            } else {
                current.parent().css('border-bottom', 'none');
            }
        }, 200);
    });
    /** Location Continent Tab **/

    /* Back to TOP */
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
});

window.onload = function() {
    if (jQuery('.slider-testi-for-parent .testimonial-for-main, .slider-testi-nav-parent .testimonial-nav-main, .slider-nav-parent .single-slider-main, .slider-for-parent .single-slider-img').hasClass('hide-onload')) {
        jQuery('.slider-testi-for-parent .testimonial-for-main, .slider-testi-nav-parent .testimonial-nav-main, .slider-nav-parent .single-slider-main, .slider-for-parent .single-slider-img').removeClass('hide-onload');
    }

    setTimeout(function() {
        jQuery('.home-instagram-react-main-wrapper .insta-image-container, .intern-instagram-main-wrapper .insta-image-container, .intern-instagram-main-wrapper .insta-image-mobile').each(function() {
            jQuery(this).height(jQuery(this).width());
        });
        jQuery('.intern-instagram-main-wrapper').find('.slick-slide .insta-image').each(function() {
            jQuery(this).height(jQuery(this).width());
        });
        jQuery('.path-culture').find('.slick-slide .single-slider-main').each(function() {
            jQuery(this).height(jQuery(this).width());
        });
        jQuery('.path-culture').find('.slick-slide .testimonial-nav-main').each(function() {
            var height = jQuery(this).width()
            if (jQuery(window).width() > 992) {
                jQuery('.slick-slide .user-image').height(height - 80);
            } else if (jQuery(window).width() < 992) {
                jQuery('.slick-slide .user-image').height(height - 61);
            }
        });
    }, 3000);
}
jQuery('a[href="#employee-resource-groups"]').click(function() {
    if (jQuery(window).width() < 993) {
        var scrollVal = jQuery('#tab3').offset().top;
        jQuery(document).scrollTop(scrollVal);
    }
});

function resize() {
    //$('#CollapsingNavbar .navigation').css('height', '');
    //$('#CollapsingNavbar').removeClass("show");

    //secondary banner call on resize
    //contentLeftAdjust();

    jQuery('.home-instagram-react-main-wrapper .insta-image-container, .intern-instagram-main-wrapper .insta-image-container, .intern-instagram-main-wrapper .insta-image-mobile').each(function() {
        jQuery(this).height(jQuery(this).width());
    });
    jQuery('.intern-instagram-main-wrapper').find('.slick-slide .insta-image').each(function() {
        jQuery(this).height(jQuery(this).width());
    });
    jQuery('.path-culture').find('.slick-slide .single-slider-main').each(function() {
        jQuery(this).height(jQuery(this).width());
    });
    jQuery('.path-culture').find('.slick-slide .testimonial-nav-main').each(function() {
        var height = jQuery(this).width()
        if (jQuery(window).width() > 992) {
            jQuery('.slick-slide .user-image').height(height - 80);
        } else if (jQuery(window).width() < 992) {
            jQuery('.slick-slide .user-image').height(height - 61);
        }
    });
    if (jQuery(window).width() > 992) {
        var maxHeight = 0;
        jQuery('.view-id-program_business').find('.program-col-sep').each(function() {
            //jQuery(this).height(jQuery(this).width());
            if (jQuery(this).height() > maxHeight) {
                maxHeight = jQuery(this).height();
            }
        });
        if (maxHeight < jQuery('.view-id-program_business').find('.program-col-sep').width()) {
            maxHeight = jQuery('.view-id-program_business').find('.program-col-sep').width();
        }
        jQuery('.view-id-program_business .program-col-sep').height(maxHeight);
    } else {
        jQuery('.view-id-program_business .program-col-sep').css('height', 'auto');
    }
}