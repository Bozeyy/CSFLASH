import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Header.css';

/**
 * Composant Header - Barre de navigation principale de l'application
 * 
 * Ce composant affiche :
 * - Le logo CSFLASH qui sert également de lien vers la page d'accueil
 * - Un bouton de connexion (fonctionnalité à implémenter)
 * 
 * @returns {JSX.Element} Le composant Header
 */
const Header: React.FC = () => {
  // Hook de navigation pour la redirection
  const navigate = useNavigate();

  /**
   * Gère le clic sur le logo pour rediriger vers la page d'accueil
   */
  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo cliquable avec redirection vers l'accueil */}
        <div onClick={handleTitleClick} className="header-logo">
          <img src="/icon/LOGO.png" alt="CSFLASH" />
        </div>
        
        {/* Bouton de connexion avec icône SVG */}
        <button className="login-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 