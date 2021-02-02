<template>
    <div class="content">
    <div class="cont w1000">
      <Title :titles="titles" :titleconverst="titleconverst" :refresh="refresh"/>
          <router-view :articlelist="articlelist"></router-view>
      <Pager :articlestotal="articlestotal" :pagehander="pagehander"/>
    </div>
    </div>
</template>
<script>
// import PubSub from 'pubsub-js'
import Title from './Title'
import List from './List'
import Pager from './Pager'
export default {
  name: 'Content',
  components: {
    Title,
    List,
    Pager
  },
  data () {
    return {
      titles: [],
      articlestotal: [],
      articlelist: [],
      currcategory: 0,
      pagerobj: null
    }
  },
  computed: {
    titleconverst () {
      return function (title) {
        var temp = title.name
        if (temp === '前端') {
          temp = 'qd'
        }
        if (temp === '数据库') {
          temp = 'db'
        }
        return temp
      }
    }
  },
  watch: {
    articlelist: function (val) {
      this.articlelist = val
    }
  },
  mounted () {
    const url = global.apiUrl + '/article/cagegorys'
    this.$axios.get(url).then(response => {
      this.titles = response.data
    })
    this.refresh(1)
  },
  methods: {
    refresh (category) {
      this.currcategory = category
      const url = global.apiUrl + '/article/cagegorys/' + category
      const url2 = global.apiUrl + '/article/cagegorys/' + category + '/1'
      this.$axios.get(url).then(response => {
        this.articlestotal = response.data
      })
      this.$axios.get(url2).then(response => {
        this.articlelist = response.data
        // 发布消息
        // PubSub.publish('articlelist', this.articlelist)
      })
    },
    pagehander (obj, first) {
      // console.log(obj)
      this.pagerobj = obj
      const url = global.apiUrl + '/article/cagegorys/' + this.currcategory + '/' + this.pagerobj.curr
      console.log(url)
      if (!first) {
        this.$axios.get(url).then(response => {
          this.articlelist = response.data
          console.log(this.articlelist)
        })
      }
    }
  }
}
</script>
<style>
</style>
