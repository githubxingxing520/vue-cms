import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        car:JSON.parse(localStorage.getItem('goods')||'[]')   //需要的格式{id:商品id，count:商品数量,price:商品价格,selected:是否选中}
    },
    mutations:{
        addToCar:function(state,goods) {
            //添加到购物车
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
        },
        updateGoodsCount(state,goods){
            //更新购物车商品数量
            let index = state.car.findIndex(item=>item.id==goods.id)
            state.car[index].count = parseInt(goods.count)
            localStorage.setItem("goods",JSON.stringify(state.car))
        },
        removeGoods(state,id){
            //根据id删除购物车商品
            let index = state.car.findIndex(item=>item.id==id)
            state.car.splice(index,1)
            localStorage.setItem("goods",JSON.stringify(state.car))
        },
        updateGoodsSelected(state,goods){
            //更新商品选中状态
            state.car.some(item=>{
                if(item.id==goods.id){
                    item.selected = goods.selected
                    return true
                }
            })
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
            //获取每件商品对应数量
            let goods = {}
            state.car.forEach(item=>{
                goods[item.id] = item.count
            })
            return goods
        },
        getGoodsSelected(state){
            //获取每件商品对应选中状态
            let goods = {}
            state.car.forEach(item=>{
                goods[item.id] = item.selected
            })
            return goods
        },
        getGoodsCountAndAmount(state){
            //获取购物车里面商品的数量和总价
            let goods = {
                count:0,
                amount:0
            }
            state.car.forEach(item=>{
                if(item.selected){
                    goods.count+= item.count
                    goods.amount+= item.count*item.price
                }
            })
            return goods
        }
    }
})
export default store