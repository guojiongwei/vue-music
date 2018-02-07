import Vue from 'vue'
import axios from 'axios'
import { GEQU_LIST,GEQU_ID} from './../../store/mutation-types.js'
import { baseUrl } from '@/conmon/api.js'
export default {
	data(){
		return{
			search:'',
			list:[],
			val:'搜素歌曲/歌手/专辑'
		}
	},
	mounted(){
	},
	watch:{
		search(newVal,oldVal){
			var that = this;
			if(newVal.length>0){
			axios.get(`${baseUrl}/search`,{
				params:{
					keywords:newVal,
					limit:10
				}
			})
			.then(function(data){
				that.list = data.data.result.songs;
			})
		}else{
			this.list = ''
		}}
	},
	methods:{
		chage(index){
			console.log(index)
			var that = this;
			that.$store.commit({
				type: 'GEQU_LIST',
				list:that.list
			})
			that.$store.commit({
				type: 'GEQU_ID',
				list:index
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
		
	},
	components:{
		
	}
}
