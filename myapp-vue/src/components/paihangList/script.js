import axios from 'axios'
import Vue from 'vue'
import { baseUrl } from '@/conmon/api.js'
import { Indicator } from 'mint-ui';
import { Lazyload } from 'mint-ui';
import { mapState } from 'vuex'
import {PAIHANG_LIST } from './../../store/mutation-types.js'
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif',
  attempt: 1
})
export default {
	data(){
		return{
			list:[],
			imgs:''
		}
	},
	mounted(){
//			Indicator.open({
//						text: '歌曲列表加载中...',
//						spinnerType: 'double-bounce'
//					})
//			Indicator.close()
			var that = this;
			this.list =  this.paihanglist.playlist.tracks.splice(0,30);
			this.imgs = {
				background:'url('+this.paihanglist.playlist.coverImgUrl+')',
				backgroundSize:'100% 100%'
			}
	},
	methods:{
		detail(index){
				this.$store.commit({
				type: 'GEQU_LIST',
				list:this.list
			})
			 this.$router.push({
	          name: 'detail',
	          params: {
	            id: index
          }
        })
		},
		back(){
			window.history.go(-1)
		}
	},
	computed:{
		...mapState({
			paihanglist:'paihanglist'
		})
	},
	components:{
		
	}
}
