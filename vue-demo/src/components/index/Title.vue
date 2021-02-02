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
}
</script>
<style>
</style>
