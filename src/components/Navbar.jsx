import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaChurch } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/horaires', label: 'Horaires & Sacrements' },
    { path: '/evenements', label: 'Événements' },
    { path: '/dons', label: 'Dons' },
    { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container container">
                <Link to="/" className="navbar__brand">
                    <FaChurch className="navbar__icon" />
                    <div className="navbar__brand-text">
                        <span className="navbar__title">Saint Augustin</span>
                        <span className="navbar__location">Nnom Nam</span>
                    </div>
                </Link>

                <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map(({ path, label }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className={`navbar__link ${location.pathname === path ? 'navbar__link--active' : ''}`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    className="navbar__toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {isOpen && <div className="navbar__overlay" onClick={() => setIsOpen(false)} />}
        </nav>
    );
}
