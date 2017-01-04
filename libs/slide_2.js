
if($(window).width() < 415) {
	$('.sl_2').slick({
	slidesToShow:1,
	dots:false
	
});
} else{
	$('.sl_2').slick({
	slidesToShow:3

});

    // do functionality on screens smaller than 768px
}
