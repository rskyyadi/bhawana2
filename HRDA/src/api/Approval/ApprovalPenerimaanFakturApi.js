import Services from '../../services'

class ApprovalPenerimaanFakturApi {
  get(params) {
    return Services.get('/hrdu/approval_faktur_penjualan_penerimaan/list', { params })
  }

  getHistory(params) {
    return Services.get('/hrdu/approval_faktur_penjualan_penerimaan/history/list', { params })
  }

  getSingle(params) {
    return Services.get('/hrdu/approval_faktur_penjualan_penerimaan/detail', { params })
  }

  save(data) {
    return Services.post('/hrdu/approval_faktur_penjualan_penerimaan/approve', data)
  }
}

export default new ApprovalPenerimaanFakturApi()