'use client';

import { useState } from 'react';
import styles from './ConfiguratorCTA.module.css';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function ConfiguratorCTA() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submit = () => {
    setSubmitted(true);
  };

  const reset = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

  const isComplete = form.name.trim() && form.email.trim();

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
            Send us your details and a short note about your project. We&apos;ll get back
            to you within 24 hours with the next steps.
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
              <div className={styles.formIntro}>
                <span className={styles.formEyebrow}>Quick Contact</span>
                <h3 className={styles.formTitle}>Tell Us About Your Project</h3>
                <p className={styles.formText}>
                  Leave your contact details and we&apos;ll help you choose the right spa setup.
                </p>
              </div>

              <div className={styles.formFields}>
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>Full Name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    placeholder="Your name"
                    className={styles.input}
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.fieldLabel}>Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    placeholder="you@example.com"
                    className={styles.input}
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.fieldLabel}>Message</span>
                  <textarea
                    value={form.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    placeholder="Tell us what kind of spa you're looking for..."
                    className={`${styles.input} ${styles.textarea}`}
                    rows={4}
                  />
                </label>
              </div>

              {form.message.trim() && (
                <div className={styles.summary}>
                  <span className={styles.summaryPill}>
                    Message ready to send
                  </span>
                </div>
              )}

              <div className={styles.navRow}>
                <button
                  type="button"
                  className={`${styles.nextBtn} ${!isComplete ? styles.nextDisabled : ''}`}
                  onClick={submit}
                  disabled={!isComplete}
                >
                  Send Configuration →
                </button>
              </div>
            </>
          ) : (
            /* Success State */
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Configuration Sent!</h3>
              <p className={styles.successText}>
                We&apos;ve received your configuration summary. Our team will contact you
                within 24 hours to discuss your project and provide a detailed quote.
              </p>
              <div className={styles.successConfig}>
                <div className={styles.successLine}>
                  <span>Name</span>
                  <strong>{form.name}</strong>
                </div>
                <div className={styles.successLine}>
                  <span>Email</span>
                  <strong>{form.email}</strong>
                </div>
                {form.message.trim() && (
                  <div className={styles.successMessage}>
                    <span>Message</span>
                    <p>{form.message}</p>
                  </div>
                )}
              </div>
              <a href="tel:+48518818285" className={`btn btn-primary ${styles.successCta}`}>
                <span>Call Us Now: 518 818 285</span>
              </a>
              <button type="button" className={styles.resetBtn} onClick={reset}>
                Start New Configuration
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
