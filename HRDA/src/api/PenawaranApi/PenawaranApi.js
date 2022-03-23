import Services from '../../services'

class PenawaranApi {
    get(params) {
        return Services.get('/hrdu/approval_penawaran/list', { params })
    }

    getHistory(params) {
        return Services.get('/hrdu/approval_penawaran/history/list', { params })
    }

    getSingle(params) {
        return Services.get('/hrdu/approval_penawaran/detail', { params })
    }

    approve(data) {
        return Services.post('/hrdu/approval_penawaran/approve', data)
    }
}

export default new PenawaranApi()