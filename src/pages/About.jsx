import { motion } from 'framer-motion';
import { FaChurch, FaHardHat, FaUsers, FaHeart, FaBible, FaPrayingHands, FaHandsHelping } from 'react-icons/fa';
import './About.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
};

const values = [
    { icon: <FaPrayingHands />, title: 'Prière', desc: 'La prière est le fondement de notre vie communautaire et spirituelle.' },
    { icon: <FaHeart />, title: 'Charité', desc: 'Nous vivons l\'amour du Christ en servant nos frères et sœurs avec compassion.' },
    { icon: <FaUsers />, title: 'Communion', desc: 'Unis dans la foi, nous formons une famille spirituelle accueillante.' },
    { icon: <FaBible />, title: 'Parole de Dieu', desc: 'La Sainte Écriture guide notre chemin et éclaire nos décisions.' },
    { icon: <FaHandsHelping />, title: 'Entraide', desc: 'Chacun contribue selon ses talents à l\'édification de notre communauté.' },
    { icon: <FaChurch />, title: 'Bâtir Ensemble', desc: 'Notre église en construction est le symbole de notre foi vivante et grandissante.' },
];

const timeline = [
    { year: 'Fondation', title: 'Naissance de la communauté', desc: 'Un groupe de fidèles de Nnom Nam se rassemble pour prier et envisager la création d\'une paroisse.' },
    { year: 'Érection', title: 'Reconnaissance officielle', desc: 'La communauté est officiellement érigée en paroisse sous le patronage de Saint Augustin.' },
    { year: 'Travaux', title: 'Début de la construction', desc: 'Les travaux de construction de l\'église débutent grâce à la mobilisation des fidèles.' },
    { year: 'Aujourd\'hui', title: 'Une paroisse en croissance', desc: 'La communauté grandit et les travaux avancent. L\'espoir d\'achever notre maison de Dieu nous anime.' },
];

const pastoralTeam = [
    { name: 'Père [Nom du Curé]', role: 'Curé de paroisse', desc: 'Guide spirituel de notre communauté.' },
    { name: 'Abbé [Nom du Vicaire]', role: 'Vicaire', desc: 'Seconde le curé dans l\'animation pastorale.' },
    { name: '[Nom du Catéchiste]', role: 'Catéchiste principal', desc: 'Responsable de la formation chrétienne.' },
];

export default function About() {
    return (
        <div className="about page-wrapper">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        À Propos de Notre Paroisse
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        Découvrez l'histoire, la mission et l'équipe de la Paroisse Saint Augustin de Nnom Nam
                    </motion.p>
                </div>
            </section>

            {/* Construction Notice */}
            <section className="about__notice section">
                <div className="container">
                    <motion.div
                        className="about__notice-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <FaHardHat className="about__notice-icon" />
                        <div>
                            <h3>Une Paroisse en Construction</h3>
                            <p>
                                Notre paroisse est actuellement en phase de construction. Si notre bâtiment
                                se construit pierre après pierre, notre communauté de foi est déjà vivante et
                                vibrante. Nous célébrons les offices dans un espace provisoire en attendant
                                l'achèvement de notre église.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="about__values section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="section-title">Nos Valeurs</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Les piliers qui fondent notre communauté et guident notre mission quotidienne
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="about__values-grid">
                            {values.map((v, i) => (
                                <div key={i} className="about__value-card card">
                                    <div className="about__value-icon">{v.icon}</div>
                                    <h3>{v.title}</h3>
                                    <p>{v.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="about__timeline section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="section-title">Notre Histoire</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Le parcours de notre communauté, de ses débuts à aujourd'hui
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="about__timeline-list">
                            {timeline.map((item, i) => (
                                <div key={i} className={`about__timeline-item ${i === timeline.length - 1 ? 'about__timeline-item--current' : ''}`}>
                                    <div className="about__timeline-marker">
                                        <span className="about__timeline-year">{item.year}</span>
                                        <div className="about__timeline-dot" />
                                    </div>
                                    <div className="about__timeline-content card">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Pastoral Team */}
            <section className="about__team section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="section-title">Équipe Pastorale</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Les personnes qui guident notre communauté dans la foi
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="about__team-grid">
                            {pastoralTeam.map((member, i) => (
                                <div key={i} className="about__team-card card">
                                    <div className="about__team-avatar">
                                        <span>{member.name.charAt(0)}</span>
                                    </div>
                                    <h3>{member.name}</h3>
                                    <span className="about__team-role">{member.role}</span>
                                    <p>{member.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
