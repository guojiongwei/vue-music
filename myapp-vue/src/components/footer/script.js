import axios from 'axios'
import { baseUrl } from '@/conmon/api.js'
import { GEQU_LIST,GEQU_ID} from './../../store/mutation-types.js'
import { mapState } from 'vuex'
import $ from 'jquery'
export default {
    data(){
      return {
        	img:'',
        	mp3:'',
        	id:'',
        	title:'',
        	name:'',
        	paused:'',
        	time:''
      }
    },
    mounted(){
    	var that = this;
    	var ado = document.getElementById("ado")
    	this.$refs.ado.currentTime = this.music.time;
//		this.$refs.ado.paused = this.music.paused;
		console.log(this.$refs.ado.paused)
		setTimeout(function(){
			if(that.music.paused==true){
			console.log('暂停')
//			$('#imgs').css('animation-play-state', 'paused');
			ado.pause()
		}else{
			console.log('播放')
//			$('#imgs').css('animation-play-state', 'running');
			ado.play()
		}
		},100)
		
    	console.log(this.music)
    	this.img = this.music.img
    	this.name = this.music.name
    	this.mp3 = this.music.mp3
    	this.title = this.music.title;
    },
    methods:{
    	detail(){
    		var obj= {
				id:this.music.id,
				time:this.$refs.ado.currentTime,
				paused:this.$refs.ado.paused
			}
			this.$store.commit({
			type:'MUSIC_URL',
			list:obj
			})
  			this.$router.push('/detail/'+this.music.id);
    	}
    },
    computed:{
    	 ...mapState({
      	music:'music',
      	index:'index'
      })
    },
    components:{
     
    },
    watch:{
    	
    }
  }