import {
  IoCashOutline,
  IoSpeedometerOutline,
  IoServerOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";

/* 
  MENU REQUIREMENTS
    > TEXT  = REQUIRED
    > LINK  = REQUIRED
    > EXACT = OPTIONAL (TRUE/FALSE)
    > TYPE  = REQUIRED (MENU/DROPDOWN)
    > HAK   = REQUIRED (HARUS BERBENTUK ARRAY)
    > ICON  = OPTIONAL (REACT-ICONS)
*/

export default [
  {
    text: 'Dashboard',
    link: '/',
    type: 'menu',
    exact: true,
    icon: <IoSpeedometerOutline />,
    hak: ['ANG'],
  },
  {
    text: 'Master',
    type: 'dropdown',
    icon: <IoServerOutline />,
    hak: ['ANG'],
    menu: [
      {
        text: 'Jenis Anggaran',
        link: '/anggaran/master/jenis-anggaran',
        hak: ['ANG', 'ANG_MAS_JEN'],
      }
    ]
  },
  {
    text: 'Transaksi',
    type: 'dropdown',
    icon: <IoCashOutline />,
    hak: ['ANG'],
    menu: [
      {
        text: 'Program',
        link: '/anggaran/transaksi/program',
        hak: ['ANG', 'ANG_TRN_PRO'],
      },
      {
        text: 'Kegiatan',
        link: '/anggaran/transaksi/kegiatan',
        hak: ['ANG', 'ANG_TRN_PRO'],
      }
    ]
  }
]
