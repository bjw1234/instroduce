$(function() {
	setTimeout(function() {
		$("#name").animate({
			opacity: '1'
		}, 3000);
		$(".heading-intro").animate({
			opacity: '1'
		}, 5000);
	}, 100);

	//菜单点击事件
	var flag = true;
	$(".menu_a").click(function() {
		if(flag) {
			flag = false;
			$(".menu").stop().slideDown({
				'duration': 1000,
				'easing': 'easeOutBounce'
			});
			$(".overlay").fadeIn();
		} else {
			flag = true;
			$(".menu").stop().slideUp({
				'duration': 1000,
				'easing': 'easeOutBounce'
			});
			$(".overlay").fadeOut();
		}
		//$(".menu").stop().slideToggle({'duration':1000,'easing':'easeOutBounce'});
	});
	
	//遮罩层点击
	$(".overlay").click(function(){
		flag = true;
			$(".menu").stop().slideUp({
				'duration': 1000,
				'easing': 'easeOutBounce'
			});
			$(".overlay").fadeOut();
	});

	//按钮点击事件
	$(".save-me").click(function() {
		alert("那你可要对我负责哟~\\-.-/~");
	});

	//控制音乐播放
	var flag = true;
	$("#music").click(function() {
		var music = document.getElementById("music_audio");
		if(flag) {
			music.pause();
			flag = false;
		} else {
			music.play();
			flag = true;
		}
	});

	//获取初始值
	var top1 = $(document).scrollTop();
	//检测页面滚动
	$(document).scroll(function() {

		//添加类
		addClass(".green-section");
		addClass(".art-one");
		addClass(".art-two");
		addClass(".art-three");
		addClass(".purple-section");

		//获取页面距离顶部的距离
		var top2 = $(document).scrollTop();

		//返回顶部按钮的操作
		if(top2 > 250) { //按钮显示
			$(".back-up").stop().fadeIn(300);
		} else { //按钮隐藏
			$(".back-up").stop().fadeOut(300);
		}

		if(top2 > top1) { //页面向下滚动		
			$(".index-nav").slideDown();
		} else { //页面向上滚动
			$(".index-nav").slideUp();
			$(".menu").slideUp(500);
			$(".overlay").fadeOut();
//			$(".overlay").css('display', 'none');
		}

		//top1重新赋值
		top1 = top2;
	});

	//点击返回顶部按钮
	$(".back-up").click(function() {
		$("body,html").stop().animate({
			scrollTop: 0
		}, 500);
	});

	//给某一个类添加on类选择器
	function addClass(e) {
		var win_h = $(window).height() * 0.5; //窗户高度的一半
		var t = $(e).offset().top; //e 距离页面顶部的距离
		var top = $(window).scrollTop(); //隐藏的高度
		if(top > t - win_h) {
			$(e).addClass("on");
		}
	}

});