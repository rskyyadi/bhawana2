import React, {useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { TableNumber } from 'utilities'
import {
  Td,
  Tr,
  Th,
  Table,
  THead,
  TBody,
  ThFixed,
  TdFixed,
  DataStatus,
  ReadButton,
  Pagination,
  InputSearch,
  CreateButton,
} from 'components'

const PPA = ({setNavbarTitle}) => {
//FAKE API
  const getDataJenisAnggaran = () => new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve([
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
          reject(
              <DataStatus text='Tidak Ada Data' />
          )
      }, 900)
  })
//USE HISTORY
  const history = useHistory()
//USE EFFECT
  useEffect(() => {
    setNavbarTitle('PPA')
    getDataJenisAnggaran()
    .then(val => {
      setData(val)
      setDataCount(val.length)
    })
    .catch(<DataStatus loading={true} text='Memuat Data...' />)
    .finally(() => {
        setIsLoading(false)
    })
  }, [setNavbarTitle])
//DATA
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
//PAGE STATE
  const [page, setPage] = useState(1)
  const [dataCount, setDataCount] = useState(0)
  const [dataLength, setDataLength] = useState(10)
//PAGINATION
  const lastData = page * dataLength;
  const firstData = lastData - dataLength;
  const currentPosts = data.slice(firstData, lastData);
  const totalData = data.length
  const totalPage = data? data.length/dataLength : 0
  const paginate = pageNumber => setPage(pageNumber);

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
        {
          isLoading === true
          ? <DataStatus loading={true} text='Memuat Data...' />
          : <div>
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
                    currentPosts.map((datas, index) => {
                      return(
                        <Tr key={index}>
                          <TdFixed>{TableNumber(page, dataLength, index)}</TdFixed>
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
                  dataNumber={page * dataLength - dataLength + 1}
                  dataPage={dataCount < dataLength ? totalData : page * dataLength}
                  dataCount={dataCount} 
                  currentPage={page}
                  totalPage={totalPage}
                  dataLength={dataLength}
                  onPaginationChange={({selected}) => paginate(selected +1)}
                  onDataLengthChange={(e) => {
                    setDataLength(e.target.value)
                    setPage(1)
                  }}
              />
            </div>
        }
    </div>
  )
}

export default PPA