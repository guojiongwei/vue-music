import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

//mutations的类型
import { GESHOU_LIST,GEQU_LIST,GEQU_ID,MUSIC_URL ,IMG_URL,PAIHANG_LIST} from "./mutation-types"

 const store = new Vuex.Store({
  state:{
    geshoulist:[],
    gequlist:[],
    index:'',
    music:'',
    lrc:'',
    paihanglist:''
  },
  mutations:{
    GESHOU_LIST(state,obj){
      state.geshoulist = obj.list;
    },
    GEQU_LIST(state,obj){
      state.gequlist = obj.list;
    },
    GEQU_ID(state,obj){
    	state.index = obj.list;
    },
    MUSIC_URL(state,obj){
    	state.music = obj.list
    },
    LRC_URL(state,obj){
    	state.lrc = obj.list
    },
    PAIHANG_LIST(state,obj){
    	state.paihanglist = obj.list
    }
}
})

export default store;
