import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChurch, FaHardHat, FaUsers, FaHeart, FaBible, FaPrayingHands, FaHandsHelping, FaTimes, FaCross, FaChevronLeft, FaChevronRight, FaSearchPlus, FaClock, FaMusic } from 'react-icons/fa';
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
    {
        name: 'Abbé [Nom du Vicaire]',
        role: 'Vicaire',
        icon: FaPrayingHands,
        quote: '« Servir cette communauté est une grâce. Chaque jour, je vois la foi grandir dans les cœurs. »',
        bio: 'Collaborateur dévoué du curé, il assure l\'animation pastorale, la célébration des sacrements et l\'accompagnement spirituel des fidèles.',
        photo: null // Photo à ajouter plus tard
    },
    {
        name: '[Nom du Catéchiste]',
        role: 'Catéchiste principal',
        icon: FaBible,
        quote: '« Former les jeunes dans la foi, c\'est planter des graines d\'espérance pour demain. »',
        bio: 'Responsable de la formation chrétienne, il accompagne les catéchumènes et les jeunes dans leur cheminement de foi.',
        photo: null // Photo à ajouter plus tard
    },
];

const galleryImages = [
    { src: '/images/image de paroisse 1 .jpeg', caption: 'Vue d\'ensemble du chantier', desc: 'Les travaux de construction de notre future église avancent.' },
    { src: '/images/image de paroisse 2.jpeg', caption: 'Élévation des murs', desc: 'Les murs prennent forme, témoignant de la générosité des fidèles.' },
    { src: '/images/image de paroisse 3.jpeg', caption: 'Progression des travaux', desc: 'Chaque pierre posée est un acte de foi pour notre communauté.' },
    { src: '/images/image de paroisse 4.jpeg', caption: 'Structure en cours', desc: 'La structure de l\'église se dessine peu à peu.' },
    { src: '/images/image de paroisse 5.jpeg', caption: 'Avancement récent', desc: 'Les dernières étapes de la construction en images.' },
    { src: '/images/image de paroisse 6.jpeg', caption: 'Notre espérance', desc: 'Bientôt, notre maison de Dieu sera achevée.' },
];

export default function About() {
    const [showCureModal, setShowCureModal] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const prevImage = useCallback(() => setLightboxIndex(i => (i > 0 ? i - 1 : galleryImages.length - 1)), []);
    const nextImage = useCallback(() => setLightboxIndex(i => (i < galleryImages.length - 1 ? i + 1 : 0)), []);

    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKey = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        };
        window.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [lightboxIndex, prevImage, nextImage]);
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

            {/* === GALERIE CONSTRUCTION === */}
            <section className="about__gallery section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div variants={fadeUp}>
                            <span className="about__gallery-label">
                                <FaHardHat /> Chantier en cours
                            </span>
                            <h2 className="section-title">Notre Église Prend Forme</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Découvrez en images l'avancement des travaux de notre future maison de Dieu
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="about__gallery-bento">
                            {galleryImages.map((img, i) => (
                                <motion.div
                                    key={i}
                                    className={`about__gallery-item about__gallery-item--${i + 1}`}
                                    onClick={() => openLightbox(i)}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img src={img.src} alt={img.caption} loading="lazy" />
                                    <div className="about__gallery-overlay">
                                        <FaSearchPlus className="about__gallery-zoom" />
                                        <h4>{img.caption}</h4>
                                        <p>{img.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
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

            {/* === ÉQUIPE PASTORALE === */}
            <section className="about__team section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div variants={fadeUp} className="about__team-header">
                            <span className="about__team-label">
                                <FaCross /> Au service de Dieu et de la communauté
                            </span>
                            <h2 className="section-title">Équipe Pastorale</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Les serviteurs dévoués qui guident notre communauté dans la foi,
                                l'espérance et la charité
                            </p>
                        </motion.div>

                        {/* Curé — mis en avant */}
                        <motion.div variants={fadeUp} className="about__cure-card about__cure-card--featured">
                            <div
                                className="about__cure-photo-wrapper"
                                onClick={() => setShowCureModal(true)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && setShowCureModal(true)}
                                aria-label="Voir la photo du curé en grand"
                            >
                                <img
                                    src="/images/photo du curée.jpeg"
                                    alt="Photo du Curé de la Paroisse Saint Augustin"
                                    className="about__cure-photo"
                                />
                                <div className="about__cure-photo-overlay">
                                    <span>Cliquez pour agrandir</span>
                                </div>
                            </div>

                            <div className="about__cure-info">
                                <div className="about__cure-badge">
                                    <FaCross />
                                    <span>Curé de Paroisse</span>
                                </div>
                                <h3 className="about__cure-name">Abbé Etienne ETOUNDI ESSAMA</h3>
                                <p className="about__cure-title">Curé de la Paroisse Saint Augustin de Nnom Nam</p>
                                <blockquote className="about__cure-quote">
                                    « Notre paroisse est une famille. Ensemble, pierre après pierre,
                                    nous construisons non seulement un édifice, mais surtout une
                                    communauté de foi, d'espérance et de charité. »
                                </blockquote>
                                <p className="about__cure-bio">
                                    Ordonné prêtre au service du diocèse, notre curé accompagne la
                                    communauté de Nnom Nam avec passion et dévouement. Il se consacre
                                    à la vie spirituelle des fidèles et au projet de construction
                                    de notre église.
                                </p>
                            </div>
                        </motion.div>

                        {/* Autres membres */}
                        <motion.div variants={fadeUp} className="about__team-list">
                            {pastoralTeam.map((member, i) => {
                                const IconComponent = member.icon;
                                return (
                                    <div key={i} className={`about__team-member-card ${i % 2 !== 0 ? 'about__team-member-card--reverse' : ''}`}>
                                        <div className="about__team-photo-wrapper">
                                            {member.photo ? (
                                                <img
                                                    src={member.photo}
                                                    alt={`Photo de ${member.name}`}
                                                    className="about__team-member-photo"
                                                />
                                            ) : (
                                                <div className="about__team-placeholder">
                                                    <span className="about__team-placeholder-initial">
                                                        {member.name.replace(/[\[\]]/g, '').charAt(0)}
                                                    </span>
                                                    <span className="about__team-placeholder-text">Photo à venir</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="about__team-member-info">
                                            <div className="about__cure-badge">
                                                <IconComponent />
                                                <span>{member.role}</span>
                                            </div>
                                            <h3 className="about__cure-name">{member.name}</h3>
                                            <blockquote className="about__cure-quote">
                                                {member.quote}
                                            </blockquote>
                                            <p className="about__cure-bio">
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Curé Photo Modal */}
            <AnimatePresence>
                {showCureModal && (
                    <motion.div
                        className="about__cure-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowCureModal(false)}
                    >
                        <motion.div
                            className="about__cure-modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="about__cure-modal-close"
                                onClick={() => setShowCureModal(false)}
                                aria-label="Fermer"
                            >
                                <FaTimes />
                            </button>
                            <img
                                src="/images/photo du curée.jpeg"
                                alt="Photo du Curé de la Paroisse Saint Augustin"
                            />
                            <div className="about__cure-modal-caption">
                                <h3>Abbé Etienne ETOUNDI ESSAMA</h3>
                                <p>Curé de la Paroisse Saint Augustin de Nnom Nam</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Gallery Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        className="about__lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <button className="about__lightbox-close" onClick={closeLightbox} aria-label="Fermer">
                            <FaTimes />
                        </button>

                        <button className="about__lightbox-nav about__lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Image précédente">
                            <FaChevronLeft />
                        </button>

                        <motion.div
                            className="about__lightbox-content"
                            key={lightboxIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={galleryImages[lightboxIndex].src}
                                alt={galleryImages[lightboxIndex].caption}
                            />
                            <div className="about__lightbox-caption">
                                <h4>{galleryImages[lightboxIndex].caption}</h4>
                                <p>{galleryImages[lightboxIndex].desc}</p>
                                <span className="about__lightbox-counter">
                                    {lightboxIndex + 1} / {galleryImages.length}
                                </span>
                            </div>
                        </motion.div>

                        <button className="about__lightbox-nav about__lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Image suivante">
                            <FaChevronRight />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
