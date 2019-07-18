<template>
  <div id="goods_list_container">
    <router-link class="goods_item" v-for="item in goodsList" :key="item.add_time" :to="'/home/goodsinfo/'+item.id" tag="div">
      <img v-lazy='item.img_url' />
      <h3 class="title">{{item.title}}</h3>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>
    <mt-button type='danger' size='large' @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1,
      goodsList: []
    };
  },
  components: {
    Toast
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      //获取商品列表
      this.$http.get("api/getgoods?pageIndex=" + this.pageIndex).then(res => {
        if (res.body.status == 0) {
          this.goodsList = this.goodsList.concat(res.body.message);
        } else {
          Toast("获取商品列表失败！");
        }
      });
    },
    getMore(){
        //加载更多
        this.pageIndex++
        this.getGoodsList()
    }
  }
};
</script>
<style lang="less" scoped>
#goods_list_container {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goods_item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 6px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p,
      div {
        margin: 0;
      }
      .price {
        .now {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>


