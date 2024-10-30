import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/Contactmestyle.scss';

const Contactme = () => {
    return (
        <div className='fond'>
        <div className="container">
            <div className="card border shadow">
                <div className="card-body text-center mt-3 mb-5">
                    <h2 className="card-title">ME CONTACTER</h2>
                    <p className="contact-title">Pour me contacter en vue de mon entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h3 className="form-title">Formulaire de Contact</h3>
                            <form className='mt-5'>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="name" placeholder="Nom" required />
                                    <label htmlFor="name">Votre nom</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="email" placeholder="E-mail" required />
                                    <label htmlFor="email">Votre adresse email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="tel" className="form-control" id="phone" placeholder="Numéro de téléphone" required />
                                    <label htmlFor="phone">Votre numéro de téléphone</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="subject" placeholder="Sujet" required />
                                    <label htmlFor="subject">Sujet</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="message" placeholder="Message" rows="7" style={{ height: 'auto' }} required></textarea>
                                    <label htmlFor="message">Votre message</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Envoyer</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <h3 className="info-title">Mes coordonnées</h3>
                            <p className="info-text mt-5">
                            <i className="fas fa-map-marker-alt"></i> 40 Rue Laure Diebold, 69009 Lyon, France</p>
                            <p className="info-text">
                            <i className="fas fa-phone-alt"></i> 06 20 30 40 50</p>
                            <iframe src="https://www.google.com/maps/embed?pb=..." className="map-iframe" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};


export default Contactme;