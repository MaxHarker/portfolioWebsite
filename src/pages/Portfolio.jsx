import { useState, useRef, useLayoutEffect } from 'react'
import { portfolioItems } from '../data/projects'

function Portfolio() {
  const [activeId, setActiveId] = useState(portfolioItems[0]?.id)
  const activeProject = portfolioItems.find((project) => project.id === activeId)
  const detailRef = useRef(null)
  const [navbarHeight, setNavbarHeight] = useState(0)

  useLayoutEffect(() => {
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight + 15)
    }
  }, [])  

  const handleSelectProject = (id) => {
    setActiveId(id)

    if (window.innerWidth <= 680 && detailRef.current) {
      setTimeout(() => {
        const elementTop =
          detailRef.current.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
          top: elementTop - navbarHeight,
          behavior: 'smooth',
        })
      }, 0)
    }
  }

  return (
    <section className="page-section portfolio-page">
      <div className="section-header">
        <span className="eyebrow">Portfolio</span>
        <h2>Selected work and project highlights</h2>
        <p>
          Browse a selection of portfolio items with a quick overview and a
          detail panel for each project.
        </p>
      </div>

      <div className="portfolio-layout">
        <div className="project-list">
          {portfolioItems.map((project) => (
            <button
              key={project.id}
              type="button"
              className={
                project.id === activeId ? 'project-card active' : 'project-card'
              }
              onClick={() => handleSelectProject(project.id)}
            >
              <div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <span className="project-action">View details</span>
            </button>
          ))}
        </div>

        <div className="project-detail-panel" ref={detailRef}>
          {activeProject ? (
            <article>
              <div className="project-detail-hero">
                <img src={activeProject.image} alt={activeProject.title} />
              </div>
              <div className="project-detail-copy">
                <h3>{activeProject.title}</h3>
                <span className="project-category">{activeProject.category}</span>
                <p>{activeProject.details}</p>
                <div className="project-tags">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={activeProject.link} target="_blank" rel="noreferrer" className="button-outline">
                  View
                </a>
              </div>
            </article>
          ) : (
            <p>Select a project to see more details.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
