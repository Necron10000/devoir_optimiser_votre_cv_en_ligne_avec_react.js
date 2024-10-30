import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode, faSearchDollar } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/Header';
import Banner from "../components/Banner";
import Footer from '../components/Footer';
import '../style/service.scss'


const Service = () => {
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
                            <Card className="h-100">
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faDesktop} size="3x" className="mb-3" style={{ color: "#0d6efd" }} />
                                    <Card.Title><strong>UX DESIGN</strong></Card.Title>
                                    <Card.Text className='custom-text'>
                                        L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur.
                                        Son but est d'offrir une expérience de navigation optimale a l'internaute.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 mb-4">
                            <Card className="h-100"> {/* Utiliser la classe "h-100" pour rendre les cartes de hauteur égale */}
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faCode} size="3x" className="mb-3" style={{ color: "#0d6efd" }} />
                                    <Card.Title><strong>DÉVELOPPEMENT WEB</strong></Card.Title>
                                    <Card.Text className='custom-text'>
                                        Le <strong>développement de sites web</strong> repose sur l'utilisation des languages HTML, CSS, JavaScript et PHP.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 mb-4">
                            <Card className="h-100"> {/* Utiliser la classe "h-100" pour rendre les cartes de hauteur égale */}
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faSearchDollar} size="3x" className="mb-3" style={{ color: "#0d6efd" }} />
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