<template>
	<div id = 'content'>
		<ul id = 'uls'>
			<router-link to = '/home/tuijian' tag = 'li'>推荐</router-link>
			<router-link to = '/home/geshou' tag = 'li'>歌手</router-link>
			<router-link to = '/home/paihang' tag = 'li'>排行</router-link>
			<router-link to = '/home/search' tag = 'li'>搜素</router-link>
		</ul>
			<router-view name = 'content'></router-view>
	</div>
</template>

<script src = './script.js'>
</script>

<style scoped="" lang = 'scss' src = './style.scss'>
      @import "./../../main.scss";
    
      
</style>