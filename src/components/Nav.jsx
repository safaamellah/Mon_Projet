import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';
import logoen from "../images/logoen.png"; 


const Banner = () => {
  return (
    <div className="banner">
     <strong>Enactus :</strong>  Réseau mondial inspirant les jeunes à résoudre les défis sociaux par l’entrepreneuriat 
    </div>
  );
};

function Navbar() {
  return (
    <>
      <Banner /> 
      <nav className="navbar-custom">
        <div className="navbar-container">
          <div className="logo">
           <Link to='/'><img src={logoen} alt="Logo Enactus" className="footer-main-logo" /></Link> 
          </div>
          <ul className="nav-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/Membres">Membres</Link></li>
            <li><Link to="/Apropos">À propos</Link></li>
            <li><Link to="/Projets">Projets</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  ); 
}

export default Navbar;
