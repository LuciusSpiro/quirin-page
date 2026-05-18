import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './DasSpiel.module.css';

const grundsaetze = [
  {
    nr: '01',
    titel: '24/7 Immersion',
    text: 'Wir gestalten unser Spiel als eine rund um die Uhr Erfahrung – 24 Stunden nonstop. In-Time beginnt mit dem ersten Schritt ins Spielgelände.',
  },
  {
    nr: '02',
    titel: 'Ausgewogene Herausforderungen',
    text: 'Wir bieten physische und psychologische Herausforderungen, die den Szenarien entsprechen und die Grenzen der Teilnehmer respektieren.',
  },
  {
    nr: '03',
    titel: 'Respekt & Inklusion',
    text: 'Alle Spieler erhalten Respekt – unabhängig von Religion, politischer Überzeugung oder Geschlecht.',
  },
  {
    nr: '04',
    titel: 'In-Time / Out-Time',
    text: 'Eine klare Trennung zwischen Rollenspiel (In-Time) und Realität (Out-Time) wird stets aufrechterhalten.',
  },
  {
    nr: '05',
    titel: 'Gemeinschaft',
    text: 'Wir sind eine leidenschaftliche Gruppe von Privatpersonen, die ihr Hobby lebt – kein eingetragener Verein, sondern echte Gemeinschaft.',
  },
];

export default function DasSpiel() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="section-label">Spielkonzept</span>
            <h1 style={{ marginTop: 8 }}>Das Spiel</h1>
            <p className="text-secondary" style={{ maxWidth: 560, marginTop: 16, fontSize: 18, lineHeight: 1.7 }}>
              Quirin bietet zwei Spielzweige: das körperlich fordernde Kriegerspiel
              und das diplomatisch komplexe Adelsspiel. Beide Welten treffen im Reich aufeinander.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="divider-gold" />

      {/* Two branches */}
      <section className="section">
        <div className="container">
          <div className={styles.branches}>
            {/* Kriegerspiel */}
            <Link to="/das-spiel/kriegerspiel" className={`card ${styles.branchCard}`}>
              <div className={styles.branchHeader} style={{ background: 'linear-gradient(135deg, rgba(184,86,86,0.15), rgba(184,86,86,0.04))' }}>
                <div className={styles.branchIcon}>⚔</div>
                <span className="badge badge-gold">Körperlich & taktisch</span>
              </div>
              <div className="card-body">
                <h2 className={styles.branchTitle}>Kriegerspiel</h2>
                <p className="text-secondary" style={{ marginTop: 12, lineHeight: 1.7 }}>
                  Das Kriegerspiel steht in einer jahrzehntelangen Tradition. Es verbindet
                  Kampfkunst, Ehre und hierarchisches Denken. Drei Säulen tragen das Spiel:
                  die Kriegerakademie, der Bund der Klingen und Banner 21.
                </p>
                <ul className={styles.branchFeatures}>
                  <li>Quiriner Kriegerakademie</li>
                  <li>Bund der Klingen</li>
                  <li>Banner 21 (Spielergruppe)</li>
                  <li>Waffenarten & Turniere</li>
                  <li>Rangsystem & Hierarchie</li>
                </ul>
                <div className={styles.branchCta}>
                  Mehr erfahren <span>→</span>
                </div>
              </div>
            </Link>

            {/* Adelsspiel */}
            <Link to="/das-spiel/adelsspiel" className={`card ${styles.branchCard}`}>
              <div className={styles.branchHeader} style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.04))' }}>
                <div className={styles.branchIcon}>♛</div>
                <span className="badge badge-gold">Diplomatie & Intrige</span>
              </div>
              <div className="card-body">
                <h2 className={styles.branchTitle}>Adelsspiel</h2>
                <p className="text-secondary" style={{ marginTop: 12, lineHeight: 1.7 }}>
                  Das Adelsspiel ist das Reich der Worte, Allianzen und verborgenen Pläne.
                  Die Fürstentümer ringen um Einfluss am Kaiserhof – mit Verhandlung,
                  Intrige und dem richtigen Auftreten zur richtigen Zeit.
                </p>
                <ul className={styles.branchFeatures}>
                  <li>Die Fürstentümer</li>
                  <li>Adelsränge & Titel</li>
                  <li>Hofintrigenspiel</li>
                  <li>Diplomatische Verhandlungen</li>
                  <li>Hofbälle & Zeremonien</li>
                </ul>
                <div className={styles.branchCta}>
                  Mehr erfahren <span>→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Grundsätze */}
      <section className={`section ${styles.grundsaetzeSection}`}>
        <div className="divider-gold" />
        <div className="container" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-label">Community</span>
            <h2>Unsere fünf Grundsätze</h2>
          </div>
          <div className={styles.grundsaetze}>
            {grundsaetze.map((g, i) => (
              <motion.div
                key={g.nr}
                className={styles.grundsatz}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className={styles.grundsatzNr}>{g.nr}</span>
                <div>
                  <h4 style={{ color: 'var(--fg-primary)', marginBottom: 8 }}>{g.titel}</h4>
                  <p className="text-secondary" style={{ fontSize: 14, lineHeight: 1.7 }}>{g.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="divider-gold" />
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: 8 }}>Bereit einzusteigen?</h3>
          <p className="text-secondary" style={{ marginBottom: 32 }}>Wähle deinen Weg und melde dich für das nächste Event an.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/anmeldungen" className="btn btn-primary btn-lg">Jetzt anmelden</Link>
            <Link to="/faq" className="btn btn-ghost btn-lg">Häufige Fragen</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
