import Header from '../components/Header';
import MapCard from '../components/MapCard';
import '../styles/pages/Home.css';

function Home() {
  const maps = [
    {
      title: "Dust 2",
      imageUrl: "./images/map/dust.jpg"
    },
    {
      title: "Mirage",
      imageUrl: "./images/map/mirage.jpg"
    },
    {
      title: "Inferno",
      imageUrl: "./images/map/inferno.jpg"
    },
    {
      title: "Nuke",
      imageUrl: "./images/map/nuke.jpeg"
    },
    {
      title: "Overpass",
      imageUrl: "./images/map/overpass.jpg"
    }
  ];

  return (
    <div className="home">
      <Header />
      <div className="maps-container">
        {maps.map((map, index) => (
          <MapCard 
            key={index}
            title={map.title}
            imageUrl={map.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;