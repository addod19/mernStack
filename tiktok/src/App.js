// import SideBar from './components/SideBar';
import Video from './components/Video';
// import Footer from './components/Footer';

import './App.css';


const App = () => {
  return (
    <div className="app">
    <section className="app__videos">
      <Video />
      <Video />
    </section>
    </div>
  );
}

export default App;
