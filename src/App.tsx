import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import BuySell from './pages/BuySell';
import Contact from './pages/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/buy-sell" element={<BuySell />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <ChatWidget />
    </Router>
  );
};

export default App;