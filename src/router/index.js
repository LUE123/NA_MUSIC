//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
//引入路由组件
import routes from './routes.js';

let router = new VueRouter({
    mode:'hash',
    //配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        //返回的这个y=0，代表滚动条在最上方
        return { y: 0 };
    }
})

export default router;