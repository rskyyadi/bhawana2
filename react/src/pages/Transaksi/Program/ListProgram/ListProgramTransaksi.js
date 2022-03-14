import React, {useState, useEffect} from 'react'
import {Row, Col, ButtonGroup, ModalBody, ModalFooter} from 'react-bootstrap'
import {Formik} from 'formik'
import {
  Tr,
  Th,
  Td,
  Table,
  THead,
  Input,
  Modal,
  TBody,
  ThFixed,
  TdFixed,
  TextArea,
  DatePicker,
  Pagination,
  ReadButton,
  InputSearch,
  UpdateButton,
  CreateButton,
  SelectSearch,
  ActionButton,
} from 'components'
import { DateConvert } from 'utilities'

const ListProgram = ({setNavbarTitle}) => {
//USE EFFECT
  useEffect(() => {
    setNavbarTitle('List Program')
  }, [setNavbarTitle])
//DATA SEMENTARA
  const listProgram = [
    {
      id: 1,
      tgl_program: '01/10/2021',
      tgl_kegiatan: '03/10/2022',
      no_program: '2021/10/ANG/PRG/0021',
      nama_program: 'Program Memajukan Bangsasa',
      unit_organisasi: 'DIREKTUR',
      penanggung_jawab: 'A.A. Istri Ratna Dewi',
      periode_mulai: 'Oktober 2021',
      periode_selesai: 'Oktober 2021',
      deskripsi_program: 'Deskripsi Program',
      no_kegiatan: '2022/03/ANG/KEG/0001'
    },
    {
      id: 2,
      tgl_program: '01/10/2021',
      tgl_kegiatan: '03/10/2022',
      no_program: '2021/10/ANG/PRG/0020',
      nama_program: 'Program Memajukan Bangsasa',
      unit_organisasi: 'DIREKTUR',
      penanggung_jawab: 'A.A. Istri Ratna Dewi',
      periode_mulai: 'Oktober 2021',
      periode_selesai: 'Oktober 2021',
      deskripsi_program: 'Deskripsi Program',
      no_kegiatan: '2022/03/ANG/KEG/0001'
    },
    {
      id: 3,
      tgl_program: '01/10/2021',
      tgl_kegiatan: '03/10/2022',
      no_program: '2021/10/ANG/PRG/0019',
      nama_program: 'Program Memajukan Bangsa',
      unit_organisasi: 'DIREKTUR',
      penanggung_jawab: 'A.A. Istri Ratna Dewi',
      periode_mulai: 'Oktober 2021',
      periode_selesai: 'Novenber 2021',
      deskripsi_program: 'Deskripsi Program',
      no_kegiatan: '2022/03/ANG/KEG/0001'
    },
    {
      id: 4,
      tgl_program: '01/10/2021',
      tgl_kegiatan: '03/10/2022',
      no_program: '2021/10/ANG/PRG/0018',
      nama_program: 'Program XXX',
      unit_organisasi: '-',
      penanggung_jawab: 'A.A. Istri Ratna Dewi',
      periode_mulai: 'Oktober 2021',
      periode_selesai: 'Oktober 2021',
      deskripsi_program: 'Deskripsi Program',
      no_kegiatan: '2022/03/ANG/KEG/0001'
    },
    {
      id: 5,
      tgl_program: '01/10/2021',
      tgl_kegiatan: '03/10/2022',
      no_program: '2021/10/ANG/PRG/0018',
      nama_program: 'Program XXX',
      unit_organisasi: '-',
      penanggung_jawab: 'A.A. Istri Ratna Dewi',
      periode_mulai: 'Oktober 2021',
      periode_selesai: 'Oktober 2021',
      deskripsi_program: 'Deskripsi Program',
      no_kegiatan: '2022/03/ANG/KEG/0001'
    },
    {
      id: 6,
      tgl_program: '01/10/2021',
      tgl_kegiatan: '03/10/2022',
      no_program: '2021/10/ANG/PRG/0018',
      nama_program: 'Program XXX',
      unit_organisasi: '-',
      penanggung_jawab: 'A.A. Istri Ratna Dewi',
      periode_mulai: 'Oktober 2021',
      periode_selesai: 'Oktober 2021',
      deskripsi_program: 'Deskripsi Program',
      no_kegiatan: '2022/03/ANG/KEG/0001'
    },
    {
      id: 7,
      tgl_program: '01/10/2021',
      tgl_kegiatan: '03/10/2022',
      no_program: '2021/10/ANG/PRG/0018',
      nama_program: 'Program XXX',
      unit_organisasi: '-',
      penanggung_jawab: 'A.A. Istri Ratna Dewi',
      periode_mulai: 'Oktober 2021',
      periode_selesai: 'Oktober 2021',
      deskripsi_program: 'Deskripsi Program',
      no_kegiatan: '2022/03/ANG/KEG/0001'
    },
    {
      id: 8,
      tgl_program: '01/10/2021',
      tgl_kegiatan: '03/10/2022',
      no_program: '2021/10/ANG/PRG/0018',
      nama_program: 'Program XXX',
      unit_organisasi: '-',
      penanggung_jawab: 'A.A. Istri Ratna Dewi',
      periode_mulai: 'Oktober 2021',
      periode_selesai: 'Oktober 2021',
      deskripsi_program: 'Deskripsi Program',
      no_kegiatan: '2022/03/ANG/KEG/0001'
    },
    {
      id: 9,
      tgl_program: '01/10/2021',
      tgl_kegiatan: '03/10/2022',
      no_program: '2021/10/ANG/PRG/0018',
      nama_program: 'Program XXX',
      unit_organisasi: '-',
      penanggung_jawab: 'A.A. Istri Ratna Dewi',
      periode_mulai: 'Oktober 2021',
      periode_selesai: 'Oktober 2021',
      deskripsi_program: 'Deskripsi Program',
      no_kegiatan: '2022/03/ANG/KEG/0001'
    },
    {
      id: 10,
      tgl_program: '01/10/2021',
      tgl_kegiatan: '03/10/2022',
      no_program: '2021/10/ANG/PRG/0018',
      nama_program: 'Program XXX',
      unit_organisasi: '-',
      penanggung_jawab: 'A.A. Istri Ratna Dewi',
      periode_mulai: 'Oktober 2021',
      periode_selesai: 'Oktober 2021',
      deskripsi_program: 'Deskripsi Program',
      no_kegiatan: '2022/03/ANG/KEG/0001'
    },
    {
      id: 11,
      tgl_program: '01/10/2021',
      tgl_kegiatan: '03/10/2022',
      no_program: '2021/10/ANG/PRG/0018',
      nama_program: 'Program XXX',
      unit_organisasi: '-',
      penanggung_jawab: 'A.A. Istri Ratna Dewi',
      periode_mulai: 'Oktober 2021',
      periode_selesai: 'Oktober 2021',
      deskripsi_program: 'Deskripsi Program',
      no_kegiatan: '2022/03/ANG/KEG/0001'
    }
  ]
//TGL PROGRAM
  const no_program = ['2022/03/ANG/PRG/0001']
  const tgl_program = ['03/12/2022']
  const nama_program = ['']
  const unit_organisasi = [
    {
        id: 1,
        label:'Fungsional',
        jenis_anggaran:'Fungsional'
    },
    {
        id: 2,
        label:'Section',
        jenis_anggaran:'Section'
    },
    {
      id: 3,
      label:'Departemen Operasional',
      jenis_anggaran:'Departemen Operasional'
    },
    {
      id: 4,
      label:'DIREKTUR',
      jenis_anggaran:'DIREKTUR'
    },
    {
      id: 5,
      label:'DIVISI UNIT BISNIS SPBU',
      jenis_anggaran:'DIVISI UNIT BISNIS SPBU'
    },
    {
      id: 6,
      label:'DIVISI UNIT BISNIS AIR LIMBAH DAN IRIGASI',
      jenis_anggaran:'DIVISI UNIT BISNIS AIR LIMBAH DAN IRIGASI'
    },
    {
      id: 7,
      label:'PENGADAAN',
      jenis_anggaran:'PENGADAAN'
    },
    {
      id: 8,
      label:'PEMASARAN',
      jenis_anggaran:'PEMASARAN'
    },
    {
      id: 9,
      label:'DIVISI TEKNIK',
      jenis_anggaran:'DIVISI TEKNIK'
    },
    {
      id: 10,
      label:'DIVISI TEKNIK DAN PENGEMBANGAN',
      jenis_anggaran:'DIVISI TEKNIK DAN PENGEMBANGAN'
  }
  ]
  const penanggung_jawab = [
    {
        id: 1,
        label:'I Putu Ari Suyoga (Bookkeeper)',
        data_penanggung_jawab:'I Putu Ari Suyoga'
    },
    {
        id: 2,
        label:'Ni Putu Adnyani Sawitri',
        data_penanggung_jawab:'Ni Putu Adnyani Sawitri'
    },
    {
        id: 3,
        label:'Nyoman Gede Wedastra Putra (Kadiv,Keuangan)',
        data_penanggung_jawab:'Nyoman Gede Wedastra Putra'
    },
    {
        id: 4,
        label:'I Putu Ari Suyoga (AP & AR)',
        data_penanggung_jawab:'I Putu Ari Suyoga'
    },
    {
        id: 5,
        label:'Kilun',
        data_penanggung_jawab:'Kilun'
    },
    {
        id: 6,
        label:'Ruslan Jayadi',
        data_penanggung_jawab:'Ruslan Jayadi'
    },
    {
        id: 7,
        label:'Mawardi',
        data_penanggung_jawab:'Mawardi'
    },
    {
        id: 8,
        label:'Abdul',
        data_penanggung_jawab:'Abdul'
    },
    {
        id: 9,
        label:'Nyoman Mertha',
        data_penanggung_jawab:'Nyoman Mertha'
    },
    {
        id: 10,
        label:'L.Wirenata',
        data_penanggung_jawab:'L.Wirenata'
    }
  ]
//PAGE
  const [page, setPage] = useState(1)
  const totalPage = 1
  const [itemPerPages, setItemPerPages] = useState(10)
//PAGINATION
  const dataLength = listProgram.length
//MODAL
  const [showModal, setShowModal] = useState(false)
//VALIDATION
  const formValues = {
    no_program: no_program,
    tgl_program: tgl_program,
    nama_program: '',
    unit_organisasi:'',
    penanggung_jawab: ''
  }

  return (
    <div>
      <Row className='mb-2'>
        <Col md-6 >
            <InputSearch className='w-50' />
        </Col>
        <Col md-6 className='text-right'>
            <CreateButton onClick={() => setShowModal(true)} />
        </Col>
      </Row>

      <Table>
        <THead>
          <Tr>
            <ThFixed>No</ThFixed>
            <ThFixed>Aksi</ThFixed>
            <Th>Tgl. Program</Th>
            <Th>No. Program</Th>
            <Th>Nama Program</Th>
            <Th>Unit Organisasi</Th>
            <Th>Penanggung Jawab</Th>
            <Th>Periode Mulai</Th>
            <Th>Periode Selesai</Th>
          </Tr>
        </THead>
        <TBody>
          {
            listProgram.map((datas, index) => {
              return(
                <Tr key={index}>
                  <TdFixed textCenter>{index +1 }</TdFixed>
                  <TdFixed>
                    <div className="d-flex justify-content-center">
                      <ButtonGroup>
                        <ReadButton />
                        <UpdateButton />
                      </ButtonGroup>
                    </div>
                  </TdFixed>
                  <Td>{datas.tgl_program}</Td>
                  <Td>{datas.no_program}</Td>
                  <Td>{datas.nama_program}</Td>
                  <Td>{datas.unit_organisasi}</Td>
                  <Td>{datas.penanggung_jawab}</Td>
                  <Td>{datas.periode_mulai}</Td>
                  <Td>{datas.periode_selesai}</Td>
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

      <Modal
        closeButton
        size="lg"
        show={showModal}
        title={'Tambah Program'}
        onHide={() => setShowModal(false)}
      >
        <Formik
          initialValues={formValues}
          // validationSchema={formSchema}
          // onSubmit={formSubmi}
          >

          {({touched, errors, isSubmitting, values, handleChange, handleBlur, setFieldValue, handleSubmit}) => (

          <form onSubmit={handleSubmit}>
            <ModalBody>
              <Row>
                <Col md>
                  <DatePicker
                    label="Tgl. Program"
                    placeholderText="Pilih tanggal program"
                    name='tgl_program'
                    selected={values.tgl_program ? new Date(values.tgl_program) : ''}
                    onChange={(date) => {
                      const newDate = DateConvert(new Date(date)).default;
                      setFieldValue('tgl_program', newDate)
                    }}
                    error={errors.tgl_program && touched.tgl_program && true}
                    errorText={errors.tgl_program && touched.tgl_program && errors.tgl_program}
                  />
                </Col>
                <Col md>
                  <Input 
                    readOnly
                    label="No. Program"
                    placeholder="Pilih tgl untuk menentukan nomor"
                    value={values.no_program}
                    error={errors.no_program && touched.no_program && true}
                    errorText={errors.no_program && touched.no_program && errors.no_program}
                  />
                </Col>
              </Row>
              <Input 
                label="Nama Program"
                name="nama_program"
                placeholder="Masukan nama program"
                value={values.nama_program}
                onChange={handleChange}
                error={errors.nama_program && touched.nama_program && true}
                errorText={errors.nama_program && touched.nama_program && errors.nama_program}
              />
              <Row>
                <Col md>
                  <SelectSearch 
                    label="Unit Organisasi"
                    placeholder="Pilih unit organisasi"
                    option={unit_organisasi}
                    defaultValue={values.unit_organisasi}
                    onBlur={handleBlur}
                    error={errors.id_unit_organisasi && touched.id_unit_organisasi && true}
                    errorText={errors.id_unit_organisasi && touched.id_unit_organisasi && errors.id_unit_organisasi}
                  />
                </Col>
                <Col md>
                  <SelectSearch 
                    label="Penanggung Jawab"
                    placeholder="Pilih penanggung jawab"
                    option={penanggung_jawab}
                    defaultValue={values.penanggung_jawab}
                    onBlur={handleBlur}
                    error={errors.penanggung_jawab && touched.penanggung_jawab && true}
                    errorText={errors.penanggung_jawab && touched.penanggung_jawab && errors.penanggung_jawab}
                  />
                </Col>
              </Row>
              <Row>
                <Col md>
                  <DatePicker
                    showMonthYearPicker
                    showTwoColumnMonthYearPicker
                    dateFormat="MM/yyyy"
                    label="Periode Mulai"
                    name='periode_mulai'
                    selected={values.periode_mulai ? new Date(values.periode_mulai) : ''}
                    onChange={(date) => {
                            const newDate = DateConvert(new Date(date)).default;
                            setFieldValue('periode_mulai', newDate)
                          }}
                    placeholderText="Pilih tanggal periode mulai"
                    error={errors.periode_mulai && touched.periode_mulai && true}
                    errorText={errors.periode_mulai}
                  />
                </Col>
                <Col md>
                  <DatePicker
                    showMonthYearPicker
                    showTwoColumnMonthYearPicker
                    dateFormat="MM/yyyy"
                    label="Periode Selesai"
                    name='periode_selesai'
                    selected={values.periode_selesai ? new Date(values.periode_selesai) : ''}
                    onChange={(date) => {
                            const newDate = DateConvert(new Date(date)).default;
                            setFieldValue('periode_selesai', newDate)
                          }}
                    placeholderText="Pilih tanggal periode selesai"
                    error={errors.periode_selesai && touched.periode_selesai && true}
                    errorText={errors.periode_selesai}
                  />
                </Col>
              </Row>
              <TextArea 
                label="Deskripsi"
                name="deskripsi_program"
                // value={values.deskripsi_program}
                placeholder="Masukan deskripsi"
                // onChange={handleChange}
              />
            </ModalBody>
            <ModalFooter>
              <ActionButton
                type="submit"
                variant='primary'
                text='Tambah Program'
                // variant={modalConfig.type === 'update' ? 'success' : 'primary'}
                // text={modalConfig.type === 'update' ? 'Ubah Program' : 'Tambah Program'}
                loading={isSubmitting}
              />
            </ModalFooter>
          </form>

          )}

        </Formik>
      </Modal>  

    </div>
  )
}

export default ListProgram