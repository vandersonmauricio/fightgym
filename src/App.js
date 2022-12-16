import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/layout/Home'
import Empresa from './components/layout/Horario'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Horario from './components/layout/Horario'
import Contrate from './components/layout/ContrateSeuPlano'
import Galeria from './components/layout/Galeria'
import Blog from './components/layout/Blog'
import Contato from './components/layout/Contato'

function App() {
  return (
    <Router>
      
      <Navbar/>
      <Container customClass="min-height">  
        <Routes>
        <Route index element={<Home/>}/>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/academia" element={<Empresa/>}></Route>
        <Route path="/contrateseuplano" element={<Contrate/>}></Route>
        <Route path="/horarios" element={<Horario/>}></Route>
        <Route path="/galeria" element={<Galeria/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
       </Routes>
       </Container>
    <Footer/>
</Router>
  );
}

export default App;
