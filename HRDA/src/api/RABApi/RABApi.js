import Services from '../../services'

class RABApi {
    get(params) {
        return Services.get('/hrdu/approval_rab/list', { params })
    }

    getHistory(params) {
        return Services.get('/hrdu/approval_rab/history/list', { params })
    }

    getSingle(params) {
        return Services.get('/hrdu/approval_rab/detail', { params })
    }

    getAnalisa(params) {
        return Services.get('/hrdu/approval_rab/analisa_barang_jadi_single', { params })
    }

    approve(data) {
        return Services.post('/hrdu/approval_rab/approve', data)
    }
}

export default new RABApi()