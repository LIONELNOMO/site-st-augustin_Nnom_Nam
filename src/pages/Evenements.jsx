import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaPrayingHands, FaHandHoldingHeart, FaMusic, FaUsers, FaChurch, FaHardHat } from 'react-icons/fa';
import './Evenements.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.12 } }
};

const events = [
    {
        date: '22 Février 2026',
        title: 'Journée de prière communautaire',
        desc: 'Rassemblement de toute la communauté pour prier pour l\'avancée des travaux et la vie de la paroisse.',
        location: 'Espace de culte provisoire',
        category: 'Prière',
        icon: <FaPrayingHands />
    },
    {
        date: '08 Mars 2026',
        title: 'Grande collecte de fonds',
        desc: 'Journée spéciale de collecte pour financer la prochaine étape de construction de notre église. Chaque don compte !',
        location: 'Nnom Nam',
        category: 'Collecte',
        icon: <FaHandHoldingHeart />
    },
    {
        date: '15 Mars 2026',
        title: 'Bénédiction du chantier',
        desc: 'Cérémonie solennelle de bénédiction pour marquer une nouvelle étape dans la construction de notre maison de Dieu.',
        location: 'Chantier de l\'église',
        category: 'Cérémonie',
        icon: <FaChurch />
    },
    {
        date: '29 Mars 2026',
        title: 'Chorale — Répétition générale',
        desc: 'Grande répétition de la chorale paroissiale en préparation des célébrations de Pâques.',
        location: 'Salle communautaire',
        category: 'Chorale',
        icon: <FaMusic />
    },
    {
        date: '12 Avril 2026',
        title: 'Pâques — Vigile Pascale',
        desc: 'Célébration de la Résurrection du Christ. Le sommet de l\'année liturgique, un moment fort de communion.',
        location: 'Espace de culte provisoire',
        category: 'Liturgie',
        icon: <FaPrayingHands />
    },
    {
        date: '03 Mai 2026',
        title: 'Travail communautaire',
        desc: 'Journée de travail bénévole sur le chantier de l\'église. Venez participer à la construction de notre future paroisse !',
        location: 'Chantier de l\'église',
        category: 'Construction',
        icon: <FaHardHat />
    },
    {
        date: '24 Mai 2026',
        title: 'Fête paroissiale',
        desc: 'Grande fête annuelle de la paroisse avec repas communautaire, animations pour les enfants et spectacle de la chorale.',
        location: 'Place de Nnom Nam',
        category: 'Fête',
        icon: <FaUsers />
    },
];

export default function Evenements() {
    return (
        <div className="evenements page-wrapper">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        Événements
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        Les rendez-vous et activités de notre communauté paroissiale
                    </motion.p>
                </div>
            </section>

            {/* Events Grid */}
            <section className="evenements__grid-section section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="section-title">Prochains Événements</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Découvrez les événements à venir et rejoignez-nous pour des moments de partage et de foi
                            </p>
                        </motion.div>

                        <div className="evenements__grid">
                            {events.map((event, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="evenements__card card"
                                >
                                    <div className="evenements__card-top">
                                        <span className="evenements__category">{event.category}</span>
                                        <div className="evenements__card-icon">{event.icon}</div>
                                    </div>
                                    <h3>{event.title}</h3>
                                    <p className="evenements__desc">{event.desc}</p>
                                    <div className="evenements__meta">
                                        <span className="evenements__date">
                                            <FaCalendarAlt /> {event.date}
                                        </span>
                                        <span className="evenements__location">
                                            <FaMapMarkerAlt /> {event.location}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
