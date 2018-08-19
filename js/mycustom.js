var sharingan = new Audio();
sharingan.src = "sound/Sharingan.mp3";

$(function(){
	
});

function goToByScroll(id, distance = 0){
	console.log($("#"+id).offset().top);
	height = $("#"+id).offset().top + distance;
	$('html,body').animate({
		scrollTop: height},
		'slow');
}