<template>
  <div class="app-container" id="app-container">
    <div class="top-header over-hide">
      <div class="left-container fl">
        <div>上海新金桥环保有限公司</div>
      </div>
      <div class="middle-container fl">
        <span>拆车系统信息流看板</span>
      </div>
      <div class="right-container fl">
        <span>2023-02-23  16:24:29</span>
      </div>
    </div>
    <div class="body-container over-hide">
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
      </div>

      <div class="middle-container fl"></div>

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
        <div class="block-title">最近15日完工统计</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStoreView } from '@/api/home';
export default {
  components: { },
  data() {
    return {
    }
  },
  mounted() {
    // getStoreView().then(res =>{
    //   console.log(res)
    // }).catch(err=>{})
  },
  methods: {
  }
}
</script>

