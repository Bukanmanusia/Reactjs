import "./main.css";
import { Link } from "react-router-dom";

function Biodata() {
  return (
    <div>
      <div className="Nama">
        <b className="deskripsi">Biodata Diri</b>
        <div>
          <img src="projek-peweb2/src/assets/meow.webp" width="200px" alt="Gambar" className="profile-pic" />
          <h3>Nama                    : Dwi Mahdini</h3>
          <h3>Tempat/ Tanggal Lahir   : Bangkinang, 14 Juli 2004</h3>
          <h3>Umur                    : 19 Tahun</h3>
          <h3>Jenis Kelamin           : Perempuan</h3>
          <h3>Agama                   : Islam</h3>
          <h3>Anak Ke                 : 2 (kedua) dari 3 bersaudara</h3>
          <h3>Alamat                  : Pekanbaru, Jl. Suka Karya, Perum. Griya Insan Makmur Blok A6</h3>
          <h3>Nama Ayah               : Ahmad Damyati</h3>
          <h3>Nama Ibu                : Nurmesri Rahayu</h3>
        </div>
      </div>
    </div>
  );
}



function JenjangSekolah () {
  return (
    <div className="JenjangSekolah">
      <h1>JENJANG SEKOLAH</h1>
      <div className="sekolah">
        <div className="Dasar">
          <img src="d:\sd.jpg" width="200px" alt="Home" className="school-img" />
          <div>
            <h6>SDN 001 Kabun</h6>
            <p>Saya bersekolah di SDN 001 Kabun di Kecamatan Kabun, Kabupaten Rokan Hulu, Riau</p>
          </div>
        </div>

        <div className="Menengah">
          <img src="c:\Users\PAVILION\Downloads\smp.jpeg" width="200px" alt="Home" className="school-img" />
          <div>
            <h6>MTS Pondok Pesantren Darussalam Saran Kabun</h6>
            <p>Saya bersekolah di MTS Pondok Pesantren Darussalam Saran Kabun di Kecamatan Kabun, Kabupaten Rokan Hulu, Riau</p>
          </div>
        </div>

        <div className="Atas">
          <img src="c:\Users\PAVILION\Downloads\sma.jpeg" width="200px" alt="Home" className="school-img" />
          <div>
            <h6>SMA Teknologi Pekanbaru</h6>
            <p>Saya bersekolah di SMA Teknologi Pekanbaru di Kecamatan Tampan, Kota Pekanbaru, Riau</p>
          </div>
        </div>
      </div>
    </div>
  );
}


function Hobby (){
  return (
    <div className="Hobby">
      <h1>HOBBY</h1>
      <div className="activities">
        <div className="kiri">
          <img src="d:\badmin.jpg" width="200px" alt="Home" className="hobby-img" />
          <div>
            <h3>Badminton</h3>
            <p>Bulu tangkis mengajarkanku tentang ketekunan, keberanian, dan kerja keras</p>
          </div>
        </div>

        <div className="tengah">
          <img src="c:\Users\PAVILION\Downloads\narii.jpg" width="200px" alt="Home" className="hobby-img" />
          <div>
            <h3>Menari</h3>
            <p>Menari adalah cara saya mengekspresikan diri, di mana gerakan mengungkapkan apa yang kata-kata tidak bisa</p>
          </div>
        </div>

        <div className="kanan">
          <img src="d:\menulis.png" width="200px" alt="Home" className="hobby-img" />
          <div>
            <h3>Menulis</h3>
            <p>Saya sangat menulis, apalagi kalau lagi lancar otaknya pasti kata-kata yang terangkai akan sangat indah</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biodatadiri;


