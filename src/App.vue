<template>
  <div id="app">
    <router-view v-show="isShow"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: false,
      width: 200
    }
  },
  mounted() {
    var s;
    function resize() {
      let app = document.getElementById('app')
      let width = app.offsetWidth
      console.log(width)
      s = width / 1920;
      let dom = document.getElementById('app-container')
      dom.style.transformOrigin = '0 0';
      dom.style.transform = 'scale(' + s + ',' + s + ')';
    }
    window.onresize = function () {
      resize();
    }
    resize();
    this.isShow = true
    // 1920 1080
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
#app {
  font-family: 'PangMenZhengDao-3', '微软雅黑', 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
}
</style>
<style lang="scss">
*{
  box-sizing: border-box;
}
.app-container{
  width: 1920px;
  height: 1080px;
  transform-origin: 0 0;
  background: url("~@/assets/bg.png") center no-repeat;
  background-size: 100% 100%;
  padding: 0 39px 0 30px;
  line-height: 22px;
}
.over-hide{
  overflow: hidden;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.left-container, .right-container{
  width: 460px;
}
.middle-container{
  width: 930px;
}
.top-header{
  height: 105px;
  background: url("~@/assets/header-bg.png") top center no-repeat;
  .left-container{
    &>div{
      padding-top: 46px;
      margin-left: 37px;
      font-size: 26px;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
  .middle-container{
    text-align: center;
    font-size: 44px;
    font-weight: 400;
    color: #FFFFFF;
    padding-top: 24px;
    &>span{
      text-shadow: 0 0 8px #1a7ef9;
    }
  }
  .right-container{
    padding-top: 74px;
    padding-right: 24px;
    text-align: right;
    color: rgba(255,255,255,0.6);
    font-size: 22px;
    &>span{
      text-shadow: 0 0 8px #1a7ef9;
    }
  }
}
.body-container{
  .left-container, .right-container{
    padding-top: 3px;
  }
  .block-title{
    height: 50px;
    line-height: 50px;
    padding-left: 37px;
    font-size: 20px;
    color: #fff;
    background: url("~@/assets/block-title.png") left center no-repeat;
  }
  .block-bg{
    background-color: rgba(3, 18, 46, 0.8);
  }
  .stock-block{
    height: 215px;
    padding-top: 63px;
    margin-bottom: 20px;
    .stock-content{
      height: 152px;
      background: url("~@/assets/stock-bg.png") center 35px no-repeat;
    }
    .stock-div{
      margin: 0 auto;
      width: 330px;
      height: 109px;
      background: url("~@/assets/car.png") left bottom no-repeat;
      padding-left: 169px;
      color: #FFFFFF;
      .title-text{
        line-height: 38px;
        font-size: 38px;
        margin-bottom: 10px;
      }
      .inf-text{
        font-size: 20px;
        opacity: 0.6;
        position: relative;
        &::before {
          content: attr(content);
          position: absolute;
          inset: 0;
          top: -15px;
          transform: rotatex(180deg) translatey(15px);
          transform-origin: 50% 100%;
          mask: linear-gradient(transparent 5%, rgba(255, 255, 255, .9) 99%);
          filter: blur(1px);
        }
      }
    }
  }
  .statistics-block{
    height: 240px;
    padding-top: 35px;
    margin-bottom: 39px;
    &>div{
      width: 50%;
      text-align: center;
      .icon-div{
        width: 100px;
        height: 100px;
        margin: 0 auto;
      }
      &:first-child .icon-div{
        background: url("~@/assets/kucun.png") center no-repeat;
        background-color: rgba(0, 128, 224, 0.15);
      }
      &:last-child .icon-div{
        background: url("~@/assets/yahe.png") center no-repeat;
        background-color: rgba(0, 128, 224, 0.15);
      }
      .text-title{
        padding-top: 10px;
        padding-bottom: 14px;
        color: #FFFFFF;
        font-size: 18px;
        opacity: 0.6;
      }
      .content-text{
        background: url("~@/assets/line-down.png") center bottom no-repeat;
        height: 41px;
        font-weight: bold;
        font-size: 30px;
        padding-left: 23px;
        span{
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          padding-left: 8px;
        }
      }
      &:first-child .content-text{
        color: #4DB2F9;
      }
      &:last-child .content-text{
        color: #2EF1FF;
      }
    }
  }
  .right-container{
    .statistics-block{
      &>div{
        &:first-child .icon-div{
          background: url("~@/assets/chuku.png") center no-repeat;
          background-color: rgba(0, 128, 224, 0.15);
        }
        &:last-child .icon-div{
          background: url("~@/assets/yahe2.png") center no-repeat;
          background-color: rgba(0, 128, 224, 0.15);
        }
        &:first-child .content-text{
          color: #FDD340;
        }
        &:last-child .content-text
        {
          color: #F25228;
        }
      }
    }
  }
}
</style>
