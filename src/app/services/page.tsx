'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import styles from './page.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.header-element', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }, [headerRef, servicesRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.pageHeader} ref={headerRef}>
        <div className="container">
          <h1 className={`header-element ${styles.title}`}>Our Services</h1>
          <p className={`header-element ${styles.subtitle}`}>
            Comprehensive real estate advisory tailored for the world's most discerning clientele.
          </p>
        </div>
      </div>

      <div className={`container ${styles.servicesContainer}`} ref={servicesRef}>
        <div className={styles.servicesGrid}>
          {/* Service 1 */}
          <div className={`service-card ${styles.card} glass`}>
            <div className={styles.cardNumber}>01</div>
            <h2 className={styles.cardTitle}>Acquisition Advisory</h2>
            <p className={styles.cardText}>
              Strategic guidance on acquiring prime residential and commercial assets globally. 
              We leverage our extensive network to access off-market opportunities before they 
              reach the public sphere.
            </p>
            <Link href="/contact" className={styles.cardLink}>
              Learn More &rarr;
            </Link>
          </div>

          {/* Service 2 */}
          <div className={`service-card ${styles.card} glass`}>
            <div className={styles.cardNumber}>02</div>
            <h2 className={styles.cardTitle}>Portfolio Management</h2>
            <p className={styles.cardText}>
              Comprehensive oversight of high-value real estate portfolios. Our team provides 
              data-driven insights to optimize asset performance, manage risks, and maximize 
              long-term capital appreciation.
            </p>
            <Link href="/contact" className={styles.cardLink}>
              Learn More &rarr;
            </Link>
          </div>

          {/* Service 3 */}
          <div className={`service-card ${styles.card} glass`}>
            <div className={styles.cardNumber}>03</div>
            <h2 className={styles.cardTitle}>Discreet Sales</h2>
            <p className={styles.cardText}>
              Tailored marketing strategies for the disposition of ultra-luxury properties. 
              We ensure maximum exposure to qualified buyers while maintaining the highest 
              levels of privacy and discretion.
            </p>
            <Link href="/contact" className={styles.cardLink}>
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </div>
      
      {/* Methodology Section */}
      <section className={styles.methodology}>
        <div className="container">
          <div className={styles.methodologyHeader}>
            <span className={styles.methodologyBadge}>OUR METHODOLOGY</span>
            <h2>The Advisory Process</h2>
          </div>
          
          <div className={styles.stepperContainer}>
            <div className={styles.stepperLine}></div>
            
            <div className={styles.step}>
              <div className={`${styles.stepCircle} ${styles.active}`}>1</div>
              <p>Consultation</p>
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepCircle}>2</div>
              <p>Market Research</p>
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepCircle}>3</div>
              <p>Property Selection</p>
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepCircle}>4</div>
              <p>Deal Structuring</p>
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepCircle}>5</div>
              <p>Closing Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <div className={styles.consultationBanner}>
        <div className="container">
          <div className={styles.bannerContent}>
            <h2>Let's Build Your Real Estate Portfolio</h2>
            <p>Partner with LuxeAdvisory to navigate complex markets with confidence and precision.</p>
            <Link href="/contact" className={styles.ctaButton}>SCHEDULE A CONSULTATION</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
