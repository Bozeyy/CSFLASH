import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/MapCard.css';

interface MapCardProps {
  title: string;
  imageUrl: string;
}

const MapCard: React.FC<MapCardProps> = ({ title, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/map/${title.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="map-card" onClick={handleClick}>
      <img src={imageUrl} alt={title} className="map-image" />
      <h3 className="map-title">{title}</h3>
    </div>
  );
};

export default MapCard; 