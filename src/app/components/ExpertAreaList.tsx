import styles from '../styles/ExpertAreaList.module.css'

const tools = [
  { icon: '🎨', name: 'Figma' },
  { icon: '🖼️', name: 'Framer' },
  { icon: '🌐', name: 'Webflow' },
  { icon: '🚀', name: 'Zeplin' },
  { icon: '📝', name: 'Miro' },
  { icon: '📓', name: 'Notion' },
]

export default function ExpertAreaList() {
  return (
    <section className={styles.areaBox}>
      <h2>My Expert Area</h2>
      <ul className={styles.tools}>
        {tools.map((tool, idx) => (
          <li key={idx}>
            <span className={styles.icon}>{tool.icon}</span>
            <span>{tool.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
