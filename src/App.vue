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
.bg-container{
  width: 100%;
  height: 100%;
  background: url("~@/assets/bottom-bg.png") center bottom no-repeat;
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
li{
  list-style: none;
  padding: 0;
  margin: 0;
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
  .status-block{
    height: 280px;
  }
  .left-container .status-block{
    padding-top: 34px;
    padding-left: 16px;
    .status-item{
      width: 126px;
      height: 85px;
      border-image: radial-gradient(circle, #0A2A36, #012F73, #0048B4, #012F73, #0A2A36) 1 1;
      box-shadow: 0px -11px 29px 0px rgba(69,174,250,0.09);
      margin-left: 16px;
      margin-bottom: 30px;
      .status-content{
        height: 100%;
        background: url("~@/assets/border.png") left top no-repeat;
        padding-top: 13px;
        padding-left: 18px;
        .status-title{
          font-size: 20px;
          color: rgba(255, 255, 255, 0.6);
          text-shadow: 0px 3px 2px rgba(0,14,17,0.19);
          margin-bottom: 13px;
        }
        .num{
          font-size: 30px;
          color: #FEFEFE;
          line-height: 24px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          span{
            padding-left: 6px;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.6);
            text-shadow: 0px 3px 2px rgba(0,14,17,0.19);
          }
        }
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
    .status-block{
      padding-left: 13px;
      padding-top: 26px;
      .status-title{
        font-size: 14px;
        line-height: 14px;
        color: #B8BCC9;
      }
      .chart-container{
        height: 239px;
        padding-top: 29px;
      }
      .y-axis{
        width: 37px;
        padding-right: 13px;
        text-align: right;
        font-size: 12px;
        line-height: 12px;
        color: #B8BCC9;
        .y-item{
          height: 42px;
          position: relative;
          top: -6px;
        }
      }
      .x-axis{
        width: 385px;
        position: relative;
        .x-item{
          height: 42px;
          border-top: 1px solid rgba(204, 204, 204, 0.3);
          .x-data{
            text-align: center;
            width: 25.66px;
            font-size: 12px;
            line-height: 13px;
            padding-top: 10px;
            color: #B8BCC9;
          }
        }
        .x-content{
          width: 100%;
          height: 168px;
          position: absolute;
          top: 0;
          left: 0;
          .x-chart{
            width: 25.66px;
            height: 100%;
            .bar-chart{
              width: 13px;
              height: 100%;
              background: #0072CB;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
  .middle-container{
    .middle-title{
      height: 104px;
      line-height: 104px;
      width: 820px;
      margin: 0 auto;
      padding: 0 20px;
      background: url("~@/assets/middle-title.png") center no-repeat;
      &>div{
        background-image: linear-gradient(0deg, #2A9FF9 2%, #F6F8F9 75%, #ffffff 100%);
        -webkit-background-clip: text;
        color: transparent;
        .fl{
          font-size: 34px;
        }
        .fr{
          font-size: 50px;
          font-weight: bold;
          span{
            font-size: 40px;
            font-weight: 400;
            padding-left: 15px;
            padding-right: 8px;
            &:first-child{
              padding-left: 3px;
            }
          }
        }
      }
    }
    .middle-table{
      width: 850px;
      height: 288px;
      margin: 0 auto;
      background-color: rgba(3, 18, 46, 0.8);
      padding: 10px 28px;
      ul{
        background-color: rgba(0, 128, 224, 0.05);
        padding: 0;
        margin: 0;
        li:first-child{
          background-color: rgba(0, 128, 224, 0.1);
          font-size: 19px;
          line-height: 50px;
          height: 50px;
          color: #BADDFF;
        }
        li{
          overflow: hidden;
          &>div{
            float: left;
          }
          .item1{
            width: 288px;
            padding-left: 93px;
            text-align: center;
            text-shadow: 0 0 2px #BADDFF;
            padding-right: 40px;
          }
          .item2,.item3{
            width: 252px;
            text-align: right;
            padding-right: 40px;
          }
        }
        li.other{
          line-height: 70px;
          height: 70px;
          .item1{
            color: #BADDFF;
            font-size: 22px;
            .img{
              width: 44px;
              height: 44px;
              border: 1px solid #0080E0;
              display: inline-block;
              margin-right: 15px;
              vertical-align: middle;
            }
          }
          .item2,.item3{
            font-size: 34px;
            font-weight: bold;
          }
        }
        .jinri{
          .img{
            background: url("~@/assets/jinri.png") center no-repeat;
            background-color: rgba(0,128,224,0.02);
          }
          .item2,.item3{
            color: #2EF1FF;
          }
        }
        .benzhou{
          .img{
            background: url("~@/assets/benzhou.png") center no-repeat;
            background-color: rgba(0,128,224,0.02);
          }
          .item2,.item3{
            color: #2A9FF9;
          }
        }
        .quannian{
          .img{
            background: url("~@/assets/quannian.png") center no-repeat;
            background-color: rgba(0,128,224,0.02);
          }
          .item2,.item3{
            color: #FDD340;
          }
        }
      }
    }
    .middle-bg{
      height: 826px;
      margin-top: 15px;
      background: url("~@/assets/middle.png") center top no-repeat;
    }
    .middle-theme{
      height: 533px;
      width: 686px;
      margin: 0 auto;
      padding-top: 50px;
      .theme-item{
        width: 321px;
        height: 419px;
        padding: 249px 23px 11px;
        &:first-child{
          background: url("~@/assets/4.png") center top no-repeat;
        }
        &:last-child{
          background: url("~@/assets/5.png") center top no-repeat;
        }
      }
      .theme-content{
        overflow: hidden;
        height: 159px;
        .first{
          overflow: hidden;
          .item:first-child{
            margin-bottom: 16px;
          }
        }
        .last{
          padding-left: 24px;
          .item:first-child{
            margin-bottom: 16px;
          }
        }
        .title{
          font-weight: bold;
          color: #FFFFFF;
          font-size: 22px;
        }
        .text{
          font-size: 20px;
          margin-top: 5px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: 40px;
          height: 40px;
          color: rgba(255, 255, 255, 0.8);
          vertical-align: bottom;
          span{
            background: linear-gradient(0deg, #2EF1FF 0%, #DAFAFC 99.365234375%);
            -webkit-background-clip: text;
            color: transparent;
            font-size: 40px;
            font-weight: bold;
            margin-right: 5px;
          }
        }
      }
      //.theme-top{
      //  width: 176px;
      //  margin: 0 auto;
      //  margin-bottom: 10px;
      //  .theme-line{
      //    overflow: hidden;
      //    &:first-child{
      //      margin-bottom: 3px;
      //    }
      //    &:last-child{
      //      margin-top: 3px;
      //    }
      //    .item{
      //      float: left;
      //      width: 12px;
      //      height: 2px;
      //      background: rgba(255, 255, 255, 0.6);
      //      border-radius: 1px;
      //    }
      //    .middle{
      //      width: 143px;
      //      height: 1px;
      //      background: rgba(71, 179, 255, 0.3);
      //      margin: 0 4px;
      //      position: relative;
      //      top:1px;
      //    }
      //  }
      //  .text-div{
      //    line-height: 36px;
      //    text-align: center;
      //    background: rgba(71, 179, 255, 0.4);
      //    font-size: 20px;
      //    //color: #fff;
      //    div{
      //      height: 36px;
      //      background-image: linear-gradient(0deg, #2A9FF9 2%, #F6F8F9 35%, #ffffff 100%);
      //      -webkit-background-clip: text;
      //      color: transparent;
      //    }
      //  }
      //}
      //.theme-content{
      //  height: 361px;
      //  background: #042752;
      //  border: 1px solid #16A2FD;
      //}
    }
  }
}
</style>
