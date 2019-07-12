<template>
  <div id="photo_list_container">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html" v-for='item in cateList' :key="item.id">{{item.title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 导入mui.js文件
import mui from "../../lib/mui/dist/js/mui.min.js";
export default {
  data() {
    return {
      cateList: []
    };
  },
  created() {
    this.getCategory();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getCategory() {
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
    }
  }
};
</script>
<style lang="less" scoped>
* {
  touch-action: pan-y;
}
</style>


