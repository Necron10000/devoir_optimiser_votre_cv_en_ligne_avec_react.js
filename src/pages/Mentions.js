import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../style/Mentions.scss'


const Mentions = () => {
    return (
        <div>
            <Header/>

                <div className="container mt-5">
                {/* Meta empêcher l’indexation du moteur de recherche  */}
                <Helmet>
                    <meta name="robots" content="noindex, nofollow" />
                    <title>Mentions Légales</title>
                </Helmet>

                <h1 className='mention-title'>Mentions Légales</h1>
                    <Accordion defaultActiveKey="0" className="mt-3">
                    {/* Editeur du site */}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Éditeur du site</Accordion.Header>
                            <Accordion.Body className='accordion-body'>
                            <h3>
                                John Doe
                            </h3>
                            <p>
                                <i className="fas fa-map-marker-alt"></i>
                                40 Rue Laure Diebold <br/>
                                69009 Lyon, France <br/>
                                <i className="fas fa-phone-alt"></i>
                                <a href="tel:0620304050" className='unstyle'>06 20 30 40 50</a> <br/>
                                <i className="fas fa-envelope"></i>
                                <a href="maito:john.doe@gmail.com" className='unstyle'>john.doe@gmail.com</a>
                            </p>
                            </Accordion.Body>
                        </Accordion.Item>

                    {/* Hébergeur */}
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Hébergeur</Accordion.Header>
                            <Accordion.Body className='accordion-body'>
                            <h3>
                                Always Data
                                </h3>
                                <p>
                                91 rue du Faubourg Saint Honoré <br/>
                                75008 Paris
                                </p>
                                <p>
                                <i className="fas fa-globe"></i>
                                <a href='http://www.alwaysdata.com'target='_blank'>www.alwaysdata.com</a>
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                    {/* Crédits */}
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Crédits</Accordion.Header>
                            <Accordion.Body className='accordion-body'>
                                <h3>
                                    Crédits
                                </h3>
                                <p>
                                    Site développé par John Doe, étudiant du CEF. 
                                </p>
                                <p>
                                Les images libres de droit sont issues du site {" "}
                                    <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer" className='unstyle'>Pixabay</a>.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                </div>

            <Footer />
        </div>
    );
};

export default Mentions;