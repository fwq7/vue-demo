<template>
    <div class="header">
    <div class="menu-btn">
    <div class="menu"></div>
    </div>
    <h1 class="logo">
    <router-link to='/' @click.native="refresh">
    <span>MYBLOG</span>
    <img src="../index/img/logo.png">
    </router-link>
    </h1>
    <div class="nav">
    <router-link to='/articles' @click.native="refresh">文章</router-link>
    <!-- <a href="/">文章</a> -->
    <router-link to='/whisper' @click.native="refresh">微语</router-link>
    <router-link to='/leacots' @click.native="refresh">留言</router-link>
    <router-link to='/album' @click.native="refresh">相册</router-link>
    <router-link to='/about' @click.native="refresh">关于</router-link>
    </div>
    <ul class="layui-nav header-down-nav">
    <li class="layui-nav-item"><router-link to='/articles' @click.native="refresh">文章</router-link></li>
    <li class="layui-nav-item"><router-link to='/whisper' @click.native="refresh">微语</router-link></li>
    <li class="layui-nav-item"><router-link to='/leacots' @click.native="refresh">留言</router-link></li>
    <li class="layui-nav-item"><router-link to='/album' @click.native="refresh">相册</router-link></li>
    <li class="layui-nav-item"><router-link to='/about' @click.native="refresh">关于</router-link></li>
    </ul>
    <p class="welcome-text">
    欢迎来到<span class="name">小明</span>的博客~
    </p>
    </div>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    refresh () {
      this.$router.go(0)
    }
  }
}
</script>
<style>
</style>
