'use client';

import styles from './Footer.module.css';

const footerLinks = {
  Products: [
    { label: 'Garden Tubs', href: '#products' },
    { label: 'Garden Jacuzzi', href: '#products' },
    { label: 'Garden Saunas', href: '#products' },
    { label: 'Cold Plunge', href: '#products' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>◈</span>
            <span className={styles.logoText}>JURA SPA</span>
          </div>
          <p className={styles.tagline}>
            Luxury outdoor wellness products, handcrafted in Olkusz, Poland.
            Sanus Per Aquam — health through water.
          </p>
          <div className={styles.contact}>
            <a href="tel:+48518818285" className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.08-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/>
              </svg>
              518 818 285
            </a>
            <span className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Olkusz, Małopolska, Poland
            </span>
          </div>

          {/* Language switcher */}
          <div className={styles.langs}>
            <a href="https://juraspa.pl" className={`${styles.lang} ${styles.langActive}`}>PL</a>
            <a href="https://juraspa.eu" className={styles.lang}>EN</a>
            <a href="https://juraspa.cz" className={styles.lang}>CZ</a>
            <a href="https://juraspa.sk" className={styles.lang}>SK</a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className={styles.linkCol}>
            <h5 className={styles.colTitle}>{category}</h5>
            <ul className={styles.linkList}>
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter / CTA column */}
        <div className={styles.ctaCol}>
          <h5 className={styles.colTitle}>Get a Quote</h5>
          <p className={styles.ctaText}>
            Ready to build your garden spa? Let's talk about your vision.
          </p>
          <a href="#configurator" className={`btn btn-primary ${styles.ctaBtn}`}>
            <span>Configure Now</span>
          </a>
          <div className={styles.certification}>
            <span className={styles.certBadge}>🇵🇱</span>
            <span>Made in Poland · Family Business</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Jura Spa. All rights reserved.
            </p>
            <p className={styles.madeWith}>
              Crafted with care in Olkusz, Poland 🌲
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
