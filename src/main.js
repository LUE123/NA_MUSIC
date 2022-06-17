import Vue from 'vue'
import App from './App.vue'
import less from 'less'
Vue.use(less)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
import router from '@/router'
Vue.use(ElementUI);
import * as API from '@/api'
import store from './store';
// Vue.prototype.$API = API;
// 引入插件
import atm from '@/assets/lazyload.gif'
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload,{
  // 懒加载默认的图片
  loading:atm,
});

import '@/mock/mockServe'

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    //组件实例的原型的 原型指向的是prototype对象
    Vue.prototype.$API = API;
  },
  //注册路由
  router,
  store
}).$mount('#app')
