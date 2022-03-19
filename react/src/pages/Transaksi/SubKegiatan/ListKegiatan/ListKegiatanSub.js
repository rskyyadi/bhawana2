import React, {useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {
  InputSearch,
  BackButton,
  DataStatus
} from 'components'

function ListKegiatan({setNavbarTitle}) {
//STATE
  const [isLoading, setIsLoading] = useState(true)
//USE HISTORY
  const history = useHistory()
//FAKE API
  const getDataJenisAnggaran = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([])
        reject(
            <DataStatus text='Tidak Ada Data' />
        )
    }, 900)
  })
//USE EFFECT
  useEffect(() => {
    setNavbarTitle('List Kegiatan')
    getDataJenisAnggaran()
    .then(val => console.log(val))
    .catch(<DataStatus text='Tidak Ada Data' />)
    .finally(() => {
        setIsLoading(false)
    })
  }, [setNavbarTitle])

  return (
    <div>
      <Row className='mb-2'>
        <Col md-6 >
            <InputSearch className='w-50' />
        </Col>
        <Col md-6 className='text-right'>
            <BackButton onClick={() => history.push('/anggaran/transaksi/sub-kegiatan')}  />
        </Col>
      </Row>
      {
        isLoading === true
        ? <DataStatus loading={true} text='Memuat Data...' />
        : <DataStatus text='Tidak Ada Data'/>
      }
    </div>
  )
}

export default ListKegiatan