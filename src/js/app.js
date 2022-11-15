import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

//    BURGER JQERY    //

$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger,.burger__item,.navigation').toggleClass('active');
	});
});

new Splide('.splide', {
	type: 'loop',
	perPage: 2,

}).mount();
