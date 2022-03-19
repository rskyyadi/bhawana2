import React, {useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {
  InputSearch,
  CreateButton,
  DataStatus
} from 'components'

const SubKegiatanList = ({setNavbarTitle}) => {
//FAKE API
  const getDataJenisAnggaran = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([])
        reject(
            <DataStatus text='Tidak Ada Data' />
        )
    }, 900)
    })
//STATE
  const [isLoading, setIsLoading] = useState(true)
//USE HISTORY
  const history = useHistory()
//USE EFFECT
  useEffect(() => {
    setNavbarTitle('List Sub Kegiatan')
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
            <CreateButton onClick={() => history.push('/anggaran/transaksi/sub-kegiatan/kegiatan')}  />
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

export default SubKegiatanList