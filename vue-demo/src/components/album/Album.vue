<template>
   <div class="album-content w1000 layer-photos-demo"  id="layer-photos-demo">
    <div class="img-info">
      <img src="./img/xc_img1.jpg" alt="">
      <div class="title">
        <p class="data">今日上传<span>2018/10/10</span></p>
        <p class="text">观赏最美的土耳其的日</p>
      </div>
    </div>
   <AlbumList/>
  </div>
</template>
<script>
import AlbumList from './AlbumList.vue'
export default {
  components: {
    AlbumList
  },
  name: 'Album'
}
</script>
<style>
</style>
