import React, {useEffect, useState} from 'react'
import {Row, Col, ModalBody, ModalFooter} from 'react-bootstrap'
import { TableNumber } from 'utilities'
import {
  Td,
  Tr,
  Th,
  Table,
  THead,
  TBody,
  Input,
  ThFixed,
  TdFixed,
  DataStatus,
  DatePicker,
  Pagination,
  InputSearch,
  CreateModal,
  CreateButton,
  ActionButton,
  InfoItemHorizontal,
} from 'components'

const SumberDaya = ({setNavbarTitle}) => {
//FAKE API
  const getDataJenisAnggaran = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
          {
            id: 1,
            program: '',
            kegiatan: '',
            sumber_daya: 'test',
            bulan: 'undefined NaN',
            tgl_ppa: '14/03/2022'
          }
        ])
        reject(
            <DataStatus text='Tidak Ada Data' />
        )
    }, 2000)
  })
//USE EFFECT
  useEffect(() => {
    setNavbarTitle('Sumber Daya PPA')
    getDataJenisAnggaran()
    .then(val => {
      setData(val)
      setDataCount(val.length)
    })
    .catch(<DataStatus text='Tidak Ada Data' />)
    .finally(() => {
          setIsLoading(false)
    })
  }, [setNavbarTitle])
//DATA
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
//MODAL
  const [show, setShow] = useState(false)
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
                <CreateButton />
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
                  <Th>Program</Th>
                  <Th>Kegiatan</Th>
                  <Th>Sumber Daya</Th>
                  <Th>Bulan</Th>
                  <ThFixed>Aksi</ThFixed>
                </Tr>
              </THead>
              <TBody>
                {
                  currentPosts.map((datas, index) => {
                    return(
                      <Tr key={index}>
                        <TdFixed>{TableNumber(page, dataLength, index)}</TdFixed>
                        <Td>{datas.program}</Td>
                        <Td>{datas.kegiatan}</Td>
                        <Td>{datas.sumber_daya}</Td>
                        <Td>{datas.bulan}</Td>
                        <TdFixed text-center>
                          <ActionButton size='sm' onClick={() => setShow(true)} >
                            PPA
                          </ActionButton>
                        </TdFixed>
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

        <CreateModal
          show={show}
          onHide={() => setShow(false)}>
            
            <ModalBody>
              <InfoItemHorizontal label='Program'/>
              <InfoItemHorizontal label='Kegiatan'/>
              <InfoItemHorizontal label='Sumber Daya'/>
              <InfoItemHorizontal label='Bulan'/>
              <InfoItemHorizontal label='Tipe Anggaran'/>
              <hr />
              <DatePicker 
                label='Tanggal PPA' 
                showMonthYearPicker
                showTwoColumnMonthYearPicker
                dateFormat="MM/yyyy"
                name='periode_mulai'
                placeholderText="Pilih periode mulai"
              />
              <Input label='No. PPA' readOnly={true} />
              <Row>
                  <Col md-6>
                      <Input label='Qty' />
                  </Col>
                  <Col md-6>
                      <Input label='Satuan' />
                  </Col>
              </Row>
              <Input label='Harga Satuan' />
              <Input label='Total Harga' readOnly={true} />
            </ModalBody>
            <ModalFooter>
              <ActionButton>
                SIMPAN DATA
              </ActionButton>
            </ModalFooter>
        </CreateModal>
    </div>
  )
}

export default SumberDaya