<template>
	<div id = 'content'>
		<ul id = 'paihang'>
			<li v-for = '(item,index) in list' :key='index' @click = 'toList(index)'>
				<div id = 'left'><img v-lazy="item.playlist.coverImgUrl" alt="" />
				<p>{{item.playlist.name}}</p>
				</div>
				<div id = 'right'>
					<p>1.{{item.playlist.tracks[0].ar[0].name}}&nbsp;-&nbsp;{{item.playlist.tracks[0].name}}</p>
					<p>2.{{item.playlist.tracks[1].ar[0].name}}&nbsp;-&nbsp;{{item.playlist.tracks[1].name}}</p>
					<p>3.{{item.playlist.tracks[2].ar[0].name}}&nbsp;-&nbsp;{{item.playlist.tracks[2].name}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script src = './script.js'>
</script>

<style scoped lang = 'scss' src = './style.scss'>
</style>