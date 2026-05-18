import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="divider-gold" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>✦</span>
          <div>
            <div className={styles.brandName}>Kaiserreich <em>Quirin</em></div>
            <div className={styles.brandSub}>Das Juwel des Westens · Seit 1999</div>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <span className="section-label">Die Welt</span>
            <Link to="/die-welt">Regionen</Link>
            <Link to="/geschichte">Geschichte</Link>
            <Link to="/das-spiel">Das Spiel</Link>
          </div>
          <div className={styles.linkGroup}>
            <span className="section-label">Mitmachen</span>
            <Link to="/anmeldungen">Anmeldungen</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/kontakt">Kontakt</Link>
          </div>
          <div className={styles.linkGroup}>
            <span className="section-label">Rechtliches</span>
            <Link to="/impressum">Impressum</Link>
            <Link to="/teilnahmebedingungen">Teilnahmebedingungen</Link>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Quirin Larp SL. Alle Rechte vorbehalten.</span>
        <a href="mailto:info@quirin-larp.de">info@quirin-larp.de</a>
      </div>
    </footer>
  );
}
