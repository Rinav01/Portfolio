import styles from '../styles/NavBar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>
        <span style={{ color: '#4793f8' }}>Ben</span>tolio
      </span>
      <ul className={styles.navLinks}>
        <li className={styles.active}>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Works</li>
        <li>Blogs</li>
      </ul>
      <button className={styles.talkBtn}>Let&apos;s Talk</button>
    </nav>
  )
}
