import React, {useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {
  InputSearch,
  CreateButton,
  DataStatus
} from 'components'

const SubKegiatanList = ({setNavbarTitle}) => {
//USE HISTORY
  const history = useHistory()
//USE EFFECT
  useEffect(() => {
    setNavbarTitle('List Sub Kegiatan')
  }, [setNavbarTitle])

  return (
    <div>
      <Row className='mb-2'>
        <Col md-6 >
            <InputSearch className='w-50' />
        </Col>
        <Col md-6 className='text-right'>
            <CreateButton onClick={() => history.push('/anggaran/transaksi/sub-kegiatan/kegiatan')}  />
        </Col>
      </Row>
      <DataStatus text='Tidak Ada Data'/>
    </div>
  )
}

export default SubKegiatanList