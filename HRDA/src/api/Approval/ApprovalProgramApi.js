import Services from 'services'

class ApprovalProgramApi {
  get(params) {
    return Services.get('/hrdu/approval_program/list', { params })
  }

  getHistory(params) {
    return Services.get('/hrdu/approval_program/history/list', { params })
  }

  getSingle(params) {
    return Services.get('/hrdu/approval_program/detail', { params })
  }

  approve(data) {
    return Services.post('/hrdu/approval_program/approve', data)
  }
}

export default new ApprovalProgramApi()