var iserror2 = 1;
var iserror_ajax2 = 1;
var times2 = 1000;
$(function(){
	$("#smart_input2").click(function(){
		if($(this).val()=="4-16个字符，必须以字母开头"){
			$(this).val("");
		}		
	})

})
function checkuser2(lasts)
{
	//var smart_input2 = Stip('smart_input2');
    var usernamecheck2 = $("#smart_input2").val();
	
	//$("#smart_input").css("backgroundColor","#000"); 

    if(!usernamecheck2||usernamecheck2=='建议使用QQ号注册'){

        //smart_input2.show({content:'请输入用户名', kind:'error',p:'top',time:times});
		
		$("#u22").html('请输入用户名');
        iserror2 = 1;
        return false;
    }

    var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){3,15}$/;
    if(!patrn.test(usernamecheck2)){
        //smart_input2.show({content:'4-16个字符，必须以字母开头', kind:'error',p:'top',time:times})
		$("#u22").html('字母开头4-16个字符');
        return false;
    }

    if(usernamecheck2.length < 4){
        //smart_input2.show({content:'4-16个字符，必须以字母开头', kind:'error',p:'top',time:times});
		$("#u22").html('字母开头4-16个字符');
        return false;
    }

    var url = "http://www.2133.com/index.php?r=site/adCheckUser";
    var data = 'RegisterForm[username]='+usernamecheck2+'&ajax=login-form';
    $.ajax({
        url:url,
        dataType:"jsonp",
        data:data,
        jsonp:"callback",
        timeout:5000,
        success:function(obj){
            if(obj.msg=='success'){
				if(lasts != 1) //$("#smart_input").next("span").attr("class","check_r");
				//smart_inpu2t.show({content:'输入正确', kind:'error',p:'top',time:times});
				$("#u22").html('输入正确');
                iserror_ajax2 = 0;
            }
            else{
                //smart_input2.show({content:obj.msg, kind:'error',p:'top',time:times});
				$("#u22").html(obj.msg);
                iserror_ajax2 = 1;
                return false;
            }

        }
    })
}

function SumbiteInfo2()
{

        checkuser2(1);
        UserPassName2(1);
        UserRPass2(1);
        UserAgree2();
        //UserVc2();


        if(iserror2 == 0 && iserror_ajax2 == 0)
        {

            var url = "http://www.2133.com/index.php?r=site/jzzjRegister";
            var data = $('#register-form2').serialize()+'&ajax=register-form';
            $.ajax({
                url:url,
                dataType:"jsonp",
				type: 'GET', 
                data:data,
                jsonp:"callback",
                timeout:5000,
                success:function(obj){
	
                    if(obj.msg=='success')
                    {
					
						var username_2133 = $("#smart_input2").val();
						var channelid_2133 = $("#channelid1").val();
						var xid = $("#xid").val();

						/*
						$.ajax({
							type:'GET',
							url:'http://data.jzzjol.com/oss.php',
							data:{m:'reg',username:username_2133,channelid:channelid_2133},
							success:function(js_msg){}
						});
						*/
						
						$.ajax({	
							url:"http://data.jzzjol.com/oss.php",		
							type: 'GET', 	
							async: false,
							dataType:"jsonp",
							timeout:25000,
							jsonp:"callback",	
							data:{m:'reg',username:username_2133,channelid:channelid_2133,xid:xid},
							success:function(){}
						});
						
						$.cookie("username_reg",username_2133,{expires:3600}); 
						
						
						
						$(".exclusive_privilege_six_print").hide();
						
						$.ajax({	
							url:"http://activity.jzzjol.com/ad/20140415/action.php",		
							type: 'GET', 	
							async: false,
							dataType:"jsonp",
							timeout:25000,
							jsonp:"callback",	
							data:{m:"activationcode",username:$.cookie('username_reg')},
							success:function(obj){
					
								if(obj.code){			
									//$("#GKey10").text(obj.code);
									//$("#GKey11").text(obj.code2);
									//$("#Dialog10").show();
									$("#jhm").attr("value",obj.code);
									$("#lj").attr("value",'和我一起来玩《决战紫禁》吧，全新资料片论英雄进击公测了，送你专属英雄特权，激活还能获得京东卡抽奖资格。http://activity.jzzjol.com/ad/20140415/registered.php?xid='+$.cookie('username_reg'));
									$(".registered_successfully").show();
								}
								else {
									//$("#GKey10").text('网络延迟，请稍后再试！');
									//$("#Dialog10").show();
								}
							}  
						});
						
						
						
						//$.cookie('votename', null); 					
						//$('.registered_co').hide();
						//$('.registered_lb').show();

                    } 
					/*else if (obj.msg=='errorVerifyCode') {
						//var ss = Stip('RegisterCsForm_verifyCode');
                        //ss.show({content:'验证码错误', kind:'error',p:'top',time:times})
						$("#yy22").html('验证码错误');
                    }*/
                    else{
						//var ss = Stip('smart_input');
                       // ss.show({content:'用户名密码错误', kind:'error',p:'top',time:times});
						$("#u22").html('用户名密码错误');
                    }

                }
            })
        }

    return false;
}

function UserPassName2(lasts)
{
   // var txtPassWord2 = Stip('txtPassWord2');
    if(!$.trim($("#txtPassWord2").val())){
        //txtPassWord2.show({content:'请输入密码', kind:'error',p:'top',time:times})
		$("#p22").html('请输入密码');
        iserror2 = 1;
    }
    else if($("#txtPassWord2").val()&&$.trim($("#txtPassWord2").val()).length<6)
    {
        //txtPassWord2.show({content:'6-20字符之内', kind:'error',p:'top',time:times})
		$("#p22").html('6-20字符之内');
        iserror2 = 1;
    }
    else{
		/*
        var reg = /(.)\1\1/;
        if(reg.test($.trim($("#txtPassWord").val()))){
            txtPassWord.show({content:'密码含有连续相同字符', kind:'error',p:'top',time:times})
            iserror = 1;
        }
        else{
		*/
            if(lasts != 1) //$("#txtPassWord").next("span").attr("class","check_r");//
			//txtPassWord2.show({content:'输入正确', kind:'error',p:'top',time:times});
			$("#p22").html('输入正确');
			
            iserror2 = 0;
        /*
		}
		*/
    }

}

function UserRPass2(lasts)
{
	//var txtRPassWord2 = Stip('txtRPassWord2');
    var password2 = $("#txtPassWord2").val();
    var password22 = $("#txtRPassWord2").val();
    if(!password22){
        //txtRPassWord2.show({content:'请再次输入密码', kind:'error',p:'top',time:times})
		$("#rp22").html('请再次输入密码');
        iserror2 = 1;
    }
    else if(password2!=password22)
    {
        //txtRPassWord2.show({content:'密码请保持一致', kind:'error',p:'top',time:times})
		$("#rp22").html('密码请保持一致');
        iserror2 = 1;
    }
    else
    {
        if(lasts != 1) //$("#txtRPassWord").next("span").attr("class","check_r");
		//txtRPassWord2.show({content:'输入正确', kind:'error',p:'top',time:times});
		$("#rp22").html('输入正确');
		
    }
}

function UserAgree2()
{
	//var RegisterForm_agree2 = Stip('RegisterForm_agree2');
    if(!$("#RegisterForm_agree2").filter(':checked').val()) {
		//RegisterForm_agree2.show({content:'请选择同意', kind:'error',p:'top',time:times})
		alert('请选择同意');
        iserror2 = 1;
    } else {
        iserror2 = 0;
    }
}


function UserVc2() {
	//var RegisterCsForm_verifyCode2 = Stip('RegisterCsForm_verifyCode2');
    if(!$.trim($("#RegisterCsForm_verifyCode2").val())){
        //RegisterCsForm_verifyCode2.show({content:'请输入验证码', kind:'error',p:'top',time:times})
		//$("#yy22").html('请输入验证码');
        iserror2 = 1;
    } else {
        iserror2 = 0;
    }
}
function newverifypic2() {
     var Pnk2 = document.getElementById("yw02");
	var timestamp2 = Date.parse(new Date());
    Pnk2.src = "http://www.2133.com/index.php?r=site/getcaptcha&s="+timestamp2;
}

