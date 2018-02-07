import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from './../components/home/index.vue'
import Tuijian from './../components/tuijian/index.vue'
import Geshou from './../components/geshou/index.vue'
import Paihang from './../components/paihang/index.vue'
import Footer from './../components/footer/index.vue'
import Header from './../components/header/index.vue'
import UserHeader from './../components/userHeader/index.vue'
import Search from './../components/search/index.vue'
import List from './../components/list/index.vue'
import PaiHangList from './../components/paihanglist/index.vue'
import Detail from './../components/detail/index.vue'
import TuijianList from './../components/tuijianList/index.vue'
import User from './../components/user/index.vue'
import Login from './../components/login/index.vue'
import Register from './../components/register/index.vue'
var router = new Router ({
  routes: [
  {path:'/',redirect:"/home/tuijian"},
    {
      path: '/home',
      components:{
      	header:Header,
      	contents: Home
      },
      children:[
      {path:'/home/tuijian',components:{content: Tuijian}},
      {path:'/home/geshou',components:{content: Geshou}},
      {path:'/home/paihang',components:{content: Paihang}},
      {path:'/home/search',components:{content: Search}},
      ]
    },
    {path: '/user',
      components:{
      	contents:User
      }
      },
      {path: '/login',
      components:{
      	header:UserHeader,
      	contents:Login
      }
      },
      {
      path: '/register',
      components:{
      	header:UserHeader,
      	contents:Register}
      },
//  	{path:'/list/:id/picUrl/:picUrl',
		{path:'/list',
    	name:'list',
    	components:{
    		contents: List},
    		props: {
        contents:true
      }},
		{path:'/paihanglist',
    	name:'paihanglist',
    	components:{
    		contents: PaiHangList},
    		props: {
        contents:true
      }}
    	,
    	{path:'/detail/:id',
    	name:'detail',
    	components:{
    		contents: Detail},
    		props: {
        contents:true
      }},
    	{path:'/tuijianlist/:id',
    	name:'tuijianlist',
    	components:{
    		contents: TuijianList},
    		props: {
        contents:true
      }}
  ]
})
export default router;