import React, {useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {
  Td,
  Tr,
  Th,
  Table,
  THead,
  TBody,
  ThFixed,
  TdFixed,
  ReadButton,
  Pagination,
  InputSearch,
  CreateButton,
} from 'components'

const PPA = ({setNavbarTitle}) => {
//USE HISTORY
  const history = useHistory()
//USE EFFECT
  useEffect(() => {
    setNavbarTitle('PPA')
  }, [setNavbarTitle])
//DATA
  const [dataUser, setDataUser] = useState([
    {
        id: 1,
        tgl: '2021-12-06',
        no_ppa: '2021/12/ANG/PPA/0003',
        kegiatan: '',
        sumber_daya: '',
        unit_organisasi: '',
        baseline: '',
        status_ppa: '',
        status_approval: 'PENDING',
        checked: false
    },
    {
      id: 2,
      tgl: '2021-12-12',
      no_ppa: '	2021/12/ANG/PPA/0002',
      kegiatan: '',
      sumber_daya: '',
      unit_organisasi: '',
      baseline: '',
      status_ppa: '',
      status_approval: 'PENDING',
      checked: false
    },
    {
      id: 3,
      tgl: '2021-12-05',
      no_ppa: '2021/12/ANG/PPA/0001',
      kegiatan: '',
      sumber_daya: '',
      unit_organisasi: '',
      baseline: '',
      status_ppa: '',
      status_approval: 'PENDING',
      checked: false
    },
    {
      id: 4,
      tgl: '2021-09-01',
      no_ppa: '	2021/09/ANG/PPA/0003',
      kegiatan: '',
      sumber_daya: '',
      unit_organisasi: '',
      baseline: '',
      status_ppa: '',
      status_approval: 'PENDING',
      checked: false
    },
    {
      id: 5,
      tgl: '2021-09-01',
      no_ppa: '2021/09/ANG/PPA/0002',
      kegiatan: '',
      sumber_daya: '',
      unit_organisasi: '',
      baseline: '',
      status_ppa: '',
      status_approval: 'PENDING',
      checked: false
    },
    {
      id: 6,
      tgl: '2021-09-01',
      no_ppa: '	2021/09/ANG/PPA/0001',
      kegiatan: '',
      sumber_daya: '',
      unit_organisasi: '',
      baseline: '',
      status_ppa: '',
      status_approval: 'PENDING',
      checked: false
    },
  ])
//PAGINATION STATE
  const [page, setPage] = useState(1);
  const totalPage = 1
  const [itemPerPages, setItemPerPages] = useState(4);
//PAGINATION
  const dataLength = dataUser.length

  return (
    <div>
      <Row className='mb-2'>
            <Col md-6 >
                <InputSearch className='w-50' />
            </Col>
            <Col md-6 className='text-right'>
                <CreateButton onClick={() => history.push('/anggaran/transaksi/ppa/sumber-daya')} />
            </Col>
        </Row>

        <Table>
          <THead>
            <Tr>
              <ThFixed>No</ThFixed>
              <ThFixed>Aksi</ThFixed>
              <Th>Tanggal</Th>
              <Th>No PPA</Th>
              <Th>Kegiatan</Th>
              <Th>Sumber Daya</Th>
              <Th>Unit Organisasi</Th>
              <Th>Baseline</Th>
              <Th>Status PPA</Th>
              <Th>Status Approval</Th>
            </Tr>
          </THead>
          <TBody>
            {
              dataUser.map((datas, index) => {
                return(
                  <Tr key={index}>
                    <TdFixed>{index + 1}</TdFixed>
                    <TdFixed text-center>
                      <ReadButton />
                    </TdFixed>
                    <Td>{datas.tgl}</Td>
                    <Td>{datas.no_ppa}</Td>
                    <Td>{datas.kegiatan}</Td>
                    <Td>{datas.sumber_daya}</Td>
                    <Td>{datas.unit_organisasi}</Td>
                    <Td>{datas.baseline}</Td>
                    <Td>{datas.status_ppa}</Td>
                    <Td>{datas.status_approval}</Td>
                  </Tr>
                )
              })
            }
          </TBody>
        </Table>
        <Pagination 
          //Page Number
          dataNumber={page * itemPerPages - itemPerPages + 1} 
          //Data/Page
          dataPage={dataLength < itemPerPages ? dataLength : page * itemPerPages} 
          //Data Length
          dataCount={dataLength} 
          
          currentPage={page}
          totalPage={totalPage}
          onPaginationChange={() => setPage(+1)}
          
          dataLength={itemPerPages}
          onDataLengthChange={(e) => setItemPerPages(e.target.value)}
        />
    </div>
  )
}

export default PPA