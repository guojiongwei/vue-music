<template>
	 <div id = 'content'>
	<ul>
<!--		<router-link v-for = '(item,index) in geshoulist' :key = 'item.img1v1Id' :to ="{name:'list',params:{id:item.id,picUrl:item.picUrl}}" tag = 'li' ><img class = 'imgs' v-lazy = 'item.picUrl'><span >{{item.name}}</span></router-link>
-->	
			<li v-for = '(item,index) in geshoulist' :key = 'item.img1v1Id' @click = 'send(index)'><img class = 'imgs' v-lazy= 'item.picUrl'><span >{{item.name}}</span></li>

	</ul>
	</div>
</template>

<script src = './script.js'>
</script>

<style  lang = 'scss' scoped>
@import "~@/main.scss";
#content{
    @include rect(100%,auto);
    ul{
       @include rect(100%,100%);
       li{
           margin-left:0.2rem;
            @include rect(100%,0.8rem);
            @include flexbox();
            @include align-items();
            @include border(0 0 0.01rem 0,#eee)
           img{
               @include rect(0.6rem,0.6rem);
               border-radius:50%;
           }
           span{
               margin-left:0.2rem;
           }
           image[lazy=loading] {
			  @include rect(0.6rem,0.6rem);
			  margin: auto;
}
       }
    }
}

</style>