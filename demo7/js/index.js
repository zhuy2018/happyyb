$(function(){
    /**
     *景区 名字 上滚
     *..2代表的是负氧离子 上滚
     */
    var _wrap=$('ul.spot_number');//定义滚动区域
    var _interval=2000;//定义滚动间隙时间
    var _moving;//需要清除的动画
    _wrap.hover(function(){
        clearInterval(_moving);//当鼠标在滚动区域中时，停止滚动
    },function(){
        _moving=setInterval(function(){
            var _field=_wrap.find('li:first');
            var _h=_field.height();//取得每次滚动高度
            _field.animate({marginTop:-_h+'px'},600,function(){
                _field.css('marginTop',0).appendTo(_wrap);
            })
        },_interval)//滚动间隔时间取决于_interval
    }).trigger('mouseleave');//函数载入时，模拟执行mouseleave，即自动滚动


	
	
	
	
//热力图
	//热力图出现
$("#toReli").click(function(){
	$(".c_top:nth-child(1)").hide();
	$(".c_top:nth-child(2)").show();
})
	//热力图隐藏
$("#tabBtn").click(function(){
	$(".c_top:nth-child(1)").show();
	$(".c_top:nth-child(2)").hide();
})

//当前时间
var localTime,year,month,day,hour,minute,second,totalTime;
function nowTime(){
	localTime = new Date();
	year = localTime.getFullYear();
	month = localTime.getMonth() + 1;
	month>=10 ? month=month : month="0"+month;
	day = localTime.getDate();
	day>=10 ? day=day : day="0"+day;
	hour = localTime.getHours();
	hour>=10 ? hour=hour : hour="0"+hour;
	minute = localTime.getMinutes();
	minute>=10 ? minute=minute : minute="0"+minute;
	second = localTime.getSeconds();
	second>=10 ? second=second : second="0"+second;
	totalTime = " "+year + "-"+month+ "-" + day + "&nbsp;&nbsp;&nbsp;"+ hour + ":" + minute +":" + second;
//	return totalTime;
	$("#timeArea").html(totalTime);
}
nowTime();
timer = setInterval(nowTime,1000);

function GetDateStr(AddDayCount) { 
	var dd = new Date(); 
	dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
	var y = dd.getFullYear(); 
	var m = dd.getMonth()+1;//获取当前月份的日期 
	var d = dd.getDate(); 
	var ddd = y+"-"+m+"-"+d;
	return ddd; 
} 
/*document.write("前天："+GetDateStr(-2)); 
document.write("<br />昨天："+GetDateStr(-1)); 
document.write("<br />今天："+GetDateStr(0)); 
document.write("<br />明天："+GetDateStr(1)); */


	
})




	
	
	
	
	
	
	
	

