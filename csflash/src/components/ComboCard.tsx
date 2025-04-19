import React, { useState } from 'react';
import '../styles/components/ComboCard.css';

/**
 * Interface définissant les propriétés du composant ComboCard
 * @property {string} title - Le titre du combo
 * @property {string} videoUrl - L'URL de la vidéo YouTube
 * @property {string} description - La description du combo
 * @property {string} difficulty - Le niveau de difficulté
 * @property {string} type - Le type de combo
 */
interface ComboCardProps {
  title: string;
  videoUrl: string;
  description: string;
  difficulty: string;
  type: string;
}

/**
 * Composant ComboCard - Carte cliquable affichant une vidéo YouTube
 * 
 * Ce composant affiche :
 * - Une carte avec un titre
 * - Au clic, ouvre une modal avec la vidéo YouTube
 * 
 * @param {ComboCardProps} props - Les propriétés du composant
 * @returns {JSX.Element} Le composant ComboCard
 */
const ComboCard: React.FC<ComboCardProps> = ({ title, videoUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Extrait l'ID de la vidéo YouTube de l'URL
   */
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <>
      <div className="combo-card" onClick={() => setIsModalOpen(true)}>
        <div className="combo-content">
          <h3 className="combo-title">{title}</h3>
          <div className="play-icon">▶</div>
        </div>
      </div>

      {isModalOpen && (
        <div className="video-modal">
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)} />
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsModalOpen(false)}>×</button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoUrl)}?autoplay=1`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ComboCard; 