import Image from 'next/image';
import Link from 'next/link';
import styles from './PropertyCard.module.css';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  imageSrc: string;
  beds: number;
  baths: number;
  sqft: number;
  featured?: boolean;
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  imageSrc,
  beds,
  baths,
  sqft,
  featured = false,
}: PropertyCardProps) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.imageWrapper}>
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {featured && <span className={styles.badge}>Exclusive</span>}
      </div>
      
      <div className={`${styles.content} glass`}>
        <div className={styles.header}>
          <p className={styles.price}>{price}</p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.location}>{location}</p>
        </div>
        
        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.value}>{beds}</span>
            <span className={styles.label}>Beds</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.feature}>
            <span className={styles.value}>{baths}</span>
            <span className={styles.label}>Baths</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.feature}>
            <span className={styles.value}>{sqft}</span>
            <span className={styles.label}>Sq Ft</span>
          </div>
        </div>
        
        <Link href={`/property/${id}`} className={`btn btn-secondary ${styles.button}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}
