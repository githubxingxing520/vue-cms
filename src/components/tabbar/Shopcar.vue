<template>
  <div id="shopcar_container">
    <div class="mui-card" v-for="(item,i) in goodsList" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
                <h3 class="title">{{item.title}}</h3>
                <p>
                    <span class="price">￥{{item.sell_price}}</span>
                    <numberbox :value='$store.getters.getGoodsCount[item.id]' :goodsId="item.id"></numberbox>
                    <a href="#" @click.prevent="removeGoods(item.id,i)">删除</a>
                </p>
            </div>
        </div>
      </div>
    </div>
     <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
            <div class="left">
                <p>总计（不含运费）</p>
                <p>已勾选商品<span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件，总计<span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
            </div>
            <mt-button type='danger'>去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import numberbox from '../subcomponent/ShopNumberBox.vue'
export default {
    data() {
        return {
            goodsList:[]
        }
    },
    components:{
        numberbox
    },
    created () {
        this.getCarInfo()
    },
    methods: {
        getCarInfo(){
            //获取购物车所有商品详情
            let arr = []
            this.$store.state.car.forEach( item=> arr.push(item.id));
            this.$http.get('api/goods/getshopcarlist/'+arr.join(',')).then(res=>{
                if(res.body.status==0){
                    this.goodsList = res.body.message
                }else{}
            })
        },
        removeGoods(id,index){
            //删除购物车商品
            this.goodsList.splice(index,1)  //根据下标删除页面渲染列表里面的数据
            this.$store.commit("removeGoods",id) //根据Id删除store里面的数据
        },
        selectedChange(id,selected){
            //切换switch状态
            this.$store.commit("updateGoodsSelected",{id:id,selected:selected})
        }
    },
};
</script>
<style lang="less" scoped>
#shopcar_container {
  background-color: #eee;
  overflow: hidden;
  .mui-card-content-inner{
      display: flex;
      align-items: center;
      img{
      width: 60px;
      height: 60px;
      margin: 0 2px;
  }
  .info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title{
          font-size: 13px;
      }
      p{
          margin: 0;
      .price{
          color: red;
          font-weight: bold;
      }
      }
  }
  }
  .jiesuan{
      justify-content: space-between;
      .red{
          color: red;
          font-weight: bold;
          font-size: 16px;
      }
  }
  
}
</style>


