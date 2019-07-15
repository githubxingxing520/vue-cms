<template>
  <div id="photo_info_container">
    <h3>标题</h3>
    <p class="subtitle">
      <span>发表时间：</span>
      <span>点击：0次</span>
    </p>
    <hr>
    <div class="content"></div>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data () {
        return {
            id:this.$route.params.id,
            photoInfo:[]
        }
    },
    created () {
        this.getPhotoInfo()
    },
    components: {
        Toast
    },
    methods: {
        getPhotoInfo(){
            //获取图片详情
            this.$http.get('api/getimageinfo/'+this.id).then(res=>{
                if(res.body.status==0){
                    this.photoInfo = res.body.message
                }else{
                    Toast('获取数据失败！')
                }
            })
        }
    }

};
</script>
<style lang="less" scoped>
</style>


