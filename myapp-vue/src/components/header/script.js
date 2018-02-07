  export default {
    data(){
      return {
       title:'首页',
       popupVisible:false
      }
    },
    mounted(){
     
    },
    methods:{
    	user(){
    		this.popupVisible = true
    	},
    	users(){
    		this.popupVisible = false
    		this.$router.push('/user')
    	}
    },
    components:{
      
    }
  }