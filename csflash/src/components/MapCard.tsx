import React from 'react';
import '../styles/MapCard.css';

interface MapCardProps {
  title: string;
  imageUrl: string;
}

const MapCard: React.FC<MapCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="map-card">
      <img src={imageUrl} alt={title} className="map-image" />
      <h3 className="map-title">{title}</h3>
    </div>
  );
};

export default MapCard; 