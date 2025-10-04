import styles from '../styles/ServiceList.module.css'

const services = [
  { icon: '📦', title: 'UI/UX Design' },
  { icon: '📱', title: 'Mobile App' },
  { icon: '📊', title: 'Dashboard Design' },
  { icon: '🎨', title: 'Branding' },
  { icon: '💻', title: 'Front End' },
  { icon: '🌐', title: 'Webflow Dev' },
]

export default function ServiceList() {
  return (
    <section className={styles.serviceBox}>
      <div className={styles.headerSection}>
        <h2>Services I Offered</h2>
        <a className={styles.seeAll}>See All</a>
      </div>
      <ul className={styles.services}>
        {services.map((srv, idx) => (
          <li key={idx}>
            <span className={styles.icon}>{srv.icon}</span>
            {srv.title}
          </li>
        ))}
      </ul>
    </section>
  )
}
