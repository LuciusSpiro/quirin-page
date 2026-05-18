import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

const faqItems = [
  {
    frage: 'Was ist LARP?',
    antwort: 'LARP steht für Live Action Role Playing – Lebendiges Rollenspiel. Teilnehmer schlüpfen in eine Rolle und spielen Szenarien in echten Kostümen und Kulissen aus. Im Gegensatz zu Pen-and-Paper-Rollenspielen passiert alles physisch: Kämpfe werden mit gepolsterten Waffen ausgefochten, Gespräche finden im Charakter statt.',
  },
  {
    frage: 'Was ist das Kaiserreich Quirin?',
    antwort: 'Quirin ist ein Fantasy-LARP, das 1999 in Würzburg gegründet wurde. Es spielt in einem mittelalterlichen Fantasiereich, das Samurai-Philosophie mit europäischem Mittelalter kombiniert. Es gibt zwei Hauptspielzweige: das kämpferisch orientierte Kriegerspiel und das diplomatisch ausgerichtete Adelsspiel.',
  },
  {
    frage: 'Wie melde ich mich an?',
    antwort: 'Gehe zur Anmeldungsseite, wähle ein Event aus, fülle das Formular aus und bezahle über Stripe. Du erhältst eine Bestätigungs-E-Mail mit allen Details. Bei Fragen stehe wir per Kontaktformular oder E-Mail zur Verfügung.',
  },
  {
    frage: 'Was muss ich mitbringen?',
    antwort: 'Für Erstlinge reichen zuerst einfache mittelalterliche Kleidung (kein Fleece, kein Nylon) und gute Laune. Gepolsterte Waffen (Schaumstoffwaffen) sind Pflicht für den Kampf – du kannst sie aber auch ausleihen. Für deinen Aufenthalt: Schlafsack, wetterfeste Kleidung, Hygieneartikel. Eine detaillierte Packliste bekommst du nach der Anmeldung.',
  },
  {
    frage: 'Was kostet die Teilnahme?',
    antwort: 'Die Kosten variieren je nach Event. Einsteiger-Events beginnen bei ca. 10 €, Wochenend-Events kosten zwischen 20 und 50 €. Die Preise beinhalten Spielgelände und Infrastruktur, aber in der Regel keine Unterkunft oder Verpflegung – diese werden oft gemeinschaftlich organisiert.',
  },
  {
    frage: 'Brauche ich LARP-Erfahrung?',
    antwort: 'Nein. Wir haben regelmäßig Einsteiger-Events speziell für Neulinge. Erfahrene Spieler begleiten Neulinge und erklären Regeln, Kampfmechaniken und die Spielwelt. Außerdem empfehlen wir, das Hauptdokument (Quirinspiel 3.0) vorab zu lesen.',
  },
  {
    frage: 'Was ist In-Time und Out-Time?',
    antwort: 'In-Time bedeutet: du spielst im Charakter, alles ist Teil der Spielwelt. Out-Time bedeutet: du bist für einen Moment du selbst, nicht dein Charakter – zum Beispiel bei Verletzungen oder wenn du eine Pause brauchst. Das Signal dafür ist meistens das Heben beider Hände. Diese Trennung ist wichtig und wird bei Quirin strikt respektiert.',
  },
  {
    frage: 'Wie ist die Gemeinschaft?',
    antwort: 'Quirin ist eine leidenschaftliche Gruppe von Privatpersonen – kein eingetragener Verein. Die Community besteht aus Menschen verschiedenster Hintergründe, die alle eines gemeinsam haben: die Leidenschaft für immersives Rollenspiel. Respekt und Inklusion sind Grundwerte, die wir ernst nehmen.',
  },
  {
    frage: 'Kann ich meinen eigenen Charakter mitbringen?',
    antwort: 'Ja! Du kannst einen völlig neuen Charakter erschaffen, der in die Spielwelt von Quirin passt. Das Hauptdokument gibt Hinweise zu den Völkern, Berufen, Adelstiteln und Fraktionen. Bitte bespreche deinen Charakter vorab mit der Spielleitung, um Konflikte mit der bestehenden Lore zu vermeiden.',
  },
];

function AccordionItem({ frage, antwort }: { frage: string; antwort: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button
        className={styles.itemTrigger}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{frage}</span>
        <span className={`${styles.itemIcon} ${open ? styles.itemIconOpen : ''}`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={styles.itemBody}
          >
            <p className="text-secondary" style={{ lineHeight: 1.75 }}>{antwort}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Einsteiger</span>
            <h1 style={{ marginTop: 8 }}>Häufige Fragen</h1>
            <p className="text-secondary" style={{ maxWidth: 520, marginTop: 16, fontSize: 18, lineHeight: 1.7 }}>
              Alles, was du vor deinem ersten Event wissen musst.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="divider-gold" />

      <section className="section">
        <div className="container">
          <div className={styles.faqLayout}>
            <div className={styles.accordion}>
              {faqItems.map(item => (
                <AccordionItem key={item.frage} {...item} />
              ))}
            </div>

            <aside className={styles.sidebar}>
              <div className="card">
                <div className="card-body">
                  <h4 style={{ marginBottom: 16 }}>Noch Fragen?</h4>
                  <p className="text-secondary" style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                    Falls du keine Antwort auf deine Frage findest,
                    schreib uns gerne direkt an.
                  </p>
                  <Link to="/kontakt" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Kontakt aufnehmen
                  </Link>
                  <a
                    href="mailto:info@quirin-larp.de"
                    className="btn btn-ghost btn-sm"
                    style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
                  >
                    info@quirin-larp.de
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 style={{ marginBottom: 12 }}>Nächster Schritt</h4>
                  <p className="text-secondary" style={{ fontSize: 14, marginBottom: 16 }}>
                    Bereit einzusteigen? Melde dich für ein Event an.
                  </p>
                  <Link to="/anmeldungen" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                    Zu den Events →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
