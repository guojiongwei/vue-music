<template>
    <div id="app">
 
    	<router-view name = 'header'></router-view>

   	<router-view name = 'detail'></router-view>
    	<router-view name = 'contents'></router-view>
    	
    	
		<v-fooetr v-if = 'isShow' ></v-fooetr>
  </div>
</template>

<script>
	import IScroll from 'iscroll'
	import { mapState } from 'vuex'
	import Footer from './components/footer/index.vue'
export default {
		data(){
			return{
				isShow:false,
				indexs:''
			}
			
		},
		mounted(){
		},
		watch:{
			$route:function(newVal,oldVal){
					if(newVal.path.split('/')[1]!='detail'){
						if(this.music.id>=0&&this.music.id!==undefined){
						this.isShow=true;
						}else{
							this.isShow=false
						}
					}else{
						this.isShow=false
					}
      	}
		},
		methods:{
			change(){
				
			}
		},
		computed:{
			...mapState({
				music:'music'
			})
		},
		components:{
			'v-fooetr':Footer
		}
}

</script>

<style scoped lang = 'scss'>
@import './main.scss'
</style>
