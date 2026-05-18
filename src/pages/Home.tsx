import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { news } from '../data/news';
import styles from './Home.module.css';

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.img
              src="/images/wappen-kaiserreich.png"
              alt="Wappen des Kaiserreichs Quirin"
              className={styles.heroWappen}
              variants={fade}
            />
            <motion.span className="section-label" variants={fade}>
              Kaiserreich Quirin · LARP seit 1999
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fade}>
              Sey gegrüßt,
              <br />
              <em className="text-gold italic">Reisender</em>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fade}>
              Das Kaiserreich Quirin – das Juwel des Westens – erwartet dich.
              Ein lebendiges Imperium, eine reiche Geschichte, und ein Platz
              für dich – ob Krieger, Edelmann oder freier Händler.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fade}>
              <Link to="/anmeldungen" className="btn btn-primary btn-lg">
                Jetzt teilnehmen
              </Link>
              <Link to="/die-welt" className="btn btn-ghost btn-lg">
                Die Welt erkunden
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* scroll hint */}
        <div className={styles.scrollHint}>
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </section>

      {/* ── Feature tiles ── */}
      <section className="section">
        <div className="container">
          <div className={styles.features}>
            {[
              {
                icon: '⚔',
                label: 'Das Spiel',
                title: 'Krieger & Adel',
                desc: 'Zwei Spielzweige, eine Welt: Verfeinere deine Kampfkünste im Kriegerspiel oder navigiere die Intrigen des Adelsspiels.',
                to: '/das-spiel',
              },
              {
                icon: '🗺',
                label: 'Die Welt',
                title: '8 Regionen',
                desc: 'Vom Kronland Talborn bis zu den Stürmen von Sturmkap – jede Präfektur trägt eine eigene Kultur und Geschichte.',
                to: '/die-welt',
              },
              {
                icon: '📜',
                label: 'Geschichte',
                title: '1.200 Jahre Lore',
                desc: 'Eine lebendige Welt mit Jahrhunderten von Geschichte, Kriegen, Dynastien und Legenden.',
                to: '/geschichte',
              },
            ].map(f => (
              <Link key={f.to} to={f.to} className={`card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <span className="section-label" style={{ marginBottom: 8 }}>{f.label}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className="prose" style={{ fontSize: 14 }}>{f.desc}</p>
                <span className={styles.featureArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div>
              <span className="section-label">Was ist Quirin?</span>
              <h2>Ein Reich, das lebt</h2>
              <div className="prose" style={{ marginTop: 24 }}>
                <p>
                  Das Kaiserreich Quirin ist eine <em>24/7-Immersion</em> – ein Live-Action-Rollenspiel,
                  das auf der Insel Efarim spielt, dem Herzstück des Westens.
                  Gegründet 1999 in Würzburg, vereint Quirin die Codes der Samurai-Philosophie
                  mit mittelalterlichem Fantasy-Europa.
                </p>
                <p style={{ marginTop: 16 }}>
                  Ob in der <em>Quiriner Kriegerakademie</em>, im <em>Bund der Klingen</em>
                  oder am Hofe des Kaisers in Talborn – hier schreibst du deine eigene Geschichte.
                </p>
              </div>
              <div className={styles.stats}>
                {[
                  { val: '1999', lab: 'Gründungsjahr' },
                  { val: '3.0', lab: 'Aktuelle Version' },
                  { val: '8', lab: 'Regionen' },
                  { val: '1.200+', lab: 'Jahre Lore' },
                ].map(s => (
                  <div key={s.val} className={styles.stat}>
                    <strong className="text-gold font-display" style={{ fontSize: 32 }}>{s.val}</strong>
                    <span className="text-muted" style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.lab}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.commitments}>
              <div className={styles.commitmentTitle}>Unsere Grundsätze</div>
              {[
                { icon: '◈', title: '24/7 Immersion', desc: 'Nonstop-Erlebnis – wir spielen rund um die Uhr.' },
                { icon: '◈', title: 'Ausgewogene Herausforderungen', desc: 'Physisch und psychisch, immer im Rahmen deiner Grenzen.' },
                { icon: '◈', title: 'Respekt & Inklusion', desc: 'Alle Spieler werden gleich respektiert – ohne Ausnahme.' },
                { icon: '◈', title: 'In-Time / Out-Time', desc: 'Klare Trennung zwischen Spiel und Realität.' },
                { icon: '◈', title: 'Gemeinschaft', desc: 'Eine leidenschaftliche Gruppe, die ihr Hobby lebt.' },
              ].map(c => (
                <div key={c.title} className={styles.commitment}>
                  <span className="text-gold">{c.icon}</span>
                  <div>
                    <strong style={{ color: 'var(--fg-primary)', fontSize: 14 }}>{c.title}</strong>
                    <p className="text-muted" style={{ fontSize: 13, marginTop: 2 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── News ── */}
      <section className="section-sm">
        <div className="container">
          <span className="section-label">Neuigkeiten</span>
          <h2 style={{ marginBottom: 40 }}>Aktuelle Ankündigungen</h2>
          <div className={styles.newsList}>
            {news.map(n => (
              <div key={n.id} className={`card ${styles.newsCard}`}>
                <div className="card-body">
                  <div className={styles.newsMeta}>
                    <span className="badge badge-gold">{n.kategorie}</span>
                    <span className="text-muted" style={{ fontSize: 12 }}>
                      {new Date(n.datum).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  <h4 style={{ marginTop: 12 }}>{n.titel}</h4>
                  <p className="text-secondary" style={{ fontSize: 14, marginTop: 8 }}>{n.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className="divider-gold" />
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className="font-display">Bereit für das Kaiserreich?</h2>
              <p className="text-secondary" style={{ marginTop: 8 }}>
                Melde dich für das nächste Event an und tritt in die Welt von Quirin ein.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <Link to="/anmeldungen" className="btn btn-primary btn-lg">
                Zu den Events
              </Link>
              <Link to="/faq" className="btn btn-ghost btn-lg">
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
        <div className="divider-gold" />
      </section>
    </div>
  );
}
