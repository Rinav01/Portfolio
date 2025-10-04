import styles from '../styles/ExperienceList.module.css'

const experience = [
  {
    icon: '🟢',
    company: 'Google',
    title: 'Product Designer',
    years: '2016-2020',
  },
  {
    icon: '🔵',
    company: 'Behance',
    title: 'Senior UI/UX Designer',
    years: '2020-2022',
  },
  {
    icon: '⚫',
    company: 'Notion',
    title: 'Senior Product Designer',
    years: '2022-2025',
  },
]

export default function ExperienceList() {
  return (
    <section className={styles.expBox}>
      <h2>Work Experience</h2>
      <ul className={styles.expList}>
        {experience.map((exp, idx) => (
          <li key={idx} className={styles.job}>
            <span className={styles.icon}>{exp.icon}</span>
            <div>
              <span className={styles.company}>{exp.company}</span>
              <span className={styles.title}>{exp.title}</span>
            </div>
            <span className={styles.years}>{exp.years}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
