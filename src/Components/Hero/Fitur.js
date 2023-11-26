import React from 'react';
import './FiturKami.css'; // Anda dapat menambahkan file CSS untuk styling
import Gambar3 from './gambar3.jpg'
import Gambar4 from './gambar4.jpg'
import Gambar5 from './gambar5.jpg'

function FiturKami() {
  return (
    <div className="fitur-kami-container">
      <div className="judul-fitur-kami">
        <h2>Fitur Kami</h2>
      </div>
      <div className="gambar-fitur-container">
        <div className="gambar-fitur">
          <img src={Gambar3} alt="Fitur 1" />
          <p>Latian</p>
        </div>
        <div className="gambar-fitur">
          <img src={Gambar4} alt="Fitur 2" />
          <p>Tips Pola Makan</p>
        </div>
        <div className="gambar-fitur">
          <img src={Gambar5} alt="Fitur 3" />
          <p>Kalkulator BMI</p>
        </div>
      </div>
    </div>
  );
}

export default FiturKami;
