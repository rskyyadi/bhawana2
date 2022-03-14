import {
// MASTER
  JenisAnggaranList,
  KelompokAnggaranList,
  SubKelompokAnggaranList,
  KategoriAnggaranList,
// TRANSAKSI
  ListKegiatan,
  ListProgram,
  CreateKegiatan,
  ListProgramTransaksi,
  SubKegiatanList,
  ListKegiatanSub,
  PPA,
  SumberDaya
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
    path: '/anggaran/master/jenis-anggaran',
    page: JenisAnggaranList,
    hak: ['ANG', 'ANG_MAS_JEN']
  },
  {
    exact: true,
    path: '/anggaran/master/kelompok-anggaran',
    page: KelompokAnggaranList,
    hak: ['ANG', 'ANG_MAS_JEN']
  },
  {
    exact: true,
    path: '/anggaran/master/subKelompok-anggaran',
    page: SubKelompokAnggaranList,
    hak: ['ANG', 'ANG_MAS_JEN']
  },
  {
    exact: true,
    path: '/anggaran/master/kategori-anggaran',
    page: KategoriAnggaranList,
    hak: ['ANG', 'ANG_MAS_JEN']
  },

// TRANSAKSI
  {
    exact: true,
    path: '/anggaran/transaksi/program',
    page: ListProgramTransaksi,
    hak: ['ANG', 'ANG_TRN_PRO']
  },
  {
    exact: true,
    path: '/anggaran/transaksi/kegiatan',
    page: ListKegiatan,
    hak: ['ANG', 'ANG_TRN_PRO']
  },
  {
    exact: true,
    path: '/anggaran/transaksi/kegiatan/list-program',
    page: ListProgram,
    hak: ['ANG', 'ANG_TRN_PRO']
  },
  {
    exact: true,
    path: '/anggaran/transaksi/kegiatan/tambah-kegiatan/:id',
    page: CreateKegiatan,
    hak: ['ANG', 'ANG_TRN_PRO']
  },
  {
    exact: true,
    path: '/anggaran/transaksi/sub-kegiatan',
    page: SubKegiatanList,
    hak: ['ANG', 'ANG_TRN_PRO']
  },
  {
    exact: true,
    path: '/anggaran/transaksi/sub-kegiatan/kegiatan',
    page: ListKegiatanSub,
    hak: ['ANG', 'ANG_TRN_PRO']
  },
  {
    exact: true,
    path: '/anggaran/transaksi/ppa',
    page: PPA,
    hak: ['ANG', 'ANG_TRN_PRO']
  },
  {
    exact: true,
    path: '/anggaran/transaksi/ppa/sumber-daya',
    page: SumberDaya,
    hak: ['ANG', 'ANG_TRN_PRO']
  }
]
