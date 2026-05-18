import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Spielzweig.module.css';

const bereiche = [
  {
    titel: 'Die Fürstentümer',
    icon: '♛',
    beschreibung: 'Das Herz des Adelsspiels – die konkurrierenden Häuser und Fürstentümer des Reiches. Jedes Haus hat seine eigene Geschichte, seine Verbündeten und seine Feinde.',
    details: ['Hausintrigen', 'Allianzen & Verrat', 'Territoriale Ansprüche', 'Dynastische Planung'],
  },
  {
    titel: 'Ränge & Titel',
    icon: '👑',
    beschreibung: 'Die soziale Hierarchie des Kaiserreichs ist komplex und vielschichtig. Jeder Titel hat seine Pflichten, seine Privilegien und seinen Preis.',
    details: ['Kaiser & Kurfürsten', 'Fürsten & Grafen', 'Ritter & Barone', 'Hofchargen'],
  },
  {
    titel: 'Diplomatie & Intrige',
    icon: '🎭',
    beschreibung: 'Das eigentliche Spiel des Adels: Worte als Waffe, Schweigen als Strategie. Verhandlungen, verdeckte Abkommen und der richtige Moment.',
    details: ['Hofbälle', 'Geheime Treffen', 'Briefverkehr', 'Öffentliche Erklärungen'],
  },
];

export default function Adelsspiel() {
  return (
    <div className={styles.page}>
      <div className={styles.header} style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.03) 40%, transparent 70%)' }}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link to="/das-spiel" className="text-muted">Das Spiel</Link>
            <span className="text-muted"> / </span>
            <span>Adelsspiel</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className={styles.headerIcon}>♛</div>
            <span className="section-label" style={{ display: 'block', marginTop: 16 }}>Diplomatie & Intrige</span>
            <h1 style={{ marginTop: 8 }}>Adelsspiel</h1>
            <p className="text-secondary" style={{ maxWidth: 580, marginTop: 16, fontSize: 18, lineHeight: 1.7 }}>
              Am Hof des Kaisers wird die wahre Macht gemacht. Nicht mit Schwertern,
              sondern mit Worten, Allianzen und dem richtigen Auftreten zur richtigen Zeit.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="divider-gold" />

      {/* Bereiche */}
      <section className="section">
        <div className="container">
          <span className="section-label">Das Adelsspiel</span>
          <h2 style={{ marginBottom: 48, marginTop: 8 }}>Die Welt der Höfe</h2>
          <div className={styles.sauelen}>
            {bereiche.map((b, i) => (
              <motion.div
                key={b.titel}
                className="card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.saulHeader}>
                  <span className={styles.saulIcon}>{b.icon}</span>
                  <h3>{b.titel}</h3>
                </div>
                <div className="card-body">
                  <p className="text-secondary" style={{ lineHeight: 1.7 }}>{b.beschreibung}</p>
                  <ul className={styles.detailList}>
                    {b.details.map(d => (
                      <li key={d}><span className="text-gold">◈</span> {d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className={styles.philosophie}>
        <div className="divider-gold" />
        <div className="container" style={{ padding: '80px 24px' }}>
          <div className={styles.philosophieInner}>
            <div>
              <span className="section-label">Zeitgeist</span>
              <h2 style={{ marginTop: 8 }}>Wer herrscht, dient</h2>
            </div>
            <div className="prose">
              <p>
                Das Adelsspiel in Quirin ist kein bloßes Kostüm-Theater – es ist
                die komplexeste Form des Rollenspiels, die das Reich zu bieten hat.
              </p>
              <p>
                Die <em>Fürstentümer</em> kämpfen um Einfluss am Kaiserhof, schließen
                Allianzen und brechen sie, wenn es die Notwendigkeit verlangt.
                Titel sind kein Geschenk – sie sind Verpflichtung.
              </p>
              <p>
                Wer das Adelsspiel wählt, muss bereit sein zu schweigen, zu beobachten,
                und genau dann zu sprechen, wenn es zählt.
              </p>
            </div>
          </div>
        </div>
        <div className="divider-gold" />
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/anmeldungen" className="btn btn-primary btn-lg">Jetzt anmelden</Link>
          <Link to="/das-spiel/kriegerspiel" className="btn btn-ghost btn-lg">← Zum Kriegerspiel</Link>
        </div>
      </section>
    </div>
  );
}
