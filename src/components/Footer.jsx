import '../style/Footer.css';
import logo from '../images/logo.png'; 
import fbIcon from '../images/fc.png';
import xIcon from '../images/twitter.jpg';
import inIcon from '../images/in.png';
import instIcon from '../images/inst.png';
import ytbIcon from '../images/ytb.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-logo">
          <img src={logo} alt="Logo Enactus" />
          <p>Technopark, 10 Rue Ghandi, Rabat - Maroc</p>
          <p>contact@enactus-morocco.org</p>
          <p>+212 537 730 135</p>
        </div>

        <div className="footer-middle">
          <h3><span>En</span>trepreneuriat</h3>
          <p>Transformer les idées en actions concrètes créatrices de valeur.</p>
          <h3><span>Ac</span>tion</h3>
          <p>Passer à l'action sur le terrain avec impact.</p>
          <h3><span>Us</span></h3>
          <p>Une communauté engagée de leaders du changement.</p>
        </div>

        <div className="footer-right">
  <h3>Suivez-nous</h3>

  <div className="social-icons">
  <a href="https://web.facebook.com/EnactusMorocco?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="icon-container facebook">
    <img src={fbIcon} alt="Facebook" />
  </a>
  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fenactusmorocco" target="_blank" rel="noopener noreferrer" className="icon-container twitter">
    <img src={xIcon} alt="Twitter" />
  </a>
  <a href="https://www.linkedin.com/company/enactus-morocco" target="_blank" rel="noopener noreferrer" className="icon-container linkedin">
    <img src={inIcon} alt="LinkedIn" />
  </a>
  <a href="https://www.instagram.com/enactusmorocco/" target="_blank" rel="noopener noreferrer" className="icon-container instagram">
    <img src={instIcon} alt="Instagram" />
  </a>
  <a href="https://www.youtube.com/channel/UCJknEq0AqwwkhWqCePqrDDA" target="_blank" rel="noopener noreferrer" className="icon-container youtube">
    <img src={ytbIcon} alt="YouTube" />
  </a>
</div>

<button className="newsletter-btn">
  <i className="far fa-envelope"></i>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdT8yKLBsacmwLaHnE7yMdQwmbCFSimkslpW0dkH4eWmCP5mA/viewform" target="_blank" rel="noopener noreferrer"> Rejoignez-nous </a>
</button>

</div>

      </div>

      <div className="footer-bottom">
        <p><strong>ENACTUS MOROCCO</strong> © 2024 TOUS DROITS RÉSERVÉS — <a href="#">POLITIQUE DE CONFIDENTIALITÉ</a></p>
      </div>
    </footer>
  );
};
export default Footer;