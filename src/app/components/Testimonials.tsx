'use client';

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    text: 'Obsługa bardzo miła, rzeczowi i służący radą Panowie — fachowa realizacja, szybka dostawa i ekspresowy montaż. I teraz mam najlepsze jacuzzi w mieście.',
    textEn: 'Very friendly service, knowledgeable and helpful team — professional execution, fast delivery and express installation. I now have the best jacuzzi in town.',
    author: 'Barbara',
    location: 'Jarosław',
    product: 'Garden Jacuzzi',
    rating: 5,
    initials: 'B',
    color: '#C4A882',
  },
  {
    id: 2,
    text: '"Bania" super wykonana, wydajny i estetyczny piec i świetny kontakt z Panem Szymonem. Gorąco polecam.',
    textEn: 'The sauna is superbly built, efficient and beautiful stove, and great communication with Szymon. Highly recommend.',
    author: 'Marek',
    location: 'Bytom',
    product: 'Garden Sauna',
    rating: 5,
    initials: 'M',
    color: '#5B8FA8',
  },
  {
    id: 3,
    text: 'Polecamy Jura Sauna! Kontakt i doradztwo super. Dzięki rzeczowej rozmowie z p. Karolem udało nam się zamówić dokładnie to, czego oczekiwaliśmy. Korzystamy i śmiało polecamy!',
    textEn: 'We recommend Jura Sauna! Excellent communication and advice. Thanks to a professional conversation with Karol, we ordered exactly what we wanted.',
    author: 'Maria',
    location: 'Sieraków',
    product: 'Garden Tub',
    rating: 5,
    initials: 'M',
    color: '#3D5A47',
  },
];

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '15+', label: 'Years of Craft' },
  { value: '4.9', label: 'Average Rating' },
  { value: '100%', label: 'Custom Made' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index: number) => {
    if (animating || index === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((active + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const t = testimonials[active];

  return (
    <section className={styles.testimonials} id="testimonials">
      {/* Decorative background */}
      <div className={styles.bgDecor}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <span className="section-label">Testimonials</span>
          <h2 className={styles.heading}>
            What Our Clients<br />
            <em>Say About Us</em>
          </h2>
        </div>

        {/* Main Review */}
        <div className={styles.reviewBlock}>
          <div className={`${styles.quoteCard} ${animating ? styles.fadeOut : styles.fadeIn}`}>
            {/* Stars */}
            <div className={styles.stars}>
              {[...Array(t.rating)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--color-cedar)">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className={styles.quote}>
              <svg className={styles.quoteIcon} width="40" height="30" viewBox="0 0 40 30" fill="none">
                <path d="M0 30V18C0 8.4 4.8 2.4 14.4 0l2.4 3.6C12 5.2 9.6 8.4 9.6 13.2H16.8V30H0ZM23.2 30V18C23.2 8.4 28 2.4 37.6 0L40 3.6c-4.8 1.6-7.2 4.8-7.2 9.6H40V30H23.2Z" fill="var(--color-sand)"/>
              </svg>
              <p className={styles.quoteText}>{t.textEn}</p>
            </blockquote>

            {/* Author */}
            <div className={styles.author}>
              <div className={styles.authorAvatar} style={{ background: t.color }}>
                {t.initials}
              </div>
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>{t.author}</p>
                <p className={styles.authorMeta}>{t.location} · {t.product}</p>
              </div>
            </div>
          </div>

          {/* Side — other reviews preview */}
          <div className={styles.reviewSide}>
            {testimonials.map((t2, i) => (
              <div
                key={t2.id}
                className={`${styles.reviewMini} ${active === i ? styles.reviewMiniActive : ''}`}
                onClick={() => goTo(i)}
              >
                <div className={styles.reviewMiniAvatar} style={{ background: t2.color }}>
                  {t2.initials}
                </div>
                <div className={styles.reviewMiniBody}>
                  <p className={styles.reviewMiniName}>{t2.author}, {t2.location}</p>
                  <p className={styles.reviewMiniProduct}>{t2.product}</p>
                  <p className={styles.reviewMiniQuote}>{t2.textEn.slice(0, 80)}…</p>
                </div>
                <div className={styles.reviewMiniIndicator}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
            ></button>
          ))}
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
