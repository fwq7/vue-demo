<template>
    <div class="content whisper-content leacots-content">
    <div class="cont w1000">
      <div class="whisper-list">
        <div class="item-box">
          <div class="review-version">
              <div class="form-box">
                <img class="banner-img" src="./img/liuyan.jpg">
                <div class="form">
                  <form class="layui-form" action="">
                    <div class="layui-form-item layui-form-text">
                      <div class="layui-input-block">
                        <textarea name="desc" placeholder="既然来了，就说几句" class="layui-textarea"></textarea>
                      </div>
                    </div>
                    <div class="layui-form-item">
                      <div class="layui-input-block" style="text-align: right;">
                        <button type="button" class="layui-btn definite">確定</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
             <LeacotList/>
          </div>
        </div>
      </div>
      <Pager/>
    </div>
  </div>
</template>

<script>
import Pager from '../index/Pager.vue'
import LeacotList from './LeacotList.vue'
export default {
  components: {
    Pager, LeacotList
  },
  name: 'Leacots'
}
</script>
<style>
</style>
