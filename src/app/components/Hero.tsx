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

          <h1 className={styles.title}>
            Garden spas that feel <em>tailor-made from day one.</em>
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
        </div>
      </div>
    </section>
  );
}
