<template>
    <div>
         <div class="volume">
                全部留言 <span>10</span>
              </div>
              <div class="list-cont">
                <LeacotItem/>
              </div>
    </div>
</template>
<script>
import LeacotItem from './LeacotItem.vue'
export default {
  components: {
    LeacotItem
  },
  name: 'LeacotList'
}
</script>

<style>
</style>
