import Header from '../components/Header';
import MapCard from '../components/MapCard';
import '../styles/Home.css';

function Home() {
  const maps = [
    {
      title: "Dust 2",
      imageUrl: "./public/images/map/dust.jpg"
    },
    {
      title: "Mirage",
      imageUrl: "./public/images/map/mirage.jpg"
    },
    {
      title: "Inferno",
      imageUrl: "./public/images/map/inferno.jpg"
    },
    {
      title: "Nuke",
      imageUrl: "./public/images/map/nuke.jpeg"
    },
    {
      title: "Overpass",
      imageUrl: "./public/images/map/overpass.jpg"
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