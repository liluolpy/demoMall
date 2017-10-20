$(function(){
	$('.btn').on('click',function(){
		$('.layer').stop().animate({'left':0},600)
		$('.btn').hide(600);
		$('.tit-x img').hide(600);
	})

	$('.close').on('click',function(){
		$('.layer').stop().animate({'left':-200},600,function(){
			$('.tit-x img').show(600);
			$('.btn').show(600);
			$('.layer').stop().animate({'width':200});
		})
		if($('#toggle-btn span').hasClass('rx')){
			$('#toggle-btn span').removeClass().addClass('allow lIcon lx');
			$('.smar').stop().animate({'left':13});
		}
		
	})
	$('.type').on('click','li',function(){
		//当我们点击弹出层里的li时，给它本身添加hover样式，让.layer的宽变为500，.sma-layer的定位变成200，点击相对应的li时，相对应的包品类也就显示出来
		var index=$(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.layer').stop().animate({'width':500});
		$('.sma-layer').stop().animate({'left':200});
		$('.cur').show();
		$('.pics div').eq(index).addClass('cur').siblings().removeClass('cur');

	})
	$('#toggle-btn').on('click',function(){
		var span=$(this).children('span');
		if(span.hasClass('lIcon lx')){
			span.removeClass().addClass('allow rIcon rx');//如果是左箭头。点它的时候则变成右箭头，且.smar定位变成-287，全部隐藏掉
			$('.layer').stop().animate({'width':213},600);//整个弹出层的宽变为213，
			$('.smar').stop().animate({'left':-287},600);
		}else{
			span.removeClass().addClass('allow lIcon lx');
			$('.layer').stop().animate({'width':500},600);
			$('.smar').stop().animate({'left':13},600);
		}
	})

	var line=100;
	$('.down-btn').on('click',function(){
		var h=$('.cur dl').height();
		//当我们能够知道dl的高度时，我们点击按钮时它就往下走一个dl的高度
		$('.cur dl').last().prependTo('.cur');
		$('.cur').css('margin-top',-h)
		$('.cur').stop().animate({'margin-top':0});
		var a=$("#notice").position().top;
		if(a>=400){
			$('#notice').stop().animate({'top':0},600)
		}else{
			$('#notice').stop().animate({'top':'+='+line},600)
		}
	})
	$('.up-btn').on('click',function(){
		var h=$('.cur dl').height();
		$('.cur').stop().animate({'margin-top':-h},600,function(){
			$('.cur dl').first().appendTo('.cur');
			$('.cur').css('margin-top',0);
		})
		var a=$("#notice").position().top;
		if(a<=0){
			$("#notice").stop().animate({"top":400},600);
		}else{
			$("#notice").stop().animate({"top":"-="+line},600);
		}

	})
})