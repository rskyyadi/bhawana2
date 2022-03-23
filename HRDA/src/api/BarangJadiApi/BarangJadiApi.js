import Services from '../../services'

class BarangJadiApi {
  getDropdownJenis(params) {
    return Services.get('/barang_jadi/dropdown_jenis', {params})
  }
  
  getDropdownAnalisa(params) {
    return Services.get('/barang_jadi/dropdown_analisa', {params})
  }
  
}

export default new BarangJadiApi()
