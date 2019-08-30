// 首页预加载插件
(function($){
  var imgList = [];	
  $.extend({
	  preload : function(imgArr, option) {
	     var setting = $.extend({
			 init : function() {},
			 load_all : function() {}
		  },option);
	  var total = imgArr.length;
	  var loaded = 0;
	      setting.init();
	      for(var i in imgArr) {
			    imgList.push($("<img />").attr("src",imgArr[i]));
                if(imgList[i][0].complete){
				   loaded++;
				   if(loaded == total) {
					   setting.load_all();	 
				    }
					
				}else {
				    imgList[i].load(function() {
				      loaded++; 
				      if(loaded == total) {
					     setting.load_all();	 
				       }					   
					 })		
				}	
           }   
	 }
});  
})(jQuery)

$(function() {
	$.preload([
		"image/banner2.jpg",
		"image/bg.jpg",
		"image/footer_bg.jpg",
		"image/image_img01.jpg",
		"image/image_img02.jpg",
		"image/image_img03.jpg",
		"image/image_img04.jpg",
		"image/image_img05.jpg",
		"image/image_img06.jpg",
		"image/image_img07.jpg",
		"image/image_img08.jpg",
		"image/image_img09.jpg",
		"image/image_img10.jpg",
		"image/image_img11.jpg",
		"image/image_img12.jpg",
		"image/image_img13.jpg",
		"image/image_img14.jpg",
		"image/img01.jpg",
		"image/img02.jpg",
		"image/menu01.jpg",
		"image/menu02.jpg",
		"image/menu03.jpg",
		"image/menu04.jpg",
		"image/menu05.jpg",
		"image/menu06.jpg",
		"image/menu07.jpg",
		"image/menu08.jpg",
		"image/menu09.jpg",
		"image/menu10.jpg",
		"image/menu11.jpg",
		"image/banner.jpg",
		"image/banner2.jpg",
		"image/banner3.jpg",
		"image/banner5.jpg",
		"image/banner6.jpg",
		"image/banner7.jpg",
		"image/banner8.jpg",
		"image/banner9.jpg",
		"image/banner10.jpg",
		"image/banner11.jpg",

	],{   
		init : function() {
			$(".loadDiv").fadeOut(500);  
		},
		load_all : function() {
			$("#loadDiv").fadeOut(1000);
			
			$(".logo").delay(500).stop().fadeIn().animate({"top":"5%","opacity":"1"},500,"easeInOutSine");
			
			$(".index_button").delay(1500).stop().fadeIn().animate({},500,"easeInOutSine",function(){
				$(this).addClass("xzfd");
				});
			$(".index_button img").delay(2500).animate({},500,"easeInOutSine",function(){
				$(this).addClass("y-ain");
				});
			$(".copyright").delay(500).stop().fadeIn().animate({"bottom":"36px","opacity":"1"},500,"easeInOutSine")
		}   	  	  
	})	
})
