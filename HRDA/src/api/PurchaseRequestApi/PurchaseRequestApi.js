import Services from '../../services'

// API TERBARU PURCHASE REQUEST

class PurchaseRequestApi {
    get(params) {
        return Services.get('/hrdu/approval_purchase_request/list', { params })
    }

    getHistory(params) {
        return Services.get('/hrdu/approval_purchase_request/history/list', { params })
    }

    getSingle(params) {
        return Services.get('/hrdu/approval_purchase_request/detail', { params })
    }

    approve(data) {
        return Services.post('/hrdu/approval_purchase_request/approve', data)
    }
}

export default new PurchaseRequestApi()