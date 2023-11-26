import React from 'react';
import './TentangKami.css'; // Anda dapat menambahkan file CSS untuk styling
import Gambar2 from './gambar2.jpg'

function TentangKami() {
  return (
<div className="judul-tentang-kami">
<h2>Tentang Kami</h2>
    <div className="tentang-kami-container">
      <div className="konten-tentang-kami">
        <div className="teks-tentang-kami">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus justo vel metus facilisis luctus. Duis nec interdum velit. Nulla et metus quis tellus venenatis fermentum. Etiam vel lacus molestie, consequat lectus vel, placerat mauris. Fusce at lorem vel quam feugiat faucibus eget nec velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eleifend porta velit, dapibus porttitor elit semper in. Morbi ultricies eros nec tempor porttitor.
          </p>
        </div>
        <div className="gambar-tentang-kami">
          <img src={Gambar2} alt="Gambar Tentang Kami" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default TentangKami;
