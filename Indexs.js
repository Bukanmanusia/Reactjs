// App.js
import "./main.css";
import { Link } from "react-router-dom";

import { ReactDOM } from "react";
import App from "./App";
import {Container, Row, Col} from 'react-bootstrap'



function Index (){
  return (
    <Container>
        <Row>
            <Col>
    <div className="index">
      <header>
        <h1 className="colored-title">DATA DIRI</h1>
      </header>
      <nav>
        <div>
          <div className="info">
            <div className="logo"><a href=''>DWI MAHDINI</a></div>
            <div className="menu">
              <ul>
                <li><a href="Index.js">Index</a></li>
                <li><a href="Home.js">Home</a></li>
                <li><a href="Biodatadiri.js">Biodata Diri</a></li>
                <li><a href="Halamanportofolio.js">Portofolio</a></li>
                <li><a href="Halamangaleri.js">Galeri</a></li>
                <li><a href="Halamanprestasi.js">Prestasi</a></li>
                <li><a href="" className ="tbl-pink">Sign Up</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="info">
        <section id="home">
        <img className="image" src='PEMOGRAMAN WEB/projek 2/projek-peweb2/src/assets/meow.webp' width="500px" alt="Meow" />
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
          <img src="c:\Users\PAVILION\Downloads\kontak.jpg" width="100px" alt="Kontak" />
          <h5>081234567890</h5>
        </div>
      </div>
      <div className="info">
        <div className="tif">
          <i>Copyright : Dwi Jelita Adhliyah | NIM 12250120331</i>
        </div>
      </div>
    </div>
    </Col>
    </Row>
    </Container>
    
  );
}
export default Indexs;
