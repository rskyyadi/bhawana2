import {
  IoSpeedometerOutline,
  IoPersonCircleOutline,
  IoCheckboxOutline
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
    text: 'Approval',
    type: 'dropdown',
    icon: <IoCheckboxOutline />,
    hak: ['ANG'],
    menu: [
      {
        text: 'Program',
        link: '/human-resource/approval/program',
        hak: ['ANG', 'ANG_MAS_JEN'],
      },
      {
        text: 'Kegiatan',
        link: '/human-resource/approval/kegiatan',
        hak: ['ANG', 'ANG_MAS_JEN'],
      },
      {
        text: 'Sub Kegiatan',
        link: '/human-resource/approval/sub-kegiatan',
        hak: ['ANG', 'ANG_MAS_JEN'],
      },
      {
        text: 'RKA',
        link: '/human-resource/approval/rka',
        hak: ['ANG', 'ANG_MAS_JEN'],
      },
      {
        text: 'PPA',
        link: '/human-resource/approval/ppa',
        hak: ['ANG', 'ANG_MAS_JEN'],
      }
    ]
  },
  {
    text: 'Profil',
    type: 'dropdown',
    icon: <IoPersonCircleOutline />,
    hak: ['ANG'],
    menu: [
      {
        text: 'Akun Saya',
        link: '/profil',
        hak: ['ANG', 'ANG_TRN_PRO'],
      },
      {
        text: 'Ubah Akun Saya',
        link: '/ubah-profil',
        hak: ['ANG', 'ANG_TRN_PRO'],
      },
      {
        text: 'Ganti Password',
        link: '/ganti-password',
        hak: ['ANG', 'ANG_TRN_PRO'],
      },
    ]
  }
]
