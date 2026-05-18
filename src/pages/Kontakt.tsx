import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import styles from './Kontakt.module.css';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Kontakt() {
  const [form, setForm] = useState({ name: '', email: '', betreff: '', nachricht: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS integration
      // import emailjs from '@emailjs/browser';
      // await emailjs.send(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      //   { from_name: form.name, reply_to: form.email, subject: form.betreff, message: form.nachricht },
      //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      // );

      // Simulate send (replace with real EmailJS call above)
      await new Promise(r => setTimeout(r, 1200));
      setStatus('success');
      setForm({ name: '', email: '', betreff: '', nachricht: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Spielleitung</span>
            <h1 style={{ marginTop: 8 }}>Kontakt</h1>
            <p className="text-secondary" style={{ maxWidth: 520, marginTop: 16, fontSize: 18, lineHeight: 1.7 }}>
              Fragen, Anregungen oder einfach Hallo sagen – die Spielleitung
              freut sich über jede Nachricht.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="divider-gold" />

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Form */}
            <div>
              {status === 'success' ? (
                <motion.div
                  className={styles.success}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className={styles.successIcon}>✓</div>
                  <h3>Vielen Dank für deine Nachricht!</h3>
                  <p className="text-secondary">
                    Wir haben deine Nachricht erhalten und melden uns so schnell wie möglich.
                  </p>
                  <p className="text-muted" style={{ fontSize: 13 }}>✨ Vielen Dank für deine Antwort.</p>
                  <button
                    className="btn btn-ghost"
                    onClick={() => setStatus('idle')}
                    style={{ marginTop: 8 }}
                  >
                    Neue Nachricht senden
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className="field">
                      <label className="field-label">Name *</label>
                      <input
                        className="input"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Dein Name"
                      />
                    </div>
                    <div className="field">
                      <label className="field-label">E-Mail *</label>
                      <input
                        className="input"
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="deine@email.de"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="field-label">Betreff</label>
                    <input
                      className="input"
                      value={form.betreff}
                      onChange={e => setForm(f => ({ ...f, betreff: e.target.value }))}
                      placeholder="Worum geht es?"
                    />
                  </div>

                  <div className="field">
                    <label className="field-label">Nachricht *</label>
                    <textarea
                      className="textarea"
                      required
                      value={form.nachricht}
                      onChange={e => setForm(f => ({ ...f, nachricht: e.target.value }))}
                      placeholder="Deine Nachricht an die Spielleitung..."
                      style={{ minHeight: 160 }}
                    />
                  </div>

                  {status === 'error' && (
                    <div className={styles.errorMsg}>
                      Nachricht konnte nicht gesendet werden. Bitte versuche es erneut oder
                      schreibe direkt an <a href="mailto:info@quirin-larp.de">info@quirin-larp.de</a>.
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={status === 'sending'}
                    style={{ alignSelf: 'flex-start' }}
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="loader-ring" style={{ width: 18, height: 18, borderWidth: 2 }} />
                        Sende…
                      </>
                    ) : 'Nachricht senden'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className="card">
                <div className="card-body">
                  <h4 style={{ marginBottom: 16 }}>Direktkontakt</h4>
                  <div className={styles.contactItem}>
                    <span>✉</span>
                    <div>
                      <div className="section-label" style={{ margin: 0 }}>E-Mail</div>
                      <a href="mailto:info@quirin-larp.de" className={styles.contactLink}>
                        info@quirin-larp.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 style={{ marginBottom: 12 }}>Spielleitung</h4>
                  <p className="text-secondary" style={{ fontSize: 14, lineHeight: 1.7 }}>
                    Das Quirin Larp wird von einer Gruppe leidenschaftlicher Privatpersonen geleitet.
                    Antwortzeiten: meist innerhalb von 2–3 Werktagen.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 style={{ marginBottom: 12 }}>Rechtliches</h4>
                  <div className={styles.legalLinks}>
                    <a href="/impressum">Impressum</a>
                    <a href="/teilnahmebedingungen">Teilnahmebedingungen</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
