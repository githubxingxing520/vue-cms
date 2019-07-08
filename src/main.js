// 入口文件
import Vue from 'vue'
// 导入vue-resource模块
import VueResource from 'vue-resource'
Vue.use(VueResource)
import app from "./App.vue"
// 导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
// 按需导入mint-ui组件
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
// 导入mint-ui样式文件
import '../node_modules/mint-ui/lib/style.css'
// 导入mui样式文件
import './lib/mui/dist/css/mui.min.css'
// 导入mui扩展图标样式文件
import './lib/mui/dist/css/icons-extra.css'

var vm = new Vue({
    el:"#app",
    data:{
        msg:'app组件'
    },
    router:router,
    render:c=>c(app) 
})