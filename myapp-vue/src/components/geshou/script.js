import Vue from 'vue'
import axios from 'axios'
import { baseUrl } from '@/conmon/api.js'
import { mapState } from 'vuex'
import { GESHOU_LIST } from './../../store/mutation-types.js'
import { Indicator } from 'mint-ui';
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517821436558&di=eb16e8239b48ca4ca1c2ebe9ac4659dc&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01491557e1e0f00000012e7e66d689.giff',
  attempt: 1
})
export default {
	data(){
		return{
			
		}
	},
	mounted(){

		Indicator.open({
						text: '歌手列表加载中...',
						spinnerType: 'double-bounce'
					})
		var that = this;
		var arr = []
			axios.get(`${baseUrl}/top/artists?offset=0`)
			.then(function(data){
			arr = data.data.artists;
			that.$store.commit({
				type: 'GESHOU_LIST',
				list:arr
			})
			Indicator.close()
			})
	},
	methods:{
		send(index){
			var that = this
			console.log(this.geshoulist[index])
			
			setTimeout(function(){
				that.$bus.$emit('my-geshou',that.geshoulist[index])
			},100)
			this.$router.push('/list')
		}
	},
	computed:{
		...mapState({
			geshoulist:'geshoulist'
		})
	},
	components:{
		
	}
}
