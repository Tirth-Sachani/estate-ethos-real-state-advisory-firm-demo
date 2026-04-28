'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './page.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.anim-element', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, [formRef, infoRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1 className={`anim-element ${styles.title}`}>Connect With Us</h1>
          <p className={`anim-element ${styles.subtitle}`}>
            Initiate a confidential dialogue with our senior advisory team.
          </p>
        </div>
      </div>

      <div className={`container ${styles.contactContainer}`}>
        {/* Contact Form */}
        <div className={`anim-element ${styles.formSection} glass`} ref={formRef}>
          <h2>Send a Message</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input type="text" id="name" className={styles.input} placeholder="Jane Doe" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input type="email" id="email" className={styles.input} placeholder="jane@example.com" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="interest" className={styles.label}>Area of Interest</label>
              <select id="interest" className={styles.select}>
                <option>Acquisition</option>
                <option>Disposition</option>
                <option>Portfolio Management</option>
                <option>General Inquiry</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea id="message" rows={5} className={styles.textarea} placeholder="How can we assist you?" required></textarea>
            </div>
            
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className={styles.infoSection} ref={infoRef}>
          <div className={`anim-element ${styles.infoCard}`}>
            <h2>Our Offices</h2>
            
            <div className={styles.office}>
              <h3 className={styles.officeCity}>New York</h3>
              <ul className={styles.contactList}>
                <li>
                  <MapPin size={18} className={styles.icon} />
                  <span>One World Trade Center, Suite 4500<br/>New York, NY 10007</span>
                </li>
                <li>
                  <Phone size={18} className={styles.icon} />
                  <span>+1 (212) 555-0198</span>
                </li>
                <li>
                  <Mail size={18} className={styles.icon} />
                  <span>ny@estateethos.com</span>
                </li>
              </ul>
            </div>

            <div className={styles.office}>
              <h3 className={styles.officeCity}>London</h3>
              <ul className={styles.contactList}>
                <li>
                  <MapPin size={18} className={styles.icon} />
                  <span>1 Canada Square, Level 39<br/>London E14 5AB</span>
                </li>
                <li>
                  <Phone size={18} className={styles.icon} />
                  <span>+44 20 7946 0958</span>
                </li>
                <li>
                  <Mail size={18} className={styles.icon} />
                  <span>london@estateethos.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
