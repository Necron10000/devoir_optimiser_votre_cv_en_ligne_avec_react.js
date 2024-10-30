import React from 'react';
import desktopImage from '../assets/img/banner/banner.jpg'
import tabletImage from '../assets/img/banner/banner-tablette.jpg'
import mobileImage from '../assets/img/banner/banner-mobile.jpg'

const Banner = () => {
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
        </div>
    );
};

export default Banner;