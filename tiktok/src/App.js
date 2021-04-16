// import SideBar from './components/SideBar';
import Video from './components/Video';
// import Footer from './components/Footer';
import './App.css';

// import one from '../assets/videos/one.mp4';
// import two from '../assets/videos/two.mp4';

const App = () => {
  return (
    <div className="app">
    <section className="app__videos">
      <Video
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        channel="nanakwame"
        description="My first day outside the womb"
        song="singing lullaby"
        likes={120}
        shares={201}
        messages={89}
      />
      <Video
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        channel="nanaAddo"
        description="My first professional photo"
        song="Possing for the camera"
        likes={125}
        shares={101}
        messages={69}
      />
    </section>
    </div>
  );
}

export default App;
