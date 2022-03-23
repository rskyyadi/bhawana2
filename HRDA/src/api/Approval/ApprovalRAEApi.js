import Services from "../../services"

class ApprovalRAEApi {
  get(params) {
    return Services.get('/hrdu/approval_rae/list', { params })
  }

  getHistory(params) {
    return Services.get('/hrdu/approval_rae/history/list', { params })
  }

  getSingle(params) {
    return Services.get('/hrdu/approval_rae/detail', { params })
  }

  getAnalisa(params) {
    return Services.get('/hrdu/approval_rae/analisa_barang_jadi_single/', { params })
  }

  save(data) {
    return Services.post('/hrdu/approval_rae/approve', data)
  }
}

export default new ApprovalRAEApi()