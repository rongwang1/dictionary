<template>
  <div>
    <div class="tab">
      <div  class="tab-item" v-for="(item,index) in tabInfo" :key="index" @click="switchToTab(item.path)" :class="{active: item.path === $route.path}">
        <i :class="item.icon"></i>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tabBar',
  data () {
    return {
      current: 0,
      tabInfo: [
        {
          path: '/Learn',
          icon: 'iconfont icon-boshimao1',
          name: '学习'
        },
        {
          path: '/Words',
          icon: 'iconfont icon-danci',
          name: '生词'
        },
        {
          path: '/Fayin',
          icon: 'iconfont icon-fayinlianxi',
          name: '发音'
        },
        {
          path: '/Setting',
          icon: 'iconfont icon-shezhiziduan',
          name: '设置'
        }
      ]
    }
  },
  methods: {
    switchToTab (path) {
      console.log(path)
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="less" scoped>
.tab{
  position:fixed;
  display: flex;
  bottom: 0;
  left: 0;
  border-top: 1px  solid #cccccc;
  width: 100%;
  height: 1.2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background: #ffffff;
}
.tab-item {
  flex: 1;
  line-height: 1.2
}
.tab-item i{
   font-size: .48rem;
   margin: 0
}
.active {
  color:  #b81d07;
}
.active .iconfont {
  color: #b81d07 ;
}
</style>
