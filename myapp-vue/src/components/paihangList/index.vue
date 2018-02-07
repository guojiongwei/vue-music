<template>
	<div id = 'content' >
		<div id = 'top' :style = '[imgs]'>
			<i id = 'back' class = 'iconfont icon-fanhui1' @click = 'back()'></i>
			<ul id = 'bottom'>
				<li><p></p><p></p></li>
				<li><p></p><p></p></li>
				<li><p></p><p></p></li>
				<li><p></p><p></p></li>
			</ul>
		</div>
		<ul id = 'list'>
			<li v-for = '(item,index) in list' :key = 'index' @click = 'detail(index)'>
					<div class = 'sort'>{{index+1}}</div>
					<div><p>{{item.name}}</p><p>{{item.ar[0].name}}&nbsp;-&nbsp;{{item.al.name}}</p></div>
					<div><i class = 'iconfont icon-gengduo1'></i></div>
			</li>
		</ul>
	</div>
</template>

<script src = './script.js'>
</script>

<style scoped lang = 'scss'>
@import "~@/main.scss";
#content{
	#top{
		@include rect(100%,2.4rem);
		padding-top:0.1rem;
		#back{
			margin:0.1rem;
			color:#fff
		}
		#bottom{
			@include rect(100%,1rem);
		/*	background:red;*/
			margin-top:1.3rem;
		}
	}
	#list {
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
               /* color: #999;*/
              	font-weight: 500;
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
        &:nth-of-type(1){
        	.sort{
        	color:#df3436;
        	}
        } &:nth-of-type(2){
        	.sort{
        	color:#df3436;
        	}
        }
         &:nth-of-type(3){
        	.sort{
        	color:#df3436;
        	}
        }
    }
}
}
</style>