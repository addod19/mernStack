import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';

import './App.css';

function App() {
  return (
    <div className="app">
     {/* Header */}
     <Header />
     {/* TinderCads */}
     <TinderCards />
     {/* SwipeButtons */}
     <SwipeButtons />
    </div>
  );
}

export default App;
