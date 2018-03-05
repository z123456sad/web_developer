/*
* @Author: ccccc
* @Date:   2018-03-02 17:37:44
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-05 02:52:53
*/
// 图片隐藏
$.fn.SelectImg = function() {
	var ui = $(this);
	$('.ui-select',ui).on('click',function(){
		$('.select_op').show();
		return false;
	});
	$('.select_op p',ui).on('click',function(){
		$('.ui-select').text($(this).text());
		$('.select_op').hide();
		return false;
	});
	$('body').on('click',function(){
		$('.select_op').hide();
	});
}
// 信息展示
$.fn.InfoNav = function() {
	var info = $(this);
	
	$('.info_title1,.nk,.info_title2').on('mouseover',function(){
		
		if(this.className == 'info_title info_title1'){
			$('.nk').show();
		}
		else{
			$('.wk').show();
		}
	}).on('mouseout',function(){
		if(this.className == 'info_title info_title1'){
			$('.nk').hide();
		}
		else{
			$('.wk').hide();
		}
	});
}
//分页 
$.fn.Page = function() {
	var pagea = $(this);
	$('.caption a:eq(0),.caption a:eq(1)').on('click',function(){
		console.log($('.caption a').index(this));
		if($('.caption a').index(this) == 0){
			$('.caption a:eq(0)').addClass('active').siblings().removeClass('active');
			$('.f1').show();
			$('.f2').hide();
		}
		else{
			$('.caption a:eq(1)').addClass('active').siblings().removeClass('active');
			$('.f1').hide();
			$('.f2').show();
		}
	});

	$('.piag a:eq(0),.piag a:eq(1),.piag a:eq(2),.piag a:eq(3),.piag a:eq(4)').on('click',function(){
		if($('.piag a').index(this) == 0){
			$('.piag a:eq(0)').addClass('active')

			for (var i = 1; i <= 5; i++) {
				$('.piag a').eq(i).removeClass('active');
			};
			$('.f11').show();

		}
		else if($('.piag a').index(this) == 1){
			for (var i = 0; i <= 5; i++) {
				$('.piag a').eq(i).removeClass('active');
			};
			$('.piag a:eq(1)').addClass('active')
			$('.f11').hide();

		}
		else if($('.piag a').index(this) == 2){
			for (var i = 0; i <= 5; i++) {
				$('.piag a').eq(i).removeClass('active');
			};
			$('.piag a:eq(2)').addClass('active')
		}
	});

}
// 轮播图幻灯片
$.fn.Banner = function(){
 	// 遍历创建图片导航
 	var bannernum = $('.banner a')
 	var len = bannernum.length;
 	bannernum.each(function(index){
 		var $li = $('<li>');
 		if (index == 0) {
 			$li.addClass("active1");
 			$('.banner_img a').eq(0).css({
				zIndex:5
			}).siblings().css({
				zIndex:1
			})
 		};
 		$li.appendTo('.ui_banner');

 	})
// li监控点击事件跳转图片
 	$('.ui_banner li').on('click',function(index){
			$('.banner_img a').eq($('.ui_banner li').index(this)).css({
				zIndex:5
			}).siblings().css({
				zIndex:1
			})
			// 添加active1
			
			$('.ui_banner li').eq($(this).index()).addClass('active1').siblings().removeClass('active1')
 	})

 // left_right点击监控
  	$('.left_banner,.right_banner').on('click',function(){	
  		if (this.className == 'left_banner fl') {
  			bannernum.each(function(index){
		 		if ($('.ui_banner li').eq(0).attr('class') == 'active1') {
					$('.banner_img a').eq(bannernum.length-1).css({
						zIndex:5
					}).siblings().css({
						zIndex:1
					})
					$('.ui_banner li').eq(bannernum.length-1).addClass('active1').siblings().removeClass('active1');
					return false
		 		}
  			 	else if ($('.ui_banner li').eq(index).attr('class') == 'active1') {
  			 		// 找到后需要判断这个li的index是多少
  			 		
  			 		// 
	  			 	if (index>0) {
						$('.banner_img a').eq(index-1).css({
							zIndex:5
						}).siblings().css({
							zIndex:1
						})
					// 添加active1
					
						$('.ui_banner li').eq(index-1).addClass('active1').siblings().removeClass('active1')
		  			 	return false
		  			 	}
  			 	}	 	
  			 })

  		}
  		// 点击右边
  		else{
  			bannernum.each(function(index){
  			 	if ($('.ui_banner li').eq(index).attr('class') == 'active1') {
  			 		if (index+1 == bannernum.length) {
						$('.banner_img a').eq(0).css({
							zIndex:5
						}).siblings().css({
							zIndex:1
						})
						$('.ui_banner li').eq(0).addClass('active1').siblings().removeClass('active1');
						return false
  			 		}
  			 		else if (index<bannernum.length) {
						$('.banner_img a').eq(index+1).css({
							zIndex:5
						}).siblings().css({
							zIndex:1
						})
					// 添加active1
						$('.ui_banner li').eq(index+1).addClass('active1').siblings().removeClass('active1')
		  			 	return false
		  			 	}
  			 	}	 	
  			 })
  		}

 	})

 // 结尾
}
// 定时器播放轮播图
timer = setInterval(autoplay,2000)
$('.banner').mouseover(function(){
	clearInterval(timer)
})

$('.banner').mouseleave(function(){
	timer = setInterval(autoplay,2000)
})

function autoplay(){
	//获取当前轮播图的位置
		$(".right_banner").trigger("click"); 
}

$(function() {
	$('.select_img').SelectImg();
	$('.info_title').InfoNav();
	$('.f1').Page();
	
// 回到顶部
	$('.backtop').click(function(){
		$('body,html').animate({'scrollTop':0});
	})
// top栏跟随移动
	$(window).scroll(function(){
	var topnum = $(document).scrollTop();
	
	if(topnum>30){
		$('.top').css({
			position:"fixed"
		});
	}
	else{
		$('.top').css({
			position:"static"
		});
	}
	})
// 轮播图幻灯片
	
	$('.banner').Banner();
// 三级联动
	$('.reservation').SelectCity();


});
	