import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode, faSearchDollar } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/Header';
import Banner from "../components/Banner";
import Footer from '../components/Footer';
import '../style/service.scss'



const Service = () => {
    const [isHovered, setIsHovered] = useState([false, false, false]);

    const handleMouseEnter = (index) => {
        const updatedStates = isHovered.map((state, i) => (i === index ? true : state));
        setIsHovered(updatedStates);
    };

    const handleMouseLeave = (index) => {
        const updatedStates = isHovered.map((state, i) => (i === index ? false : state));
        setIsHovered(updatedStates);}

    return (
        <div>
            <Header />
            <Banner />

                <div className="container mt-5"> 
                    <h2 className="service-title"> MON OFFRE DE SERVICES</h2>
            <p className="subtitle">Voici les prestations sur lesquelles je peux intervenir.</p>
                <div className='articles'>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <Card className="h-100"
                            onMouseEnter={() => handleMouseEnter(0)} 
                            onMouseLeave={() => handleMouseLeave(0)}>
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faDesktop} size="3x" className="mb-3" style={{ color: isHovered[0] ? " #cde1f8" : "#0d6efd", transition: "color 0.3s ease" }} />
                                    <Card.Title><strong>UX DESIGN</strong></Card.Title>
                                    <Card.Text className='custom-text'>
                                        L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur.
                                        Son but est d'offrir une expérience de navigation optimale a l'internaute.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 mb-4">
                            <Card className="h-100"
                            onMouseEnter={() => handleMouseEnter(1)} 
                            onMouseLeave={() => handleMouseLeave(1)}>
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faCode} size="3x" className="mb-3" style={{ color: isHovered[1] ? " #cde1f8" : "#0d6efd", transition: "color 0.3s ease" }} />
                                    <Card.Title><strong>DÉVELOPPEMENT WEB</strong></Card.Title>
                                    <Card.Text className='custom-text'>
                                        Le <strong>développement de sites web</strong> repose sur l'utilisation des languages HTML, CSS, JavaScript et PHP.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 mb-4">
                            <Card className="h-100"
                            onMouseEnter={() => handleMouseEnter(2)} 
                            onMouseLeave={() => handleMouseLeave(2)}>
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faSearchDollar} size="3x" className="mb-3" style={{ color: isHovered[2] ? " #cde1f8" : "#0d6efd", transition: "color 0.3s ease" }} />
                                    <Card.Title><strong>RÉFÉRENCEMENT</strong></Card.Title>
                                    <Card.Text className='custom-text'>
                                        Le <strong>référencement naturel d'un site,</strong> aussi appelé SEO, consiste à mettre des techniques en oeuvre 
                                        pour améliorer sa position dans les résultats des moteurs de recherche.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Service;