import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Galerie.module.css';

type GalerieKat = 'Alle' | 'Regionen' | 'Events' | 'Artwork';

interface GalerieBild {
  id: string;
  alt: string;
  kategorie: Exclude<GalerieKat, 'Alle'>;
  breite: 'normal' | 'breit';
  placeholder: string;
  src?: string; // real image path
}

const bilder: GalerieBild[] = [
  { id: 'g1', alt: 'Kaiserpalast Navalis – Talborn bei Nacht', kategorie: 'Artwork', breite: 'breit', placeholder: 'linear-gradient(135deg, #1a1200, #3a2800)', src: '/images/hero-castle.png' },
  { id: 'g2', alt: 'Reichswappen des Kaiserreichs Quirin', kategorie: 'Regionen', breite: 'normal', placeholder: 'linear-gradient(135deg, #0a0a08, #1a1810)', src: '/images/wappen-kaiserreich.png' },
  { id: 'g3', alt: 'Wappen Kronland Talborn', kategorie: 'Regionen', breite: 'normal', placeholder: 'linear-gradient(135deg, #1a1200, #2a2000)', src: '/images/wappen-talborn.png' },
  { id: 'g4', alt: 'Wappen Siegeshain', kategorie: 'Regionen', breite: 'normal', placeholder: 'linear-gradient(135deg, #0a1a2a, #102030)', src: '/images/wappen-siegeshain.png' },
  { id: 'g5', alt: 'Wappen Waldestrutz', kategorie: 'Regionen', breite: 'normal', placeholder: 'linear-gradient(135deg, #0a1a0a, #102010)', src: '/images/wappen-waldestrutz.png' },
  { id: 'g6', alt: 'Wappen Roon', kategorie: 'Regionen', breite: 'normal', placeholder: 'linear-gradient(135deg, #0a1418, #101c20)', src: '/images/wappen-roon.png' },
  { id: 'g7', alt: 'Wappen Trident', kategorie: 'Regionen', breite: 'normal', placeholder: 'linear-gradient(135deg, #081420, #0c1828)', src: '/images/wappen-trident.jpeg' },
  { id: 'g8', alt: 'Wappen Nebelwacht', kategorie: 'Regionen', breite: 'normal', placeholder: 'linear-gradient(135deg, #08101a, #0c1420)', src: '/images/wappen-nebelwacht.jpeg' },
  { id: 'g9', alt: 'Wappen Argent', kategorie: 'Regionen', breite: 'normal', placeholder: 'linear-gradient(135deg, #151518, #1e1e20)', src: '/images/wappen-argent.png' },
  { id: 'g10', alt: 'Wappen Sturmkap', kategorie: 'Regionen', breite: 'normal', placeholder: 'linear-gradient(135deg, #181210, #201816)', src: '/images/wappen-sturmkap.png' },
  { id: 'g11', alt: 'Kaiserliche Krone mit Sonnenmotiv', kategorie: 'Artwork', breite: 'normal', placeholder: 'linear-gradient(135deg, #1a1200, #2a2000)', src: '/images/krone-sonne.png' },
  { id: 'g12', alt: 'Imperiale Krone mit Drachen', kategorie: 'Artwork', breite: 'normal', placeholder: 'linear-gradient(135deg, #0a0a08, #181808)', src: '/images/krone-kaiserlich.png' },
  { id: 'g13', alt: 'Semper Amplio – Emblem des Reiches', kategorie: 'Artwork', breite: 'breit', placeholder: 'linear-gradient(135deg, #0a0800, #181200)', src: '/images/emblem-semper-amplio.png' },
];

export default function Galerie() {
  const [filter, setFilter] = useState<GalerieKat>('Alle');
  const [lightbox, setLightbox] = useState<GalerieBild | null>(null);

  const kategorien: GalerieKat[] = ['Alle', 'Regionen', 'Events', 'Artwork'];
  const sichtbar = filter === 'Alle' ? bilder : bilder.filter(b => b.kategorie === filter);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Bilder & Eindrücke</span>
            <h1 style={{ marginTop: 8 }}>Galerie</h1>
            <p className="text-secondary" style={{ maxWidth: 520, marginTop: 16, fontSize: 18, lineHeight: 1.7 }}>
              Atmosphärische Impressionen aus dem Kaiserreich – Fotos von Events
              und generierte Artworks aus der Welt von Quirin.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="divider-gold" />

      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className={styles.filters}>
            {kategorien.map(k => (
              <button
                key={k}
                className={`chip ${filter === k ? 'active' : ''}`}
                onClick={() => setFilter(k)}
              >
                {k}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className={styles.masonry}>
            {sichtbar.map((b, i) => (
              <motion.div
                key={b.id}
                className={`${styles.item} ${b.breite === 'breit' ? styles.itemBreit : ''}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                layout
                onClick={() => setLightbox(b)}
              >
                <div
                  className={styles.itemImg}
                  style={{ background: b.placeholder }}
                  role="img"
                  aria-label={b.alt}
                >
                  {b.src ? (
                    <img
                      src={b.src}
                      alt={b.alt}
                      className={styles.realImg}
                    />
                  ) : (
                    <div className={styles.placeholder}>
                      <span>🖼</span>
                      <span className={styles.placeholderText}>{b.alt}</span>
                    </div>
                  )}
                </div>
                <div className={styles.itemOverlay}>
                  <span className="badge badge-gold">{b.kategorie}</span>
                  <p className={styles.itemAlt}>{b.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <div
            className={styles.lightboxImg}
            style={{ background: lightbox.placeholder }}
            onClick={e => e.stopPropagation()}
          >
            {lightbox.src ? (
              <img src={lightbox.src} alt={lightbox.alt} className={styles.lightboxRealImg} />
            ) : (
              <div className={styles.placeholder}>
                <span style={{ fontSize: 64 }}>🖼</span>
                <span className={styles.placeholderText}>{lightbox.alt}</span>
              </div>
            )}
          </div>
          <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
        </div>
      )}
    </div>
  );
}
