<template>
    <div class="item">
          <div class="layui-fluid">
            <div class="layui-row">
              <div class="layui-col-xs12 layui-col-sm4 layui-col-md5">
                <div class="img"><img :src="url+article.image" alt=""></div>
              </div>
              <div class="layui-col-xs12 layui-col-sm8 layui-col-md7">
                <div class="item-cont">
                  <h3>{{article.title}}<button class="layui-btn layui-btn-danger new-icon">new</button></h3>
                  <h5>{{article.category.name}}</h5>
                  <p>{{article.articleAbstract}}</p>
                  <a href="#/" class="go-icon"></a>
                </div>
            </div>
            </div>
           </div>
    </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    article: Object
  },
  data () {
    return {
      url: global.apiUrl
    }
  }
}
</script>
<style>
</style>
