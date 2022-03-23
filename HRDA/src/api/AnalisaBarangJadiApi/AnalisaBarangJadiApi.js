import Services from '../../services'

class AnalisaBarangJadi {
  getSingle(params) {
    return Services.get('/analisa_barang_jadi_rae/single', {params})
  }

  getKayu(params) {
    return Services.get('/analisa_barang_jadi_rae/dropdown_kayu', {params})
  }

  getKelompokTipeBarangJadi(params) {
    return Services.get('/analisa_barang_jadi_rae/dropdown_kelompok_tipe', {params})
  }

  getTipeBarangJadi(params) {
    return Services.get('/analisa_barang_jadi_rae/dropdown_tipe', {params})
  }

  getDropdownTipeBarangJadi(params) {
    return Services.get('/analisa_barang_jadi_rae/dropdown_tipe', {params})
  }

  getSingleTipeBarangJadi(params) {
    return Services.get('/analisa_barang_jadi_rae/dropdown_tipe', {params})
  }

  getFinishingBarangJadi(params) {
    return Services.get('/analisa_barang_jadi_rae/dropdown_finishing', {params})
  }
  
  getDropdownFinishingBarangJadi(params) {
    return Services.get('/analisa_barang_jadi_rae/dropdown_finishing', {params})
  }

  getSingleFinishingBarangJadi(params) {
    return Services.get('/analisa_barang_jadi_rae/dropdown_finishing', {params})
  }
  
  save(data) {
    return Services.post('/analisa_barang_jadi_rae', data)
  }
}

export default new AnalisaBarangJadi()