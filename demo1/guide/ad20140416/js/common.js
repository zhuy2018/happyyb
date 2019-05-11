window.onload=function(){
	
}

//各个参数调用集合
$(function(){
	Slide();
	jInfo();
})

//Creat by mypenn@gmail.com
String.prototype.trim= function(){   
    return this.replace(/(^\s*)|(\s*$)/g, "");  
}

function Slide(){
	var obj = $("#Slide");
	var sL = $("li",obj).length;
	var sW = obj.width();
	var si = 0;
	$("ul",obj).width(sL * sW);
	obj.append("<p />");
	
	$("li",obj).each(function(i){
		var i = i+1;
		i == 1 ? $("p",obj).append("<a class='active' href='javascript:void(0)'>"+i+"</a>") : $("p",obj).append("<a href='javascript:void(0)'>"+i+"</a>");
	});
	
	$("p>a",obj).click(function(){
		si = parseInt($(this).text()) - 1;
		$(this).addClass("active").siblings().removeClass("active");
		$("ul",obj).stop().animate({marginLeft:-sW * si});
	});
	
	$("p>a",obj).mouseover(function(){$(this).click()});
	
	var _auto = function(){
		si < sL -1 ? si++ : si = 0;
		$("p>a",obj).eq(si).click();
		sTime = setTimeout(_auto,5000);
	}
	var sTime = setTimeout(_auto,5000);
	
	$("li,p a",obj).hover(function(){
		clearTimeout(sTime);
	},function(){
		sTime = setTimeout(_auto,5000);
	});
}

function getTab(t,o){
	$(t).addClass("active").siblings("li").removeClass("active");
	$(t).parent("li").addClass("active").siblings("li").removeClass("active");
	$(o).show().siblings().hide();
}

//特色技能显示效果
function jInfo(){
	$(".pins>img").hover(function(){
		//P(this);
		var txt = $(this).attr("description");
		var offset = $(this).offset();			
		$("#jInfo").html(txt);				
		$("#jInfo").css({top:offset.top+45,left:offset.left}).show();
	},function(){
		$("#jInfo").hide();
	});
}

function getDialog(obj){
	$(obj).show();
}

function CloseDialog(obj){
	$("#bgDiv,"+obj).hide();
}


function dosom()
{	
	$("#oLayer").fadeOut("fast",function(){			
		$(this).parent().append($(this).clone(true).hide());
		$(this).detach();				
	});				
}

function yessom()
{
	show('oLayer');
	//P("yessom");
	
}
function getExamGift(){
	getDialog("#Dialog3");
}


function _Player(){
	if($("#Player1").length == 0){
		$("body").append("<div class='dialog' id='Player1' style='width:998px;height:522px;background:#333;padding:5px;' />");
	}
	
	var html = '';
	html += '<a href="javascript:void(0)" onclick="removeObj(\'#Player1\')" style="float:right;padding-right:5px;">关闭</a>';
	html += '<object id="player_10" width="998" height="502" type="application/x-shockwave-flash" data="guide/ad0615/video/player.swf">';
	html += '<param value="always" name="allowScriptAccess">';
	html += '<param value="false" name="allowFullScreen">';
	html += '<param value="window" name="wmode">';
	html += '<param value="guide/ad0615/video/top.flv" name="flashvars">';
	html += '<param value="guide/ad0615/video/player.swf" name="movie">';
	html += '<param value="high" name="quality">';
	html += '</object>';
	$("#Player1").html(html);
	getDialog('#Player1');
}

function removeObj(obj){
	CloseDialog(obj);
	$(obj).remove();
}

function _replaceSwf(obj,url){
	var offset = $(">img",obj).offset();
	var w = $(">img",obj).width(), h = $(">img",obj).height();
	if($("#ProSwf").length == 0){
		$("body").append("<div id='ProSwf' style='position:absolute;top:"+offset.top+"px;left:"+offset.left+"px;width:"+w+"px;height:"+h+"px;overflow:hidden;background:#000;'><a href='javascript:void(0)' onclick='_stopPro()' style='position:absolute;top:0;left:0;width:"+w+"px;height:"+h+"px;overflow:hidden;background:transparent url(data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==) repeat;;z-index:2'></a><div id='ProSwf1' style='position:absolute;top:0;left:0;width:"+w+"px;height:"+h+"px;overflow:hidden;background:transparent;z-index:1'></div></div>")
	}
	
	var html = '';
	html += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+w+'" height="'+h+'">';
	html += '<param name="movie" value="'+url+'" />';
	html += '<param name="quality" value="high" />';
	html += '<param name="wmode" value="opaque" />';
	html += '<!--[if !IE]>-->';
	html += '<object type="application/x-shockwave-flash" data="'+url+'" width="'+w+'" height="'+h+'">';
	html += '<!--<![endif]-->';
	html += '<param name="quality" value="high" />';
	html += '<param name="wmode" value="opaque" />';
	html += '<!--[if !IE]>-->';
	html += '</object>';
	html += '<!--<![endif]-->';
	html += '</object>';
	
	$("#ProSwf1").html(html);
	$(obj).blur();
}
//四大门派八大职业视频开始与停止效果
function _stopPro(){
	$("#ProSwf1 object").remove();
	$("#ProSwf1").html("nothing");
	$("#ProSwf").remove();	
}


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-38711863-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
	 s.parentNode.insertBefore(ga, s);
  })();


		//获取FLASH对象
function thisMovie(movieName) {
    if (navigator.appName.indexOf("Microsoft") !=-1) {
        return window[movieName];
    }
    else {
        return document[movieName];
    }
	P(document.getElementById(movieName));
	//return document.getElementById(movieName);
	
}


function reservation(){
	$(".in2 .title a").click(function(){
		$(".reservation").show();
		return false;
	});
	$("body").click(function(){
		$(".reservation").hide();
	})
}


function Base64() {  

    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  
   
    // public method for encoding  
    this.encode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = _utf8_encode(input);  
        while (i < input.length) {  
            chr1 = input.charCodeAt(i++);  
            chr2 = input.charCodeAt(i++);  
            chr3 = input.charCodeAt(i++);  
            enc1 = chr1 >> 2;  
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
            enc4 = chr3 & 63;  
            if (isNaN(chr2)) {  
                enc3 = enc4 = 64;  
            } else if (isNaN(chr3)) {  
                enc4 = 64;  
            }  
            output = output +  
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
        }  
        return output;  
    }  
   
    // public method for decoding  
    this.decode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3;  
        var enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
        while (i < input.length) {  
            enc1 = _keyStr.indexOf(input.charAt(i++));  
            enc2 = _keyStr.indexOf(input.charAt(i++));  
            enc3 = _keyStr.indexOf(input.charAt(i++));  
            enc4 = _keyStr.indexOf(input.charAt(i++));  
            chr1 = (enc1 << 2) | (enc2 >> 4);  
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
            chr3 = ((enc3 & 3) << 6) | enc4;  
            output = output + String.fromCharCode(chr1);  
            if (enc3 != 64) {  
                output = output + String.fromCharCode(chr2);  
            }  
            if (enc4 != 64) {  
                output = output + String.fromCharCode(chr3);  
            }  
        }  
        output = _utf8_decode(output);  
        return output;  
    }  
   
    // private method for UTF-8 encoding  
    _utf8_encode = function (string) {  
        string = string.replace(/\r\n/g,"\n");  
        var utftext = "";  
        for (var n = 0; n < string.length; n++) {  
            var c = string.charCodeAt(n);  
            if (c < 128) {  
                utftext += String.fromCharCode(c);  
            } else if((c > 127) && (c < 2048)) {  
                utftext += String.fromCharCode((c >> 6) | 192);  
                utftext += String.fromCharCode((c & 63) | 128);  
            } else {  
                utftext += String.fromCharCode((c >> 12) | 224);  
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  
   
        }  
        return utftext;  
    }  
   
    // private method for UTF-8 decoding  
    _utf8_decode = function (utftext) {  
        var string = "";  
        var i = 0;  
        var c = c1 = c2 = 0;  
        while ( i < utftext.length ) {  
            c = utftext.charCodeAt(i);  
            if (c < 128) {  
                string += String.fromCharCode(c);  
                i++;  
            } else if((c > 191) && (c < 224)) {  
                c2 = utftext.charCodeAt(i+1);  
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                i += 2;  
            } else {  
                c2 = utftext.charCodeAt(i+1);  
                c3 = utftext.charCodeAt(i+2);  
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                i += 3;  
            }  
        }  
        return string;  
    }  
}  

