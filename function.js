$(document).ready(function(){
	$(".menu-icon").on('click', function(e){
		e.preventDefault();
		$('.menu2 ul').toggleClass('showing').slideToggle();
	});
});