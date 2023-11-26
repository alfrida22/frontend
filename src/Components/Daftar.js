// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Table, Card } from 'react-bootstrap';

// import {
//     CButton,
//     CCard,
//     CCardBody,
//     CCardHeader,
//     CTable,
//     CTableBody,
//     CTableDataCell,
//     CTableHead,
//     CTableHeaderCell,
//     CTableRow,
// } from '@coreui/react';

// function Daftar() {
//     const [data_registrasi, setDataRegistrasi] = useState([]);
//     const GetDataRegistrasi = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/registrasi');
//             setDataRegistrasi(response.data.data);
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     useEffect(() => {

//         GetDataRegistrasi();
//     }, []);
//     return (
//         <div className='body-flex'>
//             <div className="flex">
//                 <div className='col-10 p-5'>
//                     <h1 className="py-1">Data Pengguna</h1>
//                     <CCard className="mb-4">
//                         <CCardHeader>
//                             <strong>Tabel Pengguna</strong>
//                         </CCardHeader>
//                         <CCardBody>
//                             <p className="text-medium-emphasis small">
//                                 Tabel ini menampilkan seluruh data pengguna platform JobConnect
//                             </p>
//                             <CTable striped bordered hover>
//                                 <CTableHead>
//                                     <CTableRow>
//                                         <CTableHeaderCell scope="col">Username</CTableHeaderCell>
//                                         <CTableHeaderCell scope="col">Email</CTableHeaderCell>
//                                         <CTableHeaderCell scope="col">Password</CTableHeaderCell>
//                                         <CTableHeaderCell scope="col">Tanggal Daftar</CTableHeaderCell>
//                                         <CTableHeaderCell scope="col">Action</CTableHeaderCell>
//                                     </CTableRow>
//                                 </CTableHead>
//                                 <CTableBody>
//                                     {data_registrasi.map((registrasi, index) => (
//                                         <CTableRow key={index}>
//                                             <CTableDataCell>{registrasi.username}</CTableDataCell>
//                                             <CTableDataCell>{registrasi.email}</CTableDataCell>
//                                             <CTableDataCell>{registrasi.password}</CTableDataCell>
//                                             <CTableDataCell>{registrasi.tgl}</CTableDataCell>
//                                             <CTableDataCell>
//                                                 <CButton className='btn btn-primary text-white me-2'>Edit</CButton>
//                                                 <CButton className='btn btn-danger text-white'>Hapus</CButton>
//                                             </CTableDataCell>
//                                         </CTableRow>
//                                     ))}
//                                 </CTableBody>
//                             </CTable>
//                         </CCardBody>
//                     </CCard>
//                 </div>
//             </div>

//         </div>
//     );
// }
// export default Daftar;