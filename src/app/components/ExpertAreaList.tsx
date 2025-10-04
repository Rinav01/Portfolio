import { FaFigma } from 'react-icons/fa';
import { LuFramer } from 'react-icons/lu';
import { SiWebflow,  SiMiro, SiNotion } from 'react-icons/si';

const tools = [
  { icon: <FaFigma style={{ color: '#F24E1E' }} />, name: 'Figma' },
  { icon: <LuFramer style={{ color: '#0055FF' }} />, name: 'Framer' },
  { icon: <SiWebflow style={{ color: '#4353FF' }} />, name: 'Webflow' },
  // { icon: <SiZeplin style={{ color: '#F7B500' }} />, name: 'Zeplin' },
  { icon: <SiMiro style={{ color: '#050038' }} />, name: 'Miro' },
  { icon: <SiNotion style={{ color: '#000000' }} />, name: 'Notion' },
]

export default function ExpertAreaList() {
  return (
    <section className="areaBox">
      <h2>My Expert Area</h2>
      <ul className="tools">
        {tools.map((tool, idx) => (
          <li key={idx}>
            <span className="icon">{tool.icon}</span>
            <span>{tool.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}