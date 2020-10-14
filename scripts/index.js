$(function() {
	//主页背景图5秒随机切换
	$(function(){
	    $(".bg_img li:nth-child(1)").addClass("show");
	    setInterval(function () {
	        var randomBgIndex = Math.round(Math.random(2) * 4);
	        $(".bg_img li").eq(randomBgIndex).addClass("show").siblings().removeClass("show");
	    },5000);
	});
	
	$(function(){
		//点击关于我
		$('.section1 span:first').click(function(){
			var h = $(window).scrollTop(); //获取当前滚动条距离顶部的位置
 			$("html,body").animate({ scrollTop: h+750 },700);//点击按钮向下移动750px，时间为800毫秒
		});
		/*作品集*/
		$('.section1 span:last').click(function(){
			var h = $(window).scrollTop(); //获取当前滚动条距离顶部的位置
 			$("html,body").animate({ scrollTop: h+2250 },1500);
		});
		//点击top
		$('#s1_top').click(function(){
 			$('html,body').animate({scrollTop:0},'slow');
		});
	});
    
	//主页nav固定
	$(function() {
	    var top1 = $(".section2").offset().top; //750px  上偏移位置
	   	var top2 = $(".section3").offset().top-30;//1500px
	   	var top3 = $(".section4").offset().top-30;
	   	var top4 = $(".section5").offset().top-30;
	   	var top5 = $(".section6").offset().top-30;
	   	var tops = [top1,top2,top3,top4,top5];
		$(window).scroll(function () {
	        var s = $(window).scrollTop();	// 计算导航栏到顶部的距离值
	        s > top1 ? $('.section2 nav').addClass("nav_fixed") : $('.section2 nav').removeClass("nav_fixed");
	        //top 按钮隐藏与出现
	        s+550 > top1 ? $('#s1_top').fadeIn(400) : $('#s1_top').fadeOut(400);
	       if((s>top1)&&(s<top2)){
	            $("#section2_nav li").eq(0).addClass("nav_change").siblings().removeClass("nav_change");
	        }else if((s>top2)&&(s<top3)){
	            $("#section2_nav li").eq(1).addClass("nav_change").siblings().removeClass("nav_change");
	        }else if((s>top3)&&(s<top4)){
	            $("#section2_nav li").eq(2).addClass("nav_change").siblings().removeClass("nav_change");
	        }else if((s>top4)&&(s<top5)){
	            $("#section2_nav li").eq(3).addClass("nav_change").siblings().removeClass("nav_change");
	        }else if(s>top5){
	            $("#section2_nav li").eq(4).addClass("nav_change").siblings().removeClass("nav_change");
	        }
	    });
	});

	//经过导航选项变色
	$(function(){
		$('#section2_nav li').mouseenter(function(){
		$(this).addClass('nav_change');	
		});
		$('#section2_nav li').mouseleave(function(){
		$(this).removeClass("nav_change");
		});
	});
	//导航栏伸缩变形
	$(function(){
		//获取刷新时页面宽度
		var w1 = document.body.clientWidth;
		//console.log(w1);
		//w1 < 865 ul隐藏
		w1 < 1020 ? $('#section2_nav ul').addClass('nav_ul').css('width',w1+'px') : 
		$('#section2_nav ul').removeClass('nav_ul').css('width','500px');
		//w > 865 p隐藏
		w1 > 1020 ? $('#section2_nav p').addClass('hide') : $('#section2_nav p').removeClass('hide');
		//w1 < 865 时  li宽度=w1
		w1 < 1020 ? $('#section2_nav ul li').addClass('nav_widths').css('width',w1+'px') 
		: $('#section2_nav ul li').removeClass('nav_widths').css('width','100px');
		w1 < 1200 ? $('#wark1,#wark3').css('left','8%') : $('#wark1,#wark3').css('left','10%');
		w1 < 1200 ? $('#wark2').css('right','8%') : $('#wark1,#wark3').css('right','10%');
		w1 < 900 ? $('.date').css('display','none') : $('.date').css('display','block');
		//监听浏览器时下窗口可视区域宽度   刷新时不显示
		$(window).resize(function() {
		  	var w = $(window).width(); 
		  	//console.log(w);
		  	//w < 865 ul隐藏
		  	w < 1020 ? $('#section2_nav ul').addClass('nav_ul').css('width',w+'px') : 
			$('#section2_nav ul').removeClass('nav_ul').css('width','500px');
		  	//w > 865 p隐藏
		  	w > 1020 ? $('#section2_nav p').addClass('hide') : $('#section2_nav p').removeClass('hide');
		  	//w < 865 时  li宽度=w
		  	w < 1020 ? $('#section2_nav ul li').addClass('nav_widths').css('width',w+'px') 
		  	: $('#section2_nav ul li').removeClass('nav_widths').css('width','100px');
		  	w < 1200 ? $('#wark1,#wark3').css('left','8%') : $('#wark1,#wark3').css('left','10%');
			w < 1200 ? $('#wark2').css('right','8%') : $('#wark1,#wark3').css('right','10%');
			w < 900 ? $('.date').css('display','none') : $('.date').css('display','block');
		});
		//点击显示ul 再点隐藏
		$("#section2_nav p").click(function(event) {
        	$("#section2_nav ul").toggle();
    	});
    	
	});

	/*点击导航栏*/
	$(function(){
		var h = $(window).scrollTop();
		$('#section2_nav ul li:eq(0)').click(function(){
			if (h > 750){
				$("html,body").animate({ scrollTop:h-h+750 },'slow');
			}
		});
		$('#section2_nav ul li:eq(1)').click(function(){
			if (h < 1500){
				$("html,body").animate({ scrollTop:h+1500-h },'slow');
			}else{
				$("html,body").animate({ scrollTop:h-h+1500 },'slow');
			}
		});
		$('#section2_nav ul li:eq(2)').click(function(){
			if (h < 2250){
				$("html,body").animate({ scrollTop:h+2250-h },'slow');
			}else{
				$("html,body").animate({ scrollTop:h-h+2250 },'slow');
			}
		});
		$('#section2_nav ul li:eq(3)').click(function(){
			if (h < 3000){
				$("html,body").animate({ scrollTop:h+3000-h},'slow');
			}else{
				$("html,body").animate({ scrollTop:h-h+3000 },'slow');
			}
		});
		$('#section2_nav ul li:eq(4)').click(function(){
				$("html,body").animate({ scrollTop:h+3750-h },'slow');
		});
	});
	
	
});
