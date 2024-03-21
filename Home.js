import "./main.css";
import { Link } from "react-router-dom";


function Home (){
  return (
    <div className="Home">
      <header>
        <h1 className="colored-title">DATA DIRI</h1>
      </header>
      <nav>
        <div>
          <div className="info">
            <div className="logo"><a href=''>DWI MAHDINI</a></div>
            <div className="menu">
              <ul>
                <li><a href="Index.html">Home</a></li>
                <li><a href="Biodatadiri.html">Biodata Diri</a></li>
                <li><a href="Halamanportofolio.html">Portofolio</a></li>
                <li><a href="Halamangaleri.html">Galeri</a></li>
                <li><a href="Halamanprestasi.html">Prestasi</a></li>
                <li><a href="" className="tbl-pink">Sign Up</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="info">
        <section id="home">
          <img className="image" src={require('./assets/meow.webp').default} width="500px" alt="Meow" />
          <div className="kolom">
            <p className="deskripsi">Selamat Datang di Blog Data Diri Saya!</p>
            <h2>Di sini anda dapat mengetahui lebih banyak tentang saya dan minat serta prestasi saya.</h2>
            <p style={{ width: '220px' }}><a href="" className="tbl-pink">Selengkapnya</a></p>
          </div>
        </section>
      </div>
      <div className="info">
        <div className="Kontak">
          <h4>Hubungi Kontak Saya</h4>
          <img src={require('./assets/kontak.jpg').default} width="100px" alt="Kontak" />
          <h5>081234567890</h5>
        </div>
      </div>
      <div className="info">
        <div className="tif">
          <i>Copyright : Dwi Jelita Adhliyah | NIM 12250120331</i>
        </div>
      </div>
    </div>
  );
}

export default Home;
