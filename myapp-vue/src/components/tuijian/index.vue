<template>
	<div id = 'content'>
		<mt-swipe :auto="3000">
				<mt-swipe-item v-for="(item,index) in bannerlist" :key = 'index'>
					<img :src="item.pic" />
				</mt-swipe-item>
			</mt-swipe>
		<div id = 'tui_top'><span></span>推荐歌单</div>
		<ul id = 'tui_list'>
			<router-link  v-for = '(item,index) in tuiList' :key = 'index' :to ="{name:'tuijianlist',params:{id:item.id}}" tag = 'li'>
				<img v-lazy="item.picUrl" alt="" />
				<span><i class = 'iconfont icon-headseterji'>&nbsp;</i>{{item.trackCount}}万</span>
				<p>{{item.name}}</p>
			</router-link>
		</ul>
		<div id = 'tui_top'><span></span>独家放送</div>
		<ul id = 'tui_list'>
			<router-link  v-for = '(item,index) in tuiList1' :key = 'index' :to ="{name:'tuijianlist',params:{id:item.id}}" tag = 'li'>
				<img v-lazy="item.picUrl" alt="" />
				<span><i class = 'iconfont icon-headseterji'>&nbsp;</i>{{item.trackCount}}万</span>
				<p>{{item.name}}</p>
			</router-link>
		</ul>
		<div id = 'tui_top'><span></span>最新歌单</div>
		<ul id = 'tui_list'>
			<router-link  v-for = '(item,index) in tuiList2' :key = 'index' :to ="{name:'tuijianlist',params:{id:item.id}}" tag = 'li'>
				<img v-lazy="item.picUrl" alt="" />
				<span><i class = 'iconfont icon-headseterji'>&nbsp;</i>{{item.trackCount}}万</span>
				<p>{{item.name}}</p>
			</router-link>
		</ul>
		
	</div>
</template>

<script src = './script.js'>
</script>

<style lang = 'scss'>
@import "~@/main.scss";
.mint-swipe {
        @include rect(100%, 1.5rem);
        overflow: hidden;
        .mint-swipe-item {
            img {
                @include rect(100%, 1.5rem);
            }
        }
    }
#tui_top{
    @include rect(100%,0.4rem);
    @include flexbox();
    @include align-items();
    @include font-size(0.16rem);
    line-height:0.24rem;
    span{
       display: inline-block;
       @include rect(0.04rem,0.2rem);
       margin-right:0.1rem;
       @include background-color(#d33a31) 
    }
}
#tui_list{
    @include rect(100%,3.4rem);
    @include flexbox();
    flex-wrap:wrap;
    @include justify-content(space-around);
    @include align-items();
    li{
        @include rect(32%,1.55rem);
        position:relative;
        img{
            @include rect(100%,1.2rem)
        }
        span{
            position:absolute;
            top:0.05rem;
            right:0.05rem;
            color:#fff;
            @include font-size(0.12rem);
            i{
                 @include font-size(0.12rem);
            };
        }
         p{
                    @include rect(98%,auto);
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    margin-left:0.02rem;
                    @include font-size(0.12rem);
                    
     }
    }
}
</style>