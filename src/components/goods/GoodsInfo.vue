<template>
  <div id="goods_info_container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
    </div>
     <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
    </div>
     <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        id:this.$route.params.id,
        lunBoTuList:[]
    };
  },
  created () {
      this.getLunBoTu()
  },
  methods: {
      getLunBoTu(){
          this.$http.get('api/getthumimages/'+this.id).then(res=>{
              if(res.body.status==0){
                  this.lunBoTuList = res.body.message
              }else{

              }
          })
      }
  }
};
</script>
<style lang="less" scoped>
    #goods_info_container {
        background-color: #ccc;
        overflow: hidden;
    }
</style>

