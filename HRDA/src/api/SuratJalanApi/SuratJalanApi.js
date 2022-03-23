import Services from '../../services'

class SuratJalanApi {
    // API SERVER
    get(params) {
        return Services.get('/hrdu/approval_surat_jalan/list', { params })
    }

    getHistory(params) {
        return Services.get('/hrdu/approval_surat_jalan/history/list', { params })
    }


    getSingle(params) {
        return Services.get('/hrdu/approval_surat_jalan/detail', { params })
    }

    approve(data) {
        return Services.post('/hrdu/approval_surat_jalan/approve', data)
    }
}

export default new SuratJalanApi()