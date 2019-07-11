<template>
  <div id="new_info_container">
    <h3 class="title">{{newinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newinfo.add_time|dateFormat}}</span>
      <span>点击：{{newinfo.click}}</span>
    </p>
    <hr>
    <div class="content" v-html="newinfo.content">
        
    </div>
    <comment :id='this.id'></comment>
  </div>
</template>
<script>
import Comment from '../subcomponent/Comment.vue'
import {Toast} from 'mint-ui'
export default {
  data() {
    return {
        id:this.$route.params.id,
        newinfo:{}
    };
  },
  created(){
      this.getNewInfo()
  },
  methods:{
      getNewInfo(){
          this.$http.get('api/getnew/'+this.id).then(res=>{
              if(res.body.status==0){
                  this.newinfo = res.body.message[0]
              }else{
                  Toast('加载数据失败！')
              }
          })
      }
  },
  components: {
      "comment":Comment,
      Toast
  }
};
</script>
<style lang="less" scoped>
    #new_info_container{
        padding: 0 5px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0px;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        
    }
</style>


