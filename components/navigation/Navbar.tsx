// Holds the logo and the About and FAQs links
import styles from './Navbar.module.scss'

export function Navbar() {
  return (
  <div className={styles.navbar}>
    <div className={styles.navheader}>
      <b>Have I been pwned?</b>
    </div>
  </div>
  );
}