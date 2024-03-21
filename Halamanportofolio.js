import "./main.css";
import { Link } from "react-router-dom";


function Halamanportofolio() {
  return (
      <div className="Portofolio">
        <h1>PORTOFOLIO</h1> 
        <div className="kiri">
          <img src="d:\ui-ux.jpg" width="200px" alt="Home" style={{ borderRadius: "100px" }} />
          <p><strong>UI/UX</strong></p>
          <p>Bagaimana desain UI dan UX berbeda dan tumpang tindih, dan keterampilan dan alat apa yang Anda butuhkan untuk membuat produk dan situs web digital yang menarik.</p>
        </div>     
        <div className="tengah">
          <img src="c:\Users\PAVILION\Downloads\problem-solving-assessment.webp" width="300px" alt="Home" style={{ borderRadius: "500px" }} />
          <p><strong>Problem Solving</strong></p>
          <p>Kemampuan menyelesaikan masalah dengan pengambilan keputusan yang tepat.</p>
        </div>     
        <div className="kanan">
          <img src="c:\Users\PAVILION\Downloads\Manajemen-Waktu.webp" width="300px" alt="Home" style={{ borderRadius: "500px" }} />
          <p><strong>Manajemen waktu</strong></p>
          <p>Mengatur jadwal, menghindari prokrastinasi, dan memanfaatkan waktu dengan efisien.</p>
        </div>
      </div>
  );
}

export default Halamanportofolio;
