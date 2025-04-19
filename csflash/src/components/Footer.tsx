import React from 'react';
import '../styles/components/Footer.css';

/**
 * Composant Footer - Pied de page de l'application
 * 
 * Ce composant affiche :
 * - Les crédits du créateur (Bozey)
 * - Reste toujours en bas de la page grâce au CSS
 * 
 * @returns {JSX.Element} Le composant Footer
 */
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Crédits du créateur */}
        <p>Créé par <span className="creator">Bozey</span></p>
      </div>
    </footer>
  );
};

export default Footer; 