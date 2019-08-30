//下边导航栏 鼠标划过 显示文字
$(".bar_bot a").mouseover(function(){
	$(".bar_right a span").hide();
	$(this).children("span").show();
}).mouseout(function(){
	$(".bar_bot a span").hide();
})



