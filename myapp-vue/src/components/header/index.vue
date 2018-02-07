<template>
	<header>
		 <img id = 'logo' src="../../assets/logo.png" alt="" @click = 'user()'/>
	<!--<i class = 'iconfont icon-fenlei' @click = 'user'></i>-->
	<mt-popup
  v-model="popupVisible"
  position="left">
 <div id = 'box'>
 	<div id = 'top'>
 		<p>登陆网易云音乐</p>
 		<p>320k高音质无限下载，手机电脑多端同步</p>
 		<button @click = 'users()'>立即登录</button>
 	</div>
 	<div id = 'center'>
 		<ul>
 		<li><i class = 'iconfont icon-xiaoxi'></i>我的消息</li>
 		<li><i class = 'iconfont icon-vip'></i>VIP会员</li>
 		<li><i class = 'iconfont icon-gouwuche1'></i>商城</li>
 		<li><i class = 'iconfont icon-zaixianketang'></i>在线听歌免流量</li>
 		<li><i class = 'iconfont icon-wode'></i>我的好友</li>
 		<li><i class = 'iconfont icon-fujin'></i>附近的人</li>
 		<li><i class = 'iconfont icon-yifuhuanfu'></i>个性换肤<span>官方红</span></li>
 		<li><i class = 'iconfont icon-maikefeng'></i>听歌识曲</li>
 		<li><i class = 'iconfont icon-icon-test'></i>定时停止播放</li>
 		<li><i class = 'iconfont icon-saoyisao'></i>扫一扫</li>
 		<li><i class = 'iconfont icon-icon-test'></i>音乐闹钟</li>
 		<li><i class = 'iconfont icon-cheliang'></i>驾驶模式</li>
 	</ul>
 	</div>
 	<div id = 'bottom'>
 		<ul>
 			<li><i class = 'iconfont icon-cheliang'></i>夜间模式</li>
 			<li><i class = 'iconfont icon-shezhi'></i>设置</li>
 			<li><i class = 'iconfont icon-tuichu'></i>退出</li>
 		</ul>
 	</div>
 </div>
</mt-popup>
	</header>

</template>

<script src = './script.js'>

</script>

<style scoped lang="scss" src = './style.scss'>
	
			

</style>
