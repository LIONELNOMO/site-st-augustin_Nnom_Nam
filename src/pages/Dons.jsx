import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaChurch, FaPhone, FaMoneyBillWave, FaMobileAlt, FaUniversity, FaPrayingHands, FaHardHat, FaCheckCircle } from 'react-icons/fa';
import './Dons.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
};

const donationMethods = [
    {
        icon: <FaMobileAlt />,
        title: 'Mobile Money',
        desc: 'Envoyez votre don par Orange Money ou MTN Mobile Money',
        details: [
            'Orange Money : 6XX XXX XXX',
            'MTN MoMo : 6XX XXX XXX',
            'Nom : Paroisse Saint Augustin'
        ]
    },
    {
        icon: <FaUniversity />,
        title: 'Virement Bancaire',
        desc: 'Effectuez un virement sur le compte paroissial',
        details: [
            'Banque : [Nom de la banque]',
            'Compte : XXXX-XXXX-XXXX',
            'Intitulé : Paroisse St Augustin Nnom Nam'
        ]
    },
    {
        icon: <FaMoneyBillWave />,
        title: 'Don en espèces',
        desc: 'Remettez votre don directement à la paroisse',
        details: [
            'Lors des quêtes du dimanche',
            'Au secrétariat paroissial',
            'Auprès du trésorier de la paroisse'
        ]
    },
];

const donationPurposes = [
    { icon: <FaChurch />, title: 'Construction de l\'église', desc: 'Contribuez à l\'édification de notre lieu de culte', progress: 35 },
    { icon: <FaPrayingHands />, title: 'Vie pastorale', desc: 'Soutenez les activités liturgiques et pastorales', progress: 60 },
    { icon: <FaHandHoldingHeart />, title: 'Œuvres de charité', desc: 'Aidez les plus démunis de notre communauté', progress: 45 },
];

export default function Dons() {
    const [showThankYou, setShowThankYou] = useState(false);
    const [pledgeForm, setPledgeForm] = useState({
        name: '', phone: '', amount: '', purpose: 'construction', message: ''
    });

    const handleChange = (e) => {
        setPledgeForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowThankYou(true);
        setPledgeForm({ name: '', phone: '', amount: '', purpose: 'construction', message: '' });
        setTimeout(() => setShowThankYou(false), 5000);
    };

    return (
        <div className="dons page-wrapper">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        Faire un Don
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        Votre générosité aide à bâtir notre maison de Dieu et à soutenir notre communauté
                    </motion.p>
                </div>
            </section>

            {/* Why Donate */}
            <section className="dons__why section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="section-title">Pourquoi Donner ?</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Notre paroisse est en construction et a besoin de votre soutien pour avancer.
                                Chaque contribution, grande ou petite, nous rapproche de notre objectif.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="dons__construction-card">
                            <div className="dons__construction-icon">
                                <FaHardHat />
                            </div>
                            <div className="dons__construction-text">
                                <h3>Notre Église se Construit</h3>
                                <p>
                                    Nous sommes en pleine construction de notre lieu de culte. Les fondations et les murs
                                    sont en place, et nous avançons vers la toiture. Votre don nous aide à franchir
                                    chaque étape de ce beau projet.
                                </p>
                                <div className="dons__progress-wrapper">
                                    <div className="dons__progress-bar">
                                        <div className="dons__progress-fill" style={{ width: '35%' }}>
                                            <span>35%</span>
                                        </div>
                                    </div>
                                    <span className="dons__progress-label">Avancement global du projet</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="dons__purposes-grid">
                            {donationPurposes.map((item, i) => (
                                <div key={i} className="dons__purpose-card card">
                                    <div className="dons__purpose-icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <div className="dons__purpose-progress">
                                        <div className="dons__purpose-bar">
                                            <div className="dons__purpose-fill" style={{ width: `${item.progress}%` }} />
                                        </div>
                                        <span>{item.progress}% financé</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* How to Donate */}
            <section className="dons__methods section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="section-title">Comment Donner ?</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Plusieurs moyens sont à votre disposition pour faire un don
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="dons__methods-grid">
                            {donationMethods.map((method, i) => (
                                <div key={i} className="dons__method-card card">
                                    <div className="dons__method-icon">{method.icon}</div>
                                    <h3>{method.title}</h3>
                                    <p>{method.desc}</p>
                                    <ul className="dons__method-details">
                                        {method.details.map((d, j) => (
                                            <li key={j}>{d}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Pledge Form */}
            <section className="dons__pledge section">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="section-title">Faire une Promesse de Don</h2>
                            <div className="section-divider" />
                            <p className="section-subtitle">
                                Vous pouvez enregistrer votre intention de don. Notre équipe vous contactera pour les modalités.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            {showThankYou && (
                                <div className="dons__thank-you">
                                    <FaCheckCircle />
                                    <div>
                                        <h3>Merci pour votre générosité !</h3>
                                        <p>Votre promesse de don a été enregistrée. Que Dieu vous bénisse abondamment.</p>
                                    </div>
                                </div>
                            )}

                            <form className="dons__form card" onSubmit={handleSubmit}>
                                <div className="dons__form-grid">
                                    <div className="dons__form-group">
                                        <label htmlFor="don-name">Nom complet</label>
                                        <input
                                            id="don-name"
                                            type="text"
                                            name="name"
                                            value={pledgeForm.name}
                                            onChange={handleChange}
                                            placeholder="Votre nom"
                                            required
                                        />
                                    </div>
                                    <div className="dons__form-group">
                                        <label htmlFor="don-phone">Téléphone</label>
                                        <input
                                            id="don-phone"
                                            type="tel"
                                            name="phone"
                                            value={pledgeForm.phone}
                                            onChange={handleChange}
                                            placeholder="+237 6XX XXX XXX"
                                            required
                                        />
                                    </div>
                                    <div className="dons__form-group">
                                        <label htmlFor="don-amount">Montant (FCFA)</label>
                                        <input
                                            id="don-amount"
                                            type="number"
                                            name="amount"
                                            value={pledgeForm.amount}
                                            onChange={handleChange}
                                            placeholder="Ex : 10 000"
                                            required
                                        />
                                    </div>
                                    <div className="dons__form-group">
                                        <label htmlFor="don-purpose">Destination du don</label>
                                        <select
                                            id="don-purpose"
                                            name="purpose"
                                            value={pledgeForm.purpose}
                                            onChange={handleChange}
                                        >
                                            <option value="construction">Construction de l'église</option>
                                            <option value="pastoral">Vie pastorale</option>
                                            <option value="charité">Œuvres de charité</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="dons__form-group dons__form-group--full">
                                    <label htmlFor="don-message">Message (optionnel)</label>
                                    <textarea
                                        id="don-message"
                                        name="message"
                                        value={pledgeForm.message}
                                        onChange={handleChange}
                                        placeholder="Un mot d'encouragement ou une intention de prière..."
                                        rows={4}
                                    />
                                </div>
                                <button type="submit" className="btn btn-gold dons__submit">
                                    <FaHandHoldingHeart /> Enregistrer ma promesse de don
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact for Donations */}
            <section className="dons__contact">
                <div className="container">
                    <div className="dons__contact-content">
                        <FaPhone className="dons__contact-icon" />
                        <div>
                            <h3>Besoin d'informations ?</h3>
                            <p>Pour toute question sur les dons, contactez le secrétariat paroissial au <strong>+237 6XX XXX XXX</strong></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
