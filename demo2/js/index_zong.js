$(function (){
	var obody=document.body.offsetHeight;
	$('#bg1').css('height', obody);
	
	//弹窗效果
	$('.shaking_sieve_top1 a.login').click(function (){
		$('.login_zong').fadeIn(150);
		$('#bg1').fadeIn(200);
	});
	$('.login_co a.cha').click(function (){
		$('.login_zong').fadeOut(450);
		$('#bg1').fadeOut(500);
	});
	$('.shaking_sieve_top1 p a').click(function (){
		alert('您已退出登录');
		$('.shaking_sieve_top1 p').fadeOut(100);
	});
	$('.shaking_sieve_top1 a.rules').click(function (){
		$('#reward_scroll_gz').fadeIn(150);
		$('#bg1').fadeIn(200);
	});
	$('#reward_scroll_gz a.cha').click(function (){
		$('#reward_scroll_gz').fadeOut(450);
		$('#bg1').fadeOut(500);
	});
	$('.the_ill_cozhu_left h2 strong a').click(function (){
		$('.winning_record').fadeIn(150);
		$('#bg1').fadeIn(200);
	});
	$('.winning_record h2 a.cha').click(function (){
		$('.winning_record').fadeOut(450);
		$('#bg1').fadeOut(500);
	});
	$('.the_ill_co dl.the_ill_hdgz dd a').click(function (){
		$('#bg1').slideDown(80);
		$('.reward_scroll').slideDown(300);
	});
	$('.reward_scroll_co a.cha').click(function (){
		$('#bg1').slideUp(80);
		$('.reward_scroll').slideUp(300);
	});
	$('.reward_scroll_xx dl.the_ill_hdgz dd a').click(function (){
		$('#reward_scroll_gz').slideUp(100);
		$('.reward_scroll').slideDown(300);
	});
	$('.login_zong_end a').click(function (){
		$('.login_zong_end').fadeOut(600);
		$('#bg1').fadeOut(700);
	});
	$('#reward_scroll_xx11 a.cha').click(function (){
		$('#reward_scroll_xx11').slideUp(250);
		$('#bg1').slideUp(300);
	});
	
	//获奖信息滚动
	var timer=setInterval(scroll_news,800);
	$('.the_ill_cozhu_left_ul').mouseover(function (){
		clearInterval(timer);
	});
	$('.the_ill_cozhu_left_ul').mouseout(function (){
		timer=setInterval(scroll_news,1000);
	});
	function scroll_news(){
		$('.the_ill_cozhu_left_ul ul li').eq(0).fadeOut('slow',function(){        
			$(this).clone().appendTo($(this).parent()).fadeIn(300);
			$(this).remove();
		});
	}
	
	//收件信息校验
	$('#jl_submit').click(function (){
		var obj=new Object;
			obj['usename'] 	= $(".reward_scroll_co ul li input[name='usename']").val(),
			obj['address'] 	= $(".reward_scroll_co ul li input[name='address']").val(),
			obj['mobile'] 	= $(".reward_scroll_co ul li input[name='mobile']").val();
			
		var patrn=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
		var isMobile=/^(?:13\d|14\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
		
		if( obj['usename'].length<=0 ){
			$('.reward_scroll_co ul li:first span').attr('class', 'unchecked').text('收件人不能为空');
		}else{
			$('.reward_scroll_co ul li:first span').attr('class', 'checked').text('输入正确');
		}
		if( obj['address'].length<=0 ){
			$('.reward_scroll_co ul li:eq(1) span').attr('class', 'unchecked').text('收件地址不能为空');
		}else{
			$('.reward_scroll_co ul li:eq(1) span').attr('class', 'checked').text('输入正确');
		}
		if( obj['mobile'].length<=0 ){
			$('.reward_scroll_co ul li:eq(2) span').attr('class', 'unchecked').text('手机号不能为空');
		}else if(!(/^[0-9]*$/g.test(phone))){
			$('.reward_scroll_co ul li:eq(2) span').attr('class', 'unchecked').text('手机格式输入不正确');
		}else{
			$('.reward_scroll_co ul li:eq(2) span').attr('class', 'checked').text('输入正确');
		}
		
		var qq_hao1= $(".reward_scroll_co ul li:last input[name='qq_hao']").val();
		if(qq_hao1.length<=0 ){
			$('.reward_scroll_co ul li:last span').attr('class', 'unchecked').text('QQ号不能为空');
			return false;
		}else if( !(/^[1-9][0-9]{4,14}$/.test(qq_hao1)) ){
			$('.reward_scroll_co ul li:last span').attr('class', 'unchecked').text('QQ号格式输入不正确');
			return false;
		}else{
			$('.reward_scroll_co ul li:last span').attr('class', 'checked').text('输入正确');
			return true;
		};
	});
});
