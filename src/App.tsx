import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Stats } from './components/sections/Stats';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { Portfolio } from './pages/Portfolio';
import { BoltBadge } from './components/ui/BoltBadge';
import { Toast } from './components/ui/Toast';
import { useToast } from './hooks/useToast';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </>
  );
}

function App() {
  const { toast, showToast, hideToast } = useToast();

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
        <BoltBadge />
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={hideToast}
        />
      </div>
    </Router>
  );
}

export default App;