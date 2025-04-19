import React, { useState } from 'react';
import { Utility } from '../types/map';
import '../styles/components/UtilityMarker.css';

interface UtilityMarkerProps {
  utility: Utility;
}

const UtilityMarker: React.FC<UtilityMarkerProps> = ({ utility }) => {
  const [showPositions, setShowPositions] = useState(false);

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
      
      {showPositions && (
        <div className="positions-list">
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