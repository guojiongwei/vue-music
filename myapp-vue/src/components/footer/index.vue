<template>
	<footer>
 		<img style = 'width:0.5rem;height:0.5rem;border-radius:50%' :src="img" @click = 'detail()'/>
 		
 		<div id = 'mask'>
 			<p>{{title}}</p>
 			<p>{{name}}</p>
 		</div>
 		<audio ref = 'ado' id = 'ado' :src="mp3" loop controls controlsList="nodownload"></audio>
  </footer>
</template>

<script src = './script.js'>

</script>
<style scoped lang = 'scss'>
@import "~@/main.scss";
.router-link-active{
    @include text-color(#fff)  
}
@keyframes move {
                from {
                    transform: rotate(0deg)
                }
                to {
                    transform: rotate(360deg);
                }
        }

 #mask{
	padding-top:0.1rem;
 	@include rect(1.2rem,100%)
     p{
          display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    margin-left:0.1rem;
     }
 }
</style>