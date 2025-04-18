import React from 'react';
import '../styles/components/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Créé par <span className="creator">Bozey</span></p>
      </div>
    </footer>
  );
};

export default Footer; 