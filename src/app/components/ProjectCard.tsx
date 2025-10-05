import Image from 'next/image';

const projects = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Sass Product Design',
    date: '2022 July',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Travel Agency Website',
    date: '2021 August',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'E-commerce Dashboard',
    date: '2022 January',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Mobile Banking App',
    date: '2021 May',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Data Visualization Tool',
    date: '2020 November',
  },
  // Add more projects here
]

export default function ProjectCard() {
  return (
    <section className="projectsContainer">
      <div className="headerSection">
        <h2>My Projects</h2>
        <a className="seeAll">See All</a>
      </div>
      <div className="scrollArea">
        {projects.map((project, idx) => (
          <div key={idx} className="projectCard">
            <Image src={project.image} alt={project.title} className="projectImg" width={150} height={150} />
            <div className="cardText">
              <div className="title">{project.title}</div>
              <div className="date">{project.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
