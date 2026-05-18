import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Spielzweig.module.css';

const sauelen = [
  {
    titel: 'Quiriner Kriegerakademie',
    icon: '🏛',
    beschreibung: 'Die älteste und renommierteste Militärschule des Reiches. Sie bildet seit Generationen die Elite der kaiserlichen Streitkräfte aus – Disziplin, Strategie und Kampfkunst in einem.',
    details: ['Taktisches Denken', 'Waffenausbildung', 'Hierarchieverständnis', 'Traditionswahrung'],
  },
  {
    titel: 'Bund der Klingen',
    icon: '⚔',
    beschreibung: 'Eine exklusive Bruderschaft der besten Kämpfer. Der Bund der Klingen hütet die alten Kampfkünste und stellt sich in den persönlichen Dienst des Kaisers.',
    details: ['Schwertkampfschulen', 'Turnierkultur', 'Ehrenkodex', 'Waffenmeister'],
  },
  {
    titel: 'Banner 21',
    icon: '🏴',
    beschreibung: 'Die aktive Spielergruppe innerhalb des Kriegerspiels. Banner 21 nimmt an allen Kriegerspielereignissen teil und repräsentiert die lebendige Gemeinschaft der Kämpfer.',
    details: ['Gruppenspiel', 'Aktive Events', 'Gemeinschaft', 'Turniere'],
  },
];

export default function Kriegerspiel() {
  return (
    <div className={styles.page}>
      <div className={styles.header} style={{ background: 'linear-gradient(135deg, rgba(184,86,86,0.12) 0%, rgba(184,86,86,0.03) 40%, transparent 70%)' }}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link to="/das-spiel" className="text-muted">Das Spiel</Link>
            <span className="text-muted"> / </span>
            <span>Kriegerspiel</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className={styles.headerIcon}>⚔</div>
            <span className="section-label" style={{ display: 'block', marginTop: 16 }}>Körperlich & Taktisch</span>
            <h1 style={{ marginTop: 8 }}>Kriegerspiel</h1>
            <p className="text-secondary" style={{ maxWidth: 580, marginTop: 16, fontSize: 18, lineHeight: 1.7 }}>
              Das Kriegerspiel in Quirin – stolz auf seine jahrzehntelange Tradition – wurzelt tief
              in der Vergangenheit des Reiches. Es ist ein Spiel der Disziplin, der Waffen und der Ehre.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="divider-gold" />

      {/* Säulen */}
      <section className="section">
        <div className="container">
          <span className="section-label">Die drei Säulen</span>
          <h2 style={{ marginBottom: 48, marginTop: 8 }}>Das Fundament des Kriegerspiels</h2>
          <div className={styles.sauelen}>
            {sauelen.map((s, i) => (
              <motion.div
                key={s.titel}
                className="card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.saulHeader}>
                  <span className={styles.saulIcon}>{s.icon}</span>
                  <h3>{s.titel}</h3>
                </div>
                <div className="card-body">
                  <p className="text-secondary" style={{ lineHeight: 1.7 }}>{s.beschreibung}</p>
                  <ul className={styles.detailList}>
                    {s.details.map(d => (
                      <li key={d}><span className="text-gold">◈</span> {d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className={styles.philosophie}>
        <div className="divider-gold" />
        <div className="container" style={{ padding: '80px 24px' }}>
          <div className={styles.philosophieInner}>
            <div>
              <span className="section-label">Philosophie</span>
              <h2 style={{ marginTop: 8 }}>Der Weg des Kriegers</h2>
            </div>
            <div className="prose">
              <p>
                Als magische Institutionen begannen, die Gesellschaft zu dominieren,
                gründeten die Krieger des Reiches als Gegenbewegung eine exklusive Institution –
                der Kriegerphilosophie gewidmet.
              </p>
              <p>
                Das Ziel: <em>die Fertigkeiten im Umgang mit unterschiedlichen Waffen zu verfeinern</em>,
                strategisches Denken zu schulen und den Respekt vor hierarchischen Strukturen zu leben.
              </p>
              <p>
                Wer das Kriegerspiel wählt, sucht Herausforderungen. Körperliche Ertüchtigung,
                taktische Tiefe und ein Ehrenkodex, der jeden Kampf zu mehr macht als zur bloßen Konfrontation.
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
          <Link to="/das-spiel/adelsspiel" className="btn btn-ghost btn-lg">Zum Adelsspiel →</Link>
        </div>
      </section>
    </div>
  );
}
