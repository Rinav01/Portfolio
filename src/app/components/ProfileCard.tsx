import styles from '../styles/ProfileCard.module.css'
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <Image src="https://via.placeholder.com/100" alt="Cris Rayaan" className={styles.avatar} width={100} height={100} />
      <h2 className={styles.name}>
        Cris <br /> Rayaan <span>👋</span>
      </h2>
      <p className={styles.desc}>
        A Passionate Full Stack Developer 💻 & Product Designer having 12 years of Experiences over 24+ Country
        Worldwide.
      </p>
      <div className={styles.actions}>
        <button className={styles.callBtn}>Book a call</button>
        <button className={styles.mailBtn}>Send Mail</button>
      </div>
      <div className={styles.socials}>
        <a href="#" aria-label="Facebook">
          F
        </a>
        <a href="#" aria-label="Twitter">
          T
        </a>
        <a href="#" aria-label="Instagram">
          I
        </a>
        <a href="#" aria-label="LinkedIn">
          L
        </a>
      </div>
    </div>
  )
}
