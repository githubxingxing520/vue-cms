<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="changeCount" ref="number"/>
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
    props:["max"],
    mounted () {
        mui(".mui-numbox").numbox()
        console.log(this.max)
    },
    methods: {
      changeCount(){
        let value = this.$refs.number.value
        this.$emit("getCount",value)
      }
    },
    watch: {
      "max":function (newVal,oldVal) {
          mui('.mui-numbox').numbox().setOption('max',newVal)
      }
    }
}
</script>
<style lang="less" scoped>

</style>
