import React from 'react';
import './Dashboard.css';
import Profile from './Profile.jpeg'
import Gambar1 from './akt1.jpg'
import Gambar2 from './akt2.jpg'
import Gambar3 from './akt3.jpg'
import Gambar4 from './food (1).jpg'
import Gambar5 from './food (2).jpg'
import Gambar6 from './food (3).jpg'
import Logo from './logos.png'

function Dashboard() {
  // Buat daftar tanggal, bulan, dan tahun
  const currentDate = new Date(); // Dapatkan tanggal saat ini

  const day = currentDate.getDate();
  const month = currentDate.toLocaleDateString("id-ID", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <ul>
          <img src={Logo} alt="Logo" />
          <li>🏠</li>
          <li>📋</li>
          <li>🍽️</li>
          <li>🧮</li>
          <li>🚪</li>
        </ul>
      </nav>
      <main className="content">
        <div className="dashboard-header">
          <div className="search-bar">
            <input type="text" placeholder="Cari..." />
          </div>
          <div className="date-container">
            <div className="date-label"></div>
            <div className="date-output">{`${day} ${month} ${year}`}</div>
          </div>
          <div className="user-profile">
            <span>Nama Pengguna</span>
            <img src={Profile} alt="Profil Pengguna" />
          </div>
        </div>

        <div className="favorite-activities">
          <h2>Favorite Aktivitas</h2>
          <div className="activity-images">
            <img src={Gambar1} alt="Aktivitas 1" />
            <img src={Gambar2} alt="Aktivitas 2" />
            <img src={Gambar3} alt="Aktivitas 3" />
          </div>
        </div>

        <div className="favorite-activities">
          <h2>Favorite Tips</h2>
          <div className="activity-images">
            <img src={Gambar4} alt="Food 1" />
            <img src={Gambar5} alt="Food 2" />
            <img src={Gambar6} alt="Food 3" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
