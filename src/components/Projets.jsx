import React from 'react';
import '../style/Projets.css'; 
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

const projets = [
  {
    nom: "Biogazify",
    description: "Projet visant à convertir le biogaz issu de déchets organiques en énergie pratique pour la cuisine.",
    lien: "",
    logo: biogazifyIMG 
  },
  {
    nom: "Bistrokabb",
    description: "Valorisation des câpres marocaines en produits sains, soutenant les producteurs et l’artisanat local.",
    lien: "https://www.instagram.com/bistro_kabb/?utm_source=ig_web_button_share_sheet",
    logo: bistrokabIMG
  },
  {
    nom: "Botaba9a",
    description: "Capteur intelligent pour mesurer le gaz restant et éviter les coupures inattendues.",
    lien: "https://www.instagram.com/botaba9a/?utm_source=ig_web_button_share_sheet",
    logo: BotabakaIMG
  },
  {
    nom: "Bottle3D",
    description: "Collecte et recyclage des bouteilles plastiques en filaments pour imprimantes 3D.",
    lien: "",
    logo: bottle3DIMG 
  },
  {
    nom: "Educlass Mingle",
    description: "Site web combinant réseau social et étude pour faciliter apprentissage et révision.",
    lien: "https://www.instagram.com/educlassmingle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    logo: educlassmingleIMG
  },
  {
    nom: "Enbo",
    description: "Boîtes écologiques à trois couches faites de matériaux recyclés pour une meilleure traçabilité.",
    lien: "",
    logo: enboIMG
  },
  {
    nom: "Potrinov",
    description: "Poterie artisanale modernisée, mêlant tradition et innovation digitale.",
    lien: "https://www.instagram.com/potrinov.ma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    logo: potrinovIMG
  },
  {
    nom: "Reskin",
    description: "Transformation des déchets alimentaires en cosmétiques durables et respectueux de l’environnement.",
    lien: "https://www.instagram.com/reskincosmetique?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    logo: reskinIMG
  },
  {
    nom: "Sitauti",
    description: "Plateforme interactive de soutien aux personnes autistes et à leurs familles.",
    lien: "https://www.instagram.com/sit.auti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    logo: sitautiIMG
  },
  {
    nom: "Uniride",
    description: "Application de covoiturage étudiant, promouvant une mobilité durable et économique au Maroc.",
    lien: "https://www.instagram.com/uniride_etu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    logo: unirideIMG
  },
  {
    nom: "Voltainos",
    description: "Solution énergétique combinant énergie éolienne et technologie piézoélectrique.",
    lien: "",
    logo: voltainosIMG
  }
];

function Projets() {
  return (
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
  );
}

export default Projets;
