// 入口文件
import Vue from 'vue'
import app from "./app.vue"
// 按需导入mint-ui组件
import {Header} from 'mint-ui'
// 导入mint-ui样式文件
import '../node_modules/mint-ui/lib/style.css'
// 导入mui样式文件
import './lib/mui/dist/css/mui.css'
Vue.component(Header.name,Header)
var vm = new Vue({
    el:"#app",
    data:{
        msg:'app组件'
    },
    render:c=>c(app) 
})