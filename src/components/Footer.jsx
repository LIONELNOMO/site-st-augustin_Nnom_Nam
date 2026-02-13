import { Link } from 'react-router-dom';
import { FaChurch, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaCross } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__wave">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0,40 C360,120 720,0 1080,80 C1260,120 1380,60 1440,40 L1440,120 L0,120 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="footer__content">
                <div className="container">
                    <div className="footer__grid">
                        {/* Brand Column */}
                        <div className="footer__col footer__brand">
                            <div className="footer__logo">
                                <FaChurch className="footer__logo-icon" />
                                <div>
                                    <h3>Paroisse Saint Augustin</h3>
                                    <span>de Nnom Nam</span>
                                </div>
                            </div>
                            <p className="footer__desc">
                                Une communauté de foi en construction, unie dans la prière et l'espérance.
                                Ensemble, bâtissons notre maison de Dieu.
                            </p>
                            <div className="footer__social">
                                <a href="#" className="footer__social-link" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer__col">
                            <h4>Navigation</h4>
                            <ul className="footer__links">
                                <li><Link to="/">Accueil</Link></li>
                                <li><Link to="/a-propos">À Propos</Link></li>
                                <li><Link to="/horaires">Horaires & Sacrements</Link></li>
                                <li><Link to="/evenements">Événements</Link></li>
                                <li><Link to="/dons">Faire un don</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Horaires */}
                        <div className="footer__col">
                            <h4>Horaires des Messes</h4>
                            <ul className="footer__schedule">
                                <li>
                                    <FaCross className="footer__schedule-icon" />
                                    <div>
                                        <strong>Dimanche</strong>
                                        <span>08h00 - 10h00</span>
                                    </div>
                                </li>
                                <li>
                                    <FaCross className="footer__schedule-icon" />
                                    <div>
                                        <strong>Mercredi</strong>
                                        <span>18h00 - 19h00</span>
                                    </div>
                                </li>
                                <li>
                                    <FaCross className="footer__schedule-icon" />
                                    <div>
                                        <strong>Vendredi</strong>
                                        <span>18h00 - 19h00</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer__col">
                            <h4>Contact</h4>
                            <ul className="footer__contact">
                                <li>
                                    <FaMapMarkerAlt />
                                    <span>Nnom Nam, Cameroun</span>
                                </li>
                                <li>
                                    <FaPhone />
                                    <span>+237 6XX XXX XXX</span>
                                </li>
                                <li>
                                    <FaEnvelope />
                                    <span>paroisse.staugustin@email.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <p>&copy; {currentYear} Paroisse Saint Augustin de Nnom Nam. Tous droits réservés.</p>
                    <p className="footer__credit">Conçu avec ❤️ et foi</p>
                </div>
            </div>
        </footer>
    );
}
