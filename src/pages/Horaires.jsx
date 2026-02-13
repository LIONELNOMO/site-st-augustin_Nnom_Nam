import { motion } from 'framer-motion';
import { FaCross, FaChurch, FaBaby, FaRing, FaPrayingHands, FaHandsHelping, FaHardHat } from 'react-icons/fa';
import './Horaires.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.12 } }
};

const massSchedule = [
    { day: 'Dimanche', times: ['08h00 — Première Messe', '10h00 — Grand-Messe'], highlight: true },
    { day: 'Lundi', times: ['Pas de messe'] },
    { day: 'Mardi', times: ['Pas de messe'] },
    { day: 'Mercredi', times: ['18h00 — Messe en semaine'] },
    { day: 'Jeudi', times: ['Pas de messe'] },
    { day: 'Vendredi', times: ['18h00 — Chemin de croix & Messe'] },
    { day: 'Samedi', times: ['16h00 — Confessions', '17h00 — Messe anticipée'] },
];

const sacraments = [
    {
        icon: <FaBaby />,
        title: 'Baptême',
        desc: 'Le sacrement d\'entrée dans la vie chrétienne. Les parents souhaitant faire baptiser leur enfant sont invités à contacter la paroisse au moins deux mois à l\'avance.',
        requirements: ['Rencontre avec le curé', 'Préparation au baptême (2 sessions)', 'Choisir un parrain et/ou une marraine baptisé(e)']
    },
    {
        icon: <FaCross />,
        title: 'Communion',
        desc: 'La première communion est précédée d\'une période de catéchèse pour préparer les enfants à recevoir le Corps du Christ.',
        requirements: ['2 années de catéchisme', 'Avoir reçu le baptême', 'Participation régulière à la messe']
    },
    {
        icon: <FaHandsHelping />,
        title: 'Confirmation',
        desc: 'Le sacrement qui affermit la foi reçue au baptême. Les jeunes et adultes peuvent se préparer à la confirmation.',
        requirements: ['Avoir reçu le baptême et la communion', 'Préparation spécifique', 'Choisir un parrain/marraine de confirmation']
    },
    {
        icon: <FaRing />,
        title: 'Mariage',
        desc: 'Le sacrement de l\'amour conjugal. Les couples souhaitant se marier à l\'église doivent entamer les démarches au moins six mois à l\'avance.',
        requirements: ['Rencontre avec le curé', 'Préparation au mariage (4 à 6 sessions)', 'Dossier administratif complet']
    },
    {
        icon: <FaPrayingHands />,
        title: 'Confession',
        desc: 'Le sacrement de la réconciliation est disponible pour tous ceux qui souhaitent se rapprocher de Dieu.',
        requirements: ['Samedi de 16h00 à 17h00', 'Sur rendez-vous avec le curé', 'Lors des temps de préparation (Avent, Carême)']
    },
];

export default function Horaires() {
    return (
        <div className="horaires page-wrapper">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        Horaires & Sacrements
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        Retrouvez les horaires des célébrations et les informations sur les sacrements
                    </motion.p>
                </div>
            </section>

            {/* Info Notice */}
            <section className="horaires__notice">
                <div className="container">
                    <div className="horaires__notice-card">
                        <FaHardHat className="horaires__notice-icon" />
                        <p>
                            <strong>Note :</strong> Notre église étant en construction, les célébrations ont lieu
                            dans un espace provisoire. Les horaires peuvent être modifiés. N'hésitez pas à nous contacter
                            pour confirmation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mass Schedule */}
            <section className="horaires__schedule section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="section-title">
                                <FaChurch style={{ color: 'var(--color-gold)', marginRight: '12px' }} />
                                Horaires des Messes
                            </h2>
                            <div className="section-divider" />
                        </motion.div>

                        <motion.div variants={fadeUp} className="horaires__table">
                            {massSchedule.map((item, i) => (
                                <div key={i} className={`horaires__row ${item.highlight ? 'horaires__row--highlight' : ''}`}>
                                    <div className="horaires__day">
                                        <FaCross className="horaires__day-icon" />
                                        <span>{item.day}</span>
                                    </div>
                                    <div className="horaires__times">
                                        {item.times.map((t, j) => (
                                            <span key={j} className="horaires__time">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Sacraments */}
            <section className="horaires__sacraments section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="section-title">Les Sacrements</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Les sacrements sont les signes visibles de la grâce de Dieu dans notre vie
                            </p>
                        </motion.div>

                        <div className="horaires__sacraments-list">
                            {sacraments.map((sac, i) => (
                                <motion.div key={i} variants={fadeUp} className="horaires__sacrament card">
                                    <div className="horaires__sacrament-header">
                                        <div className="horaires__sacrament-icon">{sac.icon}</div>
                                        <h3>{sac.title}</h3>
                                    </div>
                                    <p className="horaires__sacrament-desc">{sac.desc}</p>
                                    <div className="horaires__sacrament-reqs">
                                        <h4>Conditions & démarches :</h4>
                                        <ul>
                                            {sac.requirements.map((req, j) => (
                                                <li key={j}>{req}</li>
                                            ))}
                                        </ul>
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
