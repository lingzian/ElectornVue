<template>
  <div class="main_content">
    <div class="left">
      <div class="camera">
        <span class="title">Camera</span>
        <div class="head" @click="$emit('toCamera')"></div>
      </div>
      <div class="passport">
        <span class="title">Passport</span>
        <div class="head" @click="$emit('toPassport')"></div>
      </div>
    </div>

    <div class="similarity">
      <span class="circle">
        <i class="icon-circle"></i>
        <ul class="circle_line">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </span>
      <span class="value">98%</span>
      <span class="desc">Similarity</span>
    </div>

    <div class="right">
      <div class="head" @click="$emit('toPation')">
        <div class="pation_id" @click.stop>
          <div class="title">Pation ID:</div>
          <div class="content">825639585296845841</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main_content{
  display: flex;
  justify-content: space-between;
  position: relative;
  .head{
    $size: 110px;
    width: $size;
    height: $size;
    border: 2px solid #011a43;
    border-radius: 6px;
    cursor: pointer;
  }
  .left{
    padding-left: 40px;
    .camera,
    .passport{
      display: flex;
      position: relative;
      .title{
        position: absolute;
        top: 4px;
        left: -10px;
        transform: rotate(90deg);
        transform-origin: left top;
        border-left: 2px solid #fff;
        padding-left: 8px;
      }
    }
    .camera{
      margin-bottom: 20px;
    }
  }
  .right{
    padding-right: 40px;
    display: flex;
    align-items: center;
    .head{
      position: relative;
      border-color: #1ef0ed;
    }
    .pation_id{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      transform: translate(0, -120%);
      .title{
        font-size: 16px;
        margin-bottom: 4px;
      }
      .content{
        word-break: break-all;
        user-select: auto;
        cursor: text;
      }
    }
  }
  .similarity{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .circle{
      display: inline-block;
      position: relative;
      &::before,
      &::after{
        content: "";
        display: block;
        position: absolute;
        height: 2px;
        background-color: #1ef0ed;
      }
      &::before{
        width: 58px;
        top: 1px;
        right: -40px;
        transform: rotate(-37deg);
      }
      &:after{
        width: 55px;
        top: -16px;
        right: -89px;
      }
      .icon-circle{
        font-size: 90px;
        color: #1ef0ed;
        transform: rotate(0deg);
        animation: move 10s linear infinite;
        @keyframes move {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
      .circle_line{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90px;
        height: 90px;
        li{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border-style: solid;
          border-color: #1ef0ed;
          position: absolute;
          top: 0;
          left: 0;
          box-sizing: border-box;
          transition: all 2s;
          animation-name: outMove;
          animation-duration: 3s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          &:first-of-type {
            animation-delay: 0s;
          }
          &:nth-of-type(2) {
            animation-delay: 1.5s;
          }
          &:nth-of-type(3) {
            animation-delay: 2s;
          }
          @keyframes outMove {
            0% {
              transform: scale(1.1);
              opacity: .2;
              border-width: 3px;
            }
            100% {
              transform: scale(2.4);
              opacity: 0;
              border-width: 0;
            }
          }
        }
      }
    }
    .value{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #011a43;
      font-size: 20px;
      font-weight: bold;
    }
    .desc{
      color: #1ef0ed;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 130%);
      font-size: 16px;
    }
  }
}
</style>
