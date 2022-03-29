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
//DETAIL DATA
  const DetailData = () => { 
    return (
      <Row>
        <Col md>
          <InfoItemHorizontal 
            label="Program"
            text={state.data.nama_program ?? '-'}
          />
          <InfoItemHorizontal 
            label="Kegiatan"
            text={state.data.kegiatan ?? '-'}
          />
          <InfoItemHorizontal 
            label="Sub Kegiatan"
            text={state.data.sub_kegiatan ?? '-'}
          />
          <InfoItemHorizontal 
            label="Periode Sub Kegiatan"
            text={state.data.periode_sub_kegiatan ?? '-'}
          />
        </Col>
        <Col md>
          <InfoItemHorizontal 
            label="Tgl. PPA"
            text={state.data.tgl_ppa?? '-'}
          />
          <InfoItemHorizontal 
            label="No. PPA"
            text={state.data.nomor_ppa ?? '-'}
          />
          <InfoItemHorizontal 
            label="Sumber Daya"
            text={state.data.sumber_daya ?? '-'}
          />
          <InfoItemHorizontal 
            label="Sumber"
            text={state.data.sumber ?? '-'}
          />
          <InfoItemHorizontal 
            label="Pengadaan"
            text={state.data.pengadaan ?? '-'}
          />
          <InfoItemHorizontal 
            label="Tipe Anggaran"
            text={state.data.tipe_anggaran ?? '-'}
          />
          <InfoItemHorizontal 
            label="Qty. Sumber Data"
            text={state.data.qty_sumber_daya ?? '-'}
          />
          <InfoItemHorizontal 
            label="Harga Satuan"
            text={state.data.harga_satuan ?? '-'}
          />
          <InfoItemHorizontal 
            label="Total Harga"
            text={state.data.harga_total ?? '-'}
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
