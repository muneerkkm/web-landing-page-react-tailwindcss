import './App.css';
import React from 'react';
import Header from './components/Header';
import Bodycontent from './components/Bodycontent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Bodycontent/>
     <Footer/>
    </div>
  );
}

export default App;
