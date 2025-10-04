import styles from '../styles/ContactSection.module.css'

export default function ContactSection() {
  return (
    <section className={styles.contactBox}>
      <h2>
        Let&apos;s <span role="img" aria-label="wave">👋</span> Work Together
      </h2>
      <p className={styles.description}>
        Available For Hire 🚀 Crafting Digital Experiences 🎨<br />
        Available For Hire 🚀 Crafting Digital Experiences 🎨
      </p>
      <button className={styles.talkBtn}>Let&apos;s Talk</button>
    </section>
  )
}
