<template>
	<div id = 'content' >
		<div id = 'mask'><i class = 'iconfont icon-sousuo'></i><input type="search" :placeholder="val" v-model = 'search' id = 'ipt'/></div>
		<ul id = 'list'>
			<li v-for = '(item,index) in list' :key = 'index' @click = 'chage(index)'>
				<div id = 'left'><p>{{item.name}}</p>
				<p>{{item.artists[0].name}}&nbsp;-&nbsp;<span>{{item.name}}</span></p>
				</div>
				<i class = 'iconfont icon-zanting1'></i>
			</li>
		</ul>
	</div>
</template>

<script src = './script.js'>
</script>

<style scoped lang = 'scss' src = './style.scss'>
</style>