'use client';

import heroBg from '../hero-bg.png';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background Image & Overlay */}
      <div className={styles.heroBg}>
        <img src={heroBg.src} alt="Luxury Spa Background" />
        <div className={styles.heroOverlay}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span>Handcrafted in Olkusz, Poland</span>
          </div>

          <p className={styles.kicker}>Outdoor wellness, built around your space</p>

          <h1 className={styles.title}>
            Garden spas that feel
            <br />
            <em>tailor-made from day one.</em>
          </h1>

          <p className={styles.description}>
            Premium wooden tubs, jacuzzis, saunas, and cold plunges made to order
            with durable Polish timber, refined detailing, and guidance from our team
            from first idea to final installation.
          </p>

          <div className={styles.actionsRow}>
            <a href="#configurator" className={styles.cta}>
              Request Your Spa
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#products" className={styles.secondaryCta}>
              Explore Collections
            </a>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.reviews}>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="18" height="18" fill="#F1C40F" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className={styles.reviewText}>
                <strong>Trusted by</strong> 500+ clients
              </span>
            </div>

            <div className={styles.statPills}>
              <span className={styles.statPill}>Made to order</span>
              <span className={styles.statPill}>Premium timber</span>
              <span className={styles.statPill}>24h response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
