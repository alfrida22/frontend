import React, { useState } from 'react';
import './Register.css';
import Gambar from './bg.png';
import Logo from './logos.png';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveDaftar = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/daftar/tambah', {
        username: username,
        email: email,
        password: password
    }).then((Response)=>{
      console.log(Response)
      window.location.href = '/';
    })
  
  }

  return (
    <div className="register-container">
      <div className="left-side">
        <img src={Logo} alt="Logo" className="logo" />
        <img src={Gambar} alt="Gambar" />
      </div>
      <div className="right-side">
        <h2>Daftar</h2>
        <form onSubmit={ saveDaftar}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/Dashboard">
            <button 
            type="submit">Daftar</button>
          </Link>
          <p>Atau</p>
          <button type="button">Google</button>
          <p>
            Sudah Punya Akun? <Link to="/Login">Masuk</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
