import React, {useEffect, useState} from 'react'
import {Row, Col, ModalBody, ModalFooter} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
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
  DatePicker,
  Pagination,
  InputSearch,
  CreateModal,
  CreateButton,
  ActionButton,
  InfoItemHorizontal,
} from 'components'

const SumberDaya = ({setNavbarTitle}) => {
//MODAL
  const [show, setShow] = useState(false)
//USE HISTORY
  const history = useHistory()
//USE EFFECT
  useEffect(() => {
    setNavbarTitle('Sumber Daya PPA')
  }, [setNavbarTitle])
//DATA
  const [dataUser, setDataUser] = useState([
    {
        id: 1,
        program: '',
        kegiatan: '',
        sumber_daya: 'test',
        bulan: 'undefined NaN',
        tgl_ppa: '14/03/2022'
    }
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
                <CreateButton />
            </Col>
        </Row>

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
              dataUser.map((datas, index) => {
                return(
                  <Tr key={index}>
                    <TdFixed>{index + 1}</TdFixed>
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