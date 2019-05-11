var a = 0;//当前的总步数
var b = 1;//当前走到的步数
var c = 0;//龙卷风
var d = 0;//倒退
$(function () {
	var dice = $("#dice");
	dice.click(function () {
		  $(".wrap").append("<div id='dice_mask'></div>"); //加遮罩
		  dice.attr("class", "dice"); //清除上次动画后的点数
		  dice.css('cursor', 'default');
		  var num = Math.floor(Math.random() * 6 + 1); //产生随机数1-6
		  dice.animate({ left: '+2px' }, 100, function () {
		  dice.addClass("dice_t");
		  }).delay(200).animate({ top: '145px' }, 100, function () {
		  dice.removeClass("dice_t").addClass("dice_s");
		  }).delay(200).animate({ opacity: 'show' }, 600, function () {
		  dice.removeClass("dice_s").addClass("dice_e");
		  }).delay(100).animate({ left: '10px', top: '145px' }, 100, function () {
		  dice.removeClass("dice_e").addClass("dice_" + num);
		  a=a+num;if(a>16){d=1};show();
		  /*$("#result").html("您掷得点数是<span>" + num + "</span>");*/
		  dice.css('cursor', 'pointer');
		  $("#dice_mask").remove(); //移除遮罩
	  });
	});
	
});

function show(){
	$('.steps').find('li').hide();
	$('.steps li:eq('+b+')').show();
	if(b==5&&a==5){ $('.reward_scroll_xx').slideDown(300);$('#bg1').slideDown(400); }
	if(b==9&&a==9){ $('.reward_scroll_xx').slideDown(300);$('#bg1').slideDown(400); }
	if(b==11&&a==11){ $('.reward_scroll_xx').slideDown(300);$('#bg1').slideDown(400); }
	if(b==15&&a==15){ $('.reward_scroll_xx').slideDown(300);$('#bg1').slideDown(400); }
	if(b==17&&a==17){ $('.reward_scroll_xx').slideDown(300);$('#bg1').slideDown(400); }
	if(b==22&&a==22){ $('.reward_scroll_xx').slideDown(300);$('#bg1').slideDown(400); }
	if(b==27&&a==27){ $('.reward_scroll_xx').slideDown(300);$('#bg1').slideDown(400); }
	if(b==29&&a==29){ $('.reward_scroll_xx').slideDown(300);$('#bg1').slideDown(400); }
	var prizeTime = setTimeout(show,400);

	if(b>=a&&c==0){
		clearTimeout(prizeTime);
	}else if(c==0){
		b++
	}else if(c==1&&d==0){
		b--
		if(b<a){d=1;clearTimeout(prizeTime);c=0;b++;}
	}
	if(b==15&&c==1){alert('您遇到了龙卷风')}
	if(b==16&&c==0&&d==0){clearTimeout(prizeTime);a=10;prizeTime = setTimeout(show,400);c=1;}
	if(b==32){$('.login_zong_end').fadeIn(150);$('#bg1').fadeIn(200);clearTimeout(prizeTime);}
}