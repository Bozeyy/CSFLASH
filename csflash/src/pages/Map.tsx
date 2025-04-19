import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UtilityMarker from '../components/UtilityMarker';
import { MapData, Utility } from '../types/map';
import '../styles/pages/Map.css';

const Map: React.FC = () => {
  const { mapName } = useParams();
  const [gameMode, setGameMode] = useState('stuff');
  const [scale, setScale] = useState(1);
  const minimapRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY * -0.01;
      const newScale = Math.min(Math.max(1, scale + delta), 4);
      setScale(newScale);
    }
  };

  const gameModes = [
    { id: 'stuff', label: 'Stuff' },
    { id: 'solo', label: 'Solo' },
    { id: 'duo', label: 'Duo' },
    { id: 'trio', label: 'Trio' },
    { id: 'quad', label: 'Quad' },
    { id: 'team', label: 'Team' }
  ];

  const formattedMapName = mapName
    ?.split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
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

  // Exemple de données de carte (à remplacer par des données réelles)
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
              <img 
                src={mapData.minimapUrl} 
                alt={`Minimap ${mapData.name}`} 
                className="minimap"
              />
              {mapData.utilities.map((utility: Utility, index: number) => (
                <UtilityMarker key={index} utility={utility} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Map; 