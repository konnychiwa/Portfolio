import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import WelcomeScreen from './pages/WelcomeScreen';

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && <></>}
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
