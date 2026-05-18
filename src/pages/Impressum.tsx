import styles from './Impressum.module.css';

export default function Impressum() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <h1>Impressum</h1>
          <div className="divider-gold" style={{ margin: '24px 0' }} />

          <section className={styles.section}>
            <h3>Angaben gemäß § 5 TMG</h3>
            <p className="text-secondary">
              Quirin Larp SL<br />
              c/o Spielleitung<br />
              [Adresse auf Anfrage]<br />
              Deutschland
            </p>
          </section>

          <section className={styles.section}>
            <h3>Kontakt</h3>
            <p className="text-secondary">
              E-Mail: <a href="mailto:info@quirin-larp.de" className={styles.link}>info@quirin-larp.de</a>
            </p>
          </section>

          <section className={styles.section}>
            <h3>Haftungsausschluss</h3>
            <p className="text-secondary" style={{ lineHeight: 1.7 }}>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
              jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG
              für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section className={styles.section}>
            <h3>Urheberrecht</h3>
            <p className="text-secondary" style={{ lineHeight: 1.7 }}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. © {new Date().getFullYear()} Quirin Larp SL.
              Alle Rechte vorbehalten.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
