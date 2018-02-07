import axios from 'axios'
import { baseUrl } from '@/conmon/api.js';
import { GEQU_LIST } from './../../store/mutation-types.js'
import { mapState } from 'vuex'
import { Indicator } from 'mint-ui';
export default {
	props:['id'],
	data(){
		return{
			list:[],
			details:'',
			imgs:''
		}
	},
	mounted(){
		Indicator.open({
						text: '歌手列表加载中...',
						spinnerType: 'fading-circle'
					})
		
			var that = this;
			console.log(this)
			axios.get(`${baseUrl}/playlist/detail?id=${this.id}`)
			.then(function(data){
				if(data.data.code==200){
					that.details = data.data.playlist;
					that.list = data.data.playlist.tracks;
					that.imgs = that.details.coverImgUrl
			
				}
				Indicator.close()
			})
			
			
	},
	methods:{
		back(){
			this.$router.push('/')
		},
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
		}
	},
	computed:{
		...mapState({
			gequlist:'gequlist',
			music:'music'
		})
	},
	components:{
		
	}
}
