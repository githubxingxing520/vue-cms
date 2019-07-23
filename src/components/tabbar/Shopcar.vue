<template>
  <div id="shopcar_container">
    <div class="mui-card" v-for="item in goodsList" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
                <h3 class="title">{{item.title}}</h3>
                <p>
                    <span class="price">￥{{item.sell_price}}</span>
                    <numberbox :value='$store.getters.getGoodsCount[item.id]'></numberbox>
                    <a href="#">删除</a>
                </p>
            </div>
        </div>
      </div>
    </div>
     <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            
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
  
}
</style>


