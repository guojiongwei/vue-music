<template>
	<div id = 'content'>
		<div id = 'login'>
		<input type="text" v-model="tel"/>
		<input type="password" v-model="password"/>
	 	<button @click = 'register()'>注册</button>
	 	</div>
 	</div>

</template>

<script src = './script.js'>

</script>

<style scoped lang="scss">
	@import "~@/main.scss";
	#content{
		div{
			
		}
	}			

</style>
