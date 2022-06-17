import Vue from 'vue';
import Vuex from 'vuex';
//需要使用插件一次
Vue.use(Vuex);
//引入小仓库
import login from './login'
import home from './home'
import music from './music'
//对外暴露Store类的一个实例
export default new Vuex.Store({
    //实现Vuex仓库模块化
    modules:{
        login,
        home,
        music
    }
})