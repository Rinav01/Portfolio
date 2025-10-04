import { FaPalette, FaMobileAlt, FaTachometerAlt, FaTags, FaCode, FaGlobe } from 'react-icons/fa';

const services = [
  { icon: <FaPalette />, title: 'UI/UX Design' },
  { icon: <FaMobileAlt />, title: 'Mobile App' },
  { icon: <FaTachometerAlt />, title: 'Dashboard Design' },
  { icon: <FaTags />, title: 'Branding' },
  { icon: <FaCode />, title: 'Front End' },
  { icon: <FaGlobe />, title: 'Webflow Dev' },
]

export default function ServiceList() {
  return (
    <section className="serviceBox">
      <div className="headerSection">
        <h2>Services I Offered</h2>
        <a className="seeAll">See All</a>
      </div>
      <ul className="services">
        {services.map((srv, idx) => (
          <li key={idx}>
            <span className="icon">{srv.icon}</span>
            {srv.title}
          </li>
        ))}
      </ul>
    </section>
  )
}
