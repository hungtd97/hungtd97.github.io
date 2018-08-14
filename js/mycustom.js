var sharingan = new Audio();
sharingan.src = "sound/Sharingan.mp3";

$(function(){
	$('.menu-link a').click(function(){
		sharingan.play();
	});
});