import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ereignisse, typFarben, type EreignisTyp } from '../data/timeline';
import styles from './Geschichte.module.css';

const alleTypen: EreignisTyp[] = ['Krieg', 'Dynastisch', 'Katastrophe', 'Gründung', 'Magie', 'Handel'];

export default function Geschichte() {
  const [filter, setFilter] = useState<EreignisTyp | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const sichtbar = filter ? ereignisse.filter(e => e.typ === filter) : ereignisse;

  const formatJahr = (j: number) =>
    j === 0 ? 'Jahr 0 – Reichsgründung' :
    j < 0 ? `${Math.abs(j)} v.d.B.` : `Jahr ${j} n.d.B.`;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Zeitstrahl</span>
            <h1 style={{ marginTop: 8 }}>Geschichte des Reiches</h1>
            <p className="text-secondary" style={{ maxWidth: 560, marginTop: 16, fontSize: 18, lineHeight: 1.7 }}>
              826 Jahre Fiktion – von der Befreiung aus den Chaos-Herden
              bis zur lebendigen Gegenwart des Kaiserreichs Quirin im Jahr 826.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="divider-gold" />

      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className={styles.filters}>
            <button
              className={`chip ${filter === null ? 'active' : ''}`}
              onClick={() => setFilter(null)}
            >
              Alle Ereignisse
            </button>
            {alleTypen.map(t => (
              <button
                key={t}
                className={`chip ${filter === t ? 'active' : ''}`}
                onClick={() => setFilter(f => f === t ? null : t)}
                style={filter === t ? { borderColor: typFarben[t], color: typFarben[t], background: `${typFarben[t]}14` } : {}}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: typFarben[t],
                  }}
                />
                {t}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className={styles.timeline}>
            <div className={styles.timelineAxis} />

            <AnimatePresence mode="popLayout">
              {sichtbar.map((e, i) => (
                <motion.div
                  key={e.id}
                  className={`${styles.ereignis} ${i % 2 === 0 ? styles.links : styles.rechts}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  layout
                >
                  {/* Jahr-Marker */}
                  <div
                    className={styles.marker}
                    style={{ borderColor: typFarben[e.typ], boxShadow: `0 0 12px ${typFarben[e.typ]}40` }}
                  />

                  {/* Card */}
                  <div
                    className={`card ${styles.ereignisCard} ${expanded === e.id ? styles.ereignisCardOpen : ''}`}
                    onClick={() => setExpanded(ex => ex === e.id ? null : e.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={ev => ev.key === 'Enter' && setExpanded(ex => ex === e.id ? null : e.id)}
                  >
                    <div className={styles.ereignisHeader}>
                      <div>
                        <span
                          className={styles.ereignisJahr}
                          style={{ color: typFarben[e.typ] }}
                        >
                          {formatJahr(e.jahr)}
                        </span>
                        <h4 style={{ marginTop: 4 }}>{e.titel}</h4>
                      </div>
                      <span
                        className="badge"
                        style={{ background: `${typFarben[e.typ]}18`, color: typFarben[e.typ], border: `1px solid ${typFarben[e.typ]}40`, flexShrink: 0 }}
                      >
                        {e.typ}
                      </span>
                    </div>
                    <AnimatePresence>
                      {expanded === e.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className={styles.ereignisBody}
                        >
                          <p className="text-secondary" style={{ fontSize: 14, lineHeight: 1.7 }}>
                            {e.beschreibung}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className={styles.expandHint}>
                      {expanded === e.id ? '▲ Einklappen' : '▼ Mehr lesen'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {sichtbar.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--fg-muted)' }}>
              Keine Ereignisse für diesen Filter.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
