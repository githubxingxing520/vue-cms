<template>
    <div id="goods_list_container">
        <div class="goods_item">
            <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg" alt="">
            <h3 class="title">小米8 16G全网通版</h3>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goods_item">
            <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg" alt="">
            <h3>小米8 16G全网通版</h3>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goods_item">
            <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg" alt="">
            <h3>小米8 16G全网通版</h3>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>
<style lang="less" scoped>
    #goods_list_container{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods_item{
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 6px #ccc;
            margin: 4px 0;
            padding: 2px;
            img{
                width: 100%;
            }
            .title{
                font-size: 14px;
            }
            .info{
                background-color: #eee;
                p,div{
                    margin: 0;
                }
                .price{
                    .now{
                        color: red;
                        font-size: 16px;
                        font-weight: bold;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>


