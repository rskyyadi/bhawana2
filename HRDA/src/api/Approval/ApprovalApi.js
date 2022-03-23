import Services from "../../services";

class ApprovalApi {
  getPage(page, dataLength, key) {
    return Services.get(`hrdu/hak_akses_approval/kegiatan/?per_page=${dataLength}&page=${page}&q=${key}`);
  }
  getDetail(id_kegiatan, id_program) {
    return Services.get(
      `hrdu/hak_akses_approval/kegiatan_detail/?id_kegiatan=${id_kegiatan}&id_program=${id_program}`
    );
  }
  // getDetail(id_kegiatan, id_program) {
  //   return Services.get(`hrdu/hak_akses_approval/kegiatan_detail/?id_kegiatan=24&id_program=9`);
  // }
  create(value) {
    return Services.post("hrdu/hak_akses_approval/kegiatan/", value);
  }
}

export default new ApprovalApi();
