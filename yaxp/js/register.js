// 注册
$(function (){
	//判断是否勾选同意框
	$('.skipRegister_checked input').change(function (){
		if( document.getElementById('pro').checked ){
			$('.login_co p:nth-of-type(2) button').removeAttr('disabled');
		}else{
			$('.login_co p:nth-of-type(2) button').attr('disabled', 'disabled');
		}
	});
	
	$('.login_co p:nth-of-type(2) button').click(function (){
		//验证用户名
		var txt_name = $(".skipRegister input:first").val();
		if( txt_name.length<=5 || txt_name.length>25 ){
			/*$(".skipRegister input:first").css('border', '2px solid #ff0000');
			$(".skipRegister span:first").addClass('cuo').show();*/
			$('.warnId').html('').show().html('<span></span>用户名:请输入5-25位字母或数字,不能以数字开头').css('color','red');
			return;
		}

		//验证密码
		var txt_name1 = $(".skipRegister input:eq(1)").val();
		if( txt_name1.length<=6 || txt_name1.length>16 ){
			/*$(".skipRegister_input:eq(1) input").css('border', '2px solid #ff0000');
			$(".skipRegister_input:eq(1) span").addClass('cuo').show();*/
			$('.warnId').html('').show().html('<span></span>密码:请输入6-16位字母、数字或符号').css('color','red');
			return;
		}
		
		//确认密码
		var txt_name2 = $(".skipRegister input:eq(2)").val();
		if( txt_name2 != txt_name1 ){
			/*$(".skipRegister_input:eq(2) input").css('border', '2px solid #ff0000');
			$(".skipRegister_input:eq(2) span").addClass('cuo').show();*/
			$('.warnId').html('').show().html('<span></span>两次密码输入不一致').css('color','red');
			return;
		}
		
	});
});


//验证密码
/*function password(){
	var txt_name = $(".skipRegister_input:eq(1) input").val();
	if( txt_name.length<=6 || txt_name.length>16 ){
		$(".skipRegister_input:eq(1) input").css('border', '2px solid #ff0000');
		$(".skipRegister_input:eq(1) span").addClass('cuo').show();
		$('.warnId').show().html('<span></span>用户名:请输入5-25位字母或数字,不能以数字开头').css('color','red');
	}else{
		$(".skipRegister_input:first input").css('border', '2px solid #3c763d');
		$(".skipRegister_input:first span").addClass('dui').show();
	}
}*/