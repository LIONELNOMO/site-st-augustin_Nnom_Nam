import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPrayingHands, FaCalendarAlt, FaMapMarkerAlt, FaCross, FaChurch, FaMountain, FaHandHoldingHeart, FaArrowRight } from 'react-icons/fa';
import './Pelerinage.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.12 } }
};

const programme = [
    {
        icon: <FaMapMarkerAlt />,
        title: 'Rassemblement des pèlerins',
        desc: 'Rendez-vous à l\'esplanade de l\'école Saint-Vincent de Paul à 7h00.',
        time: '07h00'
    },
    {
        icon: <FaMountain />,
        title: 'Procession priante',
        desc: 'montéé en communauté jusqu\'au sommet des collines.',
        time: null
    },
    {
        icon: <FaCross />,
        title: 'Confessions',
        desc: 'Sacrement de la réconciliation disponible pour tous les pèlerins.',
        time: null
    },
    {
        icon: <FaPrayingHands />,
        title: 'Méditation du Rosaire',
        desc: 'Méditation communautaire des mystères du Rosaire.',
        time: null
    },
    {
        icon: <FaChurch />,
        title: 'Sainte Messe',
        desc: 'Célébration eucharistique au sommet, point culminant du pèlerinage.',
        time: null
    },
];

export default function Pelerinage() {
    return (
        <div className="pelerinage page-wrapper">
            {/* Hero with background image */}
            <section className="pelerinage__hero">
                <div className="pelerinage__hero-bg">
                    <img
                        src="/images/mont des beatitudes  notre dame de beatitude.jpeg"
                        alt="Notre Dame des Béatitudes — Lieu de pèlerinage"
                    />
                    <div className="pelerinage__hero-overlay" />
                </div>
                <div className="container pelerinage__hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="pelerinage__hero-badge"
                    >
                        <FaMountain /> Lieu de Pèlerinage
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >
                        Notre Dame
                        <span className="pelerinage__hero-sub">des Béatitudes</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="pelerinage__hero-text"
                    >
                        Chaque premier samedi du mois, les pèlerins se rassemblent pour une montée
                        priante vers le sommet des collines, un moment de grâce et de recueillement.
                    </motion.p>
                </div>
            </section>

            {/* Date & Lieu */}
            <section className="pelerinage__info section">
                <div className="container">
                    <motion.div
                        className="pelerinage__info-cards"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div variants={fadeUp} className="pelerinage__info-card">
                            <div className="pelerinage__info-icon">
                                <FaCalendarAlt />
                            </div>
                            <h3>Quand ?</h3>
                            <p>Tous les <strong>premiers samedis</strong> du mois</p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="pelerinage__info-card">
                            <div className="pelerinage__info-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <h3>Où ?</h3>
                            <p>Esplanade de l'école <strong>Saint-Vincent de Paul</strong></p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="pelerinage__info-card">
                            <div className="pelerinage__info-icon">
                                <FaPrayingHands />
                            </div>
                            <h3>Heure</h3>
                            <p>Rassemblement à <strong>7h00</strong></p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Programme */}
            <section className="pelerinage__programme section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="section-title">Programme du Pèlerinage</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Les étapes de cette journée de grâce et de prière
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="pelerinage__steps">
                            {programme.map((step, i) => (
                                <div key={i} className="pelerinage__step">
                                    <div className="pelerinage__step-number">{i + 1}</div>
                                    <div className="pelerinage__step-icon">{step.icon}</div>
                                    <div className="pelerinage__step-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                        {step.time && (
                                            <span className="pelerinage__step-time">
                                                <FaCalendarAlt /> {step.time}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="pelerinage__cta section">
                <div className="container">
                    <motion.div
                        className="pelerinage__cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <FaHandHoldingHeart className="pelerinage__cta-icon" />
                        <h2>Rejoignez-nous pour le Prochain Pèlerinage</h2>
                        <p>
                            Venez vivre cette expérience spirituelle unique. Chaque premier samedi du mois,
                            marchons ensemble vers Notre Dame des Béatitudes.
                        </p>
                        <Link to="/contact" className="btn btn-gold">
                            Nous contacter <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
