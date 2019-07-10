import VueRouter from 'vue-router'
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Shopcar from './components/tabbar/Shopcar.vue'
import Search from './components/tabbar/Search.vue'
import NewList from './components/new/NewList.vue'
import NewInfo from './components/new/NewInfo.vue'
var router = new VueRouter({
    routes:[
        // 路由匹配规则
        { path: '/', redirect: '/home'},
        {path:'/home',component:Home},
        {path:'/home/newlist',component:NewList},
        { path: '/home/newinfo/:id', component: NewInfo },
        {path:'/member',component:Member},
        {path:'/shopcar',component:Shopcar},
        {path:'/search',component:Search}
    ],
    linkActiveClass:'mui-active'
})


export default router