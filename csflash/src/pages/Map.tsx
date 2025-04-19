import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UtilityMarker from '../components/UtilityMarker';
import { MapData, Utility } from '../types/map';
import '../styles/pages/Map.css';

/**
 * Page Map - Page détaillée d'une carte CS:GO
 * 
 * Cette page affiche :
 * - Un header avec le logo et le bouton de connexion
 * - Le nom de la carte
 * - Un sélecteur de mode de jeu
 * - Une minimap interactive avec les utilitaires (en mode Stuff)
 * - Un footer avec les crédits
 * 
 * La minimap permet de :
 * - Voir les positions des utilitaires
 * - Zoomer/dézoomer avec la molette ou le pincement
 * - Afficher les positions de lancer en cliquant sur un utilitaire
 * 
 * @returns {JSX.Element} La page Map
 */
const Map: React.FC = () => {
  // Récupération du nom de la carte depuis l'URL
  const { mapName } = useParams();
  // État pour le mode de jeu sélectionné
  const [gameMode, setGameMode] = useState('stuff');
  // État pour le niveau de zoom de la minimap
  const [scale, setScale] = useState(1);
  // Référence vers le conteneur de la minimap
  const minimapRef = useRef<HTMLDivElement>(null);

  /**
   * Gère le zoom avec la molette de la souris
   * Ne fonctionne qu'avec la touche Ctrl enfoncée
   * Limite le zoom entre 1x et 4x
   */
  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY * -0.01;
      const newScale = Math.min(Math.max(1, scale + delta), 4);
      setScale(newScale);
    }
  };

  /**
   * Configuration des modes de jeu disponibles
   */
  const gameModes = [
    { id: 'stuff', label: 'Stuff' },
    { id: 'solo', label: 'Solo' },
    { id: 'duo', label: 'Duo' },
    { id: 'trio', label: 'Trio' },
    { id: 'quad', label: 'Quad' },
    { id: 'team', label: 'Team' }
  ];

  /**
   * Formate le nom de la carte pour l'affichage
   * Convertit "dust-2" en "Dust 2"
   */
  const formattedMapName = mapName
    ?.split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  /**
   * Récupère l'URL de l'image de fond correspondant à la carte
   * @param {string} mapName - Le nom de la carte
   * @returns {string} L'URL de l'image
   */
  const getMapImage = (mapName: string | undefined) => {
    if (!mapName) return '';
    const mapImages: { [key: string]: string } = {
      'dust-2': '/images/map/dust.jpg',
      'mirage': '/images/map/mirage.jpg',
      'inferno': '/images/map/inferno.jpg',
      'nuke': '/images/map/nuke.jpg',
      'overpass': '/images/map/overpass.jpg'
    };
    return mapImages[mapName] || '';
  };

  /**
   * Données de la carte avec les utilitaires
   * À remplacer par des données réelles depuis une API ou une base de données
   */
  const mapData: MapData = {
    name: formattedMapName || '',
    minimapUrl: `/map/${mapName}.jpg`,
    utilities: [
      {
        type: 'smoke',
        position: { x: 30, y: 40 },
        positions: [
          { x: 25, y: 35 },
          { x: 35, y: 45 }
        ],
        description: 'Smoke pour bloquer le site A'
      },
      {
        type: 'flash',
        position: { x: 60, y: 50 },
        positions: [
          { x: 55, y: 45 },
          { x: 65, y: 55 }
        ],
        description: 'Flash pour entrer sur le site'
      }
    ]
  };

  return (
    <div className="map-page">
      {/* Image de fond floue */}
      <div className="map-background" style={{ backgroundImage: `url(${getMapImage(mapName)})` }} />
      
      {/* En-tête de la page */}
      <Header />

      <div className="map-content">
        {/* Titre de la carte */}
        <h1>{formattedMapName}</h1>

        {/* Sélecteur de mode de jeu */}
        <div className="game-mode-selector">
          <select 
            id="gameMode" 
            value={gameMode} 
            onChange={(e) => setGameMode(e.target.value)}
          >
            {gameModes.map(mode => (
              <option key={mode.id} value={mode.id}>
                {mode.label}
              </option>
            ))}
          </select>
        </div>

        {/* Minimap interactive (visible uniquement en mode Stuff) */}
        {gameMode === 'stuff' && (
          <div 
            ref={minimapRef}
            className="minimap-container"
            onWheel={handleWheel}
          >
            <div style={{ 
              transform: `scale(${scale})`,
              transformOrigin: 'center',
              width: '100%',
              height: '100%'
            }}>
              {/* Image de la minimap */}
              <img 
                src={mapData.minimapUrl} 
                alt={`Minimap ${mapData.name}`} 
                className="minimap"
              />
              {/* Marqueurs d'utilitaires */}
              {mapData.utilities.map((utility: Utility, index: number) => (
                <UtilityMarker key={index} utility={utility} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Pied de page */}
      <Footer />
    </div>
  );
};

export default Map; 