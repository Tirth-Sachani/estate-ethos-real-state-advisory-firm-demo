'use client';

import { useEffect, useRef } from 'react';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function PropertyDetail({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

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

      gsap.from('.gallery-element', {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 80%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });

      gsap.from('.detail-element', {
        scrollTrigger: {
          trigger: detailsRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, [headerRef, galleryRef, detailsRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.main}>
      {/* Property Header */}
      <div className={styles.propertyHeader} ref={headerRef}>
        <div className="container">
          <Link href="/explore" className={`header-element ${styles.backLink}`}>
            &larr; Back to Properties
          </Link>
          <div className={styles.headerContent}>
            <div>
              <h1 className={`header-element ${styles.title}`}>Skyline Penthouse</h1>
              <p className={`header-element ${styles.location}`}>Manhattan, New York</p>
            </div>
            <div className={`header-element ${styles.priceWrapper}`}>
              <p className={styles.price}>$12,500,000</p>
              <button className="btn btn-primary">Schedule Viewing</button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className={styles.gallerySection} ref={galleryRef}>
        <div className="container">
          <div className={styles.galleryGrid}>
            <div className={`gallery-element ${styles.mainImage}`}>
              <Image 
                src="/images/property_one_1777410593855.png" 
                alt="Skyline Penthouse Main" 
                fill 
                className={styles.image}
              />
            </div>
            <div className={styles.subImages}>
              <div className={`gallery-element ${styles.subImage}`}>
                <Image src="/images/property_two_1777410611109.png" alt="Interior" fill className={styles.image} />
              </div>
              <div className={`gallery-element ${styles.subImage}`}>
                <Image src="/images/hero_estate_1777410578117.png" alt="Exterior" fill className={styles.image} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className={`container ${styles.detailsContainer}`} ref={detailsRef}>
        <div className={styles.mainDetails}>
          <div className={`detail-element ${styles.keyFeatures} glass`}>
            <div className={styles.feature}>
              <span className={styles.featureLabel}>Beds</span>
              <span className={styles.featureValue}>4</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureLabel}>Baths</span>
              <span className={styles.featureValue}>4.5</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureLabel}>Square Feet</span>
              <span className={styles.featureValue}>4,200</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureLabel}>Property Type</span>
              <span className={styles.featureValue}>Penthouse</span>
            </div>
          </div>

          <div className={`detail-element ${styles.description}`}>
            <h2>About this Property</h2>
            <p>
              Experience the pinnacle of urban luxury in this breathtaking Manhattan penthouse. 
              Featuring floor-to-ceiling windows that offer panoramic views of the city skyline, 
              this residence is a masterpiece of modern minimal design.
            </p>
            <p>
              Every detail has been meticulously curated, from the custom Italian cabinetry in 
              the chef's kitchen to the radiant heated floors in the spa-inspired bathrooms. 
              The expansive private terrace provides an unparalleled setting for entertaining 
              or quiet reflection above the bustling city.
            </p>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={`detail-element ${styles.agentCard} glass`}>
            <h3>Interested in this property?</h3>
            <p>Contact our senior advisory team for a private consultation.</p>
            <Link href="/contact" className="btn btn-secondary">
              Contact Advisor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
