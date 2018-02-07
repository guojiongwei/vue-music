  import $ from 'jquery'
  export default {
    data(){
      return {
       title:'首页',
       popupVisible:true,
       tel:'',
       password:''
      }
    },
    mounted(){

   
    })

    },
    methods:{
var that = this
    	     $("#login").on("click",function(){
      var username = $("#username").val();
      var password = $("#password").val();
			if(res){
				   $.ajax({
        url:"http://localhost:3000/users/userLogin",
        type:"get",
        data:{
        	 tel:that.tel,
         	 username:that.username,
        },
        success:function(data){
          console.log(data)
        if(data=='0'){
					alert('账号或密码错误')
				}else{
					alert('登录成功')
				}
        }
      })
			}else{
				alert("请输入正确验证码");
			}
    },
    components:{
      
    }
  }