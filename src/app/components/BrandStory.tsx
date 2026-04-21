'use client';

import styles from './BrandStory.module.css';

const values = [
  {
    icon: '🌲',
    title: 'Polish Craftsmanship',
    desc: 'Every product is hand-built in our family workshop in Olkusz, Małopolska — using traditional joinery methods passed down through generations.',
  },
  {
    icon: '💧',
    title: 'Sanus Per Aquam',
    desc: 'Health through water. We believe in the restorative power of heat, steam, cold plunge, and the rhythm of outdoor spa rituals.',
  },
  {
    icon: '🪵',
    title: 'Natural Materials',
    desc: 'Only high-quality Polish and European timber — oak, siberian larch, thermowood. No synthetic substitutes, ever.',
  },
  {
    icon: '⚙️',
    title: 'Built to Order',
    desc: 'Every tub, jacuzzi, and sauna is customised to your exact specifications. We don\'t mass-produce — we craft.',
  },
];

export default function BrandStory() {
  return (
    <section className={styles.brand} id="about">
      {/* Background strip */}
      <div className={styles.bgStrip}>
        <img
          src="https://juraspa.pl/wp-content/uploads/2025/03/DSC_5052.jpg"
          alt="Jura Spa workshop"
          className={styles.bgImg}
        />
        <div className={styles.bgOverlay}></div>
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left text block */}
        <div className={styles.textBlock}>
          <span className="section-label" style={{ color: 'var(--color-cedar)' }}>Our Story</span>
          <h2 className={styles.title}>
            A Family That<br />
            <em>Builds Dreams</em>
          </h2>
          <p className={styles.bodyText}>
            JURA SPA is a family business — father and sons — crafting wooden outdoor
            wellness products in the heart of the Kraków-Częstochowa Upland since
            the beginning. Named after the Jura region, our workshop sits in Olkusz,
            surrounded by the very forests that supply our timber.
          </p>
          <p className={styles.bodyText}>
            We prioritize artisan precision and the highest standards of finish,
            using components sourced exclusively from Polish and European suppliers.
            Every product we make is personalised to the client's needs — because
            your garden spa should be uniquely yours.
          </p>
          <a href="#configurator" className={`btn btn-outline ${styles.ctaBtn}`}>
            <span>Start Your Configuration</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Values grid */}
        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={i} className={styles.valueCard}>
              <span className={styles.valueIcon}>{v.icon}</span>
              <h4 className={styles.valueTitle}>{v.title}</h4>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
