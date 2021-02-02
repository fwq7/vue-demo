<template>
   <div id="demo" style="text-align: center;" @click="pagehander(obj,first)"></div>
</template>
<script src="../static/res/js/layui.js"></script>
<script>
// import PubSub from 'pubsub-js'
export default {
  name: 'Pager',
  props: {
    articlestotal: Array,
    pagehander: Function
  },
  data () {
    return {
      pagerobj: null
    }
  },
  watch: {
    articlestotal: function (val) {
      layui.config({
        base: '../static/res/js/util/'
      }).use(['element', 'laypage', 'jquery', 'menu'],  () => {
        var element = layui.element,laypage = layui.laypage,$ = layui.$,menu = layui.menu
        laypage.render({
        elem: 'demo',
        count: this.articlestotal.length,
        limit:5,
        jump: (obj, first) => {
          this.pagerobj = obj
          this.pagehander(obj, first)
        }
        })
        menu.init()
      })
    }
  },
  mounted () {
  }
}
</script>
<style>
</style>
