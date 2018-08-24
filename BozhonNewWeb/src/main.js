import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import Vuex from 'vuex'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueParticles)
Vue.prototype.$http=axios
/* eslint-disable no-new */
const store=new Vuex.Store({
    state:{
        Denglu:false,
        roles:'',
        uName:'',
        project:'',
    },
    mutations:{
        loginin(state){
            state.Denglu=true;
        },
        loginout(state){
            state.Denglu=false;
        },
        getName(state,n){
           state.uName=n;
        },
        getroles(state,n){
           if(n.includes('admin')){
             state.roles='admin';
           }else if(n.includes('enginner')){
             state.roles='enginner';
           }else{
             state.roles='user';
           }
        },
        getproject(state,n){
            state.project=n;
        }
    },
    getters:{

    },
    actions:{

    }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
})
