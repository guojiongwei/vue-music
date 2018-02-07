<template>
	<div id = 'content'>
		<div id = 'top'>
			
			<i style = 'margin:0.05rem;color:#fff;font-size:0.18rem' class = 'iconfont icon-fanhui1' @click = 'back()'></i>
			<div id = 'box'>
			<img id = 'imgs' :src="details.coverImgUrl" alt="" />
			<div style = 'padding-top:0.3rem;padding-right:0.1rem;color:#fff' id = 'right'>
				<h1 style = 'font-size:0.16rem'>{{details.name}}</h1>
	<span style = 'display:inline-block;margin:0.14rem' v-for = '(item,index) in details.tags' :key = 'index'>{{item}}</span>

			</div>
			<br />
			</div>
		<div id = 'bottom'>
			<ul id = 'tag'>
				<li><i class = 'iconfont icon-xiaoxi'></i><p>{{details.subscribedCount}}</p></li>
				<li><i class = 'iconfont icon-pinglun'></i><p>{{details.shareCount}}</p></li>
				<li><i class = 'iconfont icon-tubiao212'></i><p>{{details.commentCount}}</p></li>
				<li><i class = 'iconfont icon-xiazai'></i><p>下载</p></li>
			</ul>
		</div>
		</div>
		<ul>
<!--			<router-link v-for = '(item,index) in gequlist' :key = 'index' :to ="{name:'detail',params:{id:index}}" tag = 'li'>
-->					
					<li v-for = '(item,index) in list' :key = 'index' @click = 'detail(index)'>
					<div>{{index+1}}</div>
					<div><p>{{item.name}}</p><p>{{item.ar[0].name}}&nbsp;-&nbsp;{{item.al.name}}</p></div>
					<div><i class = 'iconfont icon-zanting1'></i></div>
					</li>
<!--			</router-link>
-->		</ul>
	</div>
</template>

<script  src = './script.js'>
</script>

<style scoped lang = 'scss'>
@import "~@/main.scss";
#content{
    #top{
        @include rect(100%,2.3rem);
        
        	background:#d33a31;
        #box{
        	@include flexbox();
        		@include align-items();
        		@include justify-content(space-around);
        }
        i{
        	float:left;
        }
        img{
           @include rect(1.26rem,1.26rem);
           margin:0.3rem 0.2rem 0.2rem 0rem;
        }
        #bottom{
        	@include rect(100%,0.4rem);
        	
        	#tag{
        		@include rect(100%,100%);
        		@include flexbox();
        		color:#fff;
        		@include align-items();
        		@include justify-content(space-around);
        		li{
        		@include flexbox();
        		@include align-items();
        		flex-direction: column;
        		@include justify-content(space-around);
        		i{
        			@include font-size(0.26rem)
        		}
        		p{
        			@include font-size(0.14rem)
        		};
        		}
        	}
        }
    }
}
ul {
    @include rect(100%, auto);
    li {
        @include rect(100%, 0.55rem);
        @include flexbox();
        @include align-items();
        div {
            &:nth-of-type(1) {
                @include rect(0.5rem, 0.5rem);
                @include font-size(0.16rem);
                text-align: center;
                line-height: 0.5rem;
                color: #999;
            }
            &:nth-of-type(2) {
                @inlcude flex();
                @include rect(100%, 0.5rem);
                border-bottom: 1px solid #eee;
                p {
                    @include font-size(0.17rem);
                    margin-left: 0.1rem;
                     display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    @include line-height(0.3rem) &:nth-of-type(2) {
                        @include font-size(0.12rem);
                        color: #888;
                        @include line-height(0.16rem)
                    }
                }
            }
            &:nth-of-type(3) {
                border-bottom: 1px solid #eee;
                @include rect(0.5rem, 0.5rem);
                i {
                    @include font-size(0.2rem);
                    text-align: center;
                    line-height: 0.5rem;
                }
            }
        }
    }
}

</style>