// 移动端自适应画面
var iScale = 1;
	iScale = iScale / window.devicePixelRatio;
	document.write('<meta name="viewport" content="width=device-width,initial-scale=' + iScale + ',minimum-scale=' + iScale + ',maximum-scale=' + iScale + '" />');
	document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 16 + "px";
	
$(function(){
	var $wrap_header_jt2=$('.wrap_header_jt2');
	$wrap_header_jt2.removeAttr('href');
	$wrap_header_jt2.on('touchend', function(event) {
		event.stopPropagation();
	   $('.wrap_header ul').fadeIn(200);
	});
	
	$('.footer_a:nth-of-type(1) a').on('touchend', function(event) {
		event.stopPropagation();
		$('.footer_a ul').fadeOut(500);
		$('footer a.footer').removeClass('active');
		$(this).addClass('active');
	   $('.footer_a:nth-of-type(1) ul').fadeIn(200);
	});
	$('.footer_a:nth-of-type(2) a').on('touchend', function(event) {
		event.stopPropagation();
		$('.footer_a ul').fadeOut(500);
		$('footer a.footer').removeClass('active');
		$(this).addClass('active');
	   $('.footer_a:nth-of-type(2) ul').fadeIn(200);
	});
	
	$(document).on('touchend', function() {
		$('.wrap_header ul').fadeOut(500);
		$('.footer_a ul').fadeOut(500);
		$('.footer_a a').removeClass('active');
	});
	
	//返回顶部
	var hr = $(window).height();
	$('body').append('<div class="goTop"><em></em></div>');
	$(window).scroll(function(){
		var curTop = $(window).scrollTop();
		if(curTop>100){
			$('.goTop').slideDown("fast");
			
		}else{
			$('.goTop').slideUp("fast");
		}
	});
	$(".goTop").click(function() {
		$("html,body").animate({scrollTop: 0}, 500);
	});
});