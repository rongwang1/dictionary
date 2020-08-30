<template>
  <div id="app">
   <router-view/>
   <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from './pages/tabbar/tabBar'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
</style>
