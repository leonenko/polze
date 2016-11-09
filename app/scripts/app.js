import svg4everybody from 'svg4everybody';
import slick from 'slick-carousel';
// import $ from 'jquery';
// import ScrollMagic from 'scrollmagic/scrollmagic/minified';


$(() => {
	svg4everybody();

	// var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

	$('.creation__mobile-slider').slick({
		arrows: false,
		dots: true
	});

	$('.brand-slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	// init controller
	var controller = new ScrollMagic.Controller();

	if (!Modernizr.touch && window.innerWidth > 1000){
		var scene = new ScrollMagic.Scene({
			triggerElement: "#creation-trigger",
			duration: 2400,
			triggerHook: 0,
			offset: 0
		})
			.setPin('.creation__info', {
				pushFollowers: true
			})
			// .addIndicators({
			// 	name: "staggering"
			// }) // add indicators (requires plugin)
			.addTo(controller);

		var tw1 = TweenMax.fromTo('.el1', 2, {visibility: 'hidden'}, {visibility: 'visible', repeat:1, yoyo:true});

		var scene1 = new ScrollMagic.Scene({
			duration: 1200,
			triggerElement: '#creation-trigger',
			triggerHook: 0,
			offset: -800
		})
			.setTween(tw1)
			// .on("leave", function () {

			// })
			// .addIndicators({
			// 	name: "staggering"
			// }) // add indicators (requires plugin)
			.addTo(controller);


		var tw2 = TweenMax.fromTo('.el6', 2, {visibility: 'hidden'}, {visibility: 'visible', repeat:1, yoyo:true});

		var scene2 = new ScrollMagic.Scene({
			duration: 1600,
			triggerElement: '#creation-trigger',
			triggerHook: 0,
			offset: 2000
		})
			.setTween(tw2)
			// .addIndicators({
			// 	name: "staggering"
			// })
			.addTo(controller);

		var addTween = function(el, offs) {
			var tw = TweenMax.fromTo(el, 2, {visibility: 'hidden'}, {visibility: 'visible', repeat:1, yoyo:true});

			var scene = new ScrollMagic.Scene({
				duration: 400,
				triggerElement: '#creation-trigger',
				triggerHook: 0,
				offset: offs
			})
				.setTween(tw)
				.addTo(controller);
		};

		addTween(".el2", 400);
		addTween(".el3", 800);
		addTween(".el4", 1200);
		addTween(".el5", 1600);



		// Article parallax

		var articleImage1 = TweenMax.fromTo('#i1 .article__image', 2, {top: '0'}, {top: '-100px'});
		var articleContent1 = TweenMax.fromTo('#i1 .article__content', 2, {top: '0'}, {top: '50px'});

		var articleImage2 = TweenMax.fromTo('#i2 .article__image', 2, {top: '0'}, {top: '-100px'});
		var articleContent2 = TweenMax.fromTo('#i2 .article__content', 2, {top: '0'}, {top: '50px'});

		var articleImage3 = TweenMax.fromTo('#i3 .article__image', 2, {top: '0'}, {top: '-100px'});
		var articleContent3 = TweenMax.fromTo('#i3 .article__content', 2, {top: '0'}, {top: '50px'});

		var articleImageScene1 = new ScrollMagic.Scene({
			duration: 1700,
			triggerElement: '#i1-trigger',
			triggerHook: 1,
			offset: 100
		})
			.setTween(articleImage1)
			.addTo(controller);

		var articleContentScene1 = new ScrollMagic.Scene({
			duration: 1700,
			triggerElement: '#i1-trigger',
			triggerHook: 1,
			offset: 100
		})
			.setTween(articleContent1)
			.addTo(controller);
		var articleImageScene2 = new ScrollMagic.Scene({
			duration: 1700,
			triggerElement: '#i2-trigger',
			triggerHook: 1,
			offset: 100
		})
			.setTween(articleImage2)
			.addTo(controller);

		var articleContentScene2 = new ScrollMagic.Scene({
			duration: 1700,
			triggerElement: '#i2-trigger',
			triggerHook: 1,
			offset: 100
		})
			.setTween(articleContent2)
			.addTo(controller);
		var articleImageScene3 = new ScrollMagic.Scene({
			duration: 1700,
			triggerElement: '#i3-trigger',
			triggerHook: 1,
			offset: 100
		})
			.setTween(articleImage3)
			.addTo(controller);

		var articleContentScene3 = new ScrollMagic.Scene({
			duration: 1700,
			triggerElement: '#i3-trigger',
			triggerHook: 1,
			offset: 100
		})
			.setTween(articleContent3)
			.addTo(controller);

	} else {
		controller.destroy(true);
		$('.el1').css('visibility', 'visible');
	}

});

$('.scroll-btn').on('click', function(e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $(".adults").offset().top
	}, 1000);
});


setTimeout(function () {
	$('.preloader-wrapper.active').removeClass('active');
}, 3000);


function form_success () {
	$('.contact__text-success').addClass('show');
	$('.contact__form').addClass('hide');
}

function mobileNavigation () {
	$('.submenu-toggle').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parents('.mobile-navigation__link').siblings('.submenu').toggleClass('open');
	});

	$('.nav-hamburger').on('click', function() {
		$(this).toggleClass('active');
		$('.mobile-navigation').toggleClass('active');

		$('body, html').toggleClass('mobile-nav-active');
	});
} mobileNavigation();

function dropdown () {
	$('.dropdown__button').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.dropdown').toggleClass('active');
	});
} dropdown();

function headerNav() {
	if ( window.pageYOffset > 50 && $('.header').hasClass('main-page')) {
		$('.header.main-page').removeClass('main-page');
	}
	else if( window.pageYOffset < 50 && $('body').find('.kaleidoscope').length > 0) {
		$('.header').addClass('main-page')
	}
}headerNav();

$(window).scroll(function () {
	headerNav();
});

