import React from 'react';
import younesImg from '../images/younes.png';
import maryamImg from '../images/maryam.png';
import wiamImg from '../images/wiam.png';
import ammarImg from '../images/ammar.png';
import hindImg from '../images/hind.png';
import abdelImg from '../images/abdelwadoud.png';
import basmaImg from '../images/basma.png';
import imaneImg from '../images/imane.png';
import '../style/membres.css'; 

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

const Members = () => {
  return (
    <section className="equipe-section">
      <h2 className="equipe-titre">Notre Équipe</h2>
      <div className="equipe-membres">
        {members.map((member, index) => (
          <div className="membre-carte fade-in" style={{ animationDelay: `${index * 0.2}s` }} key={index}>
            <img src={member.image} alt={member.name} className="membre-photo" />
            <h3 className="membre-nom">{member.name}</h3>
            <p className="membre-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;


