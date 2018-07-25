
var minsize=5;
var maxsize=30;
var newone=200;  //100毫秒产生一个雪花
var flakeColor="#fff";
var flake=$("<div></div>").css({"position":"absolute","top":"-50px"}).html("❉");

$(function(){
	var documentHight=3480;
	var documentWidth=$(window).width();

	setInterval(function(){
		var startPostionLeft=Math.random()*documentWidth;  //产生雪花时距左边的距离
		var startOpacity=0.7+Math.random()*0.3;            //开始时雪花的透明度
		var endPostionTop=documentHight;                   //高度
		var endPostionLeft=Math.random()*documentWidth;    //雪花降落时距左边的距离
		var durationFall=15000+Math.random()*3000;          //雪花下落的时间
		var sizeFlake=minsize+Math.random()*maxsize;       //雪花的尺寸     

		flake.clone().appendTo("body").css({
			"left":startPostionLeft,
			"opacity":startOpacity,
			"font-size":sizeFlake,
			"color":flakeColor
		}).animate({
			"top":endPostionTop,                            //动画结束时距上边的距离
			"left":endPostionLeft,                          //结束时距左边的距离
			"opacity":0.2                                   //结束时的透明度
		},durationFall,function(){
			//回调函数
			$(this).remove();                               //动画结束后将div移除
		});	
	},newone);	                                            //100毫秒产生一个雪花
});