import Services from "../../services";

class PurchaseRequestApi {
  getPage(page, dataLength, key) {
    return Services.get(`hrdu/hak_akses_approval/purchase_request/?per_page=${dataLength}&page=${page}&q=${key}`);
  }

  getDetail(id) {
    return Services.get("hrdu/hak_akses_approval/purchase_request_detail/?id_purchase_request="+ id);
  }

  create(value) {
    return Services.post("hrdu/hak_akses_approval/purchase_request/", value);
  }
}

export default new PurchaseRequestApi();
