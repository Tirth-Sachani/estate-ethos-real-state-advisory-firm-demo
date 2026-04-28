import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>ESTATE ETHOS</h2>
            <p className={styles.tagline}>
              Curating exceptional properties for discerning individuals. Minimal luxury, maximum trust.
            </p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>Advisory</h3>
              <Link href="/explore" className={styles.link}>Explore Properties</Link>
              <Link href="/services" className={styles.link}>Our Services</Link>
              <Link href="/insights" className={styles.link}>Market Insights</Link>
            </div>
            
            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>Company</h3>
              <Link href="/about" className={styles.link}>About Us</Link>
              <Link href="/contact" className={styles.link}>Contact</Link>
              <Link href="/careers" className={styles.link}>Careers</Link>
            </div>
            
            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>Connect</h3>
              <a href="#" className={styles.link}>LinkedIn</a>
              <a href="#" className={styles.link}>Instagram</a>
              <a href="#" className={styles.link}>Twitter</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Estate Ethos Advisory. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
