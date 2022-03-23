import Services from '../../services'

class SPKApi {
    get(params) {
        return Services.get('/hrdu/approval_spk/list', { params })
    }

    getHistory(params) {
        return Services.get('/hrdu/approval_spk/history/list', { params })
    }

    getSingle(params) {
        return Services.get('/hrdu/approval_spk/detail', { params })
    }

    save(data) {
        return Services.post('/hrdu/approval_spk/approve', data)
    }
}

export default new SPKApi()