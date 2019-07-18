<template>
    <div id="goods_comment_container">
        <comment :id='id'></comment>
    </div>
</template>
<script>
import comment from '../subcomponent/Comment.vue'
export default {
    data () {
        return {
            id:this.$route.params.id
        }
    },
    components: {
        comment
    }
}
</script>
<style lang="less" scoped>
    
</style>


