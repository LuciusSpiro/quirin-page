import { HashRouter as BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import DieWelt from './pages/DieWelt';
import Region from './pages/Region';
import DasSpiel from './pages/DasSpiel';
import Kriegerspiel from './pages/Kriegerspiel';
import Adelsspiel from './pages/Adelsspiel';
import Geschichte from './pages/Geschichte';
import Anmeldungen from './pages/Anmeldungen';
import Galerie from './pages/Galerie';
import FAQ from './pages/FAQ';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Teilnahmebedingungen from './pages/Teilnahmebedingungen';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/die-welt" element={<DieWelt />} />
          <Route path="/die-welt/:id" element={<Region />} />
          <Route path="/das-spiel" element={<DasSpiel />} />
          <Route path="/das-spiel/kriegerspiel" element={<Kriegerspiel />} />
          <Route path="/das-spiel/adelsspiel" element={<Adelsspiel />} />
          <Route path="/geschichte" element={<Geschichte />} />
          <Route path="/anmeldungen" element={<Anmeldungen />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/teilnahmebedingungen" element={<Teilnahmebedingungen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
