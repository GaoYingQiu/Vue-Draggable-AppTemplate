import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios' //请求网络
import VueAxios from 'vue-axios' 
import weui from 'weui.js' //weuiJs
import 'weui' //weui样式
import animate from 'animate.css'

//iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//日期时间控件
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
 
 
Vue.config.productionTip = false
 
Vue.use(iView, {
  transfer: true,
  size: 'large'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
