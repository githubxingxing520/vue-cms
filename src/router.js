import VueRouter from 'vue-router'
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Shopcar from './components/tabbar/Shopcar.vue'
import Search from './components/tabbar/Search.vue'
import NewList from './components/new/NewList.vue'
import NewInfo from './components/new/NewInfo.vue'
import PhotoList from './components/photo/PhotoList.vue'
import PhotoInfo from './components/photo/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
var router = new VueRouter({
    routes:[
        // 路由匹配规则
        { path: '/', redirect: '/home'},
        {path:'/home',component:Home},
        {path:'/home/newlist',component:NewList},
        { path: '/home/newinfo/:id', component: NewInfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo/:id', component: PhotoInfo},
        { path: '/home/goodslist', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo },
        { path: '/home/goodsdesc/:id', component: GoodsDesc,name:'goodsdesc' },
        { path: '/home/goodscomment/:id', component: GoodsComment,name:'goodscomment' },
        {path:'/member',component:Member},
        {path:'/shopcar',component:Shopcar},
        {path:'/search',component:Search}
    ],
    linkActiveClass:'mui-active'
})


export default router