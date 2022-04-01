import React, { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import * as Yup from "yup"
import { Row, Col, Card } from "react-bootstrap"
// import { DateConvert } from "utilities"
import { Formik } from "formik"
import {
  Alert,
  DataStatus,
  BackButton,
  TextArea,
  ActionButton,
  InfoItemHorizontal
} from "components"

const DetailProgram = ({ setNavbarTitle }) => {
//DATA
  const [dataDetail, setDataDetail] = useState([])
//USE HISTORY
  const history = useHistory()
//USE LOCATION
  const {state} = useLocation()
//STATE
  const [isLoading, setIsLoading] = useState(true)
//MODAL CONFIG
  const [modalConfig, setModalConfig] = useState({
    show: false,
    type: "",
    title: "",
  })
//ALERT STATE
  const [alertShow, setAlertShow] = useState(false)
  const [textAlert, setTextAlert] = useState({
      variant:'primary',
      text:''
  })
//FAKE API
  const getDetailData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
          data_nama_program: state.data.nama_program,
          data_kegiatan: state.data.kegiatan,
          data_sub_kegiatan: state.data.sub_kegiatan,
          data_periode_sub_kegiatan: state.data.periode_sub_kegiatan,
          data_tgl_ppa: state.data.tgl_ppa,
          data_nomor_ppa: state.data.nomor_ppa,
          data_sumber_daya: state.data.sumber_daya,
          data_sumber: state.data.sumber,
          data_pengadaan: state.data.pengadaan,
          data_tipe_anggaran: state.data.tipe_anggaran,
          data_qty_sumber_daya: state.data.qty_sumber_daya,
          data_harga_satuan: state.data.harga_satuan,
          data_harga_total: state.data.harga_total
        })
        reject(
            <DataStatus text='Tidak Ada Data' />
        )
    }, 900)
  })
  useEffect(() => {
    getDetailData()
    .then(val => {
      setDataDetail(val)
      // setDataCount(val.length)
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
    })
  }, [])
//DETAIL DATA
  const DetailData = () => { 
    return (
      <Row>
        <Col md>
          <InfoItemHorizontal 
            label="Program"
            text={dataDetail.data_nama_program ?? '-'}
          />
          <InfoItemHorizontal 
            label="Kegiatan"
            text={dataDetail.data_kegiatan ?? '-'}
          />
          <InfoItemHorizontal 
            label="Sub Kegiatan"
            text={dataDetail.data_sub_kegiatan ?? '-'}
          />
          <InfoItemHorizontal 
            label="Periode Sub Kegiatan"
            text={dataDetail.data_periode_sub_kegiatan ?? '-'}
          />
        </Col>
        <Col md>
          <InfoItemHorizontal 
            label="Tgl. PPA"
            text={dataDetail.data_tgl_ppa?? '-'}
          />
          <InfoItemHorizontal 
            label="No. PPA"
            text={dataDetail.data_nomor_ppa ?? '-'}
          />
          <InfoItemHorizontal 
            label="Sumber Daya"
            text={dataDetail.data_sumber_daya ?? '-'}
          />
          <InfoItemHorizontal 
            label="Sumber"
            text={dataDetail.data_sumber ?? '-'}
          />
          <InfoItemHorizontal 
            label="Pengadaan"
            text={dataDetail.data_pengadaan ?? '-'}
          />
          <InfoItemHorizontal 
            label="Tipe Anggaran"
            text={dataDetail.data_tipe_anggaran ?? '-'}
          />
          <InfoItemHorizontal 
            label="Qty. Sumber Data"
            text={dataDetail.data_qty_sumber_daya ?? '-'}
          />
          <InfoItemHorizontal 
            label="Harga Satuan"
            text={dataDetail.data_harga_satuan ?? '-'}
          />
          <InfoItemHorizontal 
            label="Total Harga"
            text={dataDetail.data_harga_total ?? '-'}
          />
        </Col>
      </Row>
    )
  }
//APPROVAL PROGRAM
  const ApprovalProgram = ({ values, handleChange, validateForm, errors, dirty }) => {
    return (
      <Card className="mt-4 mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <b>Approval Program</b>
        </Card.Header>
        <Card.Body>
          <hr />
          <div>
            {state.data.status === true
              ? <>
                  <TextArea
                    label="Catatan"
                    name="catatan"
                    placeholder="Masukan catatan"
                    value={values.catatan}
                    onChange={handleChange}
                    error={errors.catatan && true}
                    errorText={errors.catatan}
                  />
                <div className="d-flex justify-content-end mt-3">
                  <ActionButton
                    text="Reject"
                    variant="danger"
                    className="m-1"
                    onClick={() => {
                      if (dirty) {
                        setModalConfig({
                          show: true,
                          type: "REJ",
                          title: <span className="text-danger">Reject Program</span>,
                        });
                      }
                      validateForm();
                    }}
                  />
                  <ActionButton
                    text="Revise"
                    variant="warning"
                    className="m-1 text-white"
                    onClick={() => {
                      if (dirty) {
                        setModalConfig({
                          show: true,
                          type: "APP",
                          title: <span className="text-warning">Revise Program</span>,
                        });
                      }
                      validateForm();
                    }}
                  />
                  <ActionButton
                    text="VERIFY"
                    variant="success"
                    className="m-1"
                    onClick={() => {
                      if (dirty) {
                        setModalConfig({
                          show: true,
                          type: "APP",
                          title: <span className="text-warning">Success Program</span>,
                        });
                      }
                      validateForm();
                    }}
                  />
                </div>
              </>
              :''
            }
          </div>
        </Card.Body>
      </Card>
    )
  }
//USE EFFECT
  useEffect(() => {
    setNavbarTitle("Approval PPA")
    return () => {
      setIsLoading(false);
    }
  }, [])
//LAYOUT
  return (
    <>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <b>Detail Data Program</b>
          <BackButton onClick={() => history.goBack()} />
        </Card.Header>
        <Card.Body>
          <Alert
            show={alertShow}
            showCloseButton={true}
            variant='primary'
            text={textAlert.text}
            onClose={() => setAlertShow(false)}
          />
          {isLoading
            ? <DataStatus loading={true} text="Memuat data . . ." /> 
            : <DetailData />
          }
        </Card.Body>
      </Card>

      <Formik
        initialValues={{catatan:''}}
        validationSchema={
          Yup.object().shape({
            catatan: Yup.string().required("Masukan Catatan"),
          })}
        onSubmit={() => {}}>
      
        {({ values, isSubmitting, handleChange, handleSubmit, errors, touched, validateForm, dirty, }) => (
          <>
            <ApprovalProgram
              values={values}
              handleChange={handleChange}
              errors={errors}
              touched={touched}
              validateForm={validateForm}
              dirty={dirty}
            />
          </>
        )}
      </Formik>
    </>
  );
};

export default DetailProgram
