import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

const navItems = [
  { label: 'Die Welt', to: '/die-welt' },
  {
    label: 'Das Spiel',
    to: '/das-spiel',
    sub: [
      { label: 'Kriegerspiel', to: '/das-spiel/kriegerspiel' },
      { label: 'Adelsspiel', to: '/das-spiel/adelsspiel' },
    ],
  },
  { label: 'Geschichte', to: '/geschichte' },
  { label: 'Galerie', to: '/galerie' },
  { label: 'FAQ', to: '/faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark}>✦</span>
          <span className={styles.logoText}>
            Kaiserreich <em>Quirin</em>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {navItems.map(item => (
            <div
              key={item.to}
              className={styles.navItemWrap}
              onMouseEnter={() => item.sub && setActiveDropdown(item.to)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                }
              >
                {item.label}
                {item.sub && <span className={styles.chevron}>›</span>}
              </NavLink>
              {item.sub && activeDropdown === item.to && (
                <div className={styles.dropdown}>
                  {item.sub.map(s => (
                    <NavLink
                      key={s.to}
                      to={s.to}
                      className={({ isActive }) =>
                        `${styles.dropLink} ${isActive ? styles.dropLinkActive : ''}`
                      }
                      onClick={() => setActiveDropdown(null)}
                    >
                      {s.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link to="/anmeldungen" className="btn btn-primary btn-sm">
            Anmelden
          </Link>
          <button
            className={styles.burger}
            onClick={() => setOpen(o => !o)}
            aria-label="Menü öffnen"
          >
            <span className={open ? styles.burgerClose : ''} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className={styles.drawer}>
          <nav className={styles.drawerNav}>
            {navItems.map(item => (
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`
                  }
                  onClick={() => !item.sub && setOpen(false)}
                >
                  {item.label}
                </NavLink>
                {item.sub && (
                  <div className={styles.drawerSub}>
                    {item.sub.map(s => (
                      <NavLink
                        key={s.to}
                        to={s.to}
                        className={({ isActive }) =>
                          `${styles.drawerSubLink} ${isActive ? styles.drawerLinkActive : ''}`
                        }
                        onClick={() => setOpen(false)}
                      >
                        {s.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/anmeldungen"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
              style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}
            >
              Jetzt Anmelden
            </Link>
            <Link
              to="/kontakt"
              className="btn btn-ghost"
              onClick={() => setOpen(false)}
              style={{ marginTop: 8, width: '100%', justifyContent: 'center' }}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
