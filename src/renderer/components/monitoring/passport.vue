<template>
  <div class="page">
    <div class="head">

    </div>
    <div class="back_btn" @click="$emit('back')"><i class="icon-back"></i> Back</div>
  </div>
</template>

<style lang="scss" scoped>
.page{
  text-align: center;
  .head{
    width: 180px;
    height: 180px;
    border: 2px solid #011a43;
    margin: 0 auto;
    margin-bottom: 25px;
  }
}
</style>
