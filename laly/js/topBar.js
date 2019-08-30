$(function(){


//导航的出现与隐藏
/*$("#navbar1").slideUp();
$(document).mousemove(function(event){
	var e = event || window.event;
	var wTop = e.clientY;
	if(wTop <= 50){
        console.log(1)
		//$(".top_bar").slideDown();
        $("#navbar1").slideDown();
        $("#navbar1").mouseover(function(){
            $("#navbar1").slideDown();
        }).mouseout(function(){
            $("#navbar1").slideUp();
        })
	}else{

	}
})*/

//导航的出现与隐藏
    var timer1=null;
    $('.JQueryiframe').css({
        'width':'100%',
        'height':'25px',
        'opacity': '0',
        '-moz-opacity': '0',
        'position': 'fixed',
        'left':'0',
        'top':'0',
        'z-index':'1'
    }).mouseover(function(){
    	//console.log(1)
        clearTimeout(timer1);
        $(".top_bar").animate({
            top: '0px'
		},700)
    });
    $(".top_bar").mouseout(function() {
        clearTimeout(timer1);
        timer1 = setTimeout(function() {
            $(".top_bar").animate({
                top: '-90px'
            },700)
        }, 1000)
    });

//底部条  每次重新定位
var newIndexSpan = $(".top_main .active").index();
//console.log(newIndexSpan);
$(".top_main span").css({
	"left":newIndexSpan*180,
})
	//导航 鼠标划过
var isclick = false;
var first_left;
$(".top_main li").mouseover(function(){
	first_left = $(".top_main span").css("left")
//	console.log($("li.active").index());
	var index = $(this).index();
	$(this).parent().children("span").css({
		"left":index*180,
	})
}).mouseout(function(){
	if(isclick){
		isclick = false;
		return;
	}else{
//		console.log($(this).index());
		var index = $(this).index();
		$(this).parent().children("span").css({
			"left":$("li.active").index()*180,
		})
	}
})

//鼠标划出
	//点击事件
$(".top_main li").click(function(){
//	console.log($(this).index());
	var index = $(this).index();
	$(this).addClass("active")
		.siblings().removeClass("active")
		.parent().children("span").css({
			"left":index*180,
		})
	isclick = true;
})

	
})