<template>
  <div class="mui-numbox" data-numbox-min="1" style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="value" @change="changeCount" readonly ref="number"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/dist/js/mui.min.js"
export default {
    data () {
        return {
            
        }
    },
    props:['value','goodsId'],
    mounted () {
        mui(".mui-numbox").numbox()
    },
    methods: {
      changeCount(){
        this.$store.commit("updateGoodsCount",{id:this.goodsId,count:this.$refs.number.value})
      }
    }
}
</script>
<style lang="less" scoped>

</style>
