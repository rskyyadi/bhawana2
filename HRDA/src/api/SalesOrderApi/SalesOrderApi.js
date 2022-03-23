import Services from '../../services'

class SalesOrderApi {
    // API SERVER
    get(params) {
        return Services.get('/hrdu/approval_sales_order/list', { params })
    }

    getHistory(params) {
        return Services.get('/hrdu/approval_sales_order/history/list', { params })
    }

    getSingle(params) {
        return Services.get('/hrdu/approval_sales_order/detail', { params })
    }

    approve(data) {
        return Services.post('/hrdu/approval_sales_order/approve', data)
    }

    // API LOCAL BAYU 
    // get(params) {
    //     return Services.get('approval_sales_order/list', { params })
    // }

    // getSingle(params) {
    //     return Services.get('approval_sales_order/detail', { params })
    // }

    // approve(data) {
    //     return Services.post('approval_sales_order/approve', data)
    // }
}

export default new SalesOrderApi()