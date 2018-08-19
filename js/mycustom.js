var sharingan = new Audio();
sharingan.src = "sound/Sharingan.mp3";
clearCurrentLink();
$(".mb-0").lazyload({
	effect : "fadeIn"
});	
$(function(){
	$(window).scroll(function() {
		project = $('#project-box').offset().top - $(window).height() / 2 ;
		contact = $('#contact-box').offset().top - $(window).height() / 2 ;
		current = $(window).scrollTop();
		if(current >= 0 && current < project){
			if(checkCurrentLink('top-link') === false){
				clearCurrentLink();
				$('#top-link').find('i').css('display','inline');
			}
		}else if (current > project && current < contact){
			if(checkCurrentLink('project-link') === false){
				clearCurrentLink();
				$('#project-link').find('i').css('display','inline');
			}
		}else if (current > contact){
			if(checkCurrentLink('contact-link') === false){
				clearCurrentLink();
				$('.contact .title').find('span').addClass('hide');
				$('#contact-link').find('i').css('display','inline');
			}
		}
	});
	
});

function setCurrentLink(){

}

function clearCurrentLink(){
	$('.contact .title').find('span').removeClass('hide');
	$('.menu-link li').each(function(){
		$(this).find('i').css('display', 'none');
	});
}

function checkCurrentLink(id){
	if($("#"+id).find('i').css('display') == 'inline'){
		return true;
	}else{
		return false;
	}
}

function goToByScroll(id, distance = 0){
	height = $("#"+id).offset().top + distance;
	$('html,body').animate({
		scrollTop: height},
		'slow');
}