import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import '../style/Accueil.css';
import '../style/Apropos.css';
import '../style/Projets.css';
import { Link } from 'react-router-dom';
import Contact from'../components/Contact.jsx';

import younesImg from '../images/younes.png';
import maryamImg from '../images/maryam.png';
import wiamImg from '../images/wiam.png';
import ammarImg from '../images/ammar.png';
import hindImg from '../images/hind.png';
import abdelImg from '../images/abdelwadoud.png';
import basmaImg from '../images/basma.png';
import imaneImg from '../images/imane.png';

import biogazifyIMG from '../logos/biogazify.png';
import bistrokabIMG from '../logos/bistrokab.png';
import BotabakaIMG from '../logos/Botabaka.png';
import bottle3DIMG from '../logos/bottle3D.png';
import educlassmingleIMG from '../logos/educlassmingle.png';
import enboIMG from '../logos/enbo.png';
import potrinovIMG from '../logos/potrinov.png';
import reskinIMG from '../logos/reskin.png';
import sitautiIMG from '../logos/sitauti.png';
import unirideIMG from '../logos/uniride.png';
import voltainosIMG from '../logos/voltainos.png';

const members = [
  { name: "Younes TAOUMI", role: "Team Leader", image: younesImg },
  { name: "Maryam BADRI", role: "Vice Team Leader", image: maryamImg },
  { name: "Wiam ABOUTARA BELRHITI", role: "Vice President Project", image: wiamImg },
  { name: "Ammar MASSAOUDI", role: "Communication Manager", image: ammarImg },
  { name: "Hind ZAKY", role: "Human Ressources Manager", image: hindImg },
  { name: "Abdelwadoud EL BAROUJI", role: "Treasurer", image: abdelImg },
  { name: "Basma JAWHAR", role: "Event Manager", image: basmaImg },
  { name: "Imane OUAZZANI CHAHDI", role: "Head of partnerships", image: imaneImg },
];

const projets = [
  { nom: "Biogazify", description: "Projet visant à convertir le biogaz issu de déchets organiques en énergie pratique pour la cuisine.", lien: "", logo: biogazifyIMG },
  { nom: "Bistrokabb", description: "Valorisation des câpres marocaines en produits sains, soutenant les producteurs et l’artisanat local.", lien: "https://www.instagram.com/bistro_kabb/?utm_source=ig_web_button_share_sheet", logo: bistrokabIMG },
  { nom: "Botaba9a", description: "Capteur intelligent pour mesurer le gaz restant et éviter les coupures inattendues.", lien: "https://www.instagram.com/botaba9a/?utm_source=ig_web_button_share_sheet", logo: BotabakaIMG },
  { nom: "Bottle3D", description: "Collecte et recyclage des bouteilles plastiques en filaments pour imprimantes 3D.", lien: "", logo: bottle3DIMG },
  { nom: "Educlass Mingle", description: "Site web combinant réseau social et étude pour faciliter apprentissage et révision.", lien: "https://www.instagram.com/educlassmingle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", logo: educlassmingleIMG },
  { nom: "Enbo", description: "Boîtes écologiques à trois couches faites de matériaux recyclés pour une meilleure traçabilité.", lien: "", logo: enboIMG },
  { nom: "Potrinov", description: "Poterie artisanale modernisée, mêlant tradition et innovation digitale.", lien: "https://www.instagram.com/potrinov.ma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", logo: potrinovIMG },
  { nom: "Reskin", description: "Transformation des déchets alimentaires en cosmétiques durables et respectueux de l’environnement.", lien: "https://www.instagram.com/reskincosmetique?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", logo: reskinIMG },
  { nom: "Sitauti", description: "Plateforme interactive de soutien aux personnes autistes et à leurs familles.", lien: "https://www.instagram.com/sit.auti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", logo: sitautiIMG },
  { nom: "Uniride", description: "Application de covoiturage étudiant, promouvant une mobilité durable et économique au Maroc.", lien: "https://www.instagram.com/uniride_etu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", logo: unirideIMG },
  { nom: "Voltainos", description: "Solution énergétique combinant énergie éolienne et technologie piézoélectrique.", lien: "", logo: voltainosIMG },
];

const Accueil = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className='tout'>
      <div>
        <video autoPlay loop muted playsInline className="background-video">
          <source src={require('../images/Enactus.mp4')} type="video/mp4" />
        </video>

        {/* Section équipe */}
        <section className="equipe-section">
          <h2 className="equipe-titre">Notre Équipe</h2>
          <div className="equipe-membres">
            {members.map((member, index) => (
              <motion.div
                key={index}
                className="membre-carte"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={member.image} alt={member.name} className="membre-photo" />
                <h3 className="membre-nom">{member.name}</h3>
                <p className="membre-role">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section À propos */}
         <section>
      <h1><strong>À propos de nous</strong></h1>
      <p>
        Depuis 2014, Enactus FSBM rassemble des étudiants passionnés par l’entrepreneuriat social.
        <br />
        <strong>40+</strong> projets, <strong>1000+</strong> étudiants mobilisés, <strong>500+</strong> vies changées.
      </p>

          <div className="carousel-wrapper">
            <button className="nav left" onClick={() => scrollCarousel("left")} aria-label="Gauche">
              &lt;
            </button>

            <div className="carousel-container" ref={carouselRef}>
              {[
                { title: "Top 12", text: "Classement national 2023-2024" },
                { title: "13", text: "ODD touchés" },
                { title: "3000h+", text: "Heures de formation" },
                { title: "40+", text: "Projets réalisés" },
                { title: "300+", text: "Entreprises créées" },
                { title: "10 000", text: "Jeunes mobilisés" },
                { title: "120", text: "Établissements univers affiliés" },
              ].map((item, index) => (
                <div key={index} className="product-card" tabIndex="0">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <button className="nav right" onClick={() => scrollCarousel("right")} aria-label="Droite">
              &gt;
            </button>
          </div>

          <p className="formule">
            Enactus = <span>Entrepreneuriat</span> + <span>Action</span> + <span>Us</span>
          </p>
        </section>

        {/* Section Projets */}
        <section className="projets-section">
          <h2 className="projets-title">Nos Projets</h2>
          <div className="projets-grid">
            {projets.map((projet, index) => (
              <div key={index} className="projet-card">
                <img src={projet.logo} alt={projet.nom} className="projet-logo" />
                <div className="projet-content">
                  <h3>{projet.nom}</h3>
                  <p>{projet.description}</p>
                  {projet.lien && (
                    <a href={projet.lien} target="_blank" rel="noopener noreferrer" className="projet-link">
                      Voir sur Instagram
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>    
    </div>
  );
};

export default Accueil;

