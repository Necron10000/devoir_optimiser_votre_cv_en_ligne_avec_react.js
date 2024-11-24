import { React, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import officeWork from '../assets/img/john-doe-about.jpg';
import  "../style/Aboutme.scss";


const Aboutme = () => {

    const aboutRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#apropos" && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);


    return (
        <div className="container mt-4" id="apropos" ref={aboutRef}>
            <div className="card border shadow-lg d-inline-block w-auto mx-auto">
                <div className="card-body p-4 m-4">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="card-title">À Propos</h2>
                            <hr className="highlight-line  border-top border-primary border-3" />
                            <p className="card-text">Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation,
                            j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web.</strong><br/><br/>
                            Basé à Lyon, je suis en recherche d'alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack.</strong><br/><br/>
                            J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center img-container mb-4">
                                <img src={officeWork} alt="Illustration" className="img-fluid rounded" style={{ height: 'auto', maxHeight: '200x' }}/>
                            </div>

                            <h2 className="card-title">Mes compétences</h2>
                            HTML5 90%
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            CSS3 80%
                            <div className="progress mb-3">
                                <div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            JAVASCRIPT 70%
                            <div className="progress mb-3">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            PHP 60%
                            <div className="progress mb-3">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: '60%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            REACT 50%
                            <div className="progress mb-3">
                                <div className="progress-bar bg-primary" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Aboutme; 