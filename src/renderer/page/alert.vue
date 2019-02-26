<template>
  <div class="app">
    <monitoring class="item" v-for="(ele,idx) in list" :key="idx" :ref="`monitoring${idx}`" @headHandler="headHandler(idx)"></monitoring>
  </div>
</template>

<script>
import Monitoring from '@/components/monitoring'
export default {
  components: {
    Monitoring
  },
  data () {
    return {
      list: [1, 2, 3, 4, 5]
    }
  },
  mounted () {
    this.$electron.ipcRenderer.send('APP_SHOW')
  },
  methods: {
    hideApp () {
      this.$electorn.ipcRenderer.send('APP_HIDE')
    },
    headHandler (index) {
      this.list.forEach((ele, idx) => {
        const item = this.$refs[`monitoring${idx}`][0]
        if (index !== idx && item.contentVisible) {
          item.close()
        }
      })
      const item = this.$refs[`monitoring${index}`][0]
      if (item.contentVisible) {
        item.close()
      } else {
        item.open()
      }
    }
  }
}
</script>

<style lang="scss">
.app{
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  .item{
    border-bottom: 1px solid #aec6e8;
    overflow: hidden;
    &:first-of-type{
      border-bottom: 0;
    }
    &:last-of-type{
      border-radius: 8px 8px 0 0;
    }
  }
}
</style>