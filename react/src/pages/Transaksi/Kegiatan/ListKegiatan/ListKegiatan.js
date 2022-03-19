import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import { TableNumber } from 'utilities'
import {
  Tr,
  Th,
  Td,
  THead,
  TBody,
  Table,
  ThFixed,
  TdFixed,
  Pagination,
  DataStatus,
  ReadButton,
  InputSearch,
  CreateButton,
  UpdateButton,
  DeleteButton,
} from 'components'
import {useHistory}from 'react-router-dom'

const ListKegiatan = ({setNavbarTitle}) => {
//FAKE API
  const getListKegiatan = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
          {
            id: 1,
            tgl_program: '01/10/2021',
            tgl_kegiatan: '03/10/2022',
            no_program: '2021/10/ANG/PRG/0021',
            nama_program: 'Program Memajukan Bangsasa',
            unit_organisasi: 'DIREKTUR',
            penanggung_jawab: 'A.A. Istri Ratna Dewi',
            periode_mulai: 'Oktober 2021',
            periode_selesai: 'Oktober 2021',
            deskripsi_program: 'Deskripsi Program',
            no_kegiatan: '2022/03/ANG/KEG/0001',
            tgl_pengajuan: '',
            nama_kegiatan: '',
            program: '',
          },
          {
            id: 2,
            tgl_program: '01/10/2021',
            tgl_kegiatan: '03/10/2022',
            no_program: '2021/10/ANG/PRG/0020',
            nama_program: 'Program Memajukan Bangsasa',
            unit_organisasi: 'DIREKTUR',
            penanggung_jawab: 'A.A. Istri Ratna Dewi',
            periode_mulai: 'Oktober 2021',
            periode_selesai: 'Oktober 2021',
            deskripsi_program: 'Deskripsi Program',
            no_kegiatan: '2022/03/ANG/KEG/0001'
          },
          {
            id: 3,
            tgl_program: '01/10/2021',
            tgl_kegiatan: '03/10/2022',
            no_program: '2021/10/ANG/PRG/0019',
            nama_program: 'Program Memajukan Bangsa',
            unit_organisasi: 'DIREKTUR',
            penanggung_jawab: 'A.A. Istri Ratna Dewi',
            periode_mulai: 'Oktober 2021',
            periode_selesai: 'Novenber 2021',
            deskripsi_program: 'Deskripsi Program',
            no_kegiatan: '2022/03/ANG/KEG/0001'
          },
          {
            id: 4,
            tgl_program: '01/10/2021',
            tgl_kegiatan: '03/10/2022',
            no_program: '2021/10/ANG/PRG/0018',
            nama_program: 'Program XXX',
            unit_organisasi: '-',
            penanggung_jawab: 'A.A. Istri Ratna Dewi',
            periode_mulai: 'Oktober 2021',
            periode_selesai: 'Oktober 2021',
            deskripsi_program: 'Deskripsi Program',
            no_kegiatan: '2022/03/ANG/KEG/0001'
          },
          {
            id: 5,
            tgl_program: '01/10/2021',
            tgl_kegiatan: '03/10/2022',
            no_program: '2021/10/ANG/PRG/0018',
            nama_program: 'Program XXX',
            unit_organisasi: '-',
            penanggung_jawab: 'A.A. Istri Ratna Dewi',
            periode_mulai: 'Oktober 2021',
            periode_selesai: 'Oktober 2021',
            deskripsi_program: 'Deskripsi Program',
            no_kegiatan: '2022/03/ANG/KEG/0001'
          },
          {
            id: 6,
            tgl_program: '01/10/2021',
            tgl_kegiatan: '03/10/2022',
            no_program: '2021/10/ANG/PRG/0018',
            nama_program: 'Program XXX',
            unit_organisasi: '-',
            penanggung_jawab: 'A.A. Istri Ratna Dewi',
            periode_mulai: 'Oktober 2021',
            periode_selesai: 'Oktober 2021',
            deskripsi_program: 'Deskripsi Program',
            no_kegiatan: '2022/03/ANG/KEG/0001'
          },
          {
            id: 7,
            tgl_program: '01/10/2021',
            tgl_kegiatan: '03/10/2022',
            no_program: '2021/10/ANG/PRG/0018',
            nama_program: 'Program XXX',
            unit_organisasi: '-',
            penanggung_jawab: 'A.A. Istri Ratna Dewi',
            periode_mulai: 'Oktober 2021',
            periode_selesai: 'Oktober 2021',
            deskripsi_program: 'Deskripsi Program',
            no_kegiatan: '2022/03/ANG/KEG/0001'
          },
          {
            id: 8,
            tgl_program: '01/10/2021',
            tgl_kegiatan: '03/10/2022',
            no_program: '2021/10/ANG/PRG/0018',
            nama_program: 'Program XXX',
            unit_organisasi: '-',
            penanggung_jawab: 'A.A. Istri Ratna Dewi',
            periode_mulai: 'Oktober 2021',
            periode_selesai: 'Oktober 2021',
            deskripsi_program: 'Deskripsi Program',
            no_kegiatan: '2022/03/ANG/KEG/0001'
          },
          {
            id: 9,
            tgl_program: '01/10/2021',
            tgl_kegiatan: '03/10/2022',
            no_program: '2021/10/ANG/PRG/0018',
            nama_program: 'Program XXX',
            unit_organisasi: '-',
            penanggung_jawab: 'A.A. Istri Ratna Dewi',
            periode_mulai: 'Oktober 2021',
            periode_selesai: 'Oktober 2021',
            deskripsi_program: 'Deskripsi Program',
            no_kegiatan: '2022/03/ANG/KEG/0001'
          },
          {
            id: 10,
            tgl_program: '01/10/2021',
            tgl_kegiatan: '03/10/2022',
            no_program: '2021/10/ANG/PRG/0018',
            nama_program: 'Program XXX',
            unit_organisasi: '-',
            penanggung_jawab: 'A.A. Istri Ratna Dewi',
            periode_mulai: 'Oktober 2021',
            periode_selesai: 'Oktober 2021',
            deskripsi_program: 'Deskripsi Program',
            no_kegiatan: '2022/03/ANG/KEG/0001'
          },
          {
            id: 11,
            tgl_program: '01/10/2021',
            tgl_kegiatan: '03/10/2022',
            no_program: '2021/10/ANG/PRG/0018',
            nama_program: 'Program XXX',
            unit_organisasi: '-',
            penanggung_jawab: 'A.A. Istri Ratna Dewi',
            periode_mulai: 'Oktober 2021',
            periode_selesai: 'Oktober 2021',
            deskripsi_program: 'Deskripsi Program',
            no_kegiatan: '2022/03/ANG/KEG/0001'
          }
        ])
        reject(
            <DataStatus text='Tidak Ada Data' />
        )
    }, 900)
    })
//USE EFFECT
  useEffect(() => {
    setNavbarTitle('Kegiatan')
    getListKegiatan()
    .then(val => {
      setData(val)
      setDataCount(val.length)
    })
    .catch(<DataStatus loading={true} text='Memuat Data...' />)
    .finally(() => {
          setIsLoading(false)
    });
  }, [setNavbarTitle])
//USE HISTORY
  const history = useHistory()
//DATA LIST KEGIATAN
  const [data, setData] = useState([])
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
  

  return (
    <div>
      <Row className='mb-2'>
          <Col md-6 >
              <InputSearch className='w-50' />
          </Col>
          <Col md-6 className='text-right'>
              <CreateButton onClick={() => history.push('/anggaran/transaksi/kegiatan/list-program')} />
          </Col>
      </Row>
      {
        isLoading === true 
        ? (<DataStatus loading={true} text="Memuat data..." />)
        : data ? data.length > 0
        ?
        (
          <div>
            <Table>
              <THead>
                <Tr>
                  <ThFixed>No</ThFixed>
                  <Th>Aksi</Th>
                  <Th>Status</Th>
                  <Th>Tanggal Pengajuan</Th>
                  <Th>Nama Kegiatan</Th>
                  <Th>Program</Th>
                  <Th>Unit Organisasi</Th>
                </Tr>
              </THead>
              <TBody>
                {
                  currentPosts.map((val, index) => {
                    return(
                      <Tr key={index}>
                        <TdFixed textCenter>{TableNumber(page, dataLength, index)}</TdFixed>
                        <Td className='d-flex justify-content-center pt-2 pb-2'>
                          <ReadButton className='mr-2' />
                          <UpdateButton />
                          <DeleteButton className='ml-2' />
                        </Td>
                        <Td textCenter>{val.status ?? '-'}</Td>
                        <Td>{val.tgl_pengajuan ?? '-'}</Td>
                        <Td>{val.kegiatan}</Td>
                        <Td>{val.nama_program}</Td>
                        <Td>{val.unit_organisasi}</Td>
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
        )
        : <DataStatus text="Tidak ada data" />
        : <DataStatus text="Error" />
      }

    </div>
  )
}

export default ListKegiatan