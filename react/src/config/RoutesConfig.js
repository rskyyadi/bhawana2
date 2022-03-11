import {

// MASTER
  JenisAnggaranList,

// TRANSAKSI
  ListKegiatan,
  ListProgram,
  CreateKegiatan
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
  // Jenis Anggaran
  {
    exact: true,
    path: '/anggaran/master/jenis-anggaran',
    page: JenisAnggaranList,
    hak: ['ANG', 'ANG_MAS_JEN']
  },

// TRANSAKSI
  // Program
  {
    exact: true,
    path: '/anggaran/transaksi/kegiatan',
    page: ListKegiatan,
    hak: ['ANG', 'ANG_TRN_PRO']
  },
  // List Program
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
  }
]
