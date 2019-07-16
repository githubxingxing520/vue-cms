<template>
  <div id="photo_info_container">
    <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoInfo.add_time|dateFormat}}</span>
      <span>点击：{{photoInfo.click}}次</span>
    </p>
    <hr />
    <div class="thumbs">
      <vue-preview :slides="thumbList" @close="handleClose"></vue-preview>
    </div>
    <div class="content" v-html="photoInfo.content"></div>
    <comment :id="id"></comment>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import Comment from "../subcomponent/Comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      thumbList: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  components: {
    Toast,
    comment: Comment
  },
  methods: {
    getPhotoInfo() {
      //获取图片详情
      this.$http.get("api/getimageinfo/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.photoInfo = res.body.message[0];
        } else {
          Toast("获取数据失败！");
        }
      });
    },
    getThumbs() {
      //获取缩略图数据
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        if (res.body.status == 0) {
          let arr = res.body.message;
          arr.forEach(item => {
            item.msrc = item.src;
            item.w = 600;
            item.h = 400;
          });
          this.thumbList = arr;
        } else {
        }
      });
    },
    handleClose() {
      console.log("close event");
    }
  }
};
</script>
<style lang="less" scoped>
#photo_info_container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
  .thumbs {
    /deep/ .my-gallery {
      //deep深层作用选择器
      display: flex;
      flex-wrap: wrap; //默认换行
      figure {
        width: 30%;
        margin: 5px;
        img {
          width: 100%;
          box-shadow: 0 0 8px #999;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>


