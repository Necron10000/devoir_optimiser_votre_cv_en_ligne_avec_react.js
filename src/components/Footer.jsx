import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../style/footerstyle.scss';


const Footer = () => {
    // Fonction nouvelle puce
    const arrowIcon = <FontAwesomeIcon icon={faAngleRight} className='arrowIcon'/>;

    // État pour gérer la visibilité de la flèche "Scroll to Top"
      const [isVisible, setIsVisible] = useState(false);

    // Fonction pour vérifier la position de scroll et mettre à jour la visibilité
      const toggleVisibility = () => {
        console.log("Scroll Y:", window.scrollY);
        setIsVisible(window.scrollY > 100); // Affiche la flèche après 300 pixels de défilement
        };

      // Fonction pour remonter en haut de la page
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

        // Ajout de l'écouteur de scroll
          useEffect(() => {
            window.addEventListener("scroll", toggleVisibility);
              return () => {
                window.removeEventListener("scroll", toggleVisibility);
              };
          },[]);

  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* 1re colonne */}
          <div className="col-md-3">
            <h5><strong>John Doe</strong></h5>
            <div>
              <p>40 Rue Laure Diebold <br/>
              69009 Lyon, France <br/>
              Téléphone: 06 20 30 40 50</p>
            
                  {/* Icônes des réseaux professionnels */}
                  <a className='customIcon mr-1' href="/GitHubProfile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px' }}/>
                  </a>
                  <a className='customIcon mx-4' href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '24px' }}/>
                  </a>
                  <a className='customIcon ml-2' href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px' }}/>
                  </a>
              </div>
          </div>
          {/* 2e colonne */}
          <div className="col-md-3">
            <h5><strong>Liens utiles</strong></h5>
            <ul className= 'customBullets'>
              <li>{arrowIcon}<a href="/">Accueil</a></li>
              <li>{arrowIcon}<a href="/#apropos">À propos</a></li>
              <li>{arrowIcon}<a href="/service">Services</a></li>
              <li>{arrowIcon}<a href="/contact">Me Contacter</a></li>
              <li>{arrowIcon}<a href="/mentions">Mentions légales</a></li>
              {/* Exclure les liens vers les réalisations et les articles de blog */}
            </ul>
          </div>
          {/* 3e colonne */}
          <div className="col-md-3">
            <h5><strong>Mes dernières réalisations</strong></h5>
            <ul className= 'customBullets'>
              <li>{arrowIcon}<a href="/realisations">Fresh food</a></li>
              <li>{arrowIcon}<a href="/realisations">Restaurant Akira</a></li>
              <li>{arrowIcon}<a href="/realisations">Espace bien-être</a></li>
              {/* Ajouter des liens vers les dernières réalisations */}
            </ul>
          </div>
          {/* 4e colonne */}
          <div className="col-md-3">
            <h5><strong>Mes derniers articles</strong></h5>
            <ul className= 'customBullets'>
              <li>{arrowIcon}<a href="/blog">Coder son site en HTML/CSS</a></li>
              <li>{arrowIcon}<a href="/blog">Vendre ses produit sur le web</a></li>
              <li>{arrowIcon}<a href="/blog">Se positionner sur Google</a></li>
              {/* Ajouter des liens vers les derniers articles de blog */}
              </ul>
          </div>
        </div>
      </div>

      {/* Flèche "Scroll to Top" */}
      {isVisible && (
        <div
          className="scroll-to-top"
          style={{position: "fixed", bottom: "1.5%", left: "1%", zIndex: 1000, width: "50px", height: "50px", fontSize: "24px", 
                  padding: "10px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",}}
        >
          <a href="#" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faAngleUp} />
          </a>
        </div>
        )}

      {/* Ligne de copyright */}
      <div className="copyright text-center pt-3 border border-dark bg-black text-light">
        <p>&copy; Designed by John Doe</p>
      </div>
    </footer>
  );
};


export default Footer;