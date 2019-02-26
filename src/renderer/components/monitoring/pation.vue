<template>
  <div class="page">
    <div class="content">
      <div class="camera">
        <div class="title">Camera</div>
        <div class="head"></div>
        <div class="similarity">98%</div>
      </div>
      <div class="passport">
        <div class="title">Passport</div>
        <div class="head"></div>
        <div class="similarity">98%</div>
      </div>
    </div>
    <div class="back_btn" @click="$emit('back')"><i class="icon-back"></i> Back</div>
  </div>
</template>

<style lang="scss" scoped>
.page{
  text-align: center;
  .content{
    display: flex;
    padding: 0 60px;
    margin-bottom: 18px;
    .camera{
      margin-right: 60px;
    }
    .camera,
    .passport{
      flex-grow: 1;
      .title{
        font-size: 16px;
        text-align: left;
        border-left: 2px solid #fff;
        padding-left: 6px;
        margin-bottom: 10px;
      }
      .head{
        width: 100%;
        height: 130px;
        border: 2px solid #011a43;
        margin-bottom: 10px;
      }
      .similarity{
        height: 35px;
        line-height: 35px;
        background-image: url(../../assets/images/similarity-btn.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        color: #26c1ca;
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
}
</style>
