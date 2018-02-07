  import $ from 'jquery'
  export default {
    data(){
      return {
       tel:'',
       password:'',
       code:''
      }
    },
    mounted(){
    },
    methods:{
			getCode(){
				var that = this;
		  $.ajax({
		  	type:"get",
		  	url:"http://localhost:3000/users/getCode",
		  	data:{
		  	  tel:that.tel
		  	},
		  	success:function(data){
		  	  console.log(data)
		  	}
		  });
			},
			register(){
      $.ajax({
        type:"get",
        url:"http://localhost:3000/users/register",
        data:{
          tel:that.tel,
          password:that.password,
   	    	 code:that.code
        },
        success:function(data){
        	console.log('1')
        	if(data=='0'){
        		alert('该用户已注册')
        	}else if(data=='2'){
        		alert('验证码错误')
        	}else{
        		alert('注册成功，快去登录吧！')
        		 console.log('成功')
        	}
         
        }
      });
			}
		 

    
    },
    components:{
      
    }
  }