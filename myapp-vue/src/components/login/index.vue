<template>
	<div id = 'content'>
	<div>手机号:<i class = 'iconfont icon-shouji'></i><input placeholder="请输入手机号" type="text" v-model="tel"/></div>
	<div>密码:<input  placeholder="请输入密码"  type="password" v-model="password"/></div>
 	<button @click = 'login()'>登录</button>
</div>
</template>
<script src="./gVerify.js"></script>
<script src = './script.js'>
		
</script>

<style scoped lang="scss">
	@import "~@/main.scss";
	#content{
		text-align:center;
		padding:0.1rem;
		div{
		@include rect(100%,0.4rem);
		@include border(0 0 0.01rem 0,#d43c33);
		margin:0.1rem 0;
		line-height:0.4rem;
		input{
				border:none;
				background:#f8fcfd;
				@include rect(70%,0.4rem);
				text-indent:0.1rem;
			}
		}
		button{
				@include rect(80%,0.34rem);
				border-radius:0.2rem;
				margin:0.2rem 0;
				background:#d33a31;
				color:#fff;
				border:0;
		}
		
	}
			

</style>
