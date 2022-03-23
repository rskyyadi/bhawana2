import Services from '../../services'

class FaktuPenjualanApi {
    get(params) {
        return Services.get('/hrdu/approval_faktur_penjualan/list', { params })
    }

    getHistory(params) {
        return Services.get('/hrdu/approval_faktur_penjualan/history/list', { params })
    }

    getSingle(params) {
        return Services.get('/hrdu/approval_faktur_penjualan/detail', { params })
    }

    approve(data) {
        return Services.post('/hrdu/approval_faktur_penjualan/approve', data)
    }
}

export default new FaktuPenjualanApi()