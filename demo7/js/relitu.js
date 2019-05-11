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


//时间条圆点的位置
function circlePlace(year,month,day){
	var hourAdd = 00,minuteAdd = 15,circleLoca = 0;
	var timer2 = setInterval(function(){
//		hourAdd>10 ? hourAdd=hourAdd : hourAdd="0"+hourAdd;
		minuteAdd>10 ? minuteAdd=minuteAdd : minuteAdd="0"+minuteAdd;
		totalTime = " "+year + "-"+month+ "-" + day + "&nbsp;&nbsp;&nbsp;"+ hourAdd + ":" + minuteAdd+":00";
		$("#timeArea").html(totalTime);
		minuteAdd = Number(minuteAdd);
		minuteAdd+= 15;//每隔15分钟刷新一次热力图
//		console.log(minuteAdd);
		//小圆点的  位置
		circleLoca+=12.5;
		$("#circle").css({
			"left":circleLoca
		});
		//60分钟  小时 +1
		if(minuteAdd == 60){
			hourAdd = Number(hourAdd);
			hourAdd++;
			minuteAdd = 0;
		}
		//如果超出当前时间  停止滑动
//		console.log(hourAdd,hour,minuteAdd,minute);
		if(hourAdd == hour && minuteAdd>minute){
			$("#playBtn").removeClass("play").addClass("pause");
			console.log("停止");
			clearInterval(timer2);
			timer = setInterval(nowTime,1000);
			$("#playBtn").removeAttr("disabled"); 
		}
	},1000)
}
//选择 时间按钮
$(".dayWrap li").click(function(){
	$(this).addClass("nowTime").siblings().removeClass("nowTime");
})
//点击播放按钮
$("#playBtn").click(function(){
	//设置不可点击
	$("#playBtn").attr("disabled",true); 
	//当前选择的 是哪一个 按钮
	var blueBtn = $(".dayWrap").find(".nowTime").index()+1;
	clearInterval(timer);
	//1.如果是  实时  不播放
	if(blueBtn == 1){
		$("#playBtn").removeAttr("disabled"); 
		return;
	}
	
	//1.如果是  今日
	if(blueBtn == 2){
		$(this).removeClass("pause").addClass("play");
		nowTime();
		circlePlace(year,month,day);
	}
})


//元旦，春节，清明节，劳动节，端午节，中秋节，国庆节
//2017年全年公休假放假安排

[	2016-12-31~2017-01-02,
	2017-01-27~2017-02-02,
	2017-04-02~2017-04-04,
	2017-04-29~2017-05-01,
	2017-05-28~2017-05-30,
	2017-10-01~2017-10-08,
];


