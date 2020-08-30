<template>
  <div>
    <div class="header">
      <div class="nav">
        <ul>
          <li>
            <a href="#">课程</a>
          </li>
          <li>
            <a href="#">翻译</a>
          </li>
          <li>
            <a href="#">词典</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LearnHearder'
}
</script>
<style lang="less" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #b81d07;
  z-index: 9999
}
.nav {
  width: 60%;
  height: 80px;
  margin: 0 auto;
}
.nav ul {
  display: flex;
  text-align: center;
}
.nav li {
  flex: 1;
  margin-top: 0.8rem;
}
.nav ul li a {
  display: block;
  font-size: 20px;
  line-height: 37px;
  color: #ffffff;
  text-decoration: none;
}
.nav a:hover {
  border-bottom: 2px solid #ffffff;
}
</style>
