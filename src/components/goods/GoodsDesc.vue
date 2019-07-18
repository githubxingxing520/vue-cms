<template>
    <div id="goods_desc_container">
        <h3 class="title">{{descInfo.title}}</h3>
        <hr>
        <div class="content" v-html="descInfo.content"></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            id:this.$route.params.id,
            descInfo:{}
        }
    },
    created () {
        this.getDescInfo()
    },
    methods: {
        getDescInfo(){
            //获取图文信息
            this.$http.get('api/goods/getdesc/'+this.id).then(res=>{
                if(res.body.status==0){
                    this.descInfo = res.body.message[0]
                }else{

                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
    #goods_desc_container{
        padding: 4px;
        .title{
            font-size: 15px;
            color: #226aff;
            margin: 15px 0;
            text-align: center;
        }
        .content{
            /deep/ p{
                margin: 0;
                img{
                width: 100%;
                display: block;
            }
            }
        }
    }
</style>
