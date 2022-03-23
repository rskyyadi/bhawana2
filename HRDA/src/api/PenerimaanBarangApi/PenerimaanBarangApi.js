import Services from '../../services'

// API TERBARU PENERIMAAN BARANG

class PenerimaanBarangApi {
    get(params) {
        return Services.get('/hrdu/approval_penerimaan_barang/list', { params })
    }

    getHistory(params) {
        return Services.get('/hrdu/approval_penerimaan_barang/history/list', { params })
    }

    getSingle(params) {
        return Services.get('/hrdu/approval_penerimaan_barang/detail', { params })
    }

    approve(data) {
        return Services.post('/hrdu/approval_penerimaan_barang/approve', data)
    }
}

export default new PenerimaanBarangApi()