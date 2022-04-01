import React, { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { Row, Col, Card } from "react-bootstrap"
import { DateConvert } from "utilities"
import { Formik } from "formik"
import * as Yup from "yup"
import {
  Alert,
  TextArea,
  DataStatus,
  BackButton,
  ActionButton,
  InfoItemVertical
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
      text:'Success'
  })
//FAKE API
  const getDetailData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
          data_nama_program: state.data.nama_program,
          data_tgl_program: state.data.tgl_program,
          data_nomor_program: state.data.nomor_program,
          data_unit_organisasi: state.data.unit_organisasi,
          data_penanggung_jawab: state.data.penanggung_jawab_program,
          data_periode_mulai: state.data.periode_mulai,
          data_periode_selesai: state.data.periode_selesai,
          data_deskripsi: state.data.deskripsi_program
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
          <InfoItemVertical 
            label="Nama. Program"
            text={dataDetail.data_nama_program ?? '-'}
          />
          <InfoItemVertical 
            label="Tgl. Program"
            text={dataDetail.data_tgl_program ? DateConvert(new Date(dataDetail.data_tgl_program)).detail : '-'}
          />
          <InfoItemVertical 
            label="No. Program"
            text={dataDetail.data_nomor_program ?? '-'}
          />
          <InfoItemVertical 
            label="Unit Organisasi"
            text={dataDetail.data_unit_organisasi ?? '-'}
          />
        </Col>
        <Col md>
            <InfoItemVertical 
            label="Nama Penanggung Jawab"
            text={dataDetail.data_penanggung_jawab ?? '-'}
          />
          <InfoItemVertical 
            label="Periode Mulai"
            text={dataDetail.data_periode_mulai ? `${DateConvert(new Date(dataDetail.data_periode_mulai)).detailMonth} ${DateConvert(new Date(dataDetail.data_periode_mulai)).defaultYear}` : '-'}
          />
          <InfoItemVertical 
            label="Periode Selesai"
            text={dataDetail.data_periode_selesai ? `${DateConvert(new Date(dataDetail.data_periode_selesai)).detailMonth} ${DateConvert(new Date(dataDetail.data_periode_selesai)).defaultYear}` : '-'}
          />
          <InfoItemVertical 
            label="Deskripsi"
            text={dataDetail.data_deskripsi ?? '-'}
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
            {state.data.status === false
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
                      //Mengembalikan true jika nilai tidak sama dari nilai awal, false jika tidak. 
                      //Dirty - Properti yang dihitung hanya-baca dan tidak boleh dimutasi secara langsung.
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
    setNavbarTitle("Approval Program")
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
            variant={textAlert.variant}
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
