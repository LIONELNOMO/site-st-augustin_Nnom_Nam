import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChurch, FaHardHat, FaUsers, FaHeart, FaBible, FaPrayingHands, FaHandsHelping, FaTimes, FaCross, FaChevronLeft, FaChevronRight, FaSearchPlus, FaClock, FaMusic, FaMapMarkerAlt, FaLayerGroup, FaBalanceScale, FaChild, FaCompass, FaHandHoldingHeart, FaBookReader, FaGavel } from 'react-icons/fa';
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
    { year: '1997', title: 'Création de la Paroisse', desc: 'Créée par les Pères Lazaristes comme une fraction d\'OYOM-ABANG « Jésus le Bon Pasteur », la communauté de NNOM-NNAM naît dans la foi et l\'espérance.', icon: <FaCross /> },
    { year: '2011', title: 'Pose de la Première Pierre', desc: 'Son Excellence Monseigneur TONYE BAKOT pose la première pierre de notre future église, marquant un tournant historique pour la communauté.', icon: <FaChurch /> },
    { year: '2019', title: 'Lancement du Chantier', desc: 'En novembre 2019, le curé bénit solennellement le lancement du chantier de construction, concrétisant des années de prière et de mobilisation.', icon: <FaHardHat /> },
    { year: 'Aujourd\'hui', title: 'Une Paroisse Vivante', desc: 'Avec environ 1 600 fidèles, 40 groupes paroissiaux et 14 CEV, notre communauté grandit et s\'épanouit en attendant l\'achèvement de son église.', icon: <FaUsers /> },
];

const parishStats = [
    { icon: <FaUsers />, value: '1 600', label: 'Fidèles', suffix: 'environ' },
    { icon: <FaCross />, value: '2', label: 'Prêtres', suffix: 'Curé & Vicaire' },
    { icon: <FaLayerGroup />, value: '40', label: 'Groupes Paroissiaux', suffix: '3 plateformes' },
    { icon: <FaMapMarkerAlt />, value: '14', label: 'CEV', suffix: 'communautés' },
    { icon: <FaBookReader />, value: '15', label: 'Catéchistes', suffix: '10 femmes, 5 hommes' },
    { icon: <FaChurch />, value: '6', label: 'Messes le Dimanche', suffix: 'chaque semaine' },
];

const parishStructure = [
    { title: 'Conseil Pastoral Paroissial', icon: <FaCross />, desc: 'Orientation et vie pastorale de la paroisse' },
    { title: 'Conseil des Affaires Économiques', icon: <FaBalanceScale />, desc: 'Gestion financière et matérielle' },
    { title: 'Conseil des Jeunes', icon: <FaChild />, desc: 'Animation et accompagnement de la jeunesse' },
];

const platforms = [
    { name: 'Associations', icon: <FaHandsHelping />, color: '#6B2737' },
    { name: 'Chorales', icon: <FaMusic />, color: '#C4A469' },
    { name: 'Lecteurs', icon: <FaBookReader />, color: '#2C6E49' },
];

const neighbors = [
    { direction: 'Nord', parishes: 'MBANKOLO et FEBE' },
    { direction: 'Est', parishes: 'ABOBO et OYOM-ABANG' },
    { direction: 'Sud', parishes: 'NGOULA et NKOLBISSON' },
    { direction: 'Ouest', parishes: 'NKOL AFEME' },
];

const parishServices = [
    { icon: <FaHandHoldingHeart />, title: 'Caritas Paroissiale', desc: 'Action caritative au service des plus démunis' },
    { icon: <FaGavel />, title: 'Comité Justice et Paix', desc: 'Promotion de la justice et de la paix sociale' },
    { icon: <FaHardHat />, title: 'Comité de Suivi des Travaux', desc: 'Supervision de la construction de l\'église' },
];

const pastoralTeam = [
    {
        name: 'Abbé Sébastien MANGA',
        role: 'Vicaire',
        icon: FaPrayingHands,
        quote: '« Servir cette communauté est une grâce. Chaque jour, je vois la foi grandir dans les cœurs. »',
        bio: 'Collaborateur dévoué du curé, il assure l\'animation pastorale, la célébration des sacrements et l\'accompagnement spirituel des fidèles.',
        photo: '/images/abbé simon NDJEWELL.jpeg'
    },
    {
        name: 'Abbé Simon NDJEWELL',
        role: 'Prêtre',
        icon: FaCross,
        quote: '« Former les jeunes dans la foi, c\'est planter des graines d\'espérance pour demain. »',
        bio: 'Prêtre au service de la paroisse Saint Augustin, il contribue à la vie spirituelle de la communauté et à l\'accompagnement des fidèles dans leur cheminement de foi.',
        photo: '/images/vicaire ABBE SEBASTIEN MANGA .jpeg'
    },
];

const galleryImages = [
    { src: '/images/image de paroisse 1 .jpeg', caption: 'Vue d\'ensemble du chantier', desc: 'Les travaux de construction de notre future église avancent.' },
    { src: '/images/image de paroisse 2.jpeg', caption: '', desc: '' },
    { src: '/images/image de paroisse 3.jpeg', caption: '', desc: '' },
    { src: '/images/image de paroisse 4.jpeg', caption: '', desc: '' },
    { src: '/images/image de paroisse 5.jpeg', caption: '', desc: '' },
    { src: '/images/image de paroisse 6.jpeg', caption: '', desc: '' },
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
                        Découvrez l'histoire, la mission et l'équipe de la Paroisse Saint Augustin de NNOM-NNAM
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

            {/* Opération Charpente VIP Callout */}
            <section className="about__charpente-notice section" style={{ padding: '0 0 40px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about__charpente-card"
                    >
                        <div className="about__charpente-content">
                            <span className="about__charpente-badge" style={{ display: 'inline-block', backgroundColor: '#e74c3c', color: 'white', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>
                                En Cours
                            </span>
                            <h2 style={{ fontSize: '2rem', color: '#6B2737', marginBottom: '10px' }}>
                                Actuellement : <span style={{ color: '#D4A853' }}>Opération Charpente</span>
                            </h2>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
                                Nous avons franchi une étape décisive ! Soutenez notre projet en participant à la levée des fonds pour la toiture de notre future église.
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

            {/* Timeline + Parish Identity */}
            <section className="about__timeline section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div variants={fadeUp}>
                            <span className="about__history-label">
                                <FaClock /> Depuis 1997
                            </span>
                            <h2 className="section-title">Notre Histoire</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                De la vision des Pères Lazaristes à une communauté vibrante de 1 600 fidèles
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="about__tl">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className={`about__tl-row ${i % 2 !== 0 ? 'about__tl-row--right' : ''} ${i === timeline.length - 1 ? 'about__tl-row--current' : ''}`}
                                    variants={fadeUp}
                                >
                                    {/* Card */}
                                    <div className="about__tl-card">
                                        <span className="about__tl-step">Étape {i + 1}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>

                                    {/* Center node */}
                                    <div className="about__tl-node">
                                        <div className="about__tl-icon">{item.icon}</div>
                                        <span className="about__tl-year">{item.year}</span>
                                    </div>

                                    {/* Empty space for alternation */}
                                    <div className="about__tl-spacer" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Parish Identity Dashboard */}
            <section className="about__identity section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div variants={fadeUp}>
                            <span className="about__identity-label">
                                <FaChurch /> Carte d'identité
                            </span>
                            <h2 className="section-title">Notre Paroisse en Chiffres</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Une communauté dynamique et organisée au service de l'Évangile
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div variants={fadeUp} className="about__stats-grid">
                            {parishStats.map((stat, i) => (
                                <div key={i} className="about__stat-card">
                                    <div className="about__stat-icon">{stat.icon}</div>
                                    <div className="about__stat-value">{stat.value}</div>
                                    <div className="about__stat-label">{stat.label}</div>
                                    <div className="about__stat-suffix">{stat.suffix}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* 3 Conseils + 3 Plateformes */}
                        <motion.div variants={fadeUp} className="about__org-row">
                            <div className="about__org-block">
                                <h3 className="about__org-title">
                                    <FaLayerGroup /> 3 Conseils
                                </h3>
                                <div className="about__councils-list">
                                    {parishStructure.map((council, i) => (
                                        <div key={i} className="about__council-card">
                                            <div className="about__council-icon">{council.icon}</div>
                                            <div>
                                                <h4>{council.title}</h4>
                                                <p>{council.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="about__org-block">
                                <h3 className="about__org-title">
                                    <FaMusic /> 3 Plateformes
                                </h3>
                                <div className="about__platforms-list">
                                    {platforms.map((p, i) => (
                                        <div key={i} className="about__platform-card" style={{ '--platform-color': p.color }}>
                                            <div className="about__platform-icon">{p.icon}</div>
                                            <span>{p.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Paroisses Limitrophes + Services */}
                        <motion.div variants={fadeUp} className="about__org-row">
                            <div className="about__org-block about__neighbors-block">
                                <h3 className="about__org-title">
                                    <FaCompass /> Paroisses Limitrophes
                                </h3>
                                <div className="about__compass">
                                    <div className="about__compass-center">
                                        <FaChurch />
                                        <span>St Augustin</span>
                                    </div>
                                    {neighbors.map((n, i) => (
                                        <div key={i} className={`about__compass-direction about__compass-${n.direction.toLowerCase()}`}>
                                            <span className="about__compass-dir-label">{n.direction}</span>
                                            <span className="about__compass-parishes">{n.parishes}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="about__org-block">
                                <h3 className="about__org-title">
                                    <FaHandHoldingHeart /> Services & Comités
                                </h3>
                                <div className="about__services-list">
                                    {parishServices.map((s, i) => (
                                        <div key={i} className="about__service-card">
                                            <div className="about__service-icon">{s.icon}</div>
                                            <div>
                                                <h4>{s.title}</h4>
                                                <p>{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
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
                                <p className="about__cure-title">Curé de la Paroisse Saint Augustin de NNOM-NNAM</p>
                                <blockquote className="about__cure-quote">
                                    « Notre paroisse est une famille. Ensemble, pierre après pierre,
                                    nous construisons non seulement un édifice, mais surtout une
                                    communauté de foi, d'espérance et de charité. »
                                </blockquote>
                                <p className="about__cure-bio">
                                    Ordonné prêtre au service du diocèse, notre curé accompagne la
                                    communauté de NNOM-NNAM avec passion et dévouement. Il se consacre
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
                                <p>Curé de la Paroisse Saint Augustin de NNOM-NNAM</p>
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
