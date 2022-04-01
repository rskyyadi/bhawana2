import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Row, Col } from "react-bootstrap" 
import { TableNumber } from "utilities"
import {
    Tr,
    Th,
    Td,
    Alert,
    Table,
    THead,
    TBody,
    ThFixed,
    TdFixed,
    CRUDLayout,
    DataStatus,
    Pagination,
    InputSearch,
    ActionButton,
} from "components"

const ApprovalKegiatan = () => { 
//DATA STATE
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
//PAGE STATE
    const [page, setPage] = useState(1)
    const [dataCount, setDataCount] = useState(0)
    const [dataLength, setDataLength] = useState(10)
//ALERT STATE
    const [alertShow, setAlertShow] = useState(false)
    const [textAlert, setTextAlert] = useState({
        variant:'',
        text:''
    })
//FAKE API
    const getApprovalKegiatan = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([])
            reject(
                <DataStatus text='Tidak Ada Data' />
            )
        }, 900)
    })
//USE EFFECT
    useEffect(() => {
        getApprovalKegiatan()
        .then(val => {
            setData(val)
            setDataCount(val.length)
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
//USE HISTORY
    const history = useHistory()
//PAGINATION
    const totalData = data.length
    const lastData = page * dataLength
    const firstData = lastData - dataLength
    const totalPage = data? data.length/dataLength : 0
    const paginate = pageNumber => setPage(pageNumber)
    const currentPosts = data.slice(firstData, lastData)
//TABLE
    const DataTable = () => {
        return(
            <div>
                <Table>
                    <THead>
                        <Tr>
                            <ThFixed>No</ThFixed>
                            <Th>Pembuat Pengajuan</Th>
                            <Th>Jabatan Pembuat Pengajuan</Th>
                            <ThFixed>Tgl. Program</ThFixed>
                            <ThFixed>Nomor Program</ThFixed>
                            <Th>Nama Program</Th>
                            <Th>Penanggung Jawab Program</Th>
                            <ThFixed>Status Approval</ThFixed>
                            <Th style={{ width: "8.5rem" }}>Detail Pengajuan</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        {currentPosts.map((datas, index) => (
                            <Tr key={index}>
                                <TdFixed>
                                    {TableNumber(page, dataLength, index)}
                                </TdFixed>
                                <Td>{datas.pembuat_pengajuan ? datas.pembuat_pengajuan : "-"}</Td>
                                <Td>{datas.jabatan_pembuat_pengajuan ? datas.jabatan_pembuat_pengajuan : "-"}</Td>
                                <TdFixed> {datas.tgl_program ? datas.tgl_program : "-"}</TdFixed>
                                <Td>{datas.nomor_program ? datas.nomor_program : "-"}</Td>
                                <Td>{datas.nama_program ? datas.nama_program : "-"}</Td>
                                <Td>{datas.penanggung_jawab_program ? datas.penanggung_jawab_program : "-"}</Td>
                                <TdFixed>{datas.status_approdatas ? datas.status_approval : "-"}</TdFixed>
                                <Td className="d-flex justify-content-center">
                                    <ActionButton
                                        size="sm"
                                        text="Lihat Detail"
                                        className="col"
                                        onClick={() =>
                                            history.push(
                                                `/human-resource/approval/program/detail/${datas.id}`,{data: datas}
                                            )
                                        }
                                    />
                                </Td>
                            </Tr>
                        ))}
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
    }
//LAYOUT
    return (
        <CRUDLayout>
            <CRUDLayout.Head>
                <CRUDLayout.HeadSearchSection>
                    <Row className="mb-2">
                        <Col md={8}>
                            <InputSearch />
                        </Col>
                    </Row>
                </CRUDLayout.HeadSearchSection>
            </CRUDLayout.Head>

            <Alert
                show={alertShow}
                showCloseButton={true}
                variant='primary'
                text={textAlert.text}
                onClose={() => setAlertShow(false)}
            />

            {isLoading 
            ? <DataStatus loading={true} text="Memuat data . . ." />
            : data 
                ? ( data.length > 0 
                    ? ( <DataTable />) 
                    : ( <DataStatus text="Tidak ada data" />)) 
                : ( <DataStatus text="Data gagal dimuat" />)
            }
        </CRUDLayout>
    );
};

export default ApprovalKegiatan
