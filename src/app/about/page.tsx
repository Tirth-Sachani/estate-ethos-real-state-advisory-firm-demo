'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Eye, Shield, Droplet, Handshake, TrendingUp } from 'lucide-react';
import styles from './page.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;
        gsap.from(section.querySelectorAll('.anim-element'), {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero} ref={addToRefs}>
        <div className={styles.heroBg}>
          <img 
            src="/images/hero_estate_1777410578117.png" 
            alt="Hero Background" 
            className={styles.heroImage}
          />
          <div className={styles.heroGradient}></div>
        </div>
        <div className="container relative z-10">
          <div className={`anim-element ${styles.heroCard} glass`}>
            <span className={styles.heroBadge}>EST. 1978</span>
            <h1 className={styles.heroTitle}>A Legacy Built on Trust Since 1978</h1>
            <p className={styles.heroSubtitle}>
              Forty-five years of guiding generational wealth through shifting markets and evolving landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Story Narrative */}
      <section className={styles.narrative} ref={addToRefs}>
        <div className={`container ${styles.narrativeContainer}`}>
          <div className={`anim-element ${styles.narrativeImageWrapper}`}>
            <img 
              src="/images/property_one_1777410593855.png" 
              alt="Luxury Estate Exterior" 
              className={styles.blueprintImage}
            />
            <img 
              src="/images/property_two_1777410611109.png" 
              alt="Interior Detail" 
              className={styles.narrativeGlass}
            />
          </div>
          <div className={styles.narrativeText}>
            <h2 className="anim-element">Navigating Decades of Change with Unwavering Principles</h2>
            <p className="anim-element">
              In 1978, Luxe Advisory was founded on a singular premise: that the most valuable asset in real estate is not the property itself, but the relationship built around it.
            </p>
            <p className="anim-element">
              Through periods of profound economic expansion and severe market contractions, our philosophy has remained resolute. We have guided prominent families and enterprises across multiple market cycles, acting as a steadfast anchor when certainty is scarce.
            </p>
            <p className="anim-element">
              We do not measure our success in sheer transaction volume. Instead, we define our legacy by the generational continuity of our clients' wealth and the enduring trust they place in our counsel. This long-term perspective shapes every strategic decision we advise.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection} ref={addToRefs}>
        <div className="container">
          <h2 className={`anim-element ${styles.timelineTitle}`}>Milestones of Excellence</h2>
          <div className={styles.timelineGrid}>
            <div className={styles.timelineLine}></div>
            
            <div className={`anim-element ${styles.timelineItem}`}>
              <div className={styles.timelineDot}></div>
              <div className={`glass ${styles.timelineCard}`}>
                <span className={styles.timelineYear}>1978</span>
                <h4>Foundation</h4>
                <p>Established in New York with a focus on private family offices.</p>
              </div>
            </div>
            
            <div className={`anim-element ${styles.timelineItem}`}>
              <div className={styles.timelineDot}></div>
              <div className={`glass ${styles.timelineCard}`}>
                <span className={styles.timelineYear}>1995</span>
                <h4>Expansion</h4>
                <p>Opened key offices in global financial hubs, broadening reach.</p>
              </div>
            </div>
            
            <div className={`anim-element ${styles.timelineItem}`}>
              <div className={styles.timelineDot}></div>
              <div className={`glass ${styles.timelineCard}`}>
                <span className={styles.timelineYear}>2010</span>
                <h4>Commercial Growth</h4>
                <p>Launched dedicated institutional commercial advisory division.</p>
              </div>
            </div>
            
            <div className={`anim-element ${styles.timelineItem}`}>
              <div className={styles.timelineDot}></div>
              <div className={`glass ${styles.timelineCard}`}>
                <span className={styles.timelineYear}>2020+</span>
                <h4>Digital Transformation</h4>
                <p>Integrating predictive analytics with legacy market intuition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={`container ${styles.mvContainer}`}>
          <div className={`glass ${styles.missionCard}`}>
            <Compass size={36} className={styles.mvIcon} />
            <h3>Our Mission</h3>
            <p>
              To deliver strategic real estate decisions through unparalleled market insight, rigorous analysis, and an uncompromising commitment to our clients' long-term prosperity.
            </p>
          </div>
          <div className={styles.visionCard}>
            <div className={styles.visionGlow}></div>
            <Eye size={36} className={styles.visionIcon} />
            <h3>Our Vision</h3>
            <p>
              To be the most trusted and sought-after real estate advisory in the United States, recognized for elevating industry standards through discretion, expertise, and foresight.
            </p>
          </div>
        </div>
      </section>

      {/* Core Tenets */}
      <section className={styles.coreTenets}>
        <div className={styles.tenetsBg1}></div>
        <div className={styles.tenetsBg2}></div>
        <div className="container relative z-10">
          <h2 className={styles.tenetsTitle}>Core Tenets</h2>
          <div className={styles.tenetsGrid}>
            <div className={`glass ${styles.tenetCard}`}>
              <Shield size={32} className={styles.tenetIcon} />
              <h4>Integrity</h4>
              <p>Unwavering ethical standards in every negotiation, ensuring absolute alignment with client interests.</p>
            </div>
            <div className={`glass ${styles.tenetCard}`}>
              <Droplet size={32} className={styles.tenetIcon} />
              <h4>Transparency</h4>
              <p>Clarity in methodology and candid communication, providing the foundation for informed decisions.</p>
            </div>
            <div className={`glass ${styles.tenetCard}`}>
              <Handshake size={32} className={styles.tenetIcon} />
              <h4>Long-term Relationships</h4>
              <p>Valuing continuity over immediacy; we build partnerships designed to outlast market cycles.</p>
            </div>
            <div className={`glass ${styles.tenetCard}`}>
              <TrendingUp size={32} className={styles.tenetIcon} />
              <h4>Market Expertise</h4>
              <p>Deep, granular understanding of micro-markets, empowering strategies with proprietary intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Heritage */}
      <section className={styles.leadership}>
        <div className="container">
          <div className={styles.leadershipHeader}>
            <h2>Leadership Heritage</h2>
            <p>Guided by industry veterans whose experience spans multiple economic eras.</p>
          </div>
          
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                  alt="Arthur Sterling" 
                  className={styles.memberImage}
                />
                <div className={styles.memberOverlay}></div>
              </div>
              <h4>Arthur Sterling</h4>
              <span className={styles.memberRole}>Managing Partner</span>
              <p>Leading complex institutional portfolio strategies since 1985. A staunch advocate for risk-adjusted generational planning.</p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.memberImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                  alt="Eleanor Vance" 
                  className={styles.memberImage}
                />
                <div className={styles.memberOverlay}></div>
              </div>
              <h4>Eleanor Vance</h4>
              <span className={styles.memberRole}>Head of Private Wealth</span>
              <p>Architect of the firm's bespoke family office advisory practice. Unparalleled expertise in legacy asset preservation.</p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.memberImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" 
                  alt="Julian Hayes" 
                  className={styles.memberImage}
                />
                <div className={styles.memberOverlay}></div>
              </div>
              <h4>Julian Hayes</h4>
              <span className={styles.memberRole}>Director of Market Intelligence</span>
              <p>Bridging traditional market intuition with advanced predictive modeling to navigate modern commercial landscapes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
