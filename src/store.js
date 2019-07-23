import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        car:JSON.parse(localStorage.getItem('goods')||'[]')   //需要的格式{id:商品id，count:商品数量,price:商品价格,selected:是否选中}
    },
    mutations:{
        addGoods:function(state,goods) {
            let flag = false
            state.car.some(item=>{
                if(item.id == goods.id){
                    console.log("itemid",item.count)
                    console.log("goodsid",goods.count)
                    item.count = parseInt(item.count) + parseInt(goods.count)  //购物车有该商品 执行增量
                    flag = true
                    return true
                }
            })
            if(flag==false){
                //购物车没有该商品,执行添加
                state.car.push(goods)
            }
            localStorage.setItem("goods",JSON.stringify(state.car))
        }
    },
    getters:{
        getAllCount(state){
            //计算购物车所有商品数量
            let sum = 0
            state.car.forEach(item=>{
                sum+=parseInt(item.count)
            })
            return sum
        },
        getGoodsCount(state){
            let goods = {}
            state.car.forEach(item=>{
                goods[item.id] = item.count
            })
            return goods
        }
    }
})
export default store