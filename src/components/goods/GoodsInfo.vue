<template>
  <div id="goods_info_container">
    <transition @before-enter='beforeEnter' @enter='enter' @after-enter='afterEnter'>
      <div class="ball" v-show="flag" ref="ball"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <swiper :lunbotuList='lunBoTuList' :isfull='false'></swiper>
      </div>
    </div>
     <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span class="old">市场价：￥{{goodsInfo.market_price}}</span>
            <span class="now">销售价：￥{{goodsInfo.sell_price}}</span>
          </p>
          <p>购买数量：<numberbox @getCount='getSelectCount' :max='goodsInfo.stock_quantity'></numberbox></p>
          <div>
            <mt-button type='primary' size='small'>立即购买</mt-button>
            <mt-button type='danger' size='small' @click="flag=!flag">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>
     <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsInfo.goods_no}}</p>
          <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
          <p>上架时间：{{goodsInfo.add_time|dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type='primary' size='large' plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type='danger' size='large' plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from '../subcomponent/Swiper.vue'
import numberbox from '../subcomponent/GoodsNumberBox.vue'
export default {
  data() {
    return {
        id:this.$route.params.id,
        lunBoTuList:[],
        goodsInfo:{},
        flag:false
    };
  },
  components: {
    swiper,
    numberbox
  },
  created () {
      this.getLunBoTu()
      this.getGoodsInfo()
  },
  methods: {
      beforeEnter(el){
        el.style.transform = "translate(0,0)"
      },
      enter(el,done){
        el.offsetWidth
        const ballPosition = this.$refs.ball.getBoundingClientRect()  //拿到小球位置
        const carPosition = document.getElementById("badge").getBoundingClientRect() //拿到购物车位置
        let x = carPosition.left - ballPosition.left
        let y = carPosition.top - ballPosition.top
        
        el.style.transform = `translate(${x}px,${y}px)`
        el.style.transition = "all 0.8s cubic-bezier(.4,-0.21,1,.61)"
        done()
      },
      afterEnter(el){
        this.flag = !this.flag
      },
      getLunBoTu(){
          this.$http.get('api/getthumimages/'+this.id).then(res=>{
              if(res.body.status==0){
                  let resdata = res.body.message
                  resdata.forEach(item => {
                    item.img = item.src
                  });
                  this.lunBoTuList = resdata
              }else{

              }
          })
      },
      getGoodsInfo(){
        //获取商品信息
        this.$http.get('api/goods/getinfo/'+this.id).then(res=>{
          if(res.body.status==0){
            this.goodsInfo = res.body.message[0]
          }else{

          }
        })
      },
      goDesc(id){
        //点击编程式导航去商品描述页面
        this.$router.push({name:'goodsdesc',params:{id}})
      },
      goComment(id){
        //点击去商品评论页
        this.$router.push({name:'goodscomment',params:{id}})
      },
      getSelectCount(count){
        //获取选择的商品数量
        console.log("子组件选择的值：",count)
        this.selectCount = count
      }
  }
};
</script>
<style lang="less" scoped>
    #goods_info_container {
        background-color: #eee;
        overflow: hidden;
        .price{
          .old{
            text-decoration: line-through;
          }
          .now{
            color: red;
            font-size: 16px;
            font-weight: bold;
            margin-left: 15px;
          }
        }
        .mui-card-footer{
          display: block;
          button{
            margin: 15px 0;
          }
        }
        .ball{
          background-color: red;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          position: absolute;
          left: 145px;
          top: 358px;
          z-index: 999;
        }
    }
</style>

