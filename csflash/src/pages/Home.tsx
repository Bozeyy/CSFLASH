import Header from '../components/Header';
import Footer from '../components/Footer';
import MapCard from '../components/MapCard';
import '../styles/pages/Home.css';

/**
 * Page Home - Page d'accueil de l'application
 * 
 * Cette page affiche :
 * - Un header avec le logo et le bouton de connexion
 * - Une liste de cartes CS:GO cliquables
 * - Un footer avec les crédits
 * 
 * Chaque carte est représentée par un composant MapCard
 * qui permet la navigation vers la page détaillée de la carte
 * 
 * @returns {JSX.Element} La page Home
 */
function Home() {
  /**
   * Configuration des cartes disponibles
   * Chaque carte contient :
   * - title: Le nom de la carte
   * - imageUrl: Le chemin vers l'image de la carte
   */
  const maps = [
    {
      title: "Anubis",
      imageUrl: "/images/map/anubis.jpg"
    },
    {
      title: "Ancient",
      imageUrl: "/images/map/ancient.jpg"
    },
    {
      title: "Train",
      imageUrl: "/images/map/train.jpg"
    },
    {
      title: "Dust 2",
      imageUrl: "/images/map/dust.jpg"
    },
    {
      title: "Mirage",
      imageUrl: "/images/map/mirage.jpg"
    },
    
    {
      title: "Inferno",
      imageUrl: "/images/map/inferno.jpg"
    },
    {
      title: "Nuke",
      imageUrl: "/images/map/nuke.jpg"
    },
    {
      title: "Overpass",
      imageUrl: "/images/map/overpass.jpg"
    }
  ];

  return (
    <div className="home">
      {/* En-tête de la page */}
      <Header />

      {/* Conteneur des cartes de maps */}
      <div className="maps-container">
        {maps.map((map, index) => (
          <MapCard 
            key={index}
            title={map.title}
            imageUrl={map.imageUrl}
          />
        ))}
      </div>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}

export default Home;