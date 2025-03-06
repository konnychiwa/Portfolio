import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import WelcomeScreen from './pages/WelcomeScreen';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AnimatedBackground from './components/Background';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ContactPage from './pages/Contac';
import Footer from './pages/Footer';

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      <div
        className={`transition-opacity duration-1000 ${
          showWelcome ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Navbar />
        <AnimatedBackground />
        <Home />
        <About />
        <Portfolio />
        <ContactPage />
        <Footer />
      </div>
    </>
  );
};

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
