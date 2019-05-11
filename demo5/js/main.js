$(function (){
	$('.main_nav').html('');
	$('.main_nav').html( '<a href="index.html">返回首页</a><a href="brand.html">品牌盛宴</a><a href="champion.html">厦门销冠</a><a href="work.html">高端作品</a><a href="introduction.html">项目简介</a><a href="resources.html">资源统御</a><a href="property.html">国宾物管</a><a href="decoration.html">精装复式</a><a href="design.html">大师设计</a><a href="panoramic.html">绿色建筑</a><a href="apartment.html">户型赏析</a>' );
	
	var hr = $(window).height();
	$(".content").css("height",hr);
	$(".main_nav").css("height",hr);
	
	$('.headdr ul li a.a3').click(function (){
		$('.main_nav_bg').show();
		$('.main_nav').stop().fadeIn(0).animate({"right":"0"});
		$(".main").css({"height":hr,"overflow":"hidden","position":"fixed"});
	});
	$(".main_nav_bg").click(function(){
		$(".main_nav").stop().animate({"right":"-120px"}).fadeOut(0);
		$(this).hide();
		$(".main").css({"height":"auto","overflow":"auto","position":"relative"});
	});
	
	$('body').append('<div class="goTop"></div>');
	$(window).scroll(function(){
		var curTop = $(window).scrollTop();
		if(curTop>100){
			$('.goTop').fadeIn("fast")
		}else{
			$('.goTop').fadeOut("fast")
		}
	});
	$(".goTop").click(function() {
		$("html,body").animate({scrollTop: 0}, 500);
	});
});
