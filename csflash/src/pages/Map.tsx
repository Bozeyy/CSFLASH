import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/Map.css';

const Map: React.FC = () => {
  const { mapName } = useParams();
  const [gameMode, setGameMode] = useState('solo');

  const gameModes = [
    { id: 'solo', label: 'Solo' },
    { id: 'duo', label: 'Duo' },
    { id: 'trio', label: 'Trio' },
    { id: 'quad', label: 'Quad' },
    { id: 'team', label: 'Team' }
  ];

  const formattedMapName = mapName
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

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

  return (
    <div className="map-page">
      <div className="map-background" style={{ backgroundImage: `url(${getMapImage(mapName)})` }} />
      <Header />
      <div className="map-content">
        <h1>{formattedMapName}</h1>
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
      </div>
      <Footer />
    </div>
  );
};

export default Map; 