import Services from '../../services'

class SeleksiVendorApi {
  get(params) {
    return Services.get('/hrdu/approval_seleksi_vendor/list', { params })
  }

  getHistory(params) {
    return Services.get('/hrdu/approval_seleksi_vendor/history/list', { params })
  }

  getSingle(params) {
    return Services.get('/hrdu/approval_seleksi_vendor/detail', { params })
  }

  save(data) {
    return Services.post('/hrdu/approval_seleksi_vendor/approve', data)
  }
}

export default new SeleksiVendorApi()