import React, { useState } from 'react';
import { Utility } from '../types/map';
import '../styles/components/UtilityMarker.css';

/**
 * Interface définissant les propriétés du composant UtilityMarker
 * @property {Utility} utility - L'utilitaire à afficher avec ses positions et description
 */
interface UtilityMarkerProps {
  utility: Utility;
}

/**
 * Composant UtilityMarker - Marqueur interactif pour les utilitaires sur la minimap
 * 
 * Ce composant affiche :
 * - Une icône représentant le type d'utilitaire (smoke, flash, molotov)
 * - Au clic, affiche les positions possibles pour lancer l'utilitaire
 * - Une description optionnelle de l'utilisation
 * 
 * @param {UtilityMarkerProps} props - Les propriétés du composant
 * @returns {JSX.Element} Le composant UtilityMarker
 */
const UtilityMarker: React.FC<UtilityMarkerProps> = ({ utility }) => {
  // État pour gérer l'affichage des positions de lancer
  const [showPositions, setShowPositions] = useState(false);

  /**
   * Retourne l'URL de l'icône correspondant au type d'utilitaire
   * @param {string} type - Le type d'utilitaire
   * @returns {string} L'URL de l'icône
   */
  const getUtilityIcon = (type: string) => {
    switch (type) {
      case 'smoke':
        return '/icon/SmokeIcon.png';
      case 'flash':
        return '/icon/FlashIcon.png';
      case 'molo':
        return '/icon/MolyIcon.png';
      default:
        return '/icon/NadeIcon.png';
    }
  };

  return (
    <div 
      className="utility-marker"
      style={{ 
        left: `${utility.position.x}%`, 
        top: `${utility.position.y}%` 
      }}
    >
      {/* Icône cliquable de l'utilitaire */}
      <div 
        className={`utility-icon ${utility.type}`}
        onClick={() => setShowPositions(!showPositions)}
      >
        <img 
          src={getUtilityIcon(utility.type)} 
          alt={utility.type}
          className="utility-icon-image"
        />
      </div>
      
      {/* Affichage conditionnel des positions de lancer et de la description */}
      {showPositions && (
        <div className="positions-list">
          {/* Points de lancer possibles */}
          {utility.positions.map((pos, index) => (
            <div 
              key={index}
              className="position-marker"
              style={{ 
                left: `${pos.x}%`, 
                top: `${pos.y}%` 
              }}
            />
          ))}
          {/* Description de l'utilisation si disponible */}
          {utility.description && (
            <div className="utility-description">
              {utility.description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UtilityMarker; 