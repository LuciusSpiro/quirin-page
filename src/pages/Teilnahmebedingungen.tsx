import styles from './Impressum.module.css';

export default function Teilnahmebedingungen() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <h1>Teilnahmebedingungen</h1>
          <div className="divider-gold" style={{ margin: '24px 0' }} />

          <section className={styles.section}>
            <h3>1. Teilnahme</h3>
            <p className="text-secondary" style={{ lineHeight: 1.7 }}>
              Die Teilnahme an Events des Kaiserreich Quirin setzt die Akzeptanz dieser
              Teilnahmebedingungen voraus. Die Spielleitung behält sich das Recht vor,
              Personen von der Teilnahme auszuschließen, die gegen diese Bedingungen oder
              die Grundsätze der Community verstoßen.
            </p>
          </section>

          <section className={styles.section}>
            <h3>2. Sicherheit</h3>
            <p className="text-secondary" style={{ lineHeight: 1.7 }}>
              Alle Teilnehmer sind verpflichtet, die Sicherheitsregeln einzuhalten.
              Gepolsterte Waffen (Schaumstoffwaffen) sind Pflicht für den Kampf.
              Der Schutz aller Teilnehmer hat höchste Priorität.
            </p>
          </section>

          <section className={styles.section}>
            <h3>3. Respekt & Verhalten</h3>
            <p className="text-secondary" style={{ lineHeight: 1.7 }}>
              Diskriminierung, Belästigung und respektloses Verhalten jeglicher Art werden
              nicht toleriert. Alle Teilnehmer werden gleich behandelt – unabhängig von
              Religion, politischer Überzeugung oder Geschlecht.
            </p>
          </section>

          <section className={styles.section}>
            <h3>4. Stornierung & Rückerstattung</h3>
            <p className="text-secondary" style={{ lineHeight: 1.7 }}>
              Stornierungen bis 14 Tage vor dem Event werden vollständig erstattet.
              Bei späteren Stornierungen oder Nichterscheinen behalten wir uns vor,
              eine Bearbeitungsgebühr einzubehalten. Bitte kontaktiere uns im Voraus.
            </p>
          </section>

          <section className={styles.section}>
            <h3>5. Bilder & Medien</h3>
            <p className="text-secondary" style={{ lineHeight: 1.7 }}>
              Mit der Teilnahme willigst du ein, dass auf Events gemachte Fotos und Videos
              für die Öffentlichkeitsarbeit des Kaiserreich Quirin genutzt werden dürfen.
              Auf Wunsch werden Aufnahmen mit deiner Person nicht veröffentlicht.
            </p>
          </section>

          <p className="text-muted" style={{ marginTop: 48, fontSize: 13 }}>
            Stand: {new Date().getFullYear()} · Quirin Larp SL
          </p>
        </div>
      </div>
    </div>
  );
}
