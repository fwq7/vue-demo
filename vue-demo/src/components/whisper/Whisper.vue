<template>
  <div class="content whisper-content">
    <div class="cont">
      <ListWhisper/>
      <Pager/>
    </div>
  </div>
</template>
<script>
import ListWhisper from './ListWhisper'
import Pager from '../index/Pager'
export default {
  name: 'Whisper',
  components: {
    ListWhisper,
    Pager
  }
}
</script>

<style>
</style>
