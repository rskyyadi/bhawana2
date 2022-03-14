import React, {useState, useEffect} from 'react'
import {Row, Col, ButtonGroup} from 'react-bootstrap'
import {nanoid} from 'nanoid'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {Modal} from 'react-bootstrap'
import {
    Th, 
    Tr, 
    Td, 
    Table, 
    TBody, 
    THead, 
    Alert,
    Input, 
    Switch, 
    ThFixed, 
    TextArea, 
    DataStatus,
    Pagination, 
    CreateModal, 
    UpdateModal, 
    DeleteModal,
    InputSearch, 
    CreateButton,
    UpdateButton, 
    DeleteButton, 
    ActionButton, 
} from 'components'

const KategoriAnggaranList = ({setNavbarTitle}) => {
//USE EFFECT
useEffect(() => {
    setNavbarTitle('Kategori Anggaran')
  }, [setNavbarTitle])
//DATA STATE
    const [dataUser, setDataUser] = useState([
        {
            id: 1,
            nama_kategori_anggaran: 'Kendaraan',
            keterangan: '-',
            checked: false
        },
        {
            id: 2,
            nama_kategori_anggaran: 'Transportasi dan Akomodasi',
            keterangan: '-',
            checked: false
        },
        {
            id: 3,
            nama_kategori_anggaran: 'BPJS Kesehatan',
            keterangan: 'BPJS Kesehatan Pegawai',
            checked: false
        },
        {
            id: 4,
            nama_kategori_anggaran: 'Peralatan Kantor',
            keterangan: 'Peralatan kantor itdc nu',
            checked: false
        },
        {
            id: 5,
            nama_kategori_anggaran: 'Bangunan',
            keterangan: 'Bangunan ITDC NU',
            checked: false
        },
        {
            id: 6,
            nama_kategori_anggaran: 'Perlengkapan',
            keterangan: 'Perlengkapan Kantor ITDCNU',
            checked: false
        },
        {
            id: 7,
            nama_kategori_anggaran: 'Kendaraan',
            keterangan: 'Kendaraan Operasional ITDC NU',
            checked: false
        },
        {
            id: 8,
            nama_kategori_anggaran: 'Listrik',
            keterangan: 'Listrik PLN',
            checked: false
        },
        {
            id: 9,
            nama_kategori_anggaran: 'BPJS Ketenagakerja',
            keterangan: 'BPJS Ketenagakerja',
            checked: false
        },
        {
            id: 10,
            nama_kategori_anggaran: 'Internet',
            keterangan: 'Biaya Internet',
            checked: false
        },
    ])
    const [isUpdate, setIsUpdate] = useState(false)
    const [updateIndex, setUpdateIndex] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
//PAGINATION STATE
    const [page, setPage] = useState(1);
    const totalPage = 1
    const [itemPerPages, setItemPerPages] = useState(4);
//ALERT STATE
    const [alertShow, setAlertShow] = useState(false)
    const [textAlert, setTextAlert] = useState({
        text:''
    })
//MODAL STATE
    const [createShow, setCreateShow] = useState(false)
    const [updateShow, setUpdateShow] = useState(false)
    const [deleteIndex, setDeleteIndex] = useState([])
//MODAL DELETE STATE
    const [deleteShow, setDeleteShow] = useState(false)
    const deleteMasuk = (id) => {
        setDeleteShow(true)
        setDeleteIndex(id)
    }
//CREATE STATE
    const [create, setCreate] = useState({
        kode:'',
        nama_jenis_anggaran:'',
        keterangan:''
    })
//TITLE
    const title = 'Jenis Anggaran'
//CREATE DATA
    const createSubmit = (values) => {
        const creatingName = {
            id: nanoid(),
            kode: values.kode,
            nama_jenis_anggaran: values.nama_jenis_anggaran,
            keterangan: values.keterangan
        }
        const saveName = [...dataUser, creatingName]
        setDataUser(saveName)
        setCreateShow(false)
        setAlertShow(true)
        setTextAlert({
            text:'Tambah Data Berhasil'
        })
        setCreate({
            kode:'',
            nama_jenis_anggaran:'',
            keterangan:''
        })
    }
//UPDATE DATA
    const updateData = (id) => {
        const finds = dataUser.find((datas) => datas.id === id)
        setIsUpdate(true)
        setUpdateIndex(id)
        setCreate(finds)
        setUpdateShow(true)
    }
    const updateSubmit = (values) => {
        const maping = dataUser.map((val) => {
            if(val.id === updateIndex){
                return{
                    id: val.id,
                    kode: values.kode,
                    nama_jenis_anggaran: values.nama_jenis_anggaran,
                    keterangan: values.keterangan
                }
            }
            return val
        })
        setIsUpdate(false)
        setAlertShow(true)
        setUpdateIndex('')
        setDataUser(maping)
        setUpdateShow(false)
        setTextAlert({
            text:'Update Data Berhasil'
        })
        setCreate({
            kode:'',
            nama_jenis_anggaran:'',
            keterangan:''
        })
    }
//DELETE DATA
    const deleteDetail = (id) => {
        const delete_detail = dataUser.find((datas) => datas.id === id)
        setCreate(delete_detail)
    }
    const deleteSubmit = (id) => {
        const filters = dataUser.filter(datas => datas.id !== id)
        setDataUser(filters)
        setDeleteShow(false)
        setAlertShow(true)
        setTextAlert({
            text:'Hapus Data Berhasil'
        })
    }
//SEARCH DATA
    const handleSearch = (e) => {
        if (e.target.value === ''){
            window.location.reload(true)
            const search_data = dataUser
            setDataUser(search_data)
            setDataUser(dataUser)
            return
        }
        const searchResult = dataUser.filter(datas => 
            datas.kode.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
            datas.nama_jenis_anggaran.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
            datas.keterangan.toLowerCase().startsWith(e.target.value.toLowerCase())
        )
        setDataUser(searchResult);
    }
//FORMIK
    const formValues = {
        kode: isUpdate ? create.kode : '',
        nama_jenis_anggaran: isUpdate ? create.nama_jenis_anggaran : '',
        keterangan: isUpdate ? create.keterangan : '',
    }
    const formSubmit = (values) => {
        console.log(values)
        if(isUpdate){
            updateSubmit(values)
        }else{
            createSubmit(values)
        }
    }
//VALIDATION
    const formValidation = Yup.object({
        kode: Yup.number()
            .required('Masukan kode')
            .typeError('Kode hanya dapat berupa angka'),
        nama_jenis_anggaran: Yup.string()
            .required('Masukkan Jenis Anggaran'),
        keterangan: Yup.string()
            .required('Isi Keterangan')
    })
//SWITCH
    const toggler = (id) => {
        const main_toggler = dataUser.map((datas) => {
            if(datas.id === id) {
                return{
                    ...datas, 
                    checked: !datas.checked
                }
            }else{
                setIsLoading(true)
            }
            return datas
        })
        setDataUser(main_toggler)
        setTextAlert({
            text: "Ubah status data berhasil",
        })
        setAlertShow(true);
    } 
//PAGINATION
    const dataLength = dataUser.length
//REVERSE
const reverse = (array) => {
  return array.map((item,idx) => array[array.length-1-idx])
  } 
reverse(dataUser)

  return (
    <div>
        <Row className='mb-2'>
            <Col md-6 >
                <InputSearch className='w-50' onChange={handleSearch} />
            </Col>
            <Col md-6 className='text-right'>
                <CreateButton onClick={() => setCreateShow(true)}/>
            </Col>
        </Row>
        {
//Loading Belum Fix
            isLoading === false
            ? <DataStatus loading={true} text='Memuat Data...' />
            : <div>
                <CreateModal title={title} show={createShow} onHide={() => setCreateShow(false)}>
                    <Formik
                        initialValues={formValues}
                        validationSchema={formValidation}
                        onSubmit={formSubmit}>

                        {({ values, errors, touched, isSubmitting, handleChange, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <Modal.Body>
                                    <Input
                                        label='Kode'
                                        type='text'
                                        name='kode'
                                        placeholder='Masukan kode'
                                        value={values.kode}
                                        // readOnly={true}
                                        onChange={handleChange}
                                        error={errors.kode && touched.kode && true}
                                        errorText={errors.kode}
                                    />
                                    <Input
                                        label='Nama Jenis Anggaran'
                                        type='text'
                                        name='nama_jenis_anggaran'
                                        placeholder='Masukan nama jenis anggaran'
                                        value={values.nama_jenis_anggaran}
                                        onChange={handleChange}
                                        error={errors.nama_jenis_anggaran && touched.nama_jenis_anggaran && true}
                                        errorText={errors.nama_jenis_anggaran}
                                    />
                                    <TextArea
                                        label='Keterangan'
                                        type='text'
                                        name='keterangan'
                                        placeholder='Masukan keterangan'
                                        value={values.keterangan}
                                        onChange={handleChange}
                                        error={errors.keterangan && touched.keterangan && true}
                                        errorText={errors.keterangan}
                                        rows={3}
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <ActionButton
                                        type='submit'
                                        variant='primary'
                                        text='Tambah'
                                        className='mt-2 px-4'
                                        loading={isSubmitting}
                                    />
                                </Modal.Footer>
                            </form>
                        )}
                    </Formik>
                </CreateModal>
                <UpdateModal title={title} show={updateShow} onHide={() => setUpdateShow(false)}>
                    <Formik
                        initialValues={formValues}
                        validationSchema={formValidation}
                        onSubmit={formSubmit}>

                        {({ values, errors, touched, isSubmitting, handleChange, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <Modal.Body>
                                    <Input
                                        label='Kode'
                                        type='text'
                                        name='kode'
                                        placeholder='Masukan kode'
                                        value={values.kode}
                                        // readOnly={true}
                                        onChange={handleChange}
                                        error={errors.kode && touched.kode && true}
                                        errorText={errors.kode}
                                    />
                                    <Input
                                        label='Nama Jenis Anggaran'
                                        type='text'
                                        name='nama_jenis_anggaran'
                                        placeholder='Masukan nama jenis anggaran'
                                        value={values.nama_jenis_anggaran}
                                        onChange={handleChange}
                                        error={errors.nama_jenis_anggaran && touched.nama_jenis_anggaran && true}
                                        errorText={errors.nama_jenis_anggaran}
                                    />
                                    <TextArea
                                        label='Keterangan'
                                        type='text'
                                        name='keterangan'
                                        placeholder='Masukan keterangan'
                                        value={values.keterangan}
                                        onChange={handleChange}
                                        error={errors.keterangan && touched.keterangan && true}
                                        errorText={errors.keterangan}
                                        rows={3}
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <ActionButton
                                        type='submit'
                                        variant='success'
                                        text='Ubah'
                                        className='mt-2 px-4'
                                        loading={isSubmitting}
                                    />
                                </Modal.Footer>
                            </form>
                        )}
                    </Formik>
                </UpdateModal>
                <DeleteModal 
                    onConfirm={() => deleteSubmit(deleteIndex)} 
                    title={title} show={deleteShow} 
                    onHide={() => setDeleteShow(false)}
                >
                    <span>Nama Jenis Anggaran : {create.nama_jenis_anggaran}</span>
                </DeleteModal>

                <Alert
                    show={alertShow}
                    showCloseButton={true}
                    variant='primary'
                    text={textAlert.text}
                    onClose={() => setAlertShow(false)}
                />
                <Table>
                    <THead>
                        <Tr>
                            <ThFixed>No</ThFixed>
                            <ThFixed>Aksi</ThFixed>
                            <Th>Nama Kategori Anggaran</Th>
                            <Th>Keterangan</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        {
                            reverse(dataUser).map((datas, index) => {
                                return(
                                    <Tr key={index}>
                                        <Td className='text-center'>{index + 1}</Td>
                                        <Td className='d-flex text-center'>
                                            <ButtonGroup size="sm" className="mr-1">
                                                <UpdateButton onClick={() => updateData(datas.id)} />
                                                <DeleteButton
                                                    onClick={() => deleteMasuk(datas.id) ?? deleteDetail(datas.id)} 
                                                />
                                            </ButtonGroup>
                                            <Switch 
                                                id={toString(index + 1)}
                                                checked={datas.checked}
                                                onChange={() => toggler(datas.id)}
                                            />
                                        </Td>
                                        <Td>{datas.nama_kategori_anggaran}</Td>
                                        <Td>{datas.keterangan}</Td>
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
        }
    </div>
  )
}

export default KategoriAnggaranList