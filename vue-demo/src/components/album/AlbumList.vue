<template>
   <div class="img-list">
      <div class="layui-fluid" style="padding:0">
        <div class="layui-row layui-col-space30 space">
         <AlbumItem/>
        </div>
      </div>
      <Pager/>
    </div>
</template>

<script>
import Pager from '../index/Pager.vue'
import AlbumItem from './AlbumItem.vue'
export default {
  components: {
    Pager,
    AlbumItem
  },
  name: 'AlbumList'
}
</script>
<style>
</style>
