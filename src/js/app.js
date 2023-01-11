import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

//    BURGER JQERY    //

$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger,.burger__item,.navigation').toggleClass('active');
	});
});

new Splide('.splide', {
	type: 'slide',
	perPage: 2,
	focus: 0,
	omitEnd: true,
	rewind: true,
	flickMaxPages: 1,
	perMove: 1,
	arrows: false,
	mediaQuery: 'max',
	breakpoints: {
		1140: {
			fixedWidth: 'auto',
		
		}
	}


}).mount();
