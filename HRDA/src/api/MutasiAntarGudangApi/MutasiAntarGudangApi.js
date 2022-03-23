import Services from '../../services'

class MutasiAntarGudangApi {
    // API SERVER
    get(params) {
        return Services.get('/hrdu/approval_mutasi_antar_gudang/list', { params })
    }

    getHistory(params) {
        return Services.get('/hrdu/approval_mutasi_antar_gudang/history/list', { params })
    }

    getSingle(params) {
        return Services.get('/hrdu/approval_mutasi_antar_gudang/detail', { params })
    }

    approve(data) {
        return Services.post('/hrdu/approval_mutasi_antar_gudang/approve', data)
    }
}

export default new MutasiAntarGudangApi()