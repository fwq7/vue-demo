<template>
    <div class="list-item">
        <Item v-for="(article, index) in $attrs.articlelist" :key="index" :article="article"/>
    </div>
</template>

<script>
import Item from './Item'
export default {
  name: 'List',
  components: {
    Item
  },
  porps: {
    articlelist: Array
  },
  mounted () {
  }
}
</script>
<style>
</style>
