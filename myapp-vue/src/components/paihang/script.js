import axios from 'axios'
import Vue from 'vue'
import { baseUrl } from '@/conmon/api.js'
import { Indicator } from 'mint-ui';
import { Lazyload } from 'mint-ui';
import {PAIHANG_LIST } from './../../store/mutation-types.js'
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517821436558&di=eb16e8239b48ca4ca1c2ebe9ac4659dc&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01491557e1e0f00000012e7e66d689.gif',
  attempt: 1
})
export default {
	data(){
		return{
			list:[]
		}
	},
	mounted(){
//			Indicator.open({
//						text: '歌曲列表加载中...',
//						spinnerType: 'double-bounce'
//					})
//			Indicator.close()
		var that = this;
		var arr = []
			for(var i=0;i<16;i++){
			axios.get(`${baseUrl}/top/list?idx=${i}`)
			.then(function(data){
				arr.unshift(data.data)
			})
		}
				this.list = arr;
				console.log(this.list)
	},
	methods:{
		toList(index){
			var that = this;
			that.$store.commit({
				type: 'PAIHANG_LIST',
				list:that.list[index]
			})
			 this.$router.push('/paihanglist')
		}
	},
	computed:{
		
	},
	components:{
		
	}
}
