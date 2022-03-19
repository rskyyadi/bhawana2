import React, {useState, useEffect} from 'react'
import {Row, Col, ButtonGroup} from 'react-bootstrap'
import {nanoid} from 'nanoid'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {Modal} from 'react-bootstrap'
import { TableNumber } from 'utilities'
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

const KelompokAnggaranList = ({setNavbarTitle}) => {
//TITLE
    const title = 'Jenis Anggaran'
//FAKE API
    const getKelompokAnggaranList = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    kode: '01',
                    nama_kelompok_anggaran: 'Aktiva Tetap',
                    nama_jenis_anggaran: 'Modal',
                    keterangan: 'Kelompok Anggaran Aktiva Tetap',
                    checked: false
                },
                {
                    id: 2,
                    kode: '02',
                    nama_kelompok_anggaran: 'Aktiva Lain-Lain',
                    nama_jenis_anggaran: 'Modal',
                    keterangan: 'Kelompok Anggaran Lain-Lain',
                    checked: false
                },
                {
                  id: 3,
                  kode: '03',
                  nama_kelompok_anggaran: 'Penyertaan Modal',
                  nama_jenis_anggaran: 'Modal',
                  keterangan: 'Kelompok Anggaran Penyertaan Modal',
                  checked: false
                },
                {
                  id: 4,
                  kode: '04',
                  nama_kelompok_anggaran: 'Rutin',
                  nama_jenis_anggaran: 'Operasional',
                  keterangan: 'Kelompok Anggaran Rutin',
                  checked: false
                },
                {
                  id: 5,
                  kode: '05',
                  nama_kelompok_anggaran: 'Non Rutin',
                  nama_jenis_anggaran: 'Operasional',
                  keterangan: 'Kelompok Anggaran Non Rutin',
                  checked: false
                }
            ])
            reject(
                <DataStatus text='Tidak Ada Data' />
            )
        }, 900)
    })
//USE EFFECT
    useEffect(() => {
        setNavbarTitle('Kelompok Anggaran')
        getKelompokAnggaranList()
        .then(val => {
            setData(val)
            setDataCount(val.length)
        })
        .catch(() => {
            setTextAlert({
                variant: "danger",
                text: "Data gagal dimuat",
            });
            setAlertShow(true);
        })
        .finally(() => {
            setIsLoading(false)
        });
    }, [setNavbarTitle])
//DATA STATE
    const [data, setData] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [updateIndex, setUpdateIndex] = useState(null)
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
//ALERT STATE
    const [alertShow, setAlertShow] = useState(false)
    const [textAlert, setTextAlert] = useState({
        text:''
    })
//MODAL STATE
    const [createShow, setCreateShow] = useState(false)
    const [updateShow, setUpdateShow] = useState(false)
    const [deleteIndex, setDeleteIndex] = useState([])
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
//CREATE DATA
    const createSubmit = (values) => {
        const creatingName = {
            id: nanoid(),
            kode: values.kode,
            nama_jenis_anggaran: values.nama_jenis_anggaran,
            keterangan: values.keterangan
        }
        const saveName = [...data, creatingName]
        setData(saveName)
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
        const finds = data.find((datas) => datas.id === id)
        setIsUpdate(true)
        setUpdateIndex(id)
        setCreate(finds)
        setUpdateShow(true)
    }
    const updateSubmit = (values) => {
        const maping = data.map((val) => {
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
        setData(maping)
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
        const delete_detail = data.find((datas) => datas.id === id)
        setCreate(delete_detail)
    }
    const deleteSubmit = (id) => {
        const filters = data.filter(datas => datas.id !== id)
        setData(filters)
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
            const search_data = data
            setData(search_data)
            setData(data)
            return
        }
        const searchResult = data.filter(datas => 
            datas.kode.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
            datas.nama_jenis_anggaran.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
            datas.keterangan.toLowerCase().startsWith(e.target.value.toLowerCase())
        )
        setData(searchResult);
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
        const main_toggler = data.map((datas) => {
            if(datas.id === id) {
                return{
                    ...datas, 
                    checked: !datas.checked
                }
            }
            return datas
        })
        setData(main_toggler)
        setTextAlert({
            text: "Ubah status data berhasil",
        })
        setAlertShow(true);
    } 
//REVERSE
    const reverse = (array) => {
    return array.map((item,idx) => array[array.length-1-idx])
    } 
    reverse(data)

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
            isLoading === true
            ? <DataStatus loading={true} text='Memuat Data...' />
            : <div>
                <CreateModal 
                    title={title} 
                    show={createShow} 
                    onHide={() => setCreateShow(false)}>

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
                <UpdateModal 
                    title={title} 
                    show={updateShow} 
                    onHide={() => setUpdateShow(false)}>

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
                    onHide={() => setDeleteShow(false)}>
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
                            <ThFixed>Kode</ThFixed>
                            <Th>Nama Kelompok Anggaran</Th>
                            <Th>Jenis Anggaran</Th>
                            <Th>Keterangan</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        {
                            reverse(currentPosts).map((datas, index) => {
                                return(
                                    <Tr key={index}>
                                        <Td className='text-center'>{TableNumber(page, dataLength, index)}</Td>
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
                                        <Td>{datas.kode}</Td>
                                        <Td>{datas.nama_kelompok_anggaran}</Td>
                                        <Td>{datas.nama_jenis_anggaran}</Td>
                                        <Td>{datas.keterangan}</Td>
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

export default KelompokAnggaranList
