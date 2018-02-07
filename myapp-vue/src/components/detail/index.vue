<template>
	<div id = 'content'>
		<img :src="img" alt="" id = 'bgImg' />
		<div id = 'box1'><img id = 'huan' src="http://cangdu.org:8001/img/161288831683322.png" alt="" /></div>
		<div id = 'box2'><img ref = 'huan1' id = 'huan1' src="http://cangdu.org:8001/img/161289cf6503323.png" alt="" /></div>
		<div id = 'header'><i id = 'back' @click = 'back()' class = 'iconfont icon-fanhui1'></i>
		<span id = 'h1'>{{title}}</span></div>
		<div ref = 'imgs' id = 'imgs' class = 'imgs'><img style = 'border-radius:50%;width:2rem;height:2rem;border:0.1rem solid #eee':src="img" alt="" /></div>
		<audio ref="audioRef" id = 'ado' :src="mp3" loop  autoplay ></audio>
 		<div id = 'gecibox'><p id = 'geci'>{{geci}}</p></div>
		<ul id = 'caozuo'>
			<li class = 'iconfont icon-bqxin'></li>
			<li class = 'iconfont icon-xiazai'></li>
			<li class = 'iconfont icon-pinglun'></li>
			<li class = 'iconfont icon-gengduoda'></li>
		</ul>
		<!--<div id = 'jindu'>
			<div id = 'jindu1' :style ='[jindu]' ></div>
		</div>-->
		<mt-range  style = 'margin-top:1.8rem;color:#fff' :min="0":max="100" :bar-height="3" v-model="rangeValue">
  <div slot="start">{{Math.ceil(currentTime) | format}}&nbsp;</div>
  <div slot="end">&nbsp;{{duration | format}}</div>
</mt-range>
	<div id = 'box'>
	<i ref = 'moshi' class = 'iconfont' :class = 'moshis' @click = 'moshi()'></i>
	<i class = 'iconfont icon-yinpin-shangxiayiqu1' id = 'last' @click = last()></i>
	<i class = 'iconfont btn' :class = 'btn' @click=paly()></i>
	<i class = 'iconfont icon-yinpin-shangxiayiqu' @click = 'next()'  id = 'next'></i>
	<i class = 'iconfont icon-mulu'></i>
	</div>	
	</div>
</template>
<script src = './script.js'>
<script src = './index.js'></script>
</script>

<style scoped="" lang = 'scss'>
@import "~@/main.scss";
@keyframes move {
                from {
                    transform: rotate(0deg)
                }
                to {
                    transform: rotate(360deg);
                }
        }
#gecibox{
	position:absolute;
	z-index:100;
	@include rect(100%,0.2rem);
	bottom:1.4rem;
	@include flexbox();
	@include justify-content();
	#geci{
		margin:0 auto;
		color:#0f0;
	}
}
 .mt-range-thumb{
 	@include rect(0.04rem,0.04rem)
 }      
#content{
 padding:0.1rem;
 overflow:hidden;
 position:relative;
 #header{
 	@include rect(100%,0.66rem);
 	border-bottom:2px solid #eee;
 	position:absolute;
 	z-index:9;
 	top:0;
 	left:0;
 	@include flexbox();
 	@include align-items();
 	#back{
    @include text-color(#fff);
    @include font-size(0.24rem);
    position:absolute;
    left:0.1rem;
}
}
#box1{
   @include rect(100%,3rem);
   position:absolute;
   margin-top:1.1rem;
   @include flexbox();
   @include align-items();
   @include justify-content();
}
#huan{
	@include rect(3rem,3rem);
	margin-right:0.17rem;
}
#box2{
   @include rect(100%,2.64rem);
   position:absolute;
   @include flexbox();
   @include align-items();
   left:0;top:-0.1rem;
   @include justify-content();
   #huan1{
	@include rect(0.9rem,1.25rem);
	margin-left:0.56rem;
}
}

 #caozuo{
 	@include rect(100%,0.5rem);
 	position:absolute;
 	padding:0 0.2rem;
 	top:4.62rem;
 	@include flexbox();
 	@include align-items();
 	@include justify-content(space-around)
 	li{
 		@include rect(0.5rem,0.5rem);
 		color:#fff;
 		@include font-size(0.2rem)
 	}
 }
 #bgImg{
 	@include rect(100%,100%);
 	position:absolute;
 	transform: scale(2);
    filter: blur(10px);
 	top:0;
 	left:0;
 	
 }
 #box{
 	
 }

}

#h1{
   margin:0 auto;
    @include text-color(#fff);
    @include font-size(0.2rem)
}

#imgs{
   @include rect(2rem,2rem);
   margin:0 auto;
   margin-top:1.62rem;
}
.imgs{
     animation: move 10s linear infinite;
     
}
#jindu{
	position:absolute;
	@include rect(80%,0.04rem);
	@include background-color(#eee);
	top:5.5rem;
	left:10%;
}


#box{
	position:absolute;
	bottom:0.3rem;
	left:0;
	@include rect(100%,0.5rem);
	@include flexbox();
 	@include align-items();
 	@include justify-content(space-around);
 	padding:0 0.1rem;
	i{
		
		 @include font-size(0.2rem);
		 @include text-color(#fff);
		 &:nth-of-type(3){
		 	 @include font-size(0.4rem);
		 }
	}
}
</style>