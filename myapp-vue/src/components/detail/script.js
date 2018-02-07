import axios from 'axios'
import Vue from 'vue'
import { baseUrl } from '@/conmon/api.js'
import { GEQU_LIST, GEQU_ID, MUSIC_URL, LRC_URL } from './../../store/mutation-types.js'
import { mapState } from 'vuex'
import $ from 'jquery'
import { myTime} from '../../conmon/api.js';
import { Range,Toast} from 'mint-ui';
Vue.component(Range.name, Range);
import Lyric from 'lyric-parser'
export default {
	props: ['id'],
	data() {
		return {
			mp3: '',
			lyric: '',
			img: '',
			title: '',
			name: '',
			currentTime: 0,
			duration: '',
			btn: 'icon-plus-pause',
			currentLyric: [],
			currentLyricLine: 0,
			geci:'',
			timer:'',
			rangeValue:0,
			moshis:' icon-danqu',
			moshi1:0
		}
	},
	mounted() {
		var that = this;
		var music_id;
		var seeks;
		console.log(this)
		if(this.gequlist.length > 0) {
			this.$store.commit({
				type: 'GEQU_ID',
				list: this.id
			})
			if(this.gequlist[0].privilege) {
				this.details = this.gequlist
				music_id = this.details[this.id].privilege.id;
			} else if(this.gequlist[0].artists) {
				this.details = this.gequlist;
				music_id = this.details[this.id].id;
			} else if(this.gequlist[0].rtUrls) {
				this.details = this.gequlist;
				music_id = this.details[this.id].id;
			} else {
				this.$router.push('/')
			}
			if(this.id != this.music.id) {
				this.$refs.audioRef.currentTime = 0;
				seeks = 0;
			} else {
				if(this.music.time > 0) {
					this.$refs.audioRef.currentTime = this.music.time;
				} else {
					this.$refs.audioRef.currentTime = 0;
				}
				
			if(this.music.time > 0) {
					seeks = this.music.time;
				} else {
					seeks = 0;
				}
			}
			var ado = document.getElementById("ado")
			ado.onended = function() {
				this.$refs.audioRef.currentTime = 0;
			}
			setTimeout(function(){
				that.duration = that.$refs.audioRef.duration
			},1000)
			
			var times = that.$refs.audioRef.currentTime;
			this.timer = setInterval(function(){
				times++
				that.currentTime = times
			},1000)
//				 function $(id) {
//					    return document.getElementById(id)
//					 }
//				 console.log(this.lrc)
//					  this.lyric = new Lyric(this.lrc, function (obj) {
//  				  this.geci = obj.txt
//					})
					  
//					  this.lyric.play()
			
			if(this.id===this.index){
				
			axios.get(`${baseUrl}/lyric?id=${music_id}`)
				.then(function(data1) {
					that.$store.commit({
					type: 'LRC_URL',
					list: data1.data.lrc.lyric
					})
					
					 function $(id) {
					    return document.getElementById(id)
					 }
					  that.lyric = new Lyric(that.lrc, function (obj) {
    					that.geci = obj.txt
  					})
					  var time1 = Math.ceil(seeks*1000)
					that.lyric.seek(time1)
				})
			}
			axios.get(`${baseUrl}/music/url?id=${music_id}`)
				.then(function(data) {
					that.mp3 = data.data.data[0].url;
				})
			$.ajax({
				url: `${baseUrl}/song/detail?ids=${music_id}`,
				success: function(data) {
					that.img = data.songs[0].al.picUrl;
					that.name = data.songs[0].ar[0].name;
					that.title = data.songs[0].name;
				}
			})
		} else {
			this.$router.push('/')
		}
	},
	methods: {
		next() {
			var index = this.index;
			index++;
			this.$store.commit({
				type: 'GEQU_ID',
				list: index
			})
		},
		last() {
			var index = this.index;
			index--;
			if(index == 0) {
				index = 0
			}
			this.$store.commit({
				type: 'GEQU_ID',
				list: index
			})
		},
		paly() {
			var that = this;
			var arrImg = ['../../assets/jtbq_013.png', '../../assets/jtbq_014.png']
			if(this.$refs.audioRef.paused) {
				this.$refs.audioRef.play();
				this.lyric.togglePlay()
				$('#imgs').css('animation-play-state', 'running');
				$('#huan1').css({transform: 'rotate(0deg)'});
				this.btn = 'icon-plus-pause';
				var times = this.$refs.audioRef.currentTime;
				this.timer = setInterval(function(){
				times++
				that.currentTime = times
			},1000)
			} else {
				this.$refs.audioRef.pause();
				this.lyric.togglePlay()
				$('#imgs').css('animation-play-state', 'paused');
				$('#huan1').css({
					transform: 'rotate(-20deg) translatex(.2rem)',
					transition: '1s',
					transformOrigin: 'top'
				})
				clearInterval(this.timer)
				this.btn = 'icon-zanting1'
			}
		},
		back() {
			var time = this.$refs.audioRef.currentTime;
			var obj = {
				mp3: this.mp3,
				img: this.img,
				id: this.index,
				time: this.$refs.audioRef.currentTime,
				paused: this.$refs.audioRef.paused,
				title: this.title,
				name: this.name
			}
			this.$store.commit({
				type: 'MUSIC_URL',
				list: obj
			})
			this.$store.commit({
				type: 'GEQU_LIST',
				list: this.gequlist
			})
			this.$router.push('/')
		},
		//播放模式切换
		moshi(){
			if(this.moshi1==0){
				this.moshis = 'icon-xunhuanbofang';
				this.moshi1=1
				Toast({
				  message: '循环播放',
				  position: 'bottom',
				  duration: 2000
				});
				}else if(this.moshi1==1){
				this.moshis = 'icon-suijibofang';
				this.moshi1=2;
				Toast({
				  message: '随机播放',
				  position: 'bottom',
				  duration: 2000
				});
			}else{
				this.moshis ='icon-danqu';
				this.moshi1=0;
				Toast({
				  message: '单曲播放',
				  position: 'bottom',
				  duration: 2000
				});
			}
		}
	},
	watch: {
		index(newv,oldv) {
			console.log(newv,oldv)
			var that = this;
			var music_id;
			if(that.details[newv].privilege) {
				music_id = that.details[newv].privilege.id;
			} else if(that.details[newv].artists) {
				music_id = that.details[newv].id;
			} else if(that.gequlist[newv].rtUrls) {
				music_id = that.details[newv].id;
			} else {
				console.log('222')
			}
			if(oldv==newv){
				console.log(1111)
			}
		
			if(newv!=oldv){
				
				this.duration = this.$refs.audioRef.duration;
				this.rangeValue = 0;
				 			clearInterval(this.timer)
			var times = 0;
			this.timer = setInterval(function(){
				times++
				that.currentTime = times
			},1000)
			
			this.$store.commit({
					type: 'LRC_URL',
					list: ''
					})
				axios.get(`${baseUrl}/music/url?id=${music_id}`)
					.then((data) => {
						that.mp3 = data.data.data[0].url;
				})
				axios.get(`${baseUrl}/song/detail?ids=${music_id}`)
					.then(function(data) {
						that.img = data.data.songs[0].al.picUrl;
						that.name = data.data.songs[0].ar[0].name;
						that.title = data.data.songs[0].name;
				})
				
				that.lyric.stop()
				axios.get(`${baseUrl}/lyric?id=${music_id}`)
				.then(function(data1) {
					that.$store.commit({
					type: 'LRC_URL',
					list: data1.data.lrc.lyric
					})
					 function $(id) {
					    return document.getElementById(id)
					 }
					  that.lyric = new Lyric(that.lrc, function (obj) {
    					 that.geci = obj.txt
  					})
//					  that.lyric.seek(seeks)
					
					 that.lyric.seek(0)
				})
			}
		},
		rangeValue(newVal,oldVal){
//			this.$refs.audioRef.currentTime = newVal/100*this.$refs.audioRef.duration;
	},
		currentTime(newv,oldv){
			
			this.rangeValue = Math.floor((newv*100)/(this.$refs.audioRef.duration))
			if(this.rangeValue==100){
				this.rangeValue=0
				this.currentTime=0
			}
	}
	
	},  
	filters: {
    format: function(value) {
      if (!value) return ''
      return myTime.format(value)
    }
  },
	computed: {
		jindutiao(){
			
		},
		...mapState({
			gequlist: 'gequlist',
			music: 'music',
			index: 'index',
			lrc:'lrc'
		})
	},
	components: {
	}
}