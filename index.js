windows.onload = function() {
	//调用轮播函数
	$('.picSlider').eq(0).picSlider();
	$('.picSlider').eq(1).picSlider({
		delay:1000,       //图片展示时间 毫秒
		speed:600,        //图片动画速度 毫秒
		event:'mouseover',//动画触发类型
		animate:'fade'    //动画类型
	});
    //获取导航距离页面顶部的距离  
    var introHeight = 450;  
    var useHeight = 900;
    //监听页面滚动  
    $(window).scroll(function() {  
        //判断页面滚动超过导航时执行的代码  
        if( $(document).scrollTop() > introHeight ){  
                $('.nav-bar li').removeClass("active");  
                $('.use').addClass("active");  
                if( $(document).scrollTop() > useHeight ){  
                	$('.nav-bar li').removeClass("active");  
                	$('.custom').addClass("active");  
                
        		}else{//判断页面滚动没有超过导航时执行的代码  
            		$('.nav-bar li').removeClass("active");  
                	$('.use').addClass("active");
        		}  
        }else{//判断页面滚动没有超过导航时执行的代码  
            $('.nav-bar li').removeClass("active");  
                $('.intro').addClass("active");
        }  
    });   
});