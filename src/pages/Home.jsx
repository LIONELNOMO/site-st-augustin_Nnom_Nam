import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChurch, FaCross, FaCalendarAlt, FaHandHoldingHeart, FaHardHat, FaPrayingHands, FaArrowRight } from 'react-icons/fa';
import './Home.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
};

const scheduleData = [
    { day: 'Dimanche', time: '08h00 - 10h00', label: 'Messe dominicale' },
    { day: 'Mercredi', time: '18h00 - 19h00', label: 'Messe en semaine' },
    { day: 'Vendredi', time: '18h00 - 19h00', label: 'Chemin de croix & Messe' },
];

const upcomingEvents = [
    {
        date: '22 Fév',
        title: 'Journée de prière communautaire',
        desc: 'Rassemblement pour prier pour l\'avancée des travaux de construction de notre église.',
        icon: <FaPrayingHands />
    },
    {
        date: '08 Mars',
        title: 'Collecte de fonds',
        desc: 'Grande collecte pour financer les travaux de construction. Chaque contribution compte !',
        icon: <FaHandHoldingHeart />
    },
    {
        date: '15 Mars',
        title: 'Bénédiction du chantier',
        desc: 'Cérémonie spéciale de bénédiction pour la prochaine étape de construction.',
        icon: <FaChurch />
    },
];

export default function Home() {
    return (
        <div className="home">
            {/* ===== HERO SECTION ===== */}
            <section className="hero">
                <div className="hero__overlay" />
                <div className="hero__particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="hero__particle" style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }} />
                    ))}
                </div>
                <div className="hero__content container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero__badge"
                    >
                        <FaHardHat /> Paroisse en construction
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >
                        Paroisse Saint Augustin
                        <span className="hero__subtitle">de Nnom Nam</span>
                    </motion.h1>

                    <motion.p
                        className="hero__text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Ensemble, bâtissons notre maison de Dieu. Une communauté de foi,
                        d'espérance et de charité au cœur de Nnom Nam.
                    </motion.p>

                    <motion.div
                        className="hero__buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <Link to="/dons" className="btn btn-gold">
                            <FaHandHoldingHeart /> Contribuer au projet
                        </Link>
                        <Link to="/a-propos" className="btn btn-outline">
                            Découvrir la paroisse
                        </Link>
                    </motion.div>
                </div>

                <div className="hero__scroll-indicator">
                    <span>Défiler vers le bas</span>
                    <div className="hero__scroll-line" />
                </div>
            </section>

            {/* ===== CONSTRUCTION PROGRESS ===== */}
            <section className="construction section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div variants={fadeUp} className="construction__header">
                            <span className="construction__label">
                                <FaHardHat /> Projet en cours
                            </span>
                            <h2 className="section-title">Notre Église se Construit</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Avec votre soutien et la grâce de Dieu, notre paroisse prend forme
                                jour après jour. Suivez l'avancement de notre projet.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="construction__progress-wrapper">
                            <div className="construction__progress-bar">
                                <div className="construction__progress-fill" style={{ width: '35%' }}>
                                    <span className="construction__progress-text">35%</span>
                                </div>
                            </div>
                            <div className="construction__milestones">
                                <div className="construction__milestone construction__milestone--done">
                                    <div className="construction__milestone-dot" />
                                    <span>Fondations</span>
                                </div>
                                <div className="construction__milestone construction__milestone--done">
                                    <div className="construction__milestone-dot" />
                                    <span>Murs</span>
                                </div>
                                <div className="construction__milestone construction__milestone--active">
                                    <div className="construction__milestone-dot" />
                                    <span>Toiture</span>
                                </div>
                                <div className="construction__milestone">
                                    <div className="construction__milestone-dot" />
                                    <span>Finitions</span>
                                </div>
                                <div className="construction__milestone">
                                    <div className="construction__milestone-dot" />
                                    <span>Inauguration</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="construction__cta">
                            <Link to="/dons" className="btn btn-primary">
                                <FaHandHoldingHeart /> Soutenir la construction <FaArrowRight />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== WELCOME SECTION ===== */}
            <section className="welcome section">
                <div className="container">
                    <motion.div
                        className="welcome__grid"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div variants={fadeUp} className="welcome__image-block">
                            <img
                                src="/images/photo de la communauté accueil.jpeg"
                                alt="La communauté de la Paroisse Saint Augustin de Nnom Nam"
                                className="welcome__image"
                            />
                        </motion.div>

                        <motion.div variants={fadeUp} className="welcome__text">
                            <span className="welcome__label">Bienvenue</span>
                            <h2>Une Communauté de Foi en Marche</h2>
                            <div className="section-divider" style={{ margin: '16px 0 24px' }} />
                            <p>
                                La Paroisse Saint Augustin de Nnom Nam est une jeune communauté
                                chrétienne dynamique et engagée. Bien que notre église soit encore
                                en construction, notre foi est déjà solidement bâtie.
                            </p>
                            <p>
                                Chaque dimanche, nous nous rassemblons pour célébrer la messe,
                                partager la Parole de Dieu et renforcer nos liens fraternels.
                                Notre projet de construction avance grâce à la générosité
                                de tous les fidèles.
                            </p>
                            <Link to="/a-propos" className="btn btn-primary" style={{ marginTop: '12px' }}>
                                En savoir plus <FaArrowRight />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== SCHEDULE PREVIEW ===== */}
            <section className="schedule section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="section-title">Horaires des Célébrations</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Rejoignez-nous pour les célébrations liturgiques
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="schedule__cards">
                            {scheduleData.map((item, i) => (
                                <div key={i} className="schedule__card card">
                                    <FaCross className="schedule__card-icon" />
                                    <h3>{item.day}</h3>
                                    <span className="schedule__card-time">{item.time}</span>
                                    <p>{item.label}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: '40px' }}>
                            <Link to="/horaires" className="btn btn-primary">
                                Tous les horaires <FaArrowRight />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== EVENTS PREVIEW ===== */}
            <section className="events-preview section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="section-title">Événements à Venir</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Les prochains rendez-vous de notre communauté
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="events-preview__grid">
                            {upcomingEvents.map((event, i) => (
                                <div key={i} className="events-preview__card card">
                                    <div className="events-preview__date">
                                        <FaCalendarAlt />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="events-preview__icon">{event.icon}</div>
                                    <h3>{event.title}</h3>
                                    <p>{event.desc}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: '40px' }}>
                            <Link to="/evenements" className="btn btn-primary">
                                Voir tous les événements <FaArrowRight />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="cta">
                <div className="cta__overlay" />
                <div className="container cta__content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2>Rejoignez Notre Communauté</h2>
                        <p>
                            Que vous soyez nouveau dans la paroisse ou fidèle de longue date,
                            votre présence est un don précieux. Ensemble, construisons notre église.
                        </p>
                        <div className="cta__buttons">
                            <Link to="/dons" className="btn btn-gold">
                                <FaHandHoldingHeart /> Faire un don
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Nous contacter
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
