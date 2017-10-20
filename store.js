$(function(){

	
	//这是第一个按钮，点击它是.layer出来，定位左边为0;
	$('.btn').on('click',function(){
		$('.layer').stop().animate({'left':0},600);
		$('.btn').hide(600);
		$('.tit-x img').hide(600);
	})
	//点击.close关闭时，让它元神归位
	$('.close').on('click',function(){
		$('.layer').stop().animate({'left':-200},600,function(){
			$('.btn').show(600);
			$('.tit-x img').show(600);
			$(".layer").stop().animate({"width":200})
		});	
		if($(".toggle-btn span").hasClass("rx")){
			$(".toggle-btn span").removeClass().addClass("allow lIcon lx");
			$(".smar").stop().animate({"left":13},600);
		}
	})
	//当我们点击li时，给当前的li添加hover样式，
	$('.type li').on('click',function(){
		var index=$(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.layer').stop().animate({'width':500},600);
		//让.layer的宽度变成500
		$('.sma-layer').stop().animate({'left':200},600);
		$('.cur').show();
		$('.pics div').eq(index).addClass('cur').siblings().removeClass('cur');
	})
	$('.toggle-btn').on('click',function(){
		var span=$(this).children('span');
		if(span.hasClass("lx")){
			span.removeClass().addClass('allow rIcon rx');
			$('.smar').stop().animate({'left':-287},600);
			$('.layer').stop().animate({'width':213});
		}else{
			span.removeClass().addClass('allow lIcon lx');
			$('.smar').stop().animate({'left':13},600);
			$('.layer').stop().animate({'width':500});
		}
	})
		//这里用的是点击无缝滚的原理
		var line=100;
		$('.down-btn').on('click',function(){
				var h=$(".pics dl").height();
				if($('.cur').is(':animated'))return false;
				$('.cur dl').last().prependTo('.cur');
				$('.cur').css('margin-top',-h)
				$('.cur').stop().animate({'margin-top':0},600)
				var a=$("#notice").position().top;
				console.log(a);
				if(a>=400){
					$("#notice").stop().animate({"top":0},600);
				}else{
					$("#notice").stop().animate({"top":"+="+line},600);
				}
			})
			$('.up-btn').on('click',function(){
				var h=$(".pics dl").height();
				if($('.cur').is(':animated'))return false;
				$('.cur').stop().animate({'margin-top':-h},600,function(){
					$('.cur dl').first().appendTo('.cur');
					$('.cur').css('margin-top',0);
				})
				var a=$("#notice").position().top;
				console.log(a);
				if(a<=0){
					$("#notice").stop().animate({"top":400},600);
				}else{
					$("#notice").stop().animate({"top":"-="+line},600);
				}
			})
	//无缝轮播图
	var time=null,ind=0,len=$(".pic-wrap div").length;
	var w=$('.pic-wrap div').width();
	$('.pic-wrap').width(w*(len+1));
	function auto(){
		ind++;
		if(ind>len-1){	
			$('.pic-wrap div').first().clone().appendTo('.pic-wrap');
			$('.pic-wrap').stop().animate({'margin-left':-w*len},600,function(){
				$('.pic-wrap div').last().remove();
				$('.pic-wrap').css({'margin-left':0});
			})
			$('.num-nav li').eq(0).addClass('on').siblings().removeClass('on');
			ind=0;
		}else{
			show(ind);
		}
	}
		$('.focus').hover(function(){
				clearInterval(time);
			},function(){
				time=setInterval(auto,1500);	
			}).trigger('mouseleave');
		$('.num-nav li').on('mouseover',function(){
		 	ind=$(this).index();
			show(ind)
		})
		$('#prev').on('click',function(){
				ind--;
				if(ind<0){					
					ind=len-1;				
				}
					show(ind);
										
			})
			$('#next').on('click',function(){
				auto();	
			})

	function show(i){
		$('.pic-wrap').stop().animate({'margin-left':-w*i},600);
		$('.num-nav li').eq(i).addClass('on').siblings().removeClass('on');
	}
		
})