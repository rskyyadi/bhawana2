import Services from "../../services"

class ApprovalRAPApi {
  get(params) {
    return Services.get('/hrdu/approval_rap/list', { params })
  }

  getHistory(params) {
    return Services.get('/hrdu/approval_rap/history/list', { params })
  }

  getSingle(params) {
    return Services.get('/hrdu/approval_rap/detail', { params })
  }

  getAnalisa(params) {
    return Services.get('/hrdu/approval_rap/analisa_barang_jadi_single/', { params })
  }

  save(data) {
    return Services.post('/hrdu/approval_rap/approve', data)
  }
}

export default new ApprovalRAPApi()