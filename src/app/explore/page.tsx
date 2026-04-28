'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import PropertyCard from '@/components/PropertyCard';
import styles from './page.module.css';

const MOCK_PROPERTIES = [
  {
    id: "1",
    title: "Skyline Penthouse",
    location: "Manhattan, New York",
    price: "$12,500,000",
    imageSrc: "/images/property_one_1777410593855.png",
    beds: 4,
    baths: 4.5,
    sqft: 4200,
    featured: true,
  },
  {
    id: "2",
    title: "Azure Infinity Villa",
    location: "Beverly Hills, California",
    price: "$18,900,000",
    imageSrc: "/images/property_two_1777410611109.png",
    beds: 6,
    baths: 7,
    sqft: 8500,
    featured: true,
  },
  {
    id: "3",
    title: "Minimalist Desert Retreat",
    location: "Scottsdale, Arizona",
    price: "$8,200,000",
    imageSrc: "/images/hero_estate_1777410578117.png",
    beds: 5,
    baths: 5.5,
    sqft: 6000,
  },
  {
    id: "4",
    title: "Lakefront Glass House",
    location: "Lake Tahoe, Nevada",
    price: "$15,400,000",
    imageSrc: "/images/property_one_1777410593855.png",
    beds: 4,
    baths: 5,
    sqft: 5200,
  },
  {
    id: "5",
    title: "Modern Forest Sanctuary",
    location: "Aspen, Colorado",
    price: "$22,000,000",
    imageSrc: "/images/property_two_1777410611109.png",
    beds: 7,
    baths: 8,
    sqft: 10500,
  },
  {
    id: "6",
    title: "Oceanview Cliff Estate",
    location: "Malibu, California",
    price: "$28,500,000",
    imageSrc: "/images/hero_estate_1777410578117.png",
    beds: 6,
    baths: 7.5,
    sqft: 9200,
    featured: true,
  }
];

export default function ExploreProperties() {
  const [filter, setFilter] = useState('All');
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.header-element', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.1
      });

      gsap.from('.property-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.4
      });
    }, [headerRef, gridRef]);

    return () => ctx.revert();
  }, [filter]);

  const filteredProperties = filter === 'All' 
    ? MOCK_PROPERTIES 
    : MOCK_PROPERTIES.filter(p => filter === 'Featured' ? p.featured : true); // Simplified filter logic

  return (
    <div className={styles.main}>
      <div className={styles.pageHeader} ref={headerRef}>
        <div className="container">
          <h1 className={`header-element ${styles.title}`}>Explore Properties</h1>
          <p className={`header-element ${styles.subtitle}`}>
            Discover our curated portfolio of exceptional real estate around the globe.
          </p>
          
          <div className={`header-element ${styles.filters}`}>
            <button 
              className={`${styles.filterBtn} ${filter === 'All' ? styles.active : ''}`}
              onClick={() => setFilter('All')}
            >
              All Properties
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === 'Featured' ? styles.active : ''}`}
              onClick={() => setFilter('Featured')}
            >
              Exclusive & Featured
            </button>
          </div>
        </div>
      </div>

      <div className={`container ${styles.gridContainer}`} ref={gridRef}>
        <div className={styles.propertiesGrid}>
          {filteredProperties.map(property => (
            <div key={property.id} className="property-card">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
