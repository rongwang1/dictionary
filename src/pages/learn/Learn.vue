<template>
  <div>
    <Learn-Header></Learn-Header>
    <Learn-content></Learn-content>
  </div>
</template>
<script>
import LearnHeader from './components/Header'
import LearnContent from './components/Content'
export default {
  name: 'Learn',
  components: {
    LearnHeader,
    LearnContent
  }
}
</script>
<style lang="less" scoped>
</style>
