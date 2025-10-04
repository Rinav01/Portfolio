import GoogleIcon from './icons/GoogleIcon';
import { FaBehance, FaBuilding } from 'react-icons/fa';

const experience = [
  {
    icon: <GoogleIcon />,
    company: 'Google',
    title: 'Product Designer',
    years: '2016-2020',
  },
  {
    icon: <FaBehance style={{ color: '#1769ff' }} />,
    company: 'Behance',
    title: 'Senior UI/UX Designer',
    years: '2020-2022',
  },
  {
    icon: <FaBuilding style={{ color: '#000000' }} />,
    company: 'Notion',
    title: 'Senior Product Designer',
    years: '2022-2025',
  },
]

export default function ExperienceList() {
  return (
    <section className="expBox">
      <h2>Work Experience</h2>
      <ul className="expList">
        {experience.map((exp, idx) => (
          <li key={idx} className="job">
            <span className="icon">{exp.icon}</span>
            <div>
              <span className="company">{exp.company}</span>
              <span className="title">{exp.title}</span>
            </div>
            <span className="years">{exp.years}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
