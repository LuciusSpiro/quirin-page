import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { events, formatDatum, type Event } from '../data/events';
import { img } from '../utils/assets';
import styles from './Anmeldungen.module.css';

type Kategorie = Event['kategorie'] | 'Alle';
const kategorien: Kategorie[] = ['Alle', 'Kriegerspiel', 'Adelsspiel', 'Gemeinschaft', 'Akademie', 'Sonstiges'];

function PlaetzeBar({ frei, gesamt }: { frei: number; gesamt: number }) {
  const pct = ((gesamt - frei) / gesamt) * 100;
  const color = frei === 0 ? 'var(--danger)' : frei < 5 ? 'var(--warning)' : 'var(--success)';
  return (
    <div className={styles.plaetzeBar}>
      <div className={styles.plaetzeTrack}>
        <div className={styles.plaetzeFill} style={{ width: `${pct}%`, background: color }} />
      </div>
      <span style={{ color, fontSize: 12 }}>
        {frei === 0 ? 'Ausgebucht' : `${frei} Plätze frei`}
      </span>
    </div>
  );
}

function BuchungsModal({ event: ev, onClose }: { event: Event; onClose: () => void }) {
  const [step, setStep] = useState<'form' | 'confirm'>('form');
  const [form, setForm] = useState({ name: '', email: '', charname: '' });
  const [staffelIndex, setStaffelIndex] = useState(0);

  const preis = ev.staffeln ? ev.staffeln[staffelIndex].preis : ev.preis;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirm');
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        onClick={e => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <div>
            <h3 style={{ margin: 0 }}>{ev.titel}</h3>
            <span className="text-muted" style={{ fontSize: 13 }}>{formatDatum(ev.datum, ev.datumEnde)}</span>
          </div>
          <button className={styles.modalClose} onClick={onClose}>✕</button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className={styles.modalBody}>
            <div className="field">
              <label className="field-label">Name (Real)</label>
              <input
                className="input"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Dein Name"
              />
            </div>
            <div className="field">
              <label className="field-label">E-Mail</label>
              <input
                className="input"
                type="email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="deine@email.de"
              />
            </div>
            <div className="field">
              <label className="field-label">Charaktername (optional)</label>
              <input
                className="input"
                value={form.charname}
                onChange={e => setForm(f => ({ ...f, charname: e.target.value }))}
                placeholder="Name deines Charakters"
              />
            </div>

            {ev.staffeln && (
              <div className="field">
                <label className="field-label">Staffel</label>
                <div className={styles.filters} style={{ marginBottom: 0 }}>
                  {ev.staffeln.map((s, i) => (
                    <button
                      key={s.name}
                      type="button"
                      className={`chip ${staffelIndex === i ? 'active' : ''}`}
                      onClick={() => setStaffelIndex(i)}
                    >
                      {s.name} – {s.preis} €
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.modalPrice}>
              <span className="text-muted">Gesamtbetrag</span>
              <strong className="font-display text-gold" style={{ fontSize: 28 }}>
                {preis},00 €
              </strong>
            </div>

            <p className="text-muted" style={{ fontSize: 12, lineHeight: 1.6 }}>
              Nach dem Klick auf "Weiter zu Stripe" wirst du zu unserem sicheren
              Zahlungsanbieter weitergeleitet. Die Anmeldung wird erst nach
              Zahlungseingang bestätigt.
            </p>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              Weiter zu Stripe →
            </button>
          </form>
        ) : (
          <div className={styles.modalBody} style={{ textAlign: 'center', gap: 16 }}>
            <div style={{ fontSize: 48 }}>✓</div>
            <h3 style={{ color: 'var(--success)' }}>Weiterleitung zu Stripe</h3>
            <p className="text-secondary">
              In einer produktiven Umgebung würdest du jetzt zur Stripe-Checkout-Seite weitergeleitet.
              Deine Anmeldedaten wurden erfasst.
            </p>
            <p className="text-muted" style={{ fontSize: 12 }}>
              Stripe Public Key wird in <code>.env.local</code> als{' '}
              <code>VITE_STRIPE_PUBLIC_KEY</code> konfiguriert.
            </p>
            <button className="btn btn-ghost" onClick={onClose}>Schließen</button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function Anmeldungen() {
  const [filter, setFilter] = useState<Kategorie>('Alle');
  const [selected, setSelected] = useState<Event | null>(null);

  const sichtbar = filter === 'Alle' ? events : events.filter(e => e.kategorie === filter);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerBg} style={{ backgroundImage: `url(${img('/images/apellplatz.jpg')})` }} />
        <div className={styles.headerGradient} />
        <div className={`container ${styles.headerContent}`}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Events</span>
            <h1 style={{ marginTop: 8 }}>Anmeldungen</h1>
            <p className="text-secondary" style={{ maxWidth: 520, marginTop: 16, fontSize: 18, lineHeight: 1.7 }}>
              Wähle ein Event und sichere deinen Platz im Kaiserreich.
              Plätze sind begrenzt – frühzeitig anmelden lohnt sich.
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

          {/* Events */}
          <div className={styles.eventGrid}>
            {sichtbar.map((ev, i) => (
              <motion.div
                key={ev.id}
                className={`card ${styles.eventCard}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                layout
              >
                <div className={styles.eventHeader}>
                  <div>
                    <span className="badge badge-gold">{ev.kategorie}</span>
                    <h3 style={{ margin: '12px 0 0' }}>{ev.titel}</h3>
                  </div>
                  <div className={styles.eventPreis}>
                    {ev.staffeln && <span className="text-muted" style={{ fontSize: 12, display: 'block' }}>ab</span>}
                    <strong className="font-display text-gold" style={{ fontSize: 28 }}>
                      {ev.preis} €
                    </strong>
                  </div>
                </div>

                <div className="card-body">
                  <div className={styles.eventMeta}>
                    <span>📅 {formatDatum(ev.datum, ev.datumEnde)}</span>
                    <span>📍 {ev.ort}</span>
                  </div>
                  <p className="text-secondary" style={{ fontSize: 14, lineHeight: 1.7, marginTop: 16 }}>
                    {ev.beschreibung}
                  </p>

                  <PlaetzeBar frei={ev.plaetzeFrei} gesamt={ev.plaetze} />

                  <button
                    className={`btn btn-primary ${styles.eventBtn}`}
                    disabled={ev.plaetzeFrei === 0}
                    onClick={() => setSelected(ev)}
                  >
                    {ev.plaetzeFrei === 0 ? 'Ausgebucht' : 'Jetzt anmelden'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {sichtbar.length === 0 && (
            <p className="text-muted" style={{ textAlign: 'center', padding: '64px 0' }}>
              Keine Events in dieser Kategorie.
            </p>
          )}
        </div>
      </section>

      {/* Booking modal */}
      <AnimatePresence>
        {selected && (
          <BuchungsModal event={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
