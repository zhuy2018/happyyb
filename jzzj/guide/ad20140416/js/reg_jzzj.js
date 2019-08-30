var iserror = 1;
var iserror_ajax = 1;
var times = 1000;
$(function(){
	$("#smart_input").click(function(){
		if($(this).val()=="4-16个字符，必须以字母开头"){
			$(this).val("");
		}		
	})
	//cookieCsid();
	//hits() ;
	clickMonitor();//点击监控
})
function checkuser(lasts)
{


	var smart_input = Stip('smart_input');
    var usernamecheck = $("#smart_input").val();
	
	//$("#smart_input").css("backgroundColor","#000"); 
	
    if(!usernamecheck||usernamecheck=='建议使用QQ号注册'){

        smart_input.show({content:'请输入用户名', kind:'error',p:'top',time:times});
        iserror = 1;
        return false;
    }
    var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){3,15}$/;
    if(!patrn.test(usernamecheck)){
        smart_input.show({content:'4-16个字符，必须以字母开头', kind:'error',p:'top',time:times});
        return false;
    }
    if(usernamecheck.length < 4){
        smart_input.show({content:'4-16个字符，必须以字母开头', kind:'error',p:'top',time:times});
        return false;
    }

    var url = "http://www.2133.com/index.php?r=site/adCheckUser";
    var data = 'RegisterForm[username]='+usernamecheck+'&ajax=login-form';
    $.ajax({
        url:url,
        dataType:"jsonp",
        data:data,
        jsonp:"callback",
        timeout:5000,
        success:function(obj){
            if(obj.msg=='success'){
				//if(lasts != 1) //$("#smart_input").next("span").attr("class","check_r");
				//smart_input.show({content:'输入正确', kind:'error',p:'top',time:times});
                iserror_ajax = 0;
            }
            else{
                smart_input.show({content:obj.msg, kind:'error',p:'top',time:times});
                iserror_ajax = 1;
                return false;
            }

        }
    })
}

function SumbiteInfo()
{

        checkuser(1);
        UserPassName(1);
        UserRPass(1);
        UserAgree();
        //UserVc();


        if(iserror == 0 && iserror_ajax == 0)
        {

            var url = "http://www.2133.com/index.php?r=site/jzzjRegister";
            var data = $('#register-form').serialize()+'&ajax=register-form';
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
					
						var username_2133 = $("#smart_input").val();
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
						
						$('.index_right1_co').hide();
						$(".index_right1_ywc").show();
						//$(".registered_successfully").show();
						//$.cookie('votename', null); 					
						//$('.registered_co').hide();
						//$('.registered_lb').show();

                    } 
					/*else if (obj.msg=='errorVerifyCode') {
						var ss = Stip('RegisterCsForm_verifyCode');
                        ss.show({content:'验证码错误', kind:'error',p:'top',time:times})
                    }*/
                    else{
						var ss = Stip('smart_input');
                        ss.show({content:'用户名密码错误', kind:'error',p:'top',time:times});
                    }

                }
            })
        }

    return false;
}

function UserPassName(lasts)
{
    var txtPassWord = Stip('txtPassWord');
    if(!$.trim($("#txtPassWord").val())){
        txtPassWord.show({content:'请输入密码', kind:'error',p:'top',time:times})
        iserror = 1;
    }
    else if($("#txtPassWord").val()&&$.trim($("#txtPassWord").val()).length<6)
    {
        txtPassWord.show({content:'请控制您的密码在6-20之内', kind:'error',p:'top',time:times})
        iserror = 1;
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
            //if(lasts != 1) //$("#txtPassWord").next("span").attr("class","check_r");//
			//txtPassWord.show({content:'输入正确', kind:'error',p:'top',time:times});
            iserror = 0;
        /*
		}
		*/
    }

}

function UserRPass(lasts)
{
	var txtRPassWord = Stip('txtRPassWord');
    var password = $("#txtPassWord").val();
    var password2 = $("#txtRPassWord").val();
    if(!password2){
        txtRPassWord.show({content:'请再次输入您的密码', kind:'error',p:'top',time:times})
        iserror = 1;
    }
    else if(password!=password2)
    {
        txtRPassWord.show({content:'两次输入的密码请保持一致', kind:'error',p:'top',time:times})
        iserror = 1;
    }
    else
    {
        //if(lasts != 1) //$("#txtRPassWord").next("span").attr("class","check_r");
		//txtRPassWord.show({content:'输入正确', kind:'error',p:'top',time:times});
    }
}


function UserAgree()
{
	var RegisterForm_agree = Stip('RegisterForm_agree');
    if(!$("#RegisterForm_agree").filter(':checked').val()) {
		RegisterForm_agree.show({content:'请选择同意', kind:'error',p:'top',time:times})
        iserror = 1;
    } else {
        iserror = 0;
    }
}


function UserVc() {
	var RegisterCsForm_verifyCode = Stip('RegisterCsForm_verifyCode');
    if(!$.trim($("#RegisterCsForm_verifyCode").val())){
        RegisterCsForm_verifyCode.show({content:'请输入验证码', kind:'error',p:'top',time:times})
        iserror = 1;
    } else {
        iserror = 0;
    }
}

document.onkeydown=function mykeyDown(e){
    e = e||event;
    if(e.keyCode == 13) {SumbiteInfo();}
    return;
}


function newverifypic() {
     var Pnk = document.getElementById("yw0");
	var timestamp = Date.parse(new Date());
    Pnk.src = "http://www.2133.com/index.php?r=site/getcaptcha&s="+timestamp;

}
			

function hits() {
    var channelid = $("#channelid1").val();
	$.ajax({
		type:'GET',
		url:'http://data.jzzjol.com/oss.php',
		data:{m:'hit',channelid:channelid},
		success:function(js_msg){}
	});
}		
function clickMonitor(){
	var channelid = $("#channelid1").val();
	$.ajax({
		type:'GET',
		url:'http://data.jzzjol.com/oss.php',
		data:{m:'hit',channelid:channelid},
		success:function(js_msg){}
	});
	/*
	$.ajax({
		url:'http://www.nnton.com/function/pmxy.php',
		type:'get',
		dataType:"jsonp",
		jsonp:"callBack",
		data:{"channelid":channelid, 'test':'Y'},
		timeout:5000,
		success:function(){
			
		}
	})
	*/
}

		

