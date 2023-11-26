import React from 'react';
import gambar from './gambar.png';
import './Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="pt-4 hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 hero-img">
            <img src={gambar} alt="Hero" />
          </div>
          <div className="col-md-6 text-container">
            <h1 className="font-weight-bold">
              Selamat Datang Di Website Panduan Kesehatan
            </h1>
            <h1 className="font-weight-bold">
              Mulailah Hidup Sehatmu Dari Sini!!
            </h1>
            <Link to="/Register" className="btn btn-shop btn-primary"> {/* Tambahkan Link ke halaman Register */}
              Bergabung
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Hero;