<template>
  <div class="home_container">
    <swiper :lunbotuList='lunbotuList' :isfull='true'></swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to='/home/newlist'>
          <img src="../../image/menu1.png" alt="新闻资讯" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to='/home/photolist'>
          <img src="../../image/menu2.png" alt="图片分享" />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to='/home/goodslist'>
          <img src="../../image/menu3.png" alt="商品购买" />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to=''>
          <img src="../../image/menu4.png" alt="留言反馈" />
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to=''>
          <img src="../../image/menu5.png" alt="视频专区" />
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to=''>
          <img src="../../image/menu6.png" alt="联系我们" />
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
import swiper from '../subcomponent/Swiper.vue'
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunBoTu();
  },
  components: {
    Toast,
    swiper
  },
  methods: {
    getLunBoTu() {
      this.$http
        .get("api/getlunbo")
        .then(res => {
          if (res.body.status == 0) {
            this.lunbotuList = res.body.message;
          } else {
            Toast('获取轮播图失败！')
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.mui-grid-view.mui-grid-9 {
  background-color: #ffffff;
  border: none;
  .mui-table-view-cell {
    border: none;
    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
  }
}
</style>


