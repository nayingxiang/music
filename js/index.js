$(function(){
	var inner=1;
	
	var music=[
		{
			name:'宋冬野',
			author:'宋冬野',
			src:"music/宋冬野 (Donye.S) - 安和桥.mp3",
			geci:'<li>安和桥 - 宋冬野</li><li>原唱：宋冬野</li><li>词曲：宋冬野</li><li>编曲：闫天午</li><li>让我再看你一遍 从南到北</li><li>像是被五环路蒙住的双眼</li><li>请你再讲一遍 关于那天</li><li>抱着盒子的姑娘</li><li>和擦汗的男人</li><li>我知道</li><li>那些夏天就像青春一样回不来</li><li>代替梦想的也只能是勉为其难</li><li>我知道</li><li>吹过的牛皮</li><li>也会随青春一笑了之</li><li>让我困在城市里纪念你</li><li>让我再尝一口 秋天的酒</li><li>一直往南方开 不会太久</li><li>让我再听一遍</li><li>最美的那一句</li><li>你回家了 我在等你呢</li><li>我知道</li><li>那个夏天</li><li>就像青春一样回不来</li><li>代替梦想的</li><li>也只能是勉为其难</li><li>我知道</li><li>吹过的牛皮</li><li>也会随青春一笑了之</li><li>让我困在城市里纪念你</li><li>我知道</li><li>那个夏天就像你一样回不来</li><li>我也不会再对谁满怀期待</li><li>我知道</li><li>这个世界 每天都有太多的遗憾</li><li>所以 你好 再见</li><li>我知道</li><li>那个夏天</li><li>就像青春一样回不来</li><li>所以 你好 再见 </li>'
		},
		{
			name:'玫瑰',
			author:'贰佰',
			src:'music/贰佰 - 玫瑰.mp3',
			geci:'<li>《玫瑰》</li><li>作词:贰佰</li><li>作曲:贰佰</li><li>演唱:贰佰</li><li>你说你想在海边买一所房子</li><li>和你可爱的松狮一起住在那里</li><li>你会当一个心情杂货铺的老板娘</li><li>随着心情卖着自己喜欢的东西</li><li>生活越来越压抑</li><li>你变得越来越不像自己</li><li>一个人站在悲催的风里</li><li>玫瑰你在哪里</li><li>你说你爱过的人都已经离去</li><li>不要欺骗自己</li><li>你只是隐藏的比较深而已</li><li>玫瑰你在哪里</li><li>你总是喜欢抓不住的东西</li><li>请你不要哭泣</li><li>我们都只剩下一堆用青春编织成的回忆</li><li>转眼两年时间已过去</li><li>该忘记的你有没有忘记</li><li>你说你最近爱上了旅行</li><li>我知道你也只是想逃避</li><li>逃避现实和过去</li><li>逃避一个最不真实的你</li><li>一个人的路上只是在找寻</li><li>玫瑰你在哪里</li><li>你说你爱过的人都已经离去</li><li>不要欺骗自己</li><li>你只是隐藏的比较深而已</li><li>玫瑰你在哪里</li><li>你总是喜欢抓不住的东西</li><li>请你不要哭泣</li><li>我们都只剩下一堆用青春编织成的回忆</li><li></li><li></li><li></li><li></li><li></li><li></li>'
			
		},
		{
			name:'走马 (Live)',
			author:'陈粒 ',
			src:'music/陈粒 - 走马.mp3',
			geci:"<li></li><li>词/曲/唱：陈粒</li><li>窗外雨都停了</li><li>屋里灯还黑着</li><li>数着你的冷漠</li><li>把玩着寂寞</li><li>电话还没拨已经口渴</li><li>为你熬的夜都冷了</li><li>数的羊都跑了</li><li>一个两个</li><li>嘲笑我</li><li>笑我耳朵失灵的</li><li>笑我放你走了走了走了</li><li>走了</li><li>路人穿街过河</li><li>好景只有片刻</li><li>森林都会凋落</li><li>风吹走云朵</li><li>你留给我的迷离扑朔</li><li>岁月风干我的执着</li><li>我还是把回忆紧握</li><li>太多都散落</li><li>散落太多好难过</li><li>难过时你走了走了走了</li><li>走了</li><li>过了很久终于我愿抬头看</li><li>你就在对岸走得好慢</li><li>任由我独自在假寐与现实之间两难</li><li>过了很久终于我愿抬头看</li><li>你就在对岸等我勇敢</li><li>你还是我的我的我的</li><li>你看</li><li>浪漫无处消磨</li><li>无聊伴着生活</li><li>空荡荡的自我</li><li>莫名地焦灼</li>"
		},
		{
			name:'你还要我怎样',
			author:'魏世伟',
			src:'music/你还要我怎样.mp3',
			geci:'<li>你还要我怎样</li><li>词：薛之谦 曲：薛之谦</li><li>演唱：薛之谦</li><li>你停在了这条我们熟悉的街</li><li>把你准备好的台词全念一遍</li><li>我还在逞强 说着谎</li><li>也没能力遮挡 你去的方向</li><li>至少分开的时候我落落大方</li><li>我后来都会选择绕过那条街</li><li>又多希望在另一条街能遇见</li><li>思念在逞强 不肯忘</li><li>怪我没能力跟随 你去的方向</li><li>若越爱越被动 越要落落大方</li><li>你还要我怎样 要怎样</li><li>你突然来的短信就够我悲伤</li><li>我没能力遗忘 你不用提醒我</li><li>哪怕结局就这样</li><li>我还能怎样 能怎样</li><li>最后还不是落得情人的立场</li><li>你从来不会想 我何必这样</li><li>我慢慢的回到自己的生活圈</li><li>也开始可以接触新的人选</li><li>爱你到最后 不痛不痒</li><li>留言在计较 谁爱过一场</li><li>我剩下一张 没后悔的模样</li><li>你还要我怎样 要怎样</li><li>你千万不要在我婚礼的现场</li><li>我听完你爱的歌 就上了车</li><li>爱过你很值得</li><li>我不要你怎样 没怎样</li><li>我陪你走的路你不能忘</li><li>因为那是我 最快乐的时光</li><li>后来我的生活还算理想</li><li>没为你落到孤单的下场</li><li>有一天晚上 梦一场</li><li>你白发苍苍 说带我流浪</li><li>我还是没犹豫 就随你去天堂</li><li>不管能怎样 我能陪你到天亮 </li><li>我不会厌倦你始终不变</li><li>忘记那些不由分说的争吵</li><li>误会和谎言</li><li>那只是过去过去不该在未来里</li><li>那只是过去过去不该在未来里</li><li>我点燃你留给我最美的</li><li>风景用来取暖</li><li>那些爱着或是被爱着的</li><li>也会烟消云散</li><li>你是个懦弱的人</li><li>也不敢和我结婚</li><li>就这样吧我也</li><li>只能在路上过完一生</li>'
		},
		{
			name:'小雨日记',
			author:'崔跃文',
			src:'music/崔跃文 - 小雨日记.mp3',
			geci:'<li>小雨日记</li><li>作词：崔跃文</li><li>演唱：崔跃文</li><li>在你决定要离开</li><li>我的城市的最后一晚</li><li>桌子上的玫瑰和啤酒和</li><li>彼此说过的谎</li><li>我也是信以为真</li><li>你只是佯装笑容</li><li>我没有发现你把昨天装进了酒杯中</li><li>我穿过几条街和几家店</li><li>和你相遇的夜</li><li>路边的狗牵着它的主人</li><li>走向城市边缘</li><li>你也是迷路的人</li><li>我只是爱莫能助</li><li>我也不住在北京又怎么</li><li>能告诉你该去哪里</li><li>而恰好那一天也像</li><li>今天一样下起了小雨</li><li>你又穿了我最喜欢颜色的外衣</li><li>我说嘿我们去哪里</li><li>我撑起一把能遮风避雨的伞给你</li><li>只愿你好即使淋湿了自己</li><li>在你离开我的城市</li><li>102天后的下午</li><li>雨又像不能挽留的过往</li><li>一样打在身上</li><li>我只是渺小的人</li><li>听故事也会认真</li><li>时间轻易就把我变成了</li><li>这悲剧的主人</li><li>又想起那一天也像</li><li>今天一样下起了小雨</li><li>你又穿了我最喜欢颜色的外衣</li><li>我说嘿我们去哪里</li><li>我撑起一把能遮风避雨的伞给你 </li><li>只愿你好即使淋湿了自己</li><li>在我的青春燃烧殆尽前</li><li>多希望你能再出现</li><li>重新走一边那些不是只有欢愉的夜</li>'
		},
		{
			name:'醉仙歌',
			author:'魏世伟',
			src:'music/醉仙歌.mp3',
			geci:'<li>醉仙歌</li><li>原曲：樱花樱花</li><li>作词：夜小岛</li><li>演唱：魏世伟</li><li>晃仙：我看过很多遍的花开花谢</li><li>采过很多甜美或者苦涩的果实</li><li>酿过很多种类的好酒</li><li>却只遇见过一个能举樽共饮的人……</li><li>[妖君]</li><li>千杯尽 一笑泯恩怨</li><li>梦流光 思华年</li><li>清歌一曲罢 无言</li><li>叹红尘 风雨路三千</li><li>曲未终 人已散</li><li>遗世而独立 无眠</li><li>晃仙：今年，霜迟花会开吧……</li><li>妖君：霜迟……莫非你要送我缠梦……</li><li>晃仙：可惜等“缠梦”酿好之时</li><li>你还在此地，我却不知道谪往何方了……</li><li>妖君：甚好，那我就寻着醇香，再去自投罗网一次。</li><li>[晃仙]</li><li>窗移影 鸟鸣涧</li><li>丝竹响 又几遍</li><li>隐约夜风起 幽香染轻弦</li><li>借一世 探人间</li><li>谁红线 暗自牵</li><li>浮生匆忙客 奈何惹尘缘</li><li>[妖君]</li><li>三生石 素心莲</li><li>檀香近 碧落远</li><li>长明灯一盏 引君过彼岸</li><li>[晃仙]</li><li>问重逢 是何年</li><li>莫笑我 痴人愿</li><li>繁华落 看惊鸿照影碧水连天</li><li>[妖君]</li><li>千杯尽 一笑泯恩怨</li><li>梦流光 思华年</li><li>清歌一曲罢 无言</li><li>[晃仙]</li><li>叹红尘 风雨路三千</li><li>曲未终 人已散</li><li>遗世而独立 无眠</li><li>晃仙：……告诉我，怎样才能醉一场……</li><li>妖君：哈~你要等这山开满桃花，</li><li>盛露一杯，能喝得百日醉；</li><li>等稚儿变了耄耋</li><li>老翁，煮酒一壶，能喝得千日醉；</li><li>而他年若隔世，你偶遇我埋骨之地，</li><li>独饮一坛，就能喝得长醉不醒。</li><li>[合]</li><li>提笔沾新墨 忘却旧容颜</li><li>[妖君]残烛泪烬空（晃仙：泪烬空）</li> <li>[晃仙]倦意深几重（妖：谁入梦）</li><li>[妖君]凝霜夜（晃仙：凝霜夜）</li> <li>[晃仙]月似怯 花如雪（妖：催红颜）</li><li>[妖君]听谁又说永远（晃仙：说永远）</li> <li>[晃仙]道再见（妖：道再见）</li><li>[合]不如一醉千年</li><li>[晃仙]</li><li>转身 一缕冷香远</li><li>逝雪深 笑意浅</li><li>来世你渡我 可愿</li><li>[合]</li><li>再回首 沧海已桑田</li><li>云缠绵 水缱绻</li><li>惯看风月浊酒酬苍天</li>'
		},
		
	];
	//声明变量
	var audio = $("#audio").get(0);
	var play = $("#play");
	var pause=$("#pause");
	var current=$("#current-time");
	var duration=$("#duration");
	var progress=$("#progress");
	var progress_1=$("#progress_1");
	var pi=$("#p-i");
	var vol=$("#volume");
	var vi=$("#v-i");
	var mote = $("#mote");
	var but1=$(".pre")
	var but2=$(".next")
	var yinliang=$(".yinliang")
	
		
	//将秒数转为时间
	function format(v){
		var v = Math.floor(v);
		var s = v % 60;
		var m = Math.floor(v/60);
		s = (s < 10)?( '0' + s) : s;
		return m+":"+s;
	}
	$(audio).on("canplay",function(){
		duration.html(format(audio.duration));
	})
	function render(){
		$("#list").empty();
		audio.src = music[inner].src;
		head()
		$.each(music,function(i , v){
			var c=(i === inner) ? "active" : "";
			$('<li class="'+c+'"><span class="name">'+v.name+'</span>-<span class="author">'+v.author+'</span></li>').appendTo("#list");
		});
	}
	

	
	//头部歌名和歌手 歌词
	function head(){
		$("#head").html("");
		$("#author").html("");
		$("#geci").html("");
		$('<li class="headname">'+music[inner].name+'</li>').appendTo("#head");
		$('<li class="headauthor">—'+music[inner].author+'—</li>').appendTo("#author");
		$('<ul class="geci">'+music[inner].geci+'</ul>').appendTo("#geci");
		
	}

	$("#list").on("click","li",function(){
		$("#list").find("li").removeClass('active');
		$(this).addClass("active");
		inner = $(this).index();
		audio.src = music[inner].src;
		audio.play();
		head();
		
	});
	render();
	head();
	//播放和暂停
	play.on("click",function(){
	
		if(audio.paused){
			audio.play();
			head()
		}else{
			audio.pause();
		}
	});

	$(audio).on("play",function(){
			play.css({"background":"url(images/zt.png)","backgroundRepeat":"no-repeat","backgroundPosition":"center","backgroundSize":"80%"});
	})
	$(audio).on("pause",function(){
			play.css({"background":"url(images/bofang.png)","backgroundRepeat":"no-repeat","backgroundPosition":"center","backgroundSize":"80%"});
	})
	//歌曲播放过程中调用的函数
	$(audio).on("timeupdate",function(){
		current.html(format(audio.currentTime));
		var left = progress.width() * audio.currentTime / audio.duration - pi.width() / 2;
		pi.css("left",left);
		progress_1.css("width",left);
		var geciHeight=$("#geci .geci").height()
		var height=geciHeight* audio.currentTime / audio.duration ;
		$("#geci .geci").css("top","100"-height)
		var index=Math.floor(($(".geci li").length)*audio.currentTime / audio.duration)
		$(".geci li").css("color","white").eq(index).css("color","#D40203")
	});
	//歌曲进度条点击
	progress.on('click',function(e){
		audio.currentTime=e.offsetX/$(this).width()*audio.duration;
		return false;
	});	
	pi.on('click',false);
	// duration.html=format(audio.duration);	
	//歌曲进度拖拽
	pi.on('mousedown',function(e){
		var r=pi.width()/2;
		var start=r-e.offsetX;
//		var start=e.offsetX;
		$(document).on('mousemove',function(e){
			var left=e.clientX-progress.position().left+start;
			var c = left/progress.width()*audio.duration;
			progress_1.css("width",left);
			if(c >= audio.duration || c <= 0){
				return;
			}
			audio.currentTime=c;
		});
		return false;
	});
	$(document).on('mouseup',function(){
		$(document).off("mousemove");
	});
	//音频进度条点击
	vol.on("click",function(e){
		audio.volume = e.offsetX / vol.width();
		mote.removeAttr('data-v');
		return false;
	});
	vi.on('click',false);
	//音频拖拽
	vi.on("touchstart" , function(e){
//		e.preventDefault();
		var r = vi.width() / 2;
		var start = r - e.offsetX;
		$(document).on("touchmove" , function(e){
//			console.log(e.clientX);
			var left = e.clientX - vol.position().left + start;
			var v = left / vol.width();
			if(v > 1 || v < 0){
				return;
			}
			audio.volume = v;
		})
	});
	$(document).on('touchend',function(){
		$(document).off("touchmove");
	});
	//静音
	mote.on("touchend",function(){
		if($(this).attr("data-v")){
			audio.volume=$(this).attr("data-v");
			$(this).removeAttr("data-v");
			$(this).css({"background":"url(images/yinliang1.png)","backgroundRepeat":"no-repeat","backgroundPosition":"center","backgroundSize":"60%"});
			
		}else{
			$(this).attr("data-v",audio.volume);
			audio.volume=0;
			$(this).css({"background":"url(images/jingyin1.png)","backgroundRepeat":"no-repeat","backgroundPosition":"center","backgroundSize":"60%"});
			
		}
	});
	$(audio).on("volumechange",function(){
		vi.css("left",vol.width() * audio.volume - vi.width() / 2);		
	});
	
	
	but1.eq(0).click(function(){
		if(inner==undefined){
			inner=music.length-1;
		}else{
			inner--
			if(inner<0){
			inner=music.length-1;
	        }
		}
		render()
		head()
		audio.play();
	})	
	but2.eq(0).click(function(){
		if(inner==undefined){
			inner=0;
		}else{
			inner++
			if(inner>=music.length){
			inner=0;
		   }
		}
		render()
		head()
		audio.play();
	})
//默认状态
yinliang.css("display","none")
$(".liebiao").css("display","none")
//音量显示及隐藏
	$(".header").on("touchend",".dian",function(){
		yinliang.css("display","block")
		return false;
	})
	yinliang.on("touchend",".yl_2",function(){
		yinliang.css("display","none");
		return false;
	})
//列表显示及隐藏

	$(".foot").on("touchend",".list_1",function(){
		$(".liebiao").css("display","block");
		return false;
	})
	$(".liebiao").on("touchend",".qx_1",function(){
		$(".liebiao").css("display","none");
		return false;
	})
	//闪屏
	$(".shan").on("touchstart",function(e){
    	 pos=e.originalEvent.changedTouches[0].clientX
    	
    })
    var now=0
    $(".shan").css("display","none").eq(0).css("display","block")
	$(".shan").on("touchend",function(e){
  	 var y=e.originalEvent.changedTouches[0].clientX
 	 var index=$(this).index()
  	 if(y-pos<=-30){
 	 	now++
  	 	if(now>=$(".shan").length){
  	 		return;
 	 	}
 	 	$(".shan").css("display","none").eq(now).css("display","block") 	 	
 	 }
//	 if(y-pos>=30){
//	 	if(now==1){
// 	 		$(".shan").css("display","none").eq(now).css("display","block")
// 	    } 
//     }
  })
	
	$(audio).on("ended",function(){
		inner++
	})
	
	
});
