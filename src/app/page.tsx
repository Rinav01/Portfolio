import ProfileCard from './components/ProfileCard'
import ProjectCard from './components/ProjectCard'
import ServiceList from './components/ServiceList'
import ExpertAreaList from './components/ExpertAreaList'
import ExperienceList from './components/ExperienceList'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Navbar from './components/NavBar'

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        style={{
          display: 'flex',
          gap: 32,
          margin: '40px auto 0',
          maxWidth: 1200,
          alignItems: 'flex-start',
          padding: 16,
        }}
      >
        <ProfileCard />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <ProjectCard />
          <ServiceList />
        </div>
      </main>

      <section
        style={{
          display: 'flex',
          gap: 32,
          margin: '40px auto',
          maxWidth: 1200,
          alignItems: 'flex-start',
          padding: 16,
        }}
      >
        <ExpertAreaList />
        <ExperienceList />
        <ContactSection />
      </section>

      <Footer />
    </>
 )
}
