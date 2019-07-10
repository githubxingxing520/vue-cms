<template>
    <div id="comment_container">
        <h3>发表评论</h3>
        <hr>
        <textarea name="" id="" placeholder="请输入评论内容（120字以内）" maxlength="120"></textarea>
        <mt-button type='primary' size='large'>发表评论</mt-button>
        <div class="cmt_list">
            <div class="cmt_item" v-for="(item,i) in commentList">
                <p class="cmt_title">第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</p>
                <div class="cmt_body">{{item.content}}</div>
            </div>
        </div>
        <mt-button type='danger' size='large' plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pageIndex:1,
            commentList:[]
        }
    },
    props:["id"],
    created () {
        this.getComments()
    },
    methods: {
        getComments(){
            this.$http.get('api/getcomments/'+this.id+"?pageindex="+this.pageIndex).then(res=>{
                if(res.body.status==0){
                    this.commentList =this.commentList.concat(res.body.message)
                }else{
                    Toast('加载评论列表失败！')
                }
            })
        },
        getMore(){
            this.pageIndex++
            this.getComments()
        }
    }
}
</script>
<style lang="less" scoped>
    #comment_container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0px;
        }
        .cmt_list{
            margin: 5px 0;
            .cmt_item{
            font-size: 13px;
            .cmt_title{
                background-color: #ccc;
                line-height: 30px;
            }
            .cmt_body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
        }
    }
</style>


