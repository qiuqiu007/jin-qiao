import request from '@/utils/request'

// 大屏-仓库详情
export function getStoreView() {
  return request({
    url: '/api/screen/storeView',
    method: 'get'
  })
}
