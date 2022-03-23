import {
  MainApprovalProgram,
  DetailProgram,

  MainApprovalKegiatan,
  DetailKegiatan,

  MainApprovalSubKegiatan,
  DetailSubKegiatan,

  MainApprovalRKA,
  DetailRKA,

  MainApprovalPPA,
  DetailPPA,

} from "../pages/Approval"

export default [
//APPROVAL PROGRAM
  {
    exact: true,
    route: "/human-resource/approval/program",
    hak: ["HRDU", "HRDU_APR_REGPRG"],
    page: MainApprovalProgram,
  },
  {
    exact: true,
    route: "/human-resource/approval/program/detail/:id",
    hak: ["HRDU", "HRDU_APR_REGPRG"],
    page: DetailProgram,
  },
  // Approval Kegiatan
  {
    exact: true,
    route: "/human-resource/approval/kegiatan",
    hak: ["HRDU", "HRDU_APR_REGKEG", "HRDU_APR_RK"],
    page: MainApprovalKegiatan,
  },
  {
    exact: true,
    route: "/human-resource/approval/kegiatan/detail/:id",
    hak: ["HRDU", "HRDU_APR_REGKEG", "HRDU_APR_RK"],
    page: DetailKegiatan,
  },
  // Approval Sub Kegiatan
  {
    exact: true,
    route: "/human-resource/approval/sub-kegiatan",
    hak: ["HRDU", "HRDU_APR_REGKEG", "HRDU_APR_RK"],
    page: MainApprovalSubKegiatan,
  },
  {
    exact: true,
    route: "/human-resource/approval/sub-kegiatan/detail/:id",
    hak: ["HRDU", "HRDU_APR_REGKEG", "HRDU_APR_RK"],
    page: DetailSubKegiatan,
  },
  // Approval RKA
  {
    exact: true,
    route: "/human-resource/approval/rka",
    hak: ["HRDU", "HRDU_APR_REGKEG", "HRDU_APR_RK"],
    page: MainApprovalRKA,
  },
  {
    exact: true,
    route: "/human-resource/approval/rka/detail/:id",
    hak: ["HRDU", "HRDU_APR_REGKEG", "HRDU_APR_RK"],
    page: DetailRKA,
  },
  // Approval PPA
  {
    exact: true,
    route: "/human-resource/approval/ppa",
    hak: ["HRDU", "HRDU_APR_REGKEG", "HRDU_APR_RK"],
    page: MainApprovalPPA,
  },
  {
    exact: true,
    route: "/human-resource/approval/ppa/detail/:id",
    hak: ["HRDU", "HRDU_APR_REGKEG", "HRDU_APR_RK"],
    page: DetailPPA,
  },
]
