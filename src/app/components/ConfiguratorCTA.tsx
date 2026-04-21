'use client';

import { useState } from 'react';
import styles from './ConfiguratorCTA.module.css';

const steps = [
  { id: 1, label: 'Product Type', options: ['Garden Tub', 'Garden Jacuzzi', 'Garden Sauna', 'Cold Plunge'] },
  { id: 2, label: 'Wood Type', options: ['Siberian Larch', 'Polish Oak', 'Thermowood', 'Pine'] },
  { id: 3, label: 'Size / Capacity', options: ['2 Persons', '4 Persons', '6 Persons', '8+ Persons'] },
  { id: 4, label: 'Heating System', options: ['Wood-fired (External)', 'Wood-fired (Internal)', 'Electric', 'Without Heater'] },
];

export default function ConfiguratorCTA() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const step = steps[currentStep];

  const select = (option: string) => {
    setSelections((prev) => ({ ...prev, [step.id]: option }));
  };

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setSubmitted(true);
    }
  };

  const back = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const reset = () => {
    setCurrentStep(0);
    setSelections({});
    setSubmitted(false);
  };

  const progress = ((currentStep + (selections[step?.id] ? 1 : 0)) / steps.length) * 100;

  return (
    <section className={styles.section} id="configurator">
      {/* Background Image */}
      <div className={styles.bg}>
        <img
          src="https://juraspa.pl/wp-content/uploads/2025/07/DSC_6933.jpg"
          alt=""
          className={styles.bgImg}
        />
        <div className={styles.bgOverlay}></div>
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left: CTA Text */}
        <div className={styles.text}>
          <span className="section-label" style={{ color: 'var(--color-cedar)' }}>Configure Yours</span>
          <h2 className={styles.heading}>
            Build Your<br />
            <em>Dream Spa</em>
          </h2>
          <p className={styles.desc}>
            Walk through our simple configuration wizard. We'll prepare a personalised
            quote and reach out within 24 hours to discuss your project.
          </p>

          <ul className={styles.guarantees}>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-mist)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              No payment required
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-mist)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              Response within 24h
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-mist)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              Free expert consultation
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-mist)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              Fully custom, no catalog limits
            </li>
          </ul>
        </div>

        {/* Right: Wizard */}
        <div className={styles.wizard}>
          {!submitted ? (
            <>
              {/* Progress */}
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
              </div>
              <div className={styles.stepInfo}>
                <span className={styles.stepCount}>Step {currentStep + 1} of {steps.length}</span>
                <span className={styles.stepLabel}>{step.label}</span>
              </div>

              {/* Options */}
              <div className={styles.options}>
                {step.options.map((opt) => (
                  <button
                    key={opt}
                    className={`${styles.option} ${selections[step.id] === opt ? styles.optionSelected : ''}`}
                    onClick={() => select(opt)}
                  >
                    <span className={styles.optionCheck}>
                      {selections[step.id] === opt && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                      )}
                    </span>
                    {opt}
                  </button>
                ))}
              </div>

              {/* Summary pills */}
              {Object.keys(selections).length > 0 && (
                <div className={styles.summary}>
                  {Object.entries(selections).map(([id, val]) => {
                    const s = steps.find((s) => s.id === parseInt(id));
                    return (
                      <span key={id} className={styles.summaryPill}>
                        {s?.label}: <strong>{val}</strong>
                      </span>
                    );
                  })}
                </div>
              )}

              {/* Navigation */}
              <div className={styles.navRow}>
                {currentStep > 0 && (
                  <button className={styles.backBtn} onClick={back}>
                    ← Back
                  </button>
                )}
                <button
                  className={`${styles.nextBtn} ${!selections[step.id] ? styles.nextDisabled : ''}`}
                  onClick={next}
                  disabled={!selections[step.id]}
                >
                  {currentStep === steps.length - 1 ? 'Send Configuration →' : 'Next →'}
                </button>
              </div>
            </>
          ) : (
            /* Success State */
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Configuration Sent!</h3>
              <p className={styles.successText}>
                We've received your configuration summary. Our team will contact you
                within 24 hours to discuss your project and provide a detailed quote.
              </p>
              <div className={styles.successConfig}>
                {Object.entries(selections).map(([id, val]) => {
                  const s = steps.find((s) => s.id === parseInt(id));
                  return (
                    <div key={id} className={styles.successLine}>
                      <span>{s?.label}</span>
                      <strong>{val}</strong>
                    </div>
                  );
                })}
              </div>
              <a href="tel:+48518818285" className={`btn btn-primary ${styles.successCta}`}>
                <span>Call Us Now: 518 818 285</span>
              </a>
              <button className={styles.resetBtn} onClick={reset}>
                Start New Configuration
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
