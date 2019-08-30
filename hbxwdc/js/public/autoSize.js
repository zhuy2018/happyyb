$(function(){
	//内容区  自适应  整体缩放
	var testW = $(".content_wrap").width();
	var testH = $(".content_wrap").height();
//	console.log(testH,testW);
	function autoScale(){
		var width =  $(window).width();
		var height =  $(window).height();
		var xScale = width/testW;
		var yScale = height/testH;
		var marginTop = testH-height;
		var marginLeft = testW-width;
		$(".content_wrap").css({
			"transform":"scale("+xScale+","+yScale+")",
			"margin-top":-marginTop/2,
			"margin-left":-marginLeft/2,
		});
		$("body").css({
			// "height":height+"px",
			// "width":width+"px",
		})
//		console.log(-marginTop,-marginLeft);
	}
	autoScale();
	window.onresize = function(){
		autoScale();
	}
	
	// 首页 swiper 实现轮播切换
	/*var mySwiper = new Swiper('.swiper-container',{
	    loop: true,
	    autoplay: 3000,
	    effect : 'flip',
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    //点击按钮之后 继续播放
	    autoplayDisableOnInteraction : false
	    
	});
	$('.arrow-left').on('click', function(e){
	    e.preventDefault()
	    mySwiper.swipePrev()
	  })
	  $('.arrow-right').on('click', function(e){
	    e.preventDefault()
	    mySwiper.swipeNext()
	  })*/
})