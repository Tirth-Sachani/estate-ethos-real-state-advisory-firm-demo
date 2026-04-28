'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Insights() {
  const headerRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force video to play
    if (videoElementRef.current) {
      videoElementRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }

    const ctx = gsap.context(() => {
      gsap.from('.header-element', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from('.video-element', {
        scrollTrigger: {
          trigger: videoSectionRef.current,
          start: 'top 80%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.article-card', {
        scrollTrigger: {
          trigger: articlesRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }, [headerRef, videoSectionRef, articlesRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.pageHeader} ref={headerRef}>
        <div className="container">
          <h1 className={`header-element ${styles.title}`}>Market Insights</h1>
          <p className={`header-element ${styles.subtitle}`}>
            Expert analysis, trends, and perspectives on the global luxury real estate market.
          </p>
        </div>
      </div>

      <div className={`container ${styles.videoSection}`} ref={videoSectionRef}>
        <div className={`video-element ${styles.videoWrapper}`}>
          <video 
            ref={videoElementRef}
            className={styles.video} 
            autoPlay 
            muted 
            loop
            playsInline
            poster="/images/hero_estate_1777410578117.png"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={`${styles.videoCaption} glass`}>
            <h3>Q2 Market Report: The Rise of Minimalist Luxury</h3>
            <p>Watch our chief analyst break down the latest trends in high-end real estate acquisitions.</p>
          </div>
        </div>
      </div>

      <div className={`container ${styles.articlesSection}`} ref={articlesRef}>
        <h2 className={styles.sectionTitle}>Latest Articles</h2>
        <div className={styles.articlesGrid}>
          {/* Article 1 */}
          <Link href="#" className={`article-card ${styles.articleCard}`}>
            <div className={styles.articleImageWrapper}>
              <Image 
                src="/images/property_one_1777410593855.png" 
                alt="Penthouse Trends" 
                fill 
                className={styles.articleImage} 
              />
            </div>
            <div className={styles.articleContent}>
              <span className={styles.category}>Trends</span>
              <h3 className={styles.articleTitle}>The Manhattan Penthouse Renaissance</h3>
              <p className={styles.articleExcerpt}>
                Why ultra-luxury penthouses are seeing unprecedented demand from international buyers.
              </p>
              <span className={styles.date}>April 28, 2026</span>
            </div>
          </Link>

          {/* Article 2 */}
          <Link href="#" className={`article-card ${styles.articleCard}`}>
            <div className={styles.articleImageWrapper}>
              <Image 
                src="/images/property_two_1777410611109.png" 
                alt="Architectural Digest" 
                fill 
                className={styles.articleImage} 
              />
            </div>
            <div className={styles.articleContent}>
              <span className={styles.category}>Architecture</span>
              <h3 className={styles.articleTitle}>Defining Minimal Luxury</h3>
              <p className={styles.articleExcerpt}>
                How top architects are using space, light, and natural materials to redefine high-end living.
              </p>
              <span className={styles.date}>April 15, 2026</span>
            </div>
          </Link>
          
          {/* Article 3 */}
          <Link href="#" className={`article-card ${styles.articleCard}`}>
            <div className={styles.articleImageWrapper}>
              <Image 
                src="/images/hero_estate_1777410578117.png" 
                alt="Investment Strategy" 
                fill 
                className={styles.articleImage} 
              />
            </div>
            <div className={styles.articleContent}>
              <span className={styles.category}>Investment</span>
              <h3 className={styles.articleTitle}>Diversifying with Global Real Estate</h3>
              <p className={styles.articleExcerpt}>
                A strategic guide to building a robust, international property portfolio in 2026.
              </p>
              <span className={styles.date}>April 02, 2026</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
