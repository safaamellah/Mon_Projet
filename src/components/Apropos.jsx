import React, { useRef } from 'react';
import '../style/Apropos.css';

function Apropos() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    container.scrollLeft += direction === 'left' ? -300 : 300;
  };

  return (
    <section>
      <h1><strong>À propos de nous</strong></h1>
      <p>
        Depuis 2014, Enactus FSBM rassemble des étudiants passionnés par l’entrepreneuriat social.
        <br />
        <strong>40+</strong> projets, <strong>1000+</strong> étudiants mobilisés, <strong>500+</strong> vies changées.
      </p>

      <div className="carousel-wrapper">
        <button className="nav left" onClick={() => scrollCarousel("left")}>&lt;</button>

        <div className="carousel-container" ref={carouselRef}>
          {[
            { title: "Top 12", desc: "Classement national 2023-2024" },
            { title: "13", desc: "ODD touchés" },
            { title: "3000h+", desc: "Heures de formation" },
            { title: "40+", desc: "Projets réalisés" },
            { title: "300+", desc: "Entreprises créées" },
            { title: "10 000", desc: "Jeunes mobilisés" },
            { title: "120", desc: "Établissements affiliés" },
          ].map((item, index) => (
            <div className="product-card" key={index} tabIndex="0">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="nav right" onClick={() => scrollCarousel("right")}>&gt;</button>
      </div>

      <p className="formule">
        Enactus = <span>Entrepreneuriat</span> + <span>Action</span> + <span>Us</span>
      </p>
    </section>
  );
}

export default Apropos;


