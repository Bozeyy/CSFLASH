import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/MapCard.css';

/**
 * Interface définissant les propriétés du composant MapCard
 * @property {string} title - Le nom de la carte
 * @property {string} imageUrl - L'URL de l'image de la carte
 */
interface MapCardProps {
  title: string;
  imageUrl: string;
}

/**
 * Composant MapCard - Carte cliquable représentant une map CS:GO
 * 
 * Ce composant affiche :
 * - Une image de la carte en arrière-plan
 * - Le titre de la carte en superposition
 * - Est entièrement cliquable et redirige vers la page détaillée de la carte
 * 
 * @param {MapCardProps} props - Les propriétés du composant
 * @returns {JSX.Element} Le composant MapCard
 */
const MapCard: React.FC<MapCardProps> = ({ title, imageUrl }) => {
  // Hook de navigation pour la redirection
  const navigate = useNavigate();

  /**
   * Gère le clic sur la carte
   * Convertit le titre en format URL (minuscules et tirets) et navigue vers la page de la carte
   */
  const handleClick = () => {
    navigate(`/map/${title.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="map-card" onClick={handleClick}>
      {/* Image de la carte en arrière-plan */}
      <img src={imageUrl} alt={title} className="map-image" />
      {/* Titre de la carte avec effet de flou en arrière-plan */}
      {/* <h3 className="map-title">{title}</h3> */}
    </div>
  );
};

export default MapCard; 