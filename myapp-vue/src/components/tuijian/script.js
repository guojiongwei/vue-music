import axios from 'axios'
import Vue from 'vue'
import { baseUrl } from '@/conmon/api.js'
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517821436558&di=eb16e8239b48ca4ca1c2ebe9ac4659dc&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01491557e1e0f00000012e7e66d689.gif',
  attempt: 1
})
export default {
	data(){
		return{
			bannerlist:[],
			tuiList:[],
			tuiList1:[],
			tuiList2:[]
		}
	},
	mounted(){
		var that = this;
		axios.get(`${baseUrl}/banner`)
			.then(function(data){
				that.bannerlist = data.data.banners
			})
			var arr = []
			var arr1 = []
			var arr2 = []
		axios.get(`${baseUrl}/personalized`)
		.then(function(data){
			data.data.result.map(function(v,i){
				if(i<6){
					arr.push(v)
					that.tuiList = arr
				}else if(i>6&&i<13){
					arr1.push(v)
					that.tuiList1 = arr1
				}if(i>13&&i<20){
					arr2.push(v)
					that.tuiList2 = arr2
				}
			})
			
		})
	
	},
	methods:{
		
	},
	computed:{
		
	},
	components:{
		
	}
}
