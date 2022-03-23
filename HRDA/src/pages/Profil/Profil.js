import React, {
  useEffect,
  useContext, useState
} from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'
import {
  AuthContext
} from '../../utilities'

const Profil = ({setNavbarTitle}) => {
  const {state} = useContext(AuthContext)
  const {username, unit_organisasi} = state
  
  useEffect(() => {
    setNavbarTitle("Profil Saya")

    return () => {
      
    }
  }, [])

  const ProfilSection = () => {
    const ProfilItem = ({title, text, line}) => (
      <>
        <div className="d-flex flex-column mb-3">
          <small>{title}</small>
          <b className="text-uppercase">{text}</b>
        </div>
        {line && <hr />}
      </>
    )
    return (
      <div className="bg-white shadow-sm p-3">
        <ProfilItem 
          line
          title="Username"
          text={username}
        />
        {/* <ProfilItem 
          title="Unit Organisasi"
          text={unitOrganisasi.nama}
        /> */}
      </div>
    )
  }

  return (
    <div>
      <Row>
        <Col md={6}>
          <ProfilSection />
        </Col>
        <Col md={6}>
        </Col>
      </Row>
    </div>
  )
}

export default Profil
