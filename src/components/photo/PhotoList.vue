<template>
  <div id="photo_list_container">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item"
            href="#item2mobile"
            data-wid="tab-top-subpage-2.html"
            v-for="item in cateList"
            :key="item.id"
            @click.prevent="getPhotoListByCateId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <ul>
      <router-link v-for="item in cateImageList" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.img_url"/>
        <div class="info">
          <h3 class="info_title">{{item.title}}</h3>
          <div class="info_body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
// 导入mui.js文件
import mui from "../../lib/mui/dist/js/mui.min.js";
import {Toast} from 'mint-ui'
export default {
  data() {
    return {
      cateList: [],
      cateImageList: []
    };
  },
  created() {
    this.getCategory();
    this.getPhotoListByCateId(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  components: {
    Toast
  },
  methods: {
    getCategory() {
      //获取所有分类
      this.$http.get("api/getimgcategory").then(res => {
        if (res.body.status == 0) {
          res.body.message.unshift({
            title: "全部",
            id: 0
          });
          this.cateList = res.body.message;
        } else {
        }
      });
    },
    getPhotoListByCateId(cateid) {
      //根据分类Id获取图片
      this.$http.get("api/getimages/" + cateid).then(res => {
        if (res.body.status == 0) {
          this.cateImageList = res.body.message;
        } else {
          Toast("加载图片失败！");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
* {
  touch-action: pan-y;
}
#photo_list_container {
  ul {
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li {
      list-style: none;
      text-align: center;
      background-color: #ccc;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
      position: relative;
      img{
        width: 100%;
        vertical-align: middle;
      }
      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      .info{
        position: absolute;
        left: 0;
        bottom: 0;
        color: #ffffff;
        background-color: rgba(0,0,0,.4);
        text-align: left;
        max-height: 84px;
        .info_title{
          font-size: 14px;
        }
        .info_body{
          font-size: 13px;
        }
      }
    }
  }
}
</style>


