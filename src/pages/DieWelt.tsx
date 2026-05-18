import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { regionen } from '../data/regionen';
import styles from './DieWelt.module.css';

export default function DieWelt() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Spielwelt</span>
            <h1 style={{ marginTop: 8 }}>Die Welt von Quirin</h1>
            <p className="text-secondary" style={{ maxWidth: 600, marginTop: 16, fontSize: 18, lineHeight: 1.7 }}>
              Das Kaiserreich erstreckt sich über acht Präfekturen – jede mit ihrer eigenen Kultur,
              Geschichte und Eigenheit. Erkunde die Welt, die dich erwartet.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="divider-gold" />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {regionen.map((region, i) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link to={`/die-welt/${region.id}`} className={`card ${styles.regionCard}`}>
                  <div
                    className={styles.regionHeader}
                    style={{ background: `linear-gradient(135deg, ${region.farbe}18, ${region.farbe}08)` }}
                  >
                    <img
                      src={region.wappen}
                      alt={`Wappen ${region.name}`}
                      className={styles.regionWappen}
                    />
                    <div>
                      <div className={styles.regionLabel}>{region.schlagwort}</div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className={styles.regionName}>{region.name}</h3>
                    <p className="text-secondary" style={{ fontSize: 14, lineHeight: 1.65, marginTop: 10 }}>
                      {region.beschreibung}
                    </p>
                    <div className={styles.regionTags}>
                      {region.kultur.slice(0, 3).map(k => (
                        <span key={k} className="badge badge-neutral">{k}</span>
                      ))}
                    </div>
                    <div className={styles.regionArrow} style={{ color: region.farbe }}>
                      Erkunden →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lore teaser */}
      <section className={styles.loreTeaser}>
        <div className="divider-gold" />
        <div className="container" style={{ padding: '64px 24px' }}>
          <div className={styles.loreTeaserInner}>
            <div>
              <span className="section-label">Geschichte & Lore</span>
              <h2>1.200 Jahre im Zeitstrahl</h2>
              <p className="text-secondary" style={{ marginTop: 16, maxWidth: 480 }}>
                Von der Gründung des Reiches bis zur Gegenwart –
                entdecke die wichtigsten Ereignisse, Kriege und Dynastien.
              </p>
              <Link to="/geschichte" className="btn btn-outline" style={{ marginTop: 24 }}>
                Zum Zeitstrahl
              </Link>
            </div>
            <div className={styles.loreTeaserStats}>
              <div className={styles.loreStat}>
                <strong className="font-display text-gold" style={{ fontSize: 48 }}>8</strong>
                <span className="text-muted">Präfekturen</span>
              </div>
              <div className={styles.loreStat}>
                <strong className="font-display text-gold" style={{ fontSize: 48 }}>1.200+</strong>
                <span className="text-muted">Jahre Fiktion</span>
              </div>
              <div className={styles.loreStat}>
                <strong className="font-display text-gold" style={{ fontSize: 48 }}>7</strong>
                <span className="text-muted">Völker</span>
              </div>
            </div>
          </div>
        </div>
        <div className="divider-gold" />
      </section>
    </div>
  );
}
