<template>
  <div class="app_container">
    <mt-header fixed title="vue">
      <span  slot="left" @click="goBack" v-show="isShowBack">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item_my" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item_my" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item_my" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item_my" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
	data () {
		return {
			isShowBack:false
		}
	},
	created () {
		this.isShowBack = this.$route.path == "/home"? false:true	
	},
	methods: {
		goBack(){
			//返回上一页
			this.$router.go(-1)
		}
	},
	watch: {
		"$route.path":function (newval) {
			if(newval=="/home"){
				this.isShowBack = false
			}else{
				this.isShowBack = true
			}
		}
	},
};
</script>
<style lang="less" scoped>
.app_container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.mui-bar-tab .mui-tab-item_my {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item_my.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item_my .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item_my .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

