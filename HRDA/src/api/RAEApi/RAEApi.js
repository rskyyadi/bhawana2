import Services from '../../services'

class RAEApi {
  get(params) {
    return Services.get('/rae/page', {params})
  }

  getSingle(params) {
    return Services.get('/rae/single', {params})
  }
  
  getPeluang(params) {
    return Services.get('/peluang/page', {params})
  }

  getSinglePeluang(params) {
    return Services.get('/peluang/single', {params})
  }

  getNomorRAE(params) {
    return Services.get('/rae/no_baru', {params})
  }
  
  save(data) {
    return Services.post('/rae', data)
  }
}

export default new RAEApi()
