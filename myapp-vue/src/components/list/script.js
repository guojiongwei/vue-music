import axios from 'axios'
import { baseUrl } from '@/conmon/api.js'
import { GEQU_LIST } from './../../store/mutation-types.js'
import { mapState } from 'vuex'
import { Indicator } from 'mint-ui';
export default {
//	props:['id','picUrl'],
	data(){
		return{
			id:'',
			picUrl:'',
			gequlist:[]
		}
	},
	mounted(){
		Indicator.open({
						text: '歌曲列表加载中...',
						spinnerType: 'double-bounce'
					})
console.log(this)
		var that = this;
		this.$bus.$on('my-geshou',(msg)=>{
			console.log(msg)
			that.id = msg.id;
			that.picUrl = msg.picUrl
		//请求对应歌手专辑列表
		axios.get(`${baseUrl}/artists?id=${msg.id}`)
			.then(function(data){
				if(data.data.code ==200 ){
				that.gequlist = data.data.hotSongs
			}
			})
			Indicator.close()
	})},
	methods:{
		back(){
			history.go(-1)
		},
		detail(index){
				this.$store.commit({
				type: 'GEQU_LIST',
				list:this.gequlist
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
			music:'music'
		})
	},
	watch:{
		$route(newv,oldv){
			console.log(newv)
		}
	},
	components:{
		
	}
}
