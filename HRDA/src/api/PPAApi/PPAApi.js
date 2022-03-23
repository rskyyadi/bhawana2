import Services from '../../services'

class PPAApi {
    // API SERVER
    get(params) {
        return Services.get('/hrdu/approval_ppa/list', { params })
    }

    getHistory(params) {
        return Services.get('/hrdu/approval_ppa/history/list', { params })
    }

    getSingle(params) {
        return Services.get('/hrdu/approval_ppa/detail', { params })
    }

    approve(data) {
        return Services.post('/hrdu/approval_ppa/approve', data)
    }
}

export default new PPAApi()