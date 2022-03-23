import Services from '../../services'

class PurchaseOrderApi {
  get(params) {
    return Services.get('/hrdu/approval_purchase_order/list', { params })
  }

  getHistory(params) {
    return Services.get('/hrdu/approval_purchase_order/history/list', { params })
  }

  getSingle(params) {
    return Services.get('/hrdu/approval_purchase_order/detail', { params })
  }

  save(data) {
    return Services.post('/hrdu/approval_purchase_order/approve', data)
  }
}

export default new PurchaseOrderApi()