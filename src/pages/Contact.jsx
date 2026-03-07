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
    const phoneNumber = '237699995137'; // Numéro du curé
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Bonjour mon père, je vous contacte depuis le site web de la paroisse.")}`;

    return (
        <div className="contact page-wrapper">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        Nous Contacter
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        Besoin d'information ? Rencontrer un prêtre ? Nous sommes à votre écoute.
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
                        {/* WhatsApp CTA Card */}
                        <motion.div variants={fadeUp} className="contact__wa-card card">
                            <div className="contact__wa-icon-wrapper">
                                <FaWhatsapp className="contact__wa-icon" />
                            </div>
                            <h2>Discuter avec le Curé</h2>
                            <p>
                                Pour toute information, intention de messe ou besoin d'accompagnement spirituel,
                                vous pouvez contacter directement le secrétariat ou le curé via WhatsApp.
                            </p>

                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                <FaWhatsapp /> Envoyer un message WhatsApp
                            </a>

                            <div className="contact__wa-number">
                                <span>Numéro du curé :</span>
                                <strong>+237 699 99 51 37</strong>
                            </div>
                        </motion.div>

                        {/* Info Side */}
                        <motion.div variants={fadeUp} className="contact__info">
                            <h2>Informations</h2>

                            <div className="contact__info-list">
                                <div className="contact__info-item">
                                    <div className="contact__info-icon"><FaMapMarkerAlt /></div>
                                    <div>
                                        <span className="contact__info-label">Adresse</span>
                                        <span className="contact__info-value">NNOM-NNAM, Yaoundé, Cameroun</span>
                                    </div>
                                </div>
                                <div className="contact__info-item">
                                    <div className="contact__info-icon"><FaPhone /></div>
                                    <div>
                                        <span className="contact__info-label">Téléphone</span>
                                        <span className="contact__info-value">+237 699 99 51 37</span>
                                    </div>
                                </div>
                                <div className="contact__info-item">
                                    <div className="contact__info-icon"><FaEnvelope /></div>
                                    <div>
                                        <span className="contact__info-label">Email</span>
                                        <span className="contact__info-value">saintaugustinnnomnnam@yahoo.fr</span>
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
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="WhatsApp"><FaWhatsapp /></a>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="contact__map-placeholder">
                                <FaMapMarkedAlt />
                                <span>Paroisse Saint Augustin</span>
                                <p>NNOM-NNAM, Yaoundé</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
