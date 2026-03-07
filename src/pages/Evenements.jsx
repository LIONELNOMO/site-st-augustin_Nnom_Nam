import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaPrayingHands, FaHandHoldingHeart, FaMusic, FaUsers, FaChurch, FaHardHat, FaUserTie } from 'react-icons/fa';
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
        date: '18 Février 2026',
        title: 'Commencement du Carême — Imposition des Cendres',
        desc: 'Début du temps de Carême avec la célébration de l\'imposition des cendres, marquant l\'entrée dans 40 jours de prière, de jeûne et de pénitence.',
        location: 'Paroisse St Augustin',
        category: 'Liturgie',
        icon: <FaPrayingHands />
    },
    {
        date: '29 Mars 2026',
        title: 'Dimanche des Rameaux et de la Passion du Seigneur',
        desc: 'Célébration solennelle du dimanche des Rameaux, commémorant l\'entrée triomphale de Jésus à Jérusalem et le début de la Semaine Sainte.',
        location: 'Paroisse St Augustin',
        category: 'Liturgie',
        icon: <FaChurch />
    },
    {
        date: '02 Avril 2026',
        title: 'Début du Triduum Pascal — Messe de la Sainte Cène',
        desc: 'Début du Triduum Pascal avec la messe de la Sainte Cène à 18h00. (Horaire à vérifier)',
        location: 'Paroisse St Augustin',
        category: 'Liturgie',
        icon: <FaPrayingHands />
    },
    {
        date: '03 Avril 2026',
        title: 'Vendredi Saint — Célébration de la Passion',
        desc: 'Vendredi Saint à 15h00 avec le Rite de l\'Essani et la célébration de la Passion inculturée.',
        location: 'Paroisse St Augustin',
        category: 'Liturgie',
        icon: <FaPrayingHands />
    },
    {
        date: '04 Avril 2026',
        title: 'Samedi Saint — Veillée Pascale',
        desc: 'Messe à 20h00 avec baptême des catéchumènes suivie de la veillée Pascale. Le sommet de l\'année liturgique.',
        location: 'Paroisse St Augustin',
        category: 'Liturgie',
        icon: <FaChurch />
    },
    {
        date: '05 Avril 2026',
        title: 'Dimanche de la Résurrection',
        desc: 'Célébration joyeuse de la Résurrection du Christ. Pâques, le jour le plus grand de notre foi !',
        location: 'Paroisse St Augustin',
        category: 'Liturgie',
        icon: <FaChurch />
    },
    {
        date: 'Tous les Vendredis (Carême)',
        title: 'Chemin de Croix en Ewondo',
        desc: 'Tous les vendredis à 15h00, chemin de croix en langue Ewondo à la chapelle. Un moment de recueillement et de méditation sur la Passion du Christ.',
        location: 'Chapelle',
        category: 'Prière',
        icon: <FaPrayingHands />
    },
    {
        date: 'Juillet 2026',
        title: 'Collecte par groupe — Mois de Juillet',
        desc: 'Début juillet : collecte organisée par groupe durant tout le mois de juillet. Les paroissiens sans groupe sont également concernés.',
        location: 'Paroisse St Augustin',
        category: 'Collecte',
        icon: <FaHandHoldingHeart />
    },
];

const priereCommunautaire = [
    { title: 'Ekoan Maria', schedule: 'Mardi à 17h00', chaplin: 'Ab. Etienne ETOUNDI', icon: <FaPrayingHands /> },
    { title: 'Légion de Marie', schedule: 'Dimanche à 8h30', chaplin: 'Ab. Etienne ETOUNDI', icon: <FaPrayingHands /> },
    { title: 'Salve Mater', schedule: 'Mercredi à 17h00', chaplin: 'Ab. Sébastien MANGA', icon: <FaPrayingHands /> },
    { title: 'Miséricorde Divine', schedule: 'Mardi à 18h00', chaplin: 'Ab. Etienne ETOUNDI', icon: <FaPrayingHands /> },
    { title: 'EPHPHATA (Adultes)', schedule: 'Jeudi à 16h00', chaplin: 'Ab. Sébastien MANGA', icon: <FaPrayingHands /> },
    { title: 'Marie Reine des Apôtres', schedule: 'Samedi à 7h00', chaplin: 'Ab. Etienne ETOUNDI', icon: <FaPrayingHands /> },
    { title: 'Sacré-Cœur de Jésus', schedule: 'Jeudi à 17h00', chaplin: 'Ab. Etienne ETOUNDI', icon: <FaPrayingHands /> },
    { title: 'Saint Joseph', schedule: 'Mercredi à 17h00', chaplin: 'Ab. Etienne ETOUNDI', icon: <FaPrayingHands /> },
    { title: 'ASSOCAP', schedule: 'Mercredi à 07h00', chaplin: 'Ab. Simon NDJEWELL', icon: <FaPrayingHands /> },
    { title: 'Servants d\'Autel', schedule: 'Samedi à 12h00', chaplin: 'Ab. Sébastien MANGA', icon: <FaUsers /> },
    { title: 'A.C.E COP MONDE', schedule: 'Dimanche à 13h00', chaplin: 'Ab. Sébastien MANGA', icon: <FaUsers /> },
    { title: 'Chorale Ste Monique', schedule: 'Mardi à 17h00', chaplin: 'Ab. Simon NDJEWELL', icon: <FaMusic /> },
    { title: 'Chorale les Petits Amis de St Augustin', schedule: 'Mercredi et Samedi à 16h00', chaplin: 'Ab. Simon NDJEWELL', icon: <FaMusic /> },
    { title: 'Chorale Sacré-Cœur de Jésus', schedule: 'Mardi et Samedi à 17h00', chaplin: 'Ab. Simon NDJEWELL', icon: <FaMusic /> },
    { title: 'Chorale St Vincent de Paul', schedule: 'Mardi et Mercredi à 17h00', chaplin: 'À définir', icon: <FaMusic /> },
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

            {/* Prière Communautaire Grid */}
            <section className="evenements__priere-section section" style={{ background: 'var(--color-cream)' }}>
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <h2 className="section-title">Prière Communautaire</h2>
                            <div className="section-divider" style={{ margin: '0 auto 20px' }} />
                            <p className="section-subtitle">
                                Rejoignez nos différents groupes, chorales et mouvements pour prier ensemble
                            </p>
                        </motion.div>

                        <div className="evenements__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                            {priereCommunautaire.map((group, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="evenements__card card"
                                    style={{ borderTop: '4px solid var(--color-primary)' }}
                                >
                                    <div className="evenements__card-top" style={{ marginBottom: '16px' }}>
                                        <div className="evenements__card-icon" style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}>{group.icon}</div>
                                        <h3 style={{ fontSize: '1.1rem', margin: 0, paddingLeft: '12px' }}>{group.title}</h3>
                                    </div>

                                    <div className="evenements__meta" style={{ flexDirection: 'column', gap: '12px', marginTop: 'auto', borderTop: 'none', paddingTop: 0 }}>
                                        <span className="evenements__date" style={{ color: 'var(--color-text)', fontWeight: '600' }}>
                                            <FaCalendarAlt style={{ color: 'var(--color-gold)' }} /> {group.schedule}
                                        </span>
                                        <span className="evenements__location" style={{ color: 'var(--color-text-light)' }}>
                                            <FaUserTie style={{ color: 'var(--color-primary)' }} /> Aumônier : {group.chaplin}
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
