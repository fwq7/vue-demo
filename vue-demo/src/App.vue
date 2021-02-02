<template>
  <div id="app">
     <Header/>
     <keep-alive>
        <router-view/>
     </keep-alive>
     <Footer/>
  </div>
</template>

<script>
import Header from './components/index/Header'
import Footer from './components/index/Footer'
import Whisper from './components/whisper/Whisper.vue'

export default {
  components: {
    Header,
    Footer,
    Whisper
  },
  name: 'App'
}
</script>
<style>
</style>
