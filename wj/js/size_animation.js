// 产品下面的3个子页的字体出场入场动画效果封装
$('.page').on('touchend', function() {
	$('.join_co dl').find('dd').slideUp(100)
});
function add(div_fu, div_zi){
	var $w=$(window).width();
	scroGun();
	$(window).scroll( scroGun );
	function scroGun(){
		$( div_fu ).find( div_zi ).each(function (i, elemt){
			if( $(elemt).offset().top < $(window).height() + $(window).scrollTop() ){
				if( i<4 ){
					var $liChild1 =$(elemt);
					$liChild1.css('transition','');
					$liChild1.css('opacity',0);
					$liChild1.filter(':even').css('transform','translate(-'+ $w +'px,0)');
					$liChild1.filter(':odd').css('transform','translate('+ $w +'x,0)');
					
					if(i<2){
						var a=0;
						var timer=setInterval(function (){
							var $liChild1 =$(elemt);
							$liChild1.css('opacity',1);
							$liChild1.css('transform','translate(0,0)');
							$liChild1.css('transition','1s');
							
							a++;
							if( a==$liChild1.length ){
								clearInterval( timer );
							}
						}, 20);
					}
					if(i>=2){
						var a=0;
						var timer=setInterval(function (){
							var $liChild1 =$(elemt);
							$liChild1.css('opacity',1);
							$liChild1.css('transform','translate(0,0)');
							$liChild1.css('transition','3s');
							
							a++;
							if( a==$liChild1.length ){
								clearInterval( timer );
							}
						}, 400);
					}
				}
				else{
					var $liChild =$(elemt);
					$liChild.css('opacity',1);
					$liChild.css('transform','translate(0,0)');
					$liChild.css('transition','2s');
				}
				
			}else{
				var $liChild =$(elemt);
				$liChild.css('transition','');
				$liChild.css('opacity',0);
				$liChild.filter(':even').css('transform','translate(-'+ $w +'px,0)');
				$liChild.filter(':odd').css('transform','translate('+ $w +'px,0)');
			}
		});
	}
}