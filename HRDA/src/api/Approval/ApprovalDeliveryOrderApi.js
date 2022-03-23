import Services from '../../services'

class ApprovalDeliveryOrderApi {
  get(params) {
    return Services.get('/hrdu/approval_delivery_order/list', { params })
  }

  getHistory(params) {
    return Services.get('/hrdu/approval_delivery_order/history/list', { params })
  }

  getSingle(params) {
    return Services.get('/hrdu/approval_delivery_order/detail', { params })
  }

  save(data) {
    return Services.post('/hrdu/approval_delivery_order/approve', data)
  }
}

export default new ApprovalDeliveryOrderApi()