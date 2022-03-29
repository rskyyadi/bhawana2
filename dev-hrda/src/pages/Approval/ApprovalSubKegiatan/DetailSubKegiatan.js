import React, { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import * as Yup from "yup"
import { Row, Col, Card } from "react-bootstrap"
import { DateConvert } from "utilities"
import { Formik } from "formik"
import {
  Alert,
  DataStatus,
  BackButton,
  TextArea,
  ActionButton,
  InfoItemVertical
} from "components"

const DetailProgram = ({ setNavbarTitle }) => {
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
//DETAIL DATA
  const DetailData = () => {
    return (
      <Row>
        <Col md>
          <InfoItemVertical 
            label="Nama. Program"
            text={state.data.nama_program ?? '-'}
          />
          <InfoItemVertical 
            label="Tgl. Program"
            text={state.data.tgl_program ? DateConvert(new Date(state.data.tgl_program)).detail : '-'}
          />
          <InfoItemVertical 
            label="No. Program"
            text={state.data.nomor_program ?? '-'}
          />
          <InfoItemVertical 
            label="Unit Organisasi"
            text={state.data.unit_organisasi ?? '-'}
          />
        </Col>
        <Col md>
            <InfoItemVertical 
            label="Nama Penanggung Jawab"
            text={state.data.penanggung_jawab_program ?? '-'}
          />
          <InfoItemVertical 
            label="Periode Mulai"
            text={state.data.periode_mulai ? `${DateConvert(new Date(state.data.periode_mulai)).detailMonth} ${DateConvert(new Date(state.data.periode_mulai)).defaultYear}` : '-'}
          />
          <InfoItemVertical 
            label="Periode Selesai"
            text={state.data.periode_selesai ? `${DateConvert(new Date(state.data.periode_selesai)).detailMonth} ${DateConvert(new Date(state.data.periode_selesai)).defaultYear}` : '-'}
          />
          <InfoItemVertical 
            label="Deskripsi"
            text={state.data.deskripsi_program ?? '-'}
          />
        </Col>
      </Row>
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
            variant='primary'
            text={textAlert.text}
            onClose={() => setAlertShow(false)}
          />
          {isLoading === false
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
