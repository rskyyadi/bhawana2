import Services from '../../services'

class KegiatanApi {
    // API SERVER
    get(params) {
        return Services.get('/hrdu/approval_kegiatan/list', { params })
    }

    getHistory(params) {
        return Services.get('/hrdu/approval_kegiatan/history/list', { params })
    }

    getSingle(params) {
        return Services.get('/hrdu/approval_kegiatan/detail', { params })
    }

    approve(data) {
        return Services.post('/hrdu/approval_kegiatan/approve', data)
    }
}

export default new KegiatanApi()