import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home/Home';  // Scene components
import Logement from './scenes/Logement/Logement';
import APropos from './scenes/APropos/APropos';
import NotFound from './scenes/NotFound/NotFound';
import './App.scss';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import './styles.scss';

function App() {
  return (
    <div className="App">
        <Header />
        <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Logement/:id" element={<Logement/>} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
      </Routes>
      </main>
      <Footer />


    </div>

    





  );
}

export default App;
