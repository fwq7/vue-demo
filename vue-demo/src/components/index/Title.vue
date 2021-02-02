<template>
   <div class="title">
        <span class="layui-breadcrumb" lay-separator="|">
          <router-link :to="{path:'/articles/'+titleconverst(title)}" v-for="title in titles" :key="title.categoryid" :title="title" @click.native="refresh(title.categoryid)">{{title.name}}</router-link>
        </span>
    </div>
</template>

<script>
// import PubSub from 'pubsub-js'
export default {
  name: 'Title',
  props: {
    titles: Array,
    titleconverst: Function,
    refresh: Function
  }
  // data () {
  //   return {
  //     titles: [],
  //     articlestotal: [],
  //     articlelist:[]
  //   }
  // },
  // computed: {
  //   titleconverst () {
  //     return function (title) {
  //       var temp = title.name
  //       if (temp === '前端'){
  //         temp = 'qd'
  //       }
  //       if (temp === '数据库'){
  //         temp = 'db'
  //       }
  //       return temp
  //     }
  //   }
  // },
  // mounted () {
  //   const  _this = this
  //   const url = apiUrl.apiUrl+'/article/cagegorys'
  //   this.$axios.get(url).then(response => {
  //     this.titles = response.data
  //   })
  //   this.refresh(1)
  // },
  // methods: {
  //   refresh (category) {
  //     const url = apiUrl.apiUrl+'/article/cagegorys/'+category
  //     const url2 = apiUrl.apiUrl+'/article/cagegorys/'+category+'/1'
  //     this.$axios.get(url).then(response => {
  //     this.articlestotal = response.data
  //     console.log(this.articlestotal)
  //     //发布消息
  //     PubSub.publish('count', this.articlestotal.length)
  //   })
  //     this.$axios.get(url2).then(response => {
  //       this.articleslist = response.data
  //       //发布消息
  //       console.log(this.articleslist)
  //       PubSub.publish('articlelist', this.articlelist)
  //     })
  //   },
  //   articlebycategory (category) {
  //   }
  // }
}
</script>
<style>
</style>
