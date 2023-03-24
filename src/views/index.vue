<template>
  <div class="app-container" id="app-container">
    <div class="bg-container">
      <div class="top-header over-hide">
        <div class="left-container fl">
          <div>上海新金桥环保有限公司</div>
        </div>
        <div class="middle-container fl">
          <span>拆车系统信息流看板</span>
        </div>
        <div class="right-container fl">
          <span>{{dataTime}}</span>
        </div>
      </div>
      <div class="body-container over-hide">
        <!--左-->
        <div class="left-container fl">
          <!--原料库存-->
          <div class="block-title">原料库存</div>
          <div class="block-bg stock-block">
            <div class="stock-content">
              <div class="over-hide stock-div">
                <div class="title-text">86辆</div>
                <div class="inf-text" content="原料库存数">原料库存数</div>
              </div>
            </div>
          </div>
          <!--库存统计-->
          <div class="block-title">库存统计</div>
          <div class="block-bg statistics-block over-hide">
            <div class="fl">
              <div class="icon-div"></div>
              <div class="text-title">零件库存</div>
              <div class="content-text">2,079<span>吨</span></div>
            </div>
            <div class="fl">
              <div class="icon-div"></div>
              <div class="text-title">压合包</div>
              <div class="content-text">1,483<span>吨</span></div>
            </div>
          </div>
          <!--仓库状态统计-->
          <div class="block-title">仓库状态统计</div>
          <div class="block-bg status-block over-hide">
            <div class="fl status-item">
              <div class="status-content">
                <div class="status-title">空框</div>
                <div class="num">
                  177<span>个</span>
                </div>
              </div>
            </div>
            <div class="fl status-item">
              <div class="status-content">
                <div class="status-title">已入库</div>
                <div class="num">
                  177<span>个</span>
                </div>
              </div>
            </div>
            <div class="fl status-item">
              <div class="status-content">
                <div class="status-title">入库中</div>
                <div class="num">
                  177<span>个</span>
                </div>
              </div>
            </div>
            <div class="fl status-item">
              <div class="status-content">
                <div class="status-title">临时出库</div>
                <div class="num">
                  177<span>个</span>
                </div>
              </div>
            </div>
            <div class="fl status-item">
              <div class="status-content">
                <div class="status-title">出库中</div>
                <div class="num">
                  177<span>个</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--中-->
        <div class="middle-container fl">
          <div class="middle-title">
            <div class="over-hide">
              <span class="fl">今日计划拆解台数/总净重:</span>
              <span class="fr">9台/10.22<span>吨</span></span>
            </div>
          </div>
          <div class="middle-bg">
            <div class="middle-theme over-hide">
              <div class="fl theme-item">
<!--                <div class="theme-top">-->
<!--                  <div class="theme-line over-hide">-->
<!--                    <div class="item"></div>-->
<!--                    <div class="item middle"></div>-->
<!--                    <div class="item"></div>-->
<!--                  </div>-->
<!--                  <div class="text-div">-->
<!--                    <div>4号拆解车间</div>-->
<!--                  </div>-->
<!--                  <div class="theme-line over-hide">-->
<!--                    <div class="item"></div>-->
<!--                    <div class="item middle"></div>-->
<!--                    <div class="item"></div>-->
<!--                  </div>-->
<!--                </div>-->
                <div class="theme-content">
                  <div class="fl first">
                    <div class="item">
                      <div class="title">实际拆解</div>
                      <div class="text"><span>5</span>台</div>
                    </div>
                    <div class="item">
                      <div class="title">累计拆</div>
                      <div class="text"><span>29</span>台</div>
                    </div>
                  </div>
                  <div class="fl last">
                    <div class="item">
                      <div class="title">总净重</div>
                      <div class="text"><span>6.15</span>台</div>
                    </div>
                    <div class="item">
                      <div class="title">总净重</div>
                      <div class="text"><span>29.22</span>台</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fr theme-item">
                <div class="theme-content">
                  <div class="fl first">
                    <div class="item">
                      <div class="title">实际拆解</div>
                      <div class="text"><span>5</span>台</div>
                    </div>
                    <div class="item">
                      <div class="title">累计拆</div>
                      <div class="text"><span>29</span>台</div>
                    </div>
                  </div>
                  <div class="fl last">
                    <div class="item">
                      <div class="title">总净重</div>
                      <div class="text"><span>6.15</span>台</div>
                    </div>
                    <div class="item">
                      <div class="title">总净重</div>
                      <div class="text"><span>29.22</span>台</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="middle-table">
              <ul>
                <li>
                  <div class="item1">时间段</div>
                  <div class="item2">台数(台)</div>
                  <div class="item3">总净重(吨)</div>
                </li>
                <li class="jinri other">
                  <div class="item1">
                    <div class="img"></div>今日拆解
                  </div>
                  <div class="item2">10</div>
                  <div class="item3">10.22</div>
                </li>
                <li class="benzhou other">
                  <div class="item1">
                    <div class="img"></div>本周拆解
                  </div>
                  <div class="item2">10</div>
                  <div class="item3">10.22</div>
                </li>
                <li class="quannian other">
                  <div class="item1">
                    <div class="img"></div>全年拆解
                  </div>
                  <div class="item2">10</div>
                  <div class="item3">10.22</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--右-->
        <div class="right-container fl">
          <!--今日入库数-->
          <div class="block-title">今日入库数</div>
          <div class="block-bg stock-block">
            <div class="stock-content">
              <div class="over-hide stock-div">
                <div class="title-text">86辆</div>
                <div class="inf-text" content="今日入库数">今日入库数</div>
              </div>
            </div>
          </div>
          <!--今日出库数-->
          <div class="block-title">今日出库数</div>
          <div class="block-bg statistics-block over-hide">
            <div class="fl">
              <div class="icon-div"></div>
              <div class="text-title">零件出库</div>
              <div class="content-text">2,079<span>吨</span></div>
            </div>
            <div class="fl">
              <div class="icon-div"></div>
              <div class="text-title">压合包</div>
              <div class="content-text">1,483<span>吨</span></div>
            </div>
          </div>
          <!--最近15日完工统计-->
          <div class="block-title">最近14日完工统计</div>
          <div class="block-bg status-block over-hide">
            <div class="status-title">拆解量（件）</div>
            <div class="over-hide chart-container">
              <div class="fl y-axis">
                <div class="y-item" v-for="yNum in yArr" :key="yNum">{{yNum}}</div>
              </div>
              <div class="fl x-axis">
                <!--背景线-->
                <div class="x-item"></div><div class="x-item"></div><div class="x-item"></div><div class="x-item"></div>
                <div class="x-item over-hide">
                  <div class="x-data fl" v-for="(item, index) in dataChart" :key="index">{{item.date}}</div>
                </div>
                <div class="over-hide x-content">
                  <div class="x-chart fl" v-for="(item, index) in dataChart" :key="index" :style="{'padding-top': (1-item.height)*168+'px'}">
                    <div class="bar-chart"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStoreView, getChartView } from '@/api/home';
export default {
  components: { },
  data() {
    return {
      stockData: {},
      stockList: {},
      yArr: [],
      yMax: 0,
      dataChart: [],
      dataTime: '',
    }
  },
  mounted() {
    getStoreView().then(res =>{
      if(res.success){
        this.stockList = res.data||[]
      }
    })
    getChartView().then(res => {
      if(res.success){
        let dataArr = [...(res.data||[])]
        let sortArr = dataArr.sort(function(a,b){
          return b.counts-a.counts;
        });
        // 获取最大数
        let maxNum = sortArr[0].counts
        // 最大数4等分
        let numItem = maxNum/4
        if(numItem<1){
          numItem = 1
        }else if(numItem<2) {
          numItem = 2
        } else if(numItem<5) {
          numItem = 5
        } else if(numItem<8) {
          numItem = 8
        } else if(numItem<10) {
          numItem = 10
        } else {
          numItem = parseInt((parseInt(numItem/10)+1)*10)
        }
        this.yArr = [numItem*4,numItem*3,numItem*2,numItem,0]
        this.yMax = numItem*4
        this.dataChart = (res.data||[]).map(item => {
          let date = item.finishDate.slice(8)
          let height = item.counts/this.yMax
          return {
            ...item,
            date,
            height
          }
        })
      }
    })
    let _this = this
    this.timer = setInterval(()=>{
      let time = new Date();
      let timeInfo = (time.getFullYear()+'-'+time.getMonth()+'-'+time.getDate()+' '+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds())
      _this.dataTime = timeInfo
    },1000)
  },
  methods: {
  },
  destroyed() {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>

