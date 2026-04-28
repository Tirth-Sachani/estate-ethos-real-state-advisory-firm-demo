'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropertyCard from '@/components/PropertyCard';
import styles from './page.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const propertiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Animations
    const ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      });

      // Intro Section Scroll Animation
      gsap.from('.intro-element', {
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // Properties Scroll Animation
      gsap.from('.property-card', {
        scrollTrigger: {
          trigger: propertiesRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }, [heroRef, introRef, propertiesRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/hero_estate_1777410578117.png"
            alt="Estate Ethereal Hero"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={`container ${styles.heroContainer}`}>
          <div className={`${styles.heroContent} glass`} ref={textRef}>
            <h1 className={`${styles.heroTitle} hero-element`}>Elevating Real Estate Advisory</h1>
            <p className={`${styles.heroSubtitle} hero-element`}>
              Minimal Luxury. Maximum Trust. We curate exceptional properties for discerning individuals globally.
            </p>
            <div className={`hero-element ${styles.heroActions}`}>
              <Link href="/explore" className="btn btn-primary">
                Explore Properties
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro} ref={introRef}>
        <div className={`container ${styles.introContainer}`}>
          <div className={styles.introContent}>
            <h2 className="intro-element">A Legacy of Excellence</h2>
            <p className="intro-element">
              Estate Ethos represents the pinnacle of real estate advisory. 
              Our firm bridges the gap between traditional values and modern digital 
              sophistication, ensuring a seamless, transparent, and exclusive consultation space.
            </p>
            <Link href="/about" className={`btn btn-secondary intro-element ${styles.introLink}`}>
              Discover Our Ethos
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className={styles.properties} ref={propertiesRef}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="intro-element">Exclusive Offerings</h2>
            <Link href="/explore" className={styles.viewAll}>
              View All Properties
            </Link>
          </div>
          
          <div className={styles.propertiesGrid}>
            <div className="property-card">
              <PropertyCard
                id="1"
                title="Skyline Penthouse"
                location="Manhattan, New York"
                price="$12,500,000"
                imageSrc="/images/property_one_1777410593855.png"
                beds={4}
                baths={4.5}
                sqft={4200}
                featured={true}
              />
            </div>
            <div className="property-card">
              <PropertyCard
                id="2"
                title="Azure Infinity Villa"
                location="Beverly Hills, California"
                price="$18,900,000"
                imageSrc="/images/property_two_1777410611109.png"
                beds={6}
                baths={7}
                sqft={8500}
                featured={true}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaContainer}`}>
          <div className={`${styles.ctaContent} glass`}>
            <h2>Ready to Elevate Your Portfolio?</h2>
            <p>Connect with our expert advisors to begin your bespoke real estate journey.</p>
            <Link href="/contact" className="btn btn-gold">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
