  import $ from 'jquery'
  export default {
    data(){
      return {
       title:'首页',
       tel:'',
       password:'',
       popupVisible:true
      }
    },
    mounted(){
    },
    methods:{
			login(){
//				   $.ajax({
//      url:"http://localhost:3000/users/userLogin",
//      type:"get",
//      data:{
//      	 tel:that.tel,
//       	 username:that.username,
//      },
//      success:function(data){
//        console.log(data)
//      if(data=='0'){
//					alert('账号或密码错误')
//				}else{
//					alert('登录成功')
//				}
//      }
//    })
		
		this.$router.push('/login')
	
	},
	register(){
		this.$router.push('/register')
	}
    },
    components:{
      
    }
  }