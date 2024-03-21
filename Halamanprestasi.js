import "./main.css";
import { Link } from "react-router-dom";


function Halamanprestasi() {
  return (
    <div className="halamanrestasi">
      <div className="Prestasi">
        <h1>Prestasi</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Prestasi</th>
            <th>Tahun</th>
            <th>Juara</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tarian Tradisional</td>
            <td>2021</td>
            <td>Juara 1</td>
          </tr>
          <tr>
            <td>Mading Tingkat Kelas</td>
            <td>2021</td>
            <td>Juara 3</td>
          </tr>
        </tbody>
      </table>

      <div></div>
      <div className="Galeri">
        <h1>Galeri</h1>
        <div className="tengah">
          <img src="c:\Users\PAVILION\Downloads\NARI.jpeg" width="400px" alt="Home" />
          <p>Ini penampilan saya ketika mengikuti lomba tari pada pernikahan kepala sekolah saya ketika menduduki jenjang persekolahan (SMA)</p>
        </div>
      </div>
    </div>
  );
}

export default Halamanprestasi;
