<template>
<div>
 <div class="bodyContent">
   <div class='search'>
    <input class='search-input' type="text" placeholder="请输入所要查询的关键字" v-model="searchname" value="" ref="searchname" v-on:keyup="inputRef">
    <button class='btn' @click="getResult">查询</button>
   </div>
   <div class='content' v-if="isShow">
    <div  class='everyday'>
      <div class="title">
        <p>每日粤语一学</p>
      </div>
      <div class="words">
          <p>粤语词汇: {{daily_word.word}}<span class="iconfont icon-yinliang"></span></p>
          <p>意思: {{daily_word.means}}</p>
          <p v-if="isLiju">例句：{{daily_word.liju}}</p>
      </div>
    </div>
    <div class="hot">
    <div class="title">
       <p>最近热门查询</p>
    </div>
    <div class="hotSearch">
       <ul v-for="(item,index) in recent" :key="index">
         <li>{{item}}</li>
       </ul>
    </div>
    </div>
   </div>
   <div class="content" v-else>
      <div class="title">
        <p>基本发音</p>
      </div>
      <div class="fayin">
        <div v-for="(value, valueIndex) in pronunciation" :key="valueIndex">
          <button class="pronunciation"  v-for=" (item,itemIndex) in value.duyin" :key="itemIndex">{{value.yue + item}}<i class="iconfont icon-yinliang" style="color:#ffffff" @click="audioPlay()"><audio :src= 'mp3Url+item+".mp3"'></audio></i></button>
        </div>
        <div>
          <button class="liandu pronunciation">连读(常读音)</button>
          <button class="liandu pronunciation">连读(选中的粤语)</button>
        </div>
      </div>
      <div class="title">
        <p>单字字义</p>
      </div>
      <ul v-for="(item,index) in ziyi" :key ="index+'only'" class="commonCss">
        <li><i style="color: #b81d07">{{item.danzi +item.duyin}}</i>{{item.ziyi}}</li>
      </ul>
      <div class="title">
        <p>词语释义</p>
      </div>
      <ul v-for="(item,index) in shiyi" :key="index+'item'"  class="commonCss">
        <li>{{item.jieshi}}</li>
        <li v-for="(value,index) in item.liju" :key="index">{{value}}</li>
      </ul>
      <div class="title">
        <p>相关词汇</p>
      </div>
      <div class="commonCss"  style="color: #b81d07">
        <span v-for="(item,index) in cihui" :key="index">{{item+ '、'}}</span>
      </div>
      <div class="title">
        <p>相关例句</p>
      </div>
      <div class="commonCss liju" v-for="(item,index) in liju" :key="index">
        <p>{{'粤：'+item.yue}}<i class="iconfont icon-yinliang"></i></p>
        <p>{{'普：'+item.pu}}</p>
      </div>
      <div class="change">
        <button class="changeBtn jiucuo">纠错</button>
        <button class="changeBtn updata">刷新</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'LearnContent',
  data () {
    return {
      isShow: true,
      isLiju: true,
      searchname: '',
      pronunciation: [],
      ziyi: [],
      shiyi: [],
      cihui: [],
      liju: [],
      daily_word: {},
      recent: [],
      mp3Url: ''
    }
  },
  created () {
    this.getEveryday()
  },
  methods: {
    inputRef () {
      this.searchname = this.$refs.searchname.value
      // console.log(this.$refs.searchname.value)
      const searchValue = this.$refs.searchname.value
      if (searchValue === '') {
        this.isShow = true
      }
    },
    getResult () {
      const searchValue = this.$refs.searchname.value
      if (searchValue === '') {
        alert('请输入关键字')
      }
      const url = this.HOST + '/h5/dict/yueyu/?yue=' + this.searchname + '&t=1598604148.9315584&rsa=ca37e64736120c4ee5e37a83be11e258'
      this.$axios.get(url).then(res => {
        if (res.status !== 200) {
          console.log('暂无此结果')
        }
        console.log(res)
        this.searchname = res.data.data.yue
        this.pronunciation = res.data.data.pronunciation
        this.ziyi = res.data.data.ziyi
        this.shiyi = res.data.data.shiyi
        this.cihui = res.data.data.cihui
        this.liju = res.data.data.liju
        this.mp3Url = res.data.data.mp3_url
        this.isShow = false
      })
    },
    getEveryday () {
      const url = this.HOST + '/h5/dict/daily_word/?&t=1598604131.161542&rsa=514bafd2a1255ba6479493807f89be93'
      this.$axios.get(url).then(res => {
        console.log(res)
        this.daily_word = res.data.data.daily_word
        this.recent = res.data.data.recent
        if (this.daily_word.liju === '') {
          this.isLiju = false
        }
      })
    },
    audioPlay () {
    }
  }
}
</script>
<style lang="less" scoped>
.bodyContent{
  height:100%;
  padding-bottom:1.4rem
}
.search{
  text-align: center;
  padding-top: 2.5rem
}
.search-input{
  box-sizing: border-box;
  width: 70%;
  height: 1rem;
  border: 1px solid #cccccc;
  line-height: .62rem;
  border-radius: .1rem;
  padding-left: .3rem
}
.btn{
  width: 1.3rem;
  height: 1rem;
  font-weight: bold;
  border-radius: .1rem;
  background-color:  #b81d07;
  color: #ffffff
}
input::-webkit-input-placeholder{
  color: #cccccc;
  font-size: .33rem
}
.content {
  margin-top: .6rem
}
.title{
  width: 90%;
  height: .8rem;
  line-height: .8rem;
  font-size: .4rem;
  font-weight: bold;
  margin-left: .4rem;
  border-bottom: 1px solid #cccccc
}
.fayin {
  margin-left: .3rem;
  margin-top: .15rem
}
 .pronunciation {
  height: .8rem;
  background-color: #b81d07;
  border-radius: .2rem;
  margin: .1rem;
  color: #ffffff;
  padding: .12rem;
  font-size: .3rem
}
.pronunciation i {
  float: right;
  line-height: .45rem;
  margin-left: .1rem
}
.liandu {
  width: 45%;
  text-align: center
}
.words{
  font-size: .35rem;
  margin-left: .4rem;
  margin-top: .2rem
 }
 .words p{
  display: flex;
  align-items: center;
  line-height: .6rem
 }
 .words span{
  justify-content: center;
  padding-left: .2rem
 }
 .hot {
  margin-top: .5rem
 }
 .hotSearch {
  font-size: .35rem;
  color: #b81d07;
  margin-left: .4rem;
  margin-top: .2rem
 }
 .hotSearch li{
  line-height: .6rem
 }
 .icon-yinliang {
  color:  #b81d07;
  font-size: .6rem
 }
 .liju{
  margin-bottom: .4rem;
 }
 .liju p{
   display: flex
 }
 .liju p i {
   justify-content: center
 }
 .commonCss {
  font-size: .31rem;
  padding-left: .4rem;
  line-height: .5rem
 }
 .change {
  margin-top: .7rem;
  padding-left: .4rem
 }
 .changeBtn {
  color: #b81d07;
  border:  1px  solid #b81d07;
  border-radius: .1rem;
  height: .8rem;
  width: 1.5rem;
  background: #ffffff;
  font-weight: bold;
  margin-right: 1rem
 }
</style>
