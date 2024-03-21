import Indexs from './pages/Indexs';
import Home from './pages/Home';
import Biodatadiri from './pages/Biodatadiri';
import Halamangaleri from './pages/Halamangaleri';
import Halamanportofolio from './pages/Halamanportofolio';
import Halamanprestasi from './pages/Halamanprestasi';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return ( 
<>
<BrowserRouter>
    <Routes>
      <Route path='Indexs' element = {<Indexs/>} />
      <Route path='/Rumah' element = {<Home/>} />
      <Route path='/Biodata' element = {<Biodatadiri/>} />
      <Route path='/Galeri' element = {<Halamangaleri/>} />
      <Route path='Portofolio' element = {<Halamanportofolio/>} />
      <Route path='/Prestasi' element = {<Halamanprestasi/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;