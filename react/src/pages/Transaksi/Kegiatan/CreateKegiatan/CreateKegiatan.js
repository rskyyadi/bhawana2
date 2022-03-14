import React, {useState, useEffect} from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'
import {useHistory, useLocation} from 'react-router-dom'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {nanoid} from 'nanoid'
import {
    Input,
    TextArea,
    DatePicker,
    BackButton,
    ActionButton,
    SelectSearch,
    InfoItemHorizontal
} from 'components'
import { DateConvert } from 'utilities'

const CreateKegiatan = ({setNavbarTitle}) => {
//USE LOCATION
    const {state} = useLocation() 
//USE EFFECT
    useEffect(() => {
        setNavbarTitle('Tambah Data')
      }, [setNavbarTitle])
//USE HISTORY
    const history = useHistory()
//DATA
    const [data, setData] = useState([])
//DATA JENIS ANGGARAN
    const jenisAnggaran = [
        {
            id: 1,
            label:'Operasional',
            jenis_anggaran:'Operasional'
        },
        {
            id: 2,
            label:'Modal',
            jenis_anggaran:'Modal'
        }
    ]
//DATA PENANGGUNG JAWAB
    const penanggungJawab = [
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
//CREATE DATA
    const createSubmit = (values) => {
    const createName = {
        id: nanoid(),
        tgl_kegiatan: values.tgl_kegiatan,
        nama_kegiatan: values.nama_kegiatan,
        keterangan: values.keterangan,
        penanggung_jawab: values.penanggung_jawab,
        periode_mulai: values.periode_mulai,
        periode_selesai: values.periode_selesai,
        jenis_anggaran: values.jenis_anggaran
    }
    const saveName = [...data, createName]
    setData(saveName)
    }
//FORM VALUES
    const formValues = {
        tgl_kegiatan: state.data.tgl_kegiatan,
        nama_kegiatan: '',
        penanggung_jawab: '',
        no_kegiatan: state.data.no_kegiatan,
        deskripsi_kegiatan: '',
        periode_mulai: '',
        periode_selesai: '',
        jenis_anggaran: '',
        kelompok_anggaran: '',
        sub_kelompok_anggaran: ''
    };
//FORM VALIDATION
    const formValidation = Yup.object({
        tgl_kegiatan: Yup.string().required("Masukan tanggal"),
        nama_kegiatan: Yup.string().required("Masukan nama kegiatan"),
        penanggung_jawab: Yup.string().required("Masukan nama karyawan"),
        no_kegiatan: Yup.string().required("Masukan no kegiatan"),
        periode_mulai: Yup.string().required("Masukan tanggal mulai"),
        periode_selesai: Yup.string().required("Masukan tanggal selesai"),
        sub_kelompok_anggaran: Yup.string().required("Pilih sub kelompok anggaran")
    })
//FORM SUBMIT
    const formSubmit = (values) => {
        console.log(values)
        createSubmit(values)
    }
  return (
    <div>
        <Card className="pb-3">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <b>Tambah Data</b>
              <BackButton size="sm" onClick={() => history.push('/anggaran/transaksi/kegiatan')} />
            </Card.Header>
            <Card.Body>
              <Container>
                  <Row>
                    <Col md>
                        <InfoItemHorizontal 
                            label="Nama. Program"
                            text={state.data.nama_program}
                        />
                        <InfoItemHorizontal 
                            label="Tgl. Program"
                            text={state.data.tgl_program}
                        />
                        <InfoItemHorizontal 
                            label="No. Program"
                            text={state.data.no_program}
                        />
                        <InfoItemHorizontal 
                            label="Unit Organisasi"
                            text={state.data.unit_organisasi}
                        />
                    </Col>
                    <Col md>
                        <InfoItemHorizontal 
                            label="Nama Penanggung Jawab"
                            text={state.data.penanggung_jawab}
                        />
                        <InfoItemHorizontal 
                            label="Periode Mulai"
                            text={state.data.periode_mulai}
                        />
                        <InfoItemHorizontal 
                            label="Periode Selesai"
                            text={state.data.periode_selesai}
                        />
                        <InfoItemHorizontal 
                            label="Deskripsi"
                            text={state.data.deskripsi_program}
                        />
                    </Col>
                  </Row>
                  <hr />
                  <Formik
                    initialValues={formValues}
                    validationSchema={formValidation}
                    onSubmit={formSubmit}
                  >
                    {({ values, errors, touched, isSubmitting, handleBlur, setFieldValue, handleChange, handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <Row>
                            <Col lg="6">
                                <DatePicker
                                    label="Tanggal Kegiatan"
                                    type="date"
                                    name="tgl_kegiatan"
                                    placeholderText="Pilih tanggal"
                                    selected={values.tgl_kegiatan ? new Date(values.tgl_kegiatan) : ''}
                                    onChange={handleChange}
                                    error={errors.tgl_kegiatan && touched.tgl_kegiatan && true}
                                    errorText={errors.tgl_kegiatan}
                                />
                            </Col>
                            <Col lg="6">
                                <Input
                                    label="No. Kegiatan"
                                    type="text"
                                    value={values.no_kegiatan}
                                    onChange={handleChange}
                                    placeholder="Pilih nomor kegiatan"
                                    name="no_kegiatan"
                                    error={errors.no_kegiatan && touched.no_kegiatan && true}
                                    errorText={errors.no_kegiatan}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <Row>
                        <Col lg="6">
                            <Input
                                label="Nama Kegiatan"
                                type="text"
                                placeholder="Masukan nama kegiatan"
                                name="nama_kegiatan"
                                value={values.nama_kegiatan}
                                onChange={handleChange}
                                error={errors.nama_kegiatan && touched.nama_kegiatan && true}
                                errorText={errors.nama_kegiatan}
                            />
                        </Col>
                        <Col lg="6">
                            <TextArea
                                label="Keterangan"
                                placeholder="Masukan keterangan"
                                name="deskripsi_kegiatan"
                                value={values.keterangan}
                                onChange={handleChange}
                                error={errors.keterangan && touched.keterangan && true}
                                errorText={errors.keterangan}
                                rows={2}
                            />
                        </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <SelectSearch
                                    label="Penanggung Jawab"
                                    name="penanggung_jawab"
                                    placeholder="Pilih penanggung jawab"
                                    option={penanggungJawab}
                                    defaultValue={values.data_penanggung_jawab}
                                    onBlur={handleBlur}
                                    error={errors.penanggung_jawab && touched.penanggung_jawab && true}
                                    errorText={errors.penanggung_jawab && touched.penanggung_jawab && true}
                                />
                            </Col>
                            <Col lg="3">
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
                                    placeholderText="Pilih periode mulai"
                                    error={errors.periode_mulai && touched.periode_mulai && true}
                                    errorText={errors.periode_mulai}
                                />
                            </Col>
                            <Col lg="3">
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
                                    placeholderText="Pilih periode selesai"
                                    error={errors.periode_selesai && touched.periode_selesai && true}
                                    errorText={errors.periode_selesai}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md>
                                <SelectSearch 
                                    label="Jenis Anggaran"
                                    placeholder="Pilih jenis anggaran"
                                    option={jenisAnggaran}
                                    defaultValue={values.jenis_anggaran}
                                    onBlur={handleBlur}
                                />
                            </Col>
                            <Col md>
                                {/* Belum Selesai */}
                                <SelectSearch 
                                    label="Kelompok Anggaran"
                                    placeholder="Pilih kelompok anggaran"
                                    isDisabled={true}
                                    // option={}
                                    // isDisabled={}
                                    // loading={}
                                    // onChange={}
                                />
                            </Col>
                            <Col md>
                                {/* Belum Selesai */}
                                <SelectSearch 
                                    label="Sub Kelompok Anggaran"
                                    placeholder="Pilih sub kelompok anggaran"
                                    isDisabled={true}
                                    // option={}
                                    onChange={handleChange}
                                    error={errors.sub_kelompok_anggaran && touched.sub_kelompok_anggaran && true}
                                    errorText={errors.sub_kelompok_anggaran && touched.sub_kelompok_anggaran}
                                />
                            </Col>
                        </Row>
                        <hr />
                        <div className="d-flex justify-content-end my-4">
                          <ActionButton
                            type="submit"
                            variant="primary"
                            text="Simpan Kegiatan"
                            className="px-3"
                            loading={isSubmitting}
                            onClick={() => history.push('/anggaran/transaksi/kegiatan')}
                          />
                        </div>
                      </form>
                    )}
                  </Formik>
              </Container>
            </Card.Body>
          </Card>
    </div>
  )
}

export default CreateKegiatan























    // const mapingJenisAnggaran = (jenisAnggaran) => {
    //     jenisAnggaran.map(val => {
    //         return{
    //             label: val.label,
    //             jenis_anggaran: val.jenis_anggaran
    //         }
    //         setJenisAnggaran(mapingJenisAnggaran)
    //     })
    // }


        // const mapingPenanggungJawab = (penanggungJawab) => {
    //     penanggungJawab.map(val => {
    //         return{
    //             label: val.lavel,
    //             penanggungJawab: val.penanggungJawab
    //         }
    //         setPenanggungJawab(mapingPenanggungJawab)
    //     })
    // }

    // onChange={(val) => {
    //     setValues({ 
    //       ...values,
    //       label: val.label,
    //       jenis_anggaran: val.jenis_anggaran
    //     })
    //   }}

    //onChange={(val) => {
    //     setValues({
    //       ...values,
    //       label: val.label,
    //       data_penanggung_jawab: val.data_penanggung_jawab
    //     })
    //   }}