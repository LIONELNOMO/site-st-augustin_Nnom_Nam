import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaWhatsapp, FaCheckCircle, FaPaperPlane, FaMapMarkedAlt } from 'react-icons/fa';
import './Contact.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', subject: '', message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = '237699598514';
        const message = [
            `🙏 *Nouveau message depuis le site de la Paroisse Saint Augustin*`,
            ``,
            `👤 *Nom :* ${formData.name}`,
            formData.email ? `📧 *Email :* ${formData.email}` : '',
            formData.phone ? `📞 *Téléphone :* ${formData.phone}` : '',
            `📌 *Sujet :* ${formData.subject}`,
            ``,
            `💬 *Message :*`,
            formData.message
        ].filter(Boolean).join('\n');

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="contact page-wrapper">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        Nous Contacter
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        N'hésitez pas à nous écrire ou à passer nous voir. Nous serons heureux de vous accueillir.
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact__content section">
                <div className="container">
                    <motion.div
                        className="contact__grid"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Form */}
                        <motion.div variants={fadeUp} className="contact__form-wrapper card">
                            <h2>Envoyez-nous un message</h2>

                            {submitted && (
                                <div className="contact__success">
                                    <FaCheckCircle />
                                    <div>
                                        <h3>Message envoyé !</h3>
                                        <p>Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="contact__form-row">
                                    <div className="contact__form-group">
                                        <label htmlFor="contact-name">Nom complet</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Votre nom"
                                            required
                                        />
                                    </div>
                                    <div className="contact__form-group">
                                        <label htmlFor="contact-email">Email</label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="votre@email.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="contact__form-row">
                                    <div className="contact__form-group">
                                        <label htmlFor="contact-phone">Téléphone</label>
                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+237 6XX XXX XXX"
                                        />
                                    </div>
                                    <div className="contact__form-group">
                                        <label htmlFor="contact-subject">Sujet</label>
                                        <input
                                            id="contact-subject"
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Objet de votre message"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="contact__form-group">
                                    <label htmlFor="contact-message">Message</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Votre message..."
                                        rows={6}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-gold contact__submit">
                                    <FaPaperPlane /> Envoyer le message
                                </button>
                            </form>
                        </motion.div>

                        {/* Info Side */}
                        <motion.div variants={fadeUp} className="contact__info">
                            <h2>Informations</h2>

                            <div className="contact__info-list">
                                <div className="contact__info-item">
                                    <div className="contact__info-icon"><FaMapMarkerAlt /></div>
                                    <div>
                                        <span className="contact__info-label">Adresse</span>
                                        <span className="contact__info-value">Nnom Nam, Yaoundé, Cameroun</span>
                                    </div>
                                </div>
                                <div className="contact__info-item">
                                    <div className="contact__info-icon"><FaPhone /></div>
                                    <div>
                                        <span className="contact__info-label">Téléphone</span>
                                        <span className="contact__info-value">+237 699 598 514</span>
                                    </div>
                                </div>
                                <div className="contact__info-item">
                                    <div className="contact__info-icon"><FaEnvelope /></div>
                                    <div>
                                        <span className="contact__info-label">Email</span>
                                        <span className="contact__info-value">contact@paroisse-staugustin.com</span>
                                    </div>
                                </div>
                                <div className="contact__info-item">
                                    <div className="contact__info-icon"><FaClock /></div>
                                    <div>
                                        <span className="contact__info-label">Secrétariat</span>
                                        <span className="contact__info-value">Lun - Ven : 8h - 16h</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="contact__social">
                                <h3>Suivez-nous</h3>
                                <div className="contact__social-links">
                                    <a href="#" className="contact__social-link" aria-label="Facebook"><FaFacebookF /></a>
                                    <a href="https://wa.me/237699598514" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="WhatsApp"><FaWhatsapp /></a>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="contact__map-placeholder">
                                <FaMapMarkedAlt />
                                <span>Paroisse Saint Augustin</span>
                                <p>Nnom Nam, Yaoundé</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
