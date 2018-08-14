var sharingan = new Audio();
sharingan.src = "sound/sharingan.mp3";

$(function(){
	$('.menu-link a').click(function(){
		sharingan.play();
	});
});