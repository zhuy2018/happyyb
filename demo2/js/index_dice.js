//随机抽奖
var timer = null; 
var tz = 1;
$('#btn1').click(function() {
	if(tz==0){return;}
	tz=0;
	$(this).css('backgroundImage', 'url(image/the_ill_yg1.png)');
	var $li = $('#ul1 li'),
		  l = $li.length,
		  i = $('.active').length==0?0:$('.active').index(),
		  spaceTime = 10,
		  circle = Math.floor(Math.random() * 10 + 1),
		  num = Math.floor(Math.random() * l + 0);
	if (timer) {
		clearTimeout(timer);
	}
	
	timer = setTimeout(addCls, spaceTime);
	
	function addCls() {
		var end = circle * l + num,
		  speed = Math.ceil((end - i) / 5);
	
		if (i == end) {
			clearTimeout(timer);
			if($('.active').hasClass('jiang')){
				$('.reward_scroll_co h2 span').text( $('#ul1 li.active').text() );
				$('.reward_scroll').slideDown(300);
				$('#bg1').slideDown(400);
				$('#btn1').css('backgroundImage', 'url(image/the_ill_yg.png)');
				tz = 1;
			}else{
				alert('别灰心，还有机会！');
				tz = 1;
			}
		} else {
			spaceTime=(10-speed)*30;
			timer = setTimeout(addCls, spaceTime);
			
			$li.eq(i % l).addClass('active').siblings().removeClass('active');
			i++;                                                
		}
		console.log('end='+end+',i='+i);
	}
});