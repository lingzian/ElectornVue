<template>
  <div class="monitoring">
    <!-- 头部 -->
    <div class="item_header" @click="$emit('headHandler')">
      <span class="left">
        <i class="icon-face"></i> <span>Monitoring</span>
      </span>
      <span class="middle">
        <span>Terminal:SRC9527</span>
      </span>
      <span class="right">
        <i class="close icon-close" @click.stop="miniWindow"></i>
      </span>
    </div>

    <div class="item_content" :class="{show: contentVisible}">
      <main-content v-if="type === 1" @toPation="type = 2" @toCamera="type = 3" @toPassport="type = 4" @back="type = 1"></main-content>
      <pation-content v-if="type === 2" @back="type = 1"></pation-content>
      <camera-content v-if="type === 3" @back="type = 1"></camera-content>
      <passport-content v-if="type === 4" @back="type = 1"></passport-content>
    </div>

  </div>
</template>

<script>
import MainContent from './main'
import CameraContent from './camera'
import PassportContent from './passport'
import PationContent from './pation'

export default {
  components: {
    MainContent,
    CameraContent,
    PassportContent,
    PationContent
  },
  data () {
    return {
      contentVisible: false,
      type: 1,
      remote: require('electron')
    }
  },
  methods: {
    open () {
      this.contentVisible = true
    },
    close () {
      this.contentVisible = false
    },
    // 关闭窗口
    closeWindow () {
      // const remote = require('electron')
      // 加载remote 然后调用主线程
      console.log(this.remote)
      this.remote.remote.app.exit()
    },
    // 窗口最小化
    miniWindow () {
      this.remote.remote.getCurrentWindow().minimize()
    }
  }
}
</script>

<style lang="scss" scoped>
.monitoring{
  width: 100%;
  color: #fff;
  background-color: #385278;
  .item_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .2s ease-out;
    height: 38px;
    &.show{
      background-color: #0c264c;
    }
    .left {
      padding-left: 6px;
      .icon-face{
        margin-right: 4px;
      }
    }
    .right{
      .close{
        cursor: pointer;
        padding: 10px;
        &:hover{
          color: #1ef0ed;
        }
      }
    }
  }
  .item_content{
    height: 0px;
    padding: 0 15px;
    overflow: hidden;
    transition: all .3s;
    &.show{
      height: 248px;
      padding: 15px; 
    }
  }
}
</style>
