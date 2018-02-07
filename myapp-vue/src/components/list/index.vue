<template>
	<div id = 'content'>
		<div id = 'imgs'>
		<img :src='picUrl' alt="" />
		<i @click = 'back()' class = 'iconfont icon-fanhui1'></i>
		</div>
		<h3 id = 'hot'>热门五十曲</h3>
		<ul>
<!--			<router-link v-for = '(item,index) in gequlist' :key = 'index' :to ="{name:'detail',params:{id:index}}" tag = 'li'>
-->				
			<li v-for = '(item,index) in gequlist' :key = 'index' @click = 'detail(index)'>
					<div class = 'sort'>{{index+1}}</div>
					<div><p>{{item.name}}</p><p>{{item.ar[0].name}}&nbsp;-&nbsp;{{item.al.name}}</p></div>
					<div><i class = 'iconfont icon-zanting1'></i></div>
			</li>
		</ul>
	</div>
</template>

<script src = './script.js'>
</script>
<style scoped="" lang = 'scss' src = './style.scss'>
</style>