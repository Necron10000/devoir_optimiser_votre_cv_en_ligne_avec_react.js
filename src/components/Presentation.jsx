import React from 'react';
import desktopImage from '../assets/img/hero-bg.jpg';
import tabletImage from '../assets/img/hero-bg-tablette.jpg';
import mobileImage from '../assets/img/hero-bg-mobile.jpg';



const Presentation = () => {
    return (
        <div className="position-relative">
          <picture>
                {/* Source pour ordinateurs */}
                <source media="(min-width: 1024px)" srcSet={desktopImage} />
                
                {/* Source pour tablettes */}
                <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={tabletImage} />
                
                {/* Source pour mobiles */}
                <source media="(max-width: 767px)" srcSet={mobileImage} />
                
                {/* Image de secours */}
                <img src={desktopImage} alt="John Doe" className="img-fluid w-100" style={{ maxHeight: '600px', width: '100%' }} />
            </picture>
        <div className="content text-center position-absolute top-50 start-50 translate-middle">
          <h1 className="display-4 text-white fs-sm-4 fs-md-3 fs-lg-2">Bonjour, je suis John Doe</h1>
          <h2 className="h4 text-white fs-sm6 fs-md-5 fs-lg-4 mb-4">Développeur web full stack</h2>
          <a href="#about" className="btn btn-primary btn-lg">En savoir plus</a>
        </div>
      </div>
    );
};

export default Presentation;