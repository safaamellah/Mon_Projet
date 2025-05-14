import "../style/App.css";
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom'; 
import Footer from './Footer';
import Apropos from "./Apropos"; 
import Accueil from './Accueil';
import Membres from './Membres';
import Projets from './Projets';
import Contact from './Contact';

function App() {
  return (
    <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/Membres" element={<Membres />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Projets" element={<Projets />} />
          <Route path="/Contact" element={<Contact />} /> 
        </Routes>
        <Footer />
    </div>
  );
}

export default App;

