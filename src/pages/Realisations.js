import React from 'react';
import Header from '../components/Header';
import Banner from "../components/Banner";
import Footer from '../components/Footer';
import '../style/realisations.scss';
import { Card, Button } from 'react-bootstrap';
import freshFood from '../assets/img/realisation/fresh-food.jpg';
import espaceBienEtre from '../assets/img/realisation/espace-bien-etre.jpg';
import restaurantJaponais from '../assets/img/realisation/restaurant-japonais.jpg';

const Realisations = () => {
    return (
        <div>
            <Header />
            <Banner />

                <div className="container mt-5"> 
                    <h2 className="portfolio-title"> PORTFOLIO</h2>
            <p className="subtitle">Voici quelques-unes de mes réalisations.</p>
                <div className='articles'>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <Card className="h-100"> {/* Utiliser la classe "h-100" pour rendre les cartes de hauteur égale */}
                                <Card.Img variant="top" src={freshFood} alt="Fresh Food"/>
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <Card.Title className='cardTitle'>Fresh food</Card.Title>
                                    <Card.Text className='cardText'>Réalisation d'un site avec commande en ligne.</Card.Text>
                                    <Button variant="outline-primary">Voir</Button>
                                </Card.Body>
                                <Card.Footer className='cardFooter'>Site réalisé avec PHP et MySQL</Card.Footer>
                            </Card>
                        </div>
                        <div className="col-md-4 mb-4">
                            <Card className="h-100"> {/* Utiliser la classe "h-100" pour rendre les cartes de hauteur égale */}
                                <Card.Img variant="top" src={restaurantJaponais} alt="Restaurant Japonais" />
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <Card.Title className='cardTitle'>Restaurant Akira</Card.Title>
                                    <Card.Text className='cardText'>Réalisation d'un site vitrine.</Card.Text>
                                    <Button variant="outline-primary">Voir</Button>
                                </Card.Body>
                                <Card.Footer className='cardFooter'>Site réalisé avec WoodPress</Card.Footer>
                            </Card>
                        </div>
                        <div className="col-md-4 mb-4">
                            <Card className="h-100"> {/* Utiliser la classe "h-100" pour rendre les cartes de hauteur égale */}
                                <Card.Img variant="top" src={espaceBienEtre} alt="Espace Bien-Etre"/>
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <Card.Title className='cardTitle'>Espace bien-être</Card.Title>
                                    <Card.Text className='cardText'>Réalition d'un site vitrine pour un patricien de bien-être.</Card.Text>
                                    <Button variant="outline-primary">Voir</Button>
                                </Card.Body>
                                <Card.Footer className='cardFooter'>Site réalisé en HTML/CSS</Card.Footer>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Realisations;