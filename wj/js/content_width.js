$(function(){	
	//大图自动滚动
	window.mySwipe = Swipe(document.getElementById('mySwipe'),{
		startSlide: 0,
		auto: 4000,
		autoplayDisableOninteraction:false,
		continuous: true,
		callback: function(pos) {
	
			var i = bullets.length;
			while (i--) {
				bullets[i].className = ' ';
			}
			bullets[pos].className = 'active';
	
		}
	});
	$("#ms-position img").click(function(){
		mySwipe.slide($(this).parents("li").index());
	});
	var bullets = document.getElementById('ms-position').getElementsByTagName('li');
});