// 移动端自适应画面
var iScale = 1;
	iScale = iScale / window.devicePixelRatio;
	document.write('<meta name="viewport" content="width=device-width,initial-scale=' + iScale + ',minimum-scale=' + iScale + ',maximum-scale=' + iScale + '" />');
	//加setInterval是因为横竖屏切换的时候，可以实现响应式效果
	setInterval(function (){ document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 16 + "px"; }, 80);  

$(function (){
	//头部和底部 load加载
	$(".header").load("top.html");
	$('.footer').load("footer.html");
});