import "./main.css";
import { Link } from "react-router-dom";


function Halamangaleri ()  {
  return (
    <div className="Galeri">
      <h1 className="judul">GALERI</h1> 
      <section id="Galeri">
        <div className="foto">
          <img src="c:\Users\PAVILION\Downloads\WhatsApp Image 2024-03-14 at 06.04.37.jpeg" width="200px" alt="Home"/>
          <p>Comel jilid 1</p>
        </div>     

        <div className="foto">
          <img src="c:\Users\PAVILION\Downloads\WhatsApp Image 2024-03-14 at 06.04.38 (1).jpeg" width="250px" alt="Home"/>
          <p>Comel jilid 2</p>
        </div>    

        <div className="foto">
          <img src="c:\Users\PAVILION\Downloads\jel.jpeg" width="250px" alt="Home"/>
          <p>Comel jilid 3</p>
        </div>    

        <div className="foto">
          <img src="c:\Users\PAVILION\Downloads\WhatsApp Image 2024-03-14 at 05.48.42.jpeg" width="350px" alt="Home"/>
          <p>Ini mah ceritanya jadi ukhty dulu seharian</p>
        </div>     

        <div className="foto">
          <img src="c:\Users\PAVILION\Downloads\NARI.jpeg" width="380px" alt="Home"/>
          <p>Nah ini pas penampilan Tarian Persembahan di acara pesta kepala sekolah</p>
        </div>     

        <div className="foto">
          <img src="c:\Users\PAVILION\OneDrive\Pictures\Foto Jelita\IMG-20221106-WA0031.jpg" width="380px" alt="Home"/>
          <p>Pernah ikut sanggar latahtuah juga (Nari) tapi cuma beberapa kali aja, sekarang udah enggak lagi</p>
        </div>     

        <div className="foto">
          <img src="c:\Users\PAVILION\OneDrive\Pictures\Foto Jelita\IMG-20220914-WA0059.jpg" width="380px" alt="Home"/>
          <p>Kalau ini ceritanya waktu pertama kali masuk lab langsung buka kamera hehe</p>
        </div>    

        <div className="foto">
          <img src="c:\Users\PAVILION\OneDrive\Pictures\Foto Jelita\IMG-20220830-WA0046.jpg" width="350px" alt="Home"/>
          <p>Ini waktu saya menjadi maba mulai banyak berkenalan dengan orang baru</p>
        </div>    
      </section>   
      <div className="penutup">
        <div className="tutup">
          <i>Sekian dan Terimakasih</i>  
        </div>  
      </div>
    </div> 
  );
}

export default Halamangaleri;
