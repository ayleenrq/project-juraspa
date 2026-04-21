'use client';

import { useState } from 'react';
import styles from './Products.module.css';

const products = [
  {
    id: 'garden-tubs',
    category: 'Balie Ogrodowe',
    title: 'Garden Tubs',
    subtitle: 'Hot Soak · Outdoor · Wood-fired',
    description:
      'Hand-built from Polish oak and Siberian larch, our garden tubs bring the ancient tradition of outdoor bathing into your backyard. Available in 2–8 person configurations with internal or external heating.',
    features: ['Oak & Larch Wood', 'Internal / External Heater', '2–8 Persons', 'Custom Staining'],
    image: 'https://juraspa.pl/wp-content/uploads/2024/07/IMG_5751.jpg',
    accent: '#8B6E4E',
    tag: 'Most Popular',
  },
  {
    id: 'jacuzzi',
    category: 'Jacuzzi Ogrodowe',
    title: 'Garden Jacuzzi',
    subtitle: 'Hydrotherapy · Jets · Year-round',
    description:
      'Experience therapeutic hydrotherapy with our precision-engineered wooden jacuzzis. Powerful jet systems combined with handcrafted wood panels create the perfect blend of technology and nature.',
    features: ['Hydro Jets', 'LED Lighting', 'Insulated Shell', 'Smart Controls'],
    image: 'https://juraspa.pl/wp-content/uploads/2024/07/DSC_4425-HDR.jpg',
    accent: '#5B8FA8',
    tag: 'Premium',
  },
  {
    id: 'saunas',
    category: 'Sauny Ogrodowe',
    title: 'Garden Saunas',
    subtitle: 'Finnish · Steam · Outdoor',
    description:
      'Traditional Finnish sauna culture meets contemporary outdoor design. Each sauna is crafted from fragrant thermowood with a traditional stone stove, creating the authentic experience in your garden.',
    features: ['Thermowood Panels', 'Stone Harvia Stove', 'Cedar Benches', 'Custom Size'],
    image: 'https://juraspa.pl/wp-content/uploads/2025/03/DSC_5383.jpg',
    accent: '#3D5A47',
    tag: 'Wellness',
  },
  {
    id: 'cold-plunge',
    category: 'Balie do Morsowania',
    title: 'Cold Plunge',
    subtitle: 'Recovery · Morsowanie · Immunity',
    description:
      'Join the cold plunge movement with our purpose-built wooden morsowanie tubs. Engineered for rapid temperature drop and retention, perfectly paired with your sauna for the complete wellness circuit.',
    features: ['Rapid Cooling', 'Cedar Wood', 'Compact Design', 'All-Season Use'],
    image: 'https://juraspa.pl/wp-content/uploads/2025/02/DSC_5732.jpg',
    accent: '#A8C4D0',
    tag: 'Trending',
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState(products[0].id);

  const active = products.find((p) => p.id === activeTab)!;

  return (
    <section className={styles.products} id="products">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">Our Products</span>
          <div className={styles.headerRight}>
            <h2 className={styles.heading}>
              Crafted for Every<br />
              <em>Wellness Vision</em>
            </h2>
            <p className={styles.subheading}>
              Four product families, all wooden, all custom-made to your exact specification.
              Manufactured in Olkusz with precision and care.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabs}>
          {products.map((product) => (
            <button
              key={product.id}
              className={`${styles.tab} ${activeTab === product.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(product.id)}
            >
              <span className={styles.tabCategory}>{product.category}</span>
              {product.tag && <span className={styles.tabTag}>{product.tag}</span>}
            </button>
          ))}
        </div>

        {/* Product Detail Panel */}
        <div className={styles.panel} key={active.id}>
          <div className={styles.panelImage}>
            <div className={styles.panelImageInner}>
              <img
                src={active.image}
                alt={active.title}
                className={styles.productImg}
              />
              <div className={styles.imageBadge}>
                <span>{active.tag}</span>
              </div>
            </div>
            <div className={styles.imageDecor} style={{ background: active.accent }}></div>
          </div>

          <div className={styles.panelContent}>
            <span className="section-label">{active.category}</span>
            <h3 className={styles.productTitle}>{active.title}</h3>
            <p className={styles.productSubtitle}>{active.subtitle}</p>
            <p className={styles.productDesc}>{active.description}</p>

            {/* Features */}
            <div className={styles.features}>
              {active.features.map((f, i) => (
                <div key={i} className={styles.featureTag}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={active.accent} strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* CTA Row */}
            <div className={styles.productActions}>
              <a href="#configurator" className="btn btn-primary">
                <span>Request a Quote</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#configurator" className="btn btn-outline">
                <span>Configure Product</span>
              </a>
            </div>

            {/* Note */}
            <p className={styles.productNote}>
              All products are made-to-order. Typical lead time: 4–8 weeks.
            </p>
          </div>
        </div>

        {/* All Products Grid Preview */}
        <div className={styles.gridPreview}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`${styles.gridCard} ${activeTab === product.id ? styles.gridCardActive : ''}`}
              onClick={() => setActiveTab(product.id)}
            >
              <div className={styles.gridCardImg}>
                <img src={product.image} alt={product.title} />
              </div>
              <div className={styles.gridCardInfo}>
                <span className={styles.gridCardCategory}>{product.category}</span>
                <span className={styles.gridCardTitle}>{product.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
