import {
// APPROVAL
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
//PROVIL
  Profil
} from "pages"

/* 
  MENU REQUIREMENTS
    > EXACT = OPTIONAL (TRUE/FALSE)
    > PATH  = REQUIRED
    > PAGE  = REQUIRED
    > HAK   = REQUIRED (HARUS BERBENTUK ARRAY)
*/

export default [
// MASTER
  {
    exact: true,
    path: '/human-resource/approval/program',
    page: MainApprovalProgram,
    hak: ['ANG', 'ANG_MAS_JEN']
  },
  {
    exact: true,
    path: '/human-resource/approval/program/detail/:id',
    page: DetailProgram,
    hak: ['ANG', 'ANG_TRN_PRO']
  },
  {
    exact: true,
    path: '/human-resource/approval/kegiatan',
    page: MainApprovalKegiatan,
    hak: ['ANG', 'ANG_MAS_JEN']
  },
  {
    exact: true,
    path: '/human-resource/approval/kegiatan/detail/:id',
    page: DetailKegiatan,
    hak: ['ANG', 'ANG_TRN_PRO']
  },
  {
    exact: true,
    path: '/human-resource/approval/sub-kegiatan',
    page: MainApprovalSubKegiatan,
    hak: ['ANG', 'ANG_MAS_JEN']
  },
  {
    exact: true,
    path: '/human-resource/approval/sub-kegiatan/detail/:id',
    page: DetailSubKegiatan,
    hak: ['ANG', 'ANG_TRN_PRO']
  },
  {
    exact: true,
    path: '/human-resource/approval/rka',
    page: MainApprovalRKA,
    hak: ['ANG', 'ANG_MAS_JEN']
  },
  {
    exact: true,
    path: '/human-resource/approval/rka/detail/:id',
    page: DetailRKA,
    hak: ['ANG', 'ANG_TRN_PRO']
  },
  {
    exact: true,
    path: '/human-resource/approval/ppa',
    page: MainApprovalPPA,
    hak: ['ANG', 'ANG_MAS_JEN']
  },
  {
    exact: true,
    path: '/human-resource/approval/ppa/detail/:id',
    page: DetailPPA,
    hak: ['ANG', 'ANG_TRN_PRO']
  },

// PROFIL
  // {
  //   exact: true,
  //   path: '/anggaran/transaksi/program',
  //   page: ListProgramTransaksi,
  //   hak: ['ANG', 'ANG_TRN_PRO']
  // },
  // {
  //   exact: true,
  //   path: '/anggaran/transaksi/kegiatan',
  //   page: ListKegiatan,
  //   hak: ['ANG', 'ANG_TRN_PRO']
  // },
  // {
  //   exact: true,
  //   path: '/anggaran/transaksi/kegiatan/list-program',
  //   page: ListProgram,
  //   hak: ['ANG', 'ANG_TRN_PRO']
  // },
  // {
  //   exact: true,
  //   path: '/anggaran/transaksi/kegiatan/tambah-kegiatan/:id',
  //   page: CreateKegiatan,
  //   hak: ['ANG', 'ANG_TRN_PRO']
  // },
  // {
  //   exact: true,
  //   path: '/anggaran/transaksi/sub-kegiatan',
  //   page: SubKegiatanList,
  //   hak: ['ANG', 'ANG_TRN_PRO']
  // },
  // {
  //   exact: true,
  //   path: '/anggaran/transaksi/sub-kegiatan/kegiatan',
  //   page: ListKegiatanSub,
  //   hak: ['ANG', 'ANG_TRN_PRO']
  // },
  // {
  //   exact: true,
  //   path: '/anggaran/transaksi/ppa',
  //   page: PPA,
  //   hak: ['ANG', 'ANG_TRN_PRO']
  // },
  // {
  //   exact: true,
  //   path: '/anggaran/transaksi/ppa/sumber-daya',
  //   page: SumberDaya,
  //   hak: ['ANG', 'ANG_TRN_PRO']
  // }
]
