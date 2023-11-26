import React, { useState, useEffect } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const DaftarList = () => {
    const [daftar, setDaftar] = useState([]);

    useEffect(() => {
        getDaftar();
    }, []);

    const getDaftar = async () => {
        try {
            const response = await axios.get('http://localhost:8080/daftar/getUsers');
            setDaftar(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {daftar.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DaftarList