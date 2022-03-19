import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import { TableNumber } from 'utilities'
import {
  Tr,
  Th,
  Td,
  Table,
  THead,
  TBody,
  ThFixed,
  TdFixed,
  DataStatus,
  BackButton,
  Pagination,
  InputSearch,
  ActionButton,
} from 'components'
import {useHistory}from 'react-router-dom'

const ListProgram = ({setNavbarTitle}) => {
//FAKE API
  const getDataJenisAnggaran = () => new Promise((resolve, reject) => {
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
            no_kegiatan: '2022/03/ANG/KEG/0001'
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
    setNavbarTitle('List Program')
    getDataJenisAnggaran()
    .then(val => {
      setData(val)
      setDataCount(val.length)
    })
    .catch(<DataStatus text='Tidak Ada Data' />)
    .finally(() => {
        setIsLoading(false)
    });
  }, [setNavbarTitle])
//USE HISTORY
  const history = useHistory()
//DATA
  const [data, setData] = useState ([])
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
            <BackButton onClick={() => history.push('/anggaran/transaksi/kegiatan')} />
        </Col>
      </Row>
      {
        isLoading === true 
        ? <DataStatus loading={true} text='Memuat Data...' />
        :
          <div>
            <Table>
              <THead>
                <Tr>
                  <ThFixed>No</ThFixed>
                  <ThFixed>Aksi</ThFixed>
                  <Th>Tgl. Program</Th>
                  <Th>No. Program</Th>
                  <Th>Nama Program</Th>
                  <Th>Unit Organisasi</Th>
                  <Th>Penanggung Jawab</Th>
                  <Th>Periode Mulai</Th>
                  <Th>Periode Selesai</Th>
                </Tr>
              </THead>
              <TBody>
                {
                  currentPosts.map((datas, index) => {
                    return(
                      <Tr key={index}>
                        <TdFixed textCenter>{TableNumber(page, dataLength, index)}</TdFixed>
                        <TdFixed>
                          <div className="d-flex justify-content-center">
                            <ActionButton 
                              size="sm" 
                              onClick={() => 
                                history.push(
                                `/anggaran/transaksi/kegiatan/tambah-kegiatan/${datas.id}`, 
                                {data: datas}
                              )}>
                              Kegiatan
                            </ActionButton>
                          </div>
                        </TdFixed>
                        <Td>{datas.tgl_program}</Td>
                        <Td>{datas.no_program}</Td>
                        <Td>{datas.nama_program}</Td>
                        <Td>{datas.unit_organisasi}</Td>
                        <Td>{datas.penanggung_jawab}</Td>
                        <Td>{datas.periode_mulai}</Td>
                        <Td>{datas.periode_selesai}</Td>
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

export default ListProgram