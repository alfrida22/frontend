import React from 'react';
import './Login.css'; // Anda dapat menambahkan file CSS untuk styling
import Gambar from './gambar1.png';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register-container">
      <div className="left-side">
        <img src={Gambar} alt="Gambar" />
      </div>
      <div className="right-side">
        <h2>Masuk</h2>
        <form>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" id="password" name="password" placeholder="Password"/>
          </div>
          <Link to="/Dashboard">
            <button type="submit">Masuk</button>
          </Link>
          <p>Atau</p>
          <button type="button">Google</button>
          <p>Belum Punya Akun? <Link to="/Register">Daftar</Link></p>
        </form>
      </div>
    </div>
  );
}
export default Register;
