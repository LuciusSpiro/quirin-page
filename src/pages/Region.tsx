import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getRegionById, regionen } from '../data/regionen';
import { img } from '../utils/assets';
import styles from './Region.module.css';

export default function Region() {
  const { id } = useParams<{ id: string }>();
  const region = id ? getRegionById(id) : undefined;

  if (!region) return <Navigate to="/die-welt" replace />;

  const currentIdx = regionen.findIndex(r => r.id === id);
  const prev = regionen[currentIdx - 1];
  const next = regionen[currentIdx + 1];

  return (
    <div className={styles.page}>
      {/* Header */}
      <div
        className={styles.header}
        style={{
          background: `linear-gradient(135deg, ${region.farbe}20 0%, ${region.farbe}06 40%, transparent 70%)`,
        }}
      >
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link to="/die-welt" className="text-muted">Die Welt</Link>
            <span className="text-muted"> / </span>
            <span>{region.name}</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.headerContent}
          >
            <img
              src={img(region.wappen)}
              alt={`Wappen ${region.name}`}
              className={styles.headerWappen}
            />
            <div>
              <span className="section-label" style={{ display: 'block' }}>
                {region.schlagwort}
              </span>
              <h1 style={{ marginTop: 8 }}>{region.name}</h1>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="divider-gold" />

      {/* Content */}
      <div className="section">
        <div className="container">
          <div className={styles.content}>
            <main className={styles.main}>
              {/* Culture tags */}
              <div className={styles.tags}>
                {region.kultur.map(k => (
                  <span key={k} className="chip active">{k}</span>
                ))}
              </div>

              {/* Description */}
              <p style={{ fontSize: 20, color: 'var(--fg-secondary)', lineHeight: 1.7, marginTop: 32 }}>
                {region.beschreibung}
              </p>

              <div className="divider-gold" style={{ margin: '40px 0' }} />

              {/* Lore text */}
              <div>
                <h3 style={{ marginBottom: 20 }}>Geschichte & Kultur</h3>
                <div className="prose">
                  {region.lore.split('. ').reduce((acc, _s, i, arr) => {
                    if (i % 4 === 0 && i > 0) {
                      acc.push(<p key={i}>{arr.slice(i, i + 4).join('. ') + (i + 4 < arr.length ? '.' : '')}</p>);
                    } else if (i === 0) {
                      acc.push(<p key={i}>{arr.slice(0, 4).join('. ') + (arr.length > 4 ? '.' : '')}</p>);
                    }
                    return acc;
                  }, [] as React.ReactElement[])}
                </div>
              </div>

              <div className="divider-gold" style={{ margin: '40px 0' }} />

              {/* Besonderheiten */}
              <div className={styles.besonderheiten}>
                <h3>Besonderheiten</h3>
                <p className="text-secondary" style={{ marginTop: 12, lineHeight: 1.7 }}>
                  {region.besonderheiten}
                </p>
              </div>
            </main>

            <aside className={styles.aside}>
              <div className="card">
                <div className="card-body">
                  <h4 style={{ marginBottom: 16 }}>Schnellübersicht</h4>
                  <dl className={styles.dl}>
                    <dt className="section-label" style={{ margin: 0 }}>Region</dt>
                    <dd style={{ margin: '4px 0 16px', color: 'var(--fg-primary)' }}>{region.name}</dd>
                    <dt className="section-label" style={{ margin: 0 }}>Thema</dt>
                    <dd style={{ margin: '4px 0 16px', color: 'var(--fg-primary)' }}>{region.schlagwort}</dd>
                    <dt className="section-label" style={{ margin: 0 }}>Kultur</dt>
                    <dd style={{ margin: '4px 0 0', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {region.kultur.map(k => (
                        <span key={k} className="badge badge-neutral">{k}</span>
                      ))}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className={styles.allRegions}>
                <h4 style={{ marginBottom: 12 }}>Alle Regionen</h4>
                {regionen.map(r => (
                  <Link
                    key={r.id}
                    to={`/die-welt/${r.id}`}
                    className={`${styles.regionLink} ${r.id === id ? styles.regionLinkActive : ''}`}
                  >
                    <span
                      className={styles.regionLinkDot}
                      style={{ background: r.farbe }}
                    />
                    {r.name}
                  </Link>
                ))}
              </div>
            </aside>
          </div>

          {/* Region navigation */}
          <div className={styles.regionNav}>
            {prev ? (
              <Link to={`/die-welt/${prev.id}`} className={styles.regionNavBtn}>
                ← {prev.name}
              </Link>
            ) : <div />}
            {next && (
              <Link to={`/die-welt/${next.id}`} className={`${styles.regionNavBtn} ${styles.regionNavBtnRight}`}>
                {next.name} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
