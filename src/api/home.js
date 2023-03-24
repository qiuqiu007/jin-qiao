import request from '@/utils/request'

// 大屏-仓库详情
export function getStoreView() {
  return request({
    url: '/api/screen/storeView',
    method: 'get'
  })
}
// 大屏-最近十五日完工情况
export function getChartView() {
  return request({
    url: '/api/screen/chartView',
    method: 'get'
  })
}
// 大屏-拆解统计
export function getCensusView() {
  return request({
    url: '/api/screen/CensusView',
    method: 'get'
  })
}
